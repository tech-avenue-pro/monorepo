"use client";

import { DSButton, DSButtonVariant } from "@repo/ui/design-systems/DSButton";
import React, { useState } from "react";
import WhatsAppButton from "./WhatsAppButton";

interface FormProps {
    email: string;
}

type Status = "idle" | "loading" | "success" | "error";

export default function Form({ email }: FormProps) {
    const [status, setStatus] = useState<Status>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);
        const payload = {
            businessName: formData.get("businessName") as string,
            message: formData.get("message") as string,
            name: formData.get("name") as string,
            email: formData.get("email") as string,
            phone: formData.get("phone") as string,
            receiverEmail: email,
        };

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const data = (await res.json()) as { error?: string };
                throw new Error(data.error ?? "Something went wrong.");
            }

            setStatus("success");
            (e.target as HTMLFormElement).reset();
        } catch (err) {
            setStatus("error");
            setErrorMessage(
                err instanceof Error ? err.message : "Something went wrong.",
            );
        }
    }

    return (
        <form className="grid gap-3" onSubmit={handleSubmit}>
            <input
                type="text"
                className="text-field"
                placeholder="Business name"
                name="businessName"
                required
            />
            <textarea
                className="text-area"
                placeholder="Tell us about your business"
                name="message"
                rows={3}
                required
            />

            <input
                type="text"
                className="text-field"
                placeholder="Your name"
                name="name"
                required
            />
            <input
                type="text"
                className="text-field"
                placeholder="Email"
                name="email"
                pattern="(^\+?[0-9()\s-]{7,}$)|(^[^\s@]+@[^\s@]+\.[^\s@]+$)"
                title="Enter a valid  email"
                required
            />
            <input
                type="text"
                className="text-field"
                placeholder="Phone"
                name="phone"
                pattern="(^\+?[0-9()\s-]{7,}$)|(^[^\s@]+@[^\s@]+\.[^\s@]+$)"
                title="Enter a valid phone number."
                required
            />

            {status === "success" && (
                <p className="text-sm text-green-600">
                    Message sent! We&apos;ll be in touch soon.
                </p>
            )}
            {status === "error" && (
                <p className="text-sm text-red-600">{errorMessage}</p>
            )}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <DSButton
                    variant={DSButtonVariant.primary}
                    loading={status === "loading"}
                >
                    {status === "loading" ? "Sending…" : "Submit"}
                </DSButton>
                <WhatsAppButton phone="14374483374" />
            </div>
        </form>
    );
}
