"use client";

import FloatingWhatsAppButton from "@repo/ui/design-systems/components/floating-whatsapp/FloatingWhatsAppButton";

export function TrackedWhatsAppButton({
    phoneNumber,
    message,
}: {
    phoneNumber: string;
    message?: string;
}) {
    return <FloatingWhatsAppButton phoneNumber={phoneNumber} message={message} />;
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
        <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
            {children}
        </a>
    );
}
