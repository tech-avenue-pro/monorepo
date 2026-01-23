"use client";

import React from "react";
import { DSButton, DSButtonVariant } from "@repo/ui/design-systems/DSButton";

type WhatsAppButtonProps = {
    phone: string;
    className?: string;
    label?: string;
};

export default function WhatsAppButton({
    phone,
    className,
    label = "Send on WhatsApp",
}: WhatsAppButtonProps) {
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const form = event.currentTarget.closest("form");
        if (!form) return;

        const data = new FormData(form);
        const businessName = String(data.get("businessName") || "").trim();
        const message = String(data.get("message") || "").trim();
        const name = String(data.get("name") || "").trim();
        const contact = String(data.get("contact") || "").trim();

        const template = [
            "Hi!",
            businessName && `Business: ${businessName}`,
            name && `Name: ${name}`,
            contact && `Contact: ${contact}`,
            message && `Message: ${message}`,
        ]
            .filter(Boolean)
            .join("\n");

        const url = `https://wa.me/${phone}?text=${encodeURIComponent(
            template
        )}`;
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <DSButton
            type="button"
            variant={DSButtonVariant.contrast}
            className={className}
            onClick={handleClick}
        >
            {label}
        </DSButton>
    );
}
