import React from "react";
import { HowWeHelpContent } from "./how-we-help-content";
import { DSMotion } from "../../DSMotion";
import {
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
    FontStyle,
} from "../../DSText";
import { DSText } from "../../DSText";

export default function HowWeHelpView(howWeHelp: HowWeHelpContent) {
    return (
        <div className="">
            <DSMotion variant="fade-up" delay={0.3} duration={0.5}>
                <DSText
                    as="h2"
                    variant={DSTextVariant.largeTitle}
                    color={DSTextColor.primary}
                    weight={DSTextWeight.bold}
                    className="text-left"
                    fontStyle={FontStyle.Heading}
                >
                    {howWeHelp.title}
                </DSText>
            </DSMotion>

            <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {howWeHelp.steps.map((step) => (
                    <DSMotion variant="fade-up" delay={0.5} duration={0.5}>
                        <div
                            key={step.number}
                            className="rounded-3xl border ds-bg-default p-6 shadow-sm"
                        >
                            <div className=" flex items-center justify-end">
                                <DSText
                                    as="span"
                                    variant={DSTextVariant.largestTitle}
                                    color={DSTextColor.quinary}
                                    weight={DSTextWeight.semiBold}
                                    fontStyle={FontStyle.Heading}
                                >
                                    {step.number}
                                </DSText>
                            </div>
                            <DSText
                                as="h3"
                                variant={DSTextVariant.headline1}
                                color={DSTextColor.primary}
                                fontStyle={FontStyle.Heading}
                                weight={DSTextWeight.bold}
                                className="mt-4"
                            >
                                {step.title}
                            </DSText>
                            <DSText
                                as="p"
                                variant={DSTextVariant.body}
                                color={DSTextColor.secondary}
                                className="mt-4"
                            >
                                {step.description}
                            </DSText>
                        </div>
                    </DSMotion>
                ))}
            </div>
        </div>
    );
}
