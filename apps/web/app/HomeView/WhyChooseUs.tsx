import React from "react";
import { getWhyChooseUs } from "../content/why-choose-us/WhyChooseUs";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
} from "@repo/ui/design-systems/DSText";

export default function WhyChooseUs() {
    const { reasons } = getWhyChooseUs();
    return (
        <section className="mx-auto">
            <div className="grid gap-10 md:grid-cols-2">
                {/* Left */}
                <div>
                    <DSText
                        as="h2"
                        variant={DSTextVariant.largeTitle}
                        color={DSTextColor.primary}
                        className="mb-8"
                    >
                        Why Choose Tech Avenue Pro
                    </DSText>
                    <DSText
                        as="p"
                        variant={DSTextVariant.body}
                        color={DSTextColor.tertiary}
                    >
                        We help businesses build strong digital brands, simplify
                        operations, and grow with confidence.
                    </DSText>
                </div>

                {/* Right */}
                <div className="grid gap-5 sm:grid-cols-2">
                    {reasons.map((reason) => (
                        <div
                            key={reason.title}
                            className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm"
                        >
                            <h3 className="text-sm font-semibold text-neutral-900">
                                {reason.title}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-neutral-600">
                                {reason.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
