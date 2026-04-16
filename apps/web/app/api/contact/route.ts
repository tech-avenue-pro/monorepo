import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail } from "@repo/email";

export async function POST(req: NextRequest) {
    const body = (await req.json()) as {
        businessName: string;
        message: string;
        name: string;
        phone: string;
        email: string;
        receiverEmail: string;
    };

    const { businessName, message, name, phone, email, receiverEmail } = body;

    if (!receiverEmail || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(receiverEmail)) {
        return NextResponse.json(
            { error: "Invalid recipient email." },
            { status: 400 },
        );
    }
    console.log("SMTP_HOST:", process.env.SMTP_HOST);
    console.log("SMTP_PORT:", process.env.SMTP_PORT);
    console.log("SMTP_SECURE:", process.env.SMTP_SECURE);
    console.log("SMTP_USER:", process.env.SMTP_USER);
    console.log("SMTP_PASS:", process.env.SMTP_PASS);

    try {
        await sendContactEmail(
            receiverEmail,
            { businessName, name, phone, email, message },
            {
                host: process.env.SMTP_HOST!,
                port: Number(process.env.SMTP_PORT) || 465,
                secure: true,
                user: process.env.SMTP_USER!,
                pass: process.env.SMTP_PASS!,
                from: process.env.SMTP_USER,
            },
        );
    } catch (err) {
        console.error("Failed to send email:", err);
        return NextResponse.json(
            { error: "Failed to send email. Please try again later." },
            { status: 500 },
        );
    }

    return NextResponse.json({ success: true });
}
