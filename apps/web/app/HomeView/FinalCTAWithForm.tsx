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
                        <input
                            type="text"
                            className="text-field"
                            placeholder="Your name"
                            name="name"
                        />
                        <input
                            type="email"
                            className="text-field"
                            placeholder="Phone or email"
                            name="contact"
                        />
                        <DSButton
                            variant={DSButtonVariant.primary}
                            className="mt-6"
                        >
                            Submit
                        </DSButton>
                        {/* <button
                            type="submit"
                            className="mt-2 inline-flex h-11 items-center justify-center rounded-xl bg-neutral-900 px-6 text-sm font-medium text-white hover:bg-neutral-800"
                        >
                            Get My Free Plan
                        </button> */}
                    </form>
                </div>
            </div>
        </div>
    );
}
