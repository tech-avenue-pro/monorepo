import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail, type ContactFormData } from "@repo/email";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
    let body: unknown;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json(
            { error: "Invalid form data." },
            { status: 400 },
        );
    }

    const fields = [
        "businessName",
        "message",
        "name",
        "phone",
        "email",
        "receiverEmail",
    ] as const;
    if (
        !body ||
        typeof body !== "object" ||
        !fields.every((field) => {
            const value = (body as Record<string, unknown>)[field];
            return typeof value === "string" && value.trim().length > 0;
        })
    ) {
        return NextResponse.json(
            { error: "Please complete all required fields." },
            { status: 400 },
        );
    }
    const { businessName, message, name, phone, email, receiverEmail } =
        body as ContactFormData & { receiverEmail: string };

    if (!emailPattern.test(email) || !emailPattern.test(receiverEmail)) {
        return NextResponse.json(
            { error: "Please provide a valid email address." },
            { status: 400 },
        );
    }
    const host = process.env.SMTP_HOST;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const port = Number(process.env.SMTP_PORT || 465);
    const secureSetting = process.env.SMTP_SECURE;
    if (
        !host ||
        !user ||
        !pass ||
        !Number.isInteger(port) ||
        port < 1 ||
        port > 65535 ||
        (secureSetting !== undefined &&
            secureSetting !== "true" &&
            secureSetting !== "false")
    ) {
        console.error(
            "Contact email: SMTP configuration is missing or invalid.",
        );
        return NextResponse.json(
            {
                error: "Email delivery is unavailable. Please contact us directly or use WhatsApp.",
            },
            { status: 503 },
        );
    }

    try {
        await sendContactEmail(
            receiverEmail,
            { businessName, name, phone, email, message },
            {
                host,
                port,
                secure:
                    secureSetting === undefined
                        ? port === 465
                        : secureSetting === "true",
                user,
                pass,
                from: user,
            },
        );
    } catch (err) {
        console.error("Contact email delivery failed:", {
            code:
                err && typeof err === "object" && "code" in err
                    ? err.code
                    : "UNKNOWN",
        });
        return NextResponse.json(
            { error: "Failed to send email. Please try again later." },
            { status: 500 },
        );
    }

    return NextResponse.json({ success: true });
}
