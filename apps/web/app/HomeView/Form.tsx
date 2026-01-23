import { DSButton, DSButtonVariant } from "@repo/ui/design-systems/DSButton";
import React from "react";
import WhatsAppButton from "./WhatsAppButton";

export default function Form() {
    return (
        <form className="grid gap-3">
            <input
                type="text"
                className="text-field"
                placeholder="Business name"
                name="businessName"
            />
            <textarea
                className="text-area"
                placeholder="Tell us about your business"
                name="message"
                rows={3}
            />

            <input
                type="text"
                className="text-field"
                placeholder="Your name"
                name="name"
            />
            <input
                type="text"
                className="text-field"
                placeholder="Phone or email"
                name="contact"
                pattern="(^\\+?[0-9()\\s-]{7,}$)|(^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$)"
                title="Enter a valid phone number or email"
            />
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <DSButton variant={DSButtonVariant.primary}>Submit</DSButton>
                <WhatsAppButton phone="14374483374" />
            </div>
        </form>
    );
}
