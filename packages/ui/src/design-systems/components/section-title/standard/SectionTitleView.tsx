import React from "react";
import { DSMotion } from "../../../DSMotion";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
    FontStyle,
} from "../../../DSText";

export default function SectionTitleView({ title }: { title: string }) {
    return (
        <DSMotion variant="fade-up" delay={0.3} duration={0.5}>
            <DSText
                as="h2"
                variant={DSTextVariant.largeTitle}
                color={DSTextColor.primary}
                weight={DSTextWeight.bold}
                className="text-left"
                fontStyle={FontStyle.Heading}
            >
                {title}
            </DSText>
        </DSMotion>
    );
}
