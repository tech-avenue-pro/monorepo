import React from "react";
import { DSMotion } from "../../DSMotion";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
    FontStyle,
} from "../../DSText";
import { StatsContent } from "./stats-content";

export default function StatsView(stats: StatsContent) {
    return (
        <div className="max-w-2xl">
            <DSMotion variant="slide-right" delay={0.3} duration={0.5}>
                <DSText
                    as="h2"
                    variant={DSTextVariant.largeTitle}
                    weight={DSTextWeight.bold}
                    color={DSTextColor.primary}
                    fontStyle={FontStyle.Heading}
                    className=""
                >
                    {stats.title}
                </DSText>
            </DSMotion>

            <DSMotion variant="slide-left" delay={0.3} duration={0.5}>
                <DSText
                    as="p"
                    variant={DSTextVariant.body}
                    weight={DSTextWeight.light}
                    color={DSTextColor.tertiary}
                    fontStyle={FontStyle.Body}
                    className="mt-6"
                >
                    {stats.description}
                </DSText>
            </DSMotion>
        </div>
    );
}
