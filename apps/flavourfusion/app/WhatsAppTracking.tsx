"use client";

import FloatingWhatsAppButton from "@repo/ui/design-systems/components/floating-whatsapp/FloatingWhatsAppButton";

declare global {
    interface Window {
        gtag?: (...args: unknown[]) => void;
    }
}

export function trackWhatsAppConversion() {
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "conversion", {
            send_to: "AW-18155770179/-MxlCJ_Ck6scEMOirNFD",
            value: 1.0,
            currency: "CAD",
        });
    }
}

export function TrackedWhatsAppButton({
    phoneNumber,
    message,
}: {
    phoneNumber: string;
    message?: string;
}) {
    return (
        <FloatingWhatsAppButton
            phoneNumber={phoneNumber}
            message={message}
            onClick={trackWhatsAppConversion}
        />
    );
}

export function TrackedWhatsAppAnchor({
    href,
    className,
    children,
}: {
    href: string;
    className?: string;
    children: React.ReactNode;
}) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
            onClick={trackWhatsAppConversion}
        >
            {children}
        </a>
    );
}
