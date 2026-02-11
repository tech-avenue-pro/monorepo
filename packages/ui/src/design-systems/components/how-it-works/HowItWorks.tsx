import React from "react";
import { getHowItWorksContent } from "../../../../../../apps/web/app/content/how-it-works/howItWorks";
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
import { DSMotion } from "../../DSMotion";

export interface HowItWorks {
    title: string;
    description: string;
    steps: HowItWorksStep[];
}

export interface HowItWorksStep {
    id: string;
    title: string;
    description: string;
}

export default function HowItWorks({ title, description, steps }: HowItWorks) {
    return (
        <section className="mx-auto px-4 ">
            <DSMotion
                variant="fade-up"
                className="flex flex-start align-top md:justify-between mb-8 items-start gap-1 md:gap-16 flex-col md:flex-row"
            >
                <DSText
                    as="h2"
                    variant={DSTextVariant.largerTitle}
                    weight={DSTextWeight.bold}
                    color={DSTextColor.primary}
                    className="text-center mb-6 shrink-0"
                >
                    {title}
                </DSText>
                <div>
                    <DSText
                        as="h3"
                        variant={DSTextVariant.body}
                        color={DSTextColor.tertiary}
                        className=" mb-6 shrink-0 "
                    >
                        {description}
                    </DSText>
                </div>
            </DSMotion>
            <div className="mt-8 grid gap-10 grid-cols-1 md:grid-cols-3">
                {steps.map((step) => (
                    <div key={step.id}>
                        <DSMotion variant="fade-up" delay={0.5} duration={0.5}>
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
                                color={DSTextColor.tintTheme}
                                weight={DSTextWeight.bold}
                                className="mt-4"
                            >
                                {step.title}
                            </DSText>
                            <DSText
                                as="p"
                                variant={DSTextVariant.body}
                                color={DSTextColor.quaternary}
                                className="mt-2"
                            >
                                {step.description}
                            </DSText>
                        </DSMotion>
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
