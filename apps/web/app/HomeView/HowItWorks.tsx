import React from "react";
import { getHowItWorks } from "../content/how-it-works/howItWorks";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
} from "@repo/ui/design-systems/DSText";
import {
    DSButtonVariant,
    DSLinkButton,
} from "@repo/ui/design-systems/DSButton";

export default function HowItWorks() {
    const { steps } = getHowItWorks();
    return (
        <section className="mx-auto px-4 ">
            <div className="flex flex-start align-top md:justify-between mb-8 items-start gap-1 md:gap-16 flex-col md:flex-row">
                <DSText
                    as="h2"
                    variant={DSTextVariant.largerTitle}
                    color={DSTextColor.primary}
                    className="text-center mb-6 shrink-0"
                >
                    How It Works
                </DSText>
                <DSText
                    as="h3"
                    variant={DSTextVariant.body}
                    color={DSTextColor.primary}
                    className="text-center mb-6 shrink-0"
                >
                    - A simple process designed to get results—without the
                    complexity.
                </DSText>
            </div>
            <div className="mt-8 grid gap-10 grid-cols-1 md:grid-cols-3">
                {steps.map((step) => (
                    <div key={step.id}>
                        <DSText
                            as="p"
                            variant={DSTextVariant.largestTitle}
                            color={DSTextColor.quinary}
                            weight="bold"
                        >
                            {step.id}
                        </DSText>
                        <DSText
                            as="h3"
                            variant={DSTextVariant.headline1}
                            color={DSTextColor.septenary}
                            weight={DSTextWeight.bold}
                            className="mt-4"
                        >
                            {step.title}
                        </DSText>
                        <DSText
                            as="p"
                            variant={DSTextVariant.body}
                            color={DSTextColor.tertiary}
                            className="mt-2"
                        >
                            {step.description}
                        </DSText>
                    </div>
                ))}
            </div>

            <div className="mt-10">
                <DSLinkButton
                    variant={DSButtonVariant.secondary}
                    href="/contact"
                >
                    Book a Free Consultation
                </DSLinkButton>
            </div>
        </section>
    );
}
