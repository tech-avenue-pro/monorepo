import React from "react";
import { ServiceCardTopNumberContent } from "./service-card-top-number-content";
import { DSMotion } from "../../../DSMotion";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
    FontStyle,
} from "../../../DSText";

export default function ServiceCardTopNumber({
    number,
    title,
    description,
}: ServiceCardTopNumberContent) {
    return (
        <DSMotion variant="fade-up" delay={0.3} duration={0.3}>
            <div
                key={number}
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
                        {number}
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
                    {title}
                </DSText>
                <DSText
                    as="p"
                    variant={DSTextVariant.body}
                    color={DSTextColor.secondary}
                    className="mt-4"
                >
                    {description}
                </DSText>
            </div>
        </DSMotion>
    );
}
