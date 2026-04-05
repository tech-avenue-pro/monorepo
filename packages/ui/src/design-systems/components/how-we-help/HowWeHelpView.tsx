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
import ServiceCardTopNumber from "../services/service-card-top-number/ServiceCardTopNumber";

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
                    <ServiceCardTopNumber key={step.number} {...step} />
                ))}
            </div>
        </div>
    );
}
