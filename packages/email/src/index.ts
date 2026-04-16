import nodemailer from "nodemailer";

export function escapeHtml(value: string): string {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export interface ContactFormData {
    businessName: string;
    name: string;
    phone: string;
    email: string;
    message: string;
}

export interface SmtpConfig {
    host: string;
    port: number;
    secure: boolean;
    user: string;
    pass: string;
    from?: string;
}

export async function sendContactEmail(
    to: string,
    data: ContactFormData,
    smtp: SmtpConfig,
): Promise<void> {
    const transporter = nodemailer.createTransport({
        host: smtp.host,
        port: smtp.port,
        secure: smtp.secure,
        auth: {
            user: smtp.user,
            pass: smtp.pass,
        },
    });

    await transporter.sendMail({
        from: smtp.from ?? smtp.user,
        to,
        subject: `New enquiry from ${data.name}`,
        text: [
            `Business Name: ${data.businessName}`,
            `Name: ${data.name}`,
            `Phone: ${data.phone}`,
            `Email: ${data.email}`,
            `Message: ${data.message}`,
        ].join("\n"),
        html: `
            <table style="font-family:sans-serif;font-size:15px;border-collapse:collapse;width:100%;max-width:600px">
                <tr><td style="padding:8px 12px;font-weight:bold;width:160px">Business Name</td><td style="padding:8px 12px">${escapeHtml(data.businessName)}</td></tr>
                <tr><td style="padding:8px 12px;font-weight:bold">Name</td><td style="padding:8px 12px">${escapeHtml(data.name)}</td></tr>
                <tr><td style="padding:8px 12px;font-weight:bold">Phone</td><td style="padding:8px 12px">${escapeHtml(data.phone)}</td></tr>
                <tr><td style="padding:8px 12px;font-weight:bold">Email</td><td style="padding:8px 12px">${escapeHtml(data.email)}</td></tr>
                <tr><td style="padding:8px 12px;font-weight:bold;vertical-align:top">Message</td><td style="padding:8px 12px;white-space:pre-wrap">${escapeHtml(data.message)}</td></tr>
            </table>
        `,
    });
}
