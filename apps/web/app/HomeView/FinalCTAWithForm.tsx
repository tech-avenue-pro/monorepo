import { DSButton, DSButtonVariant } from "@repo/ui/design-systems/DSButton";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
} from "@repo/ui/design-systems/DSText";
import React from "react";

export function FinalCTAWithForm() {
    return (
        <div id="contact" className="mx-auto">
            <div className="rounded-xl ds-border-glow ds-bg-default-variation1 px-5 py-12 md:p-12">
                <div className="grid gap-10 md:grid-cols-2 md:items-top">
                    <div>
                        <DSText
                            as="h2"
                            variant={DSTextVariant.largeTitle}
                            color={DSTextColor.primary}
                            weight={DSTextWeight.bold}
                            className=""
                        >
                            Ready to grow with Tech Avenue Pro?
                        </DSText>
                        <DSText
                            as="p"
                            variant={DSTextVariant.body}
                            color={DSTextColor.tertiary}
                            className="mt-6"
                        >
                            Tell us what you do — we’ll reply with the best
                            setup (website + marketing + booking/queue) to match
                            your goals.
                        </DSText>
                    </div>

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
                        <DSButton
                            variant={DSButtonVariant.primary}
                            className="mt-6"
                        >
                            Submit
                        </DSButton>
                    </form>
                </div>
            </div>
        </div>
    );
}
