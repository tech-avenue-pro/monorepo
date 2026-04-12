import React from "react";
import { DSMotion } from "../../../DSMotion";

import {
    DSText,
    DSTextVariant,
    DSTextWeight,
    FontStyle,
} from "../../../DSText";
import { SectionTitleSplitContent } from "./section-title-split-message";

export default function SectionTitleSplitMessageView(
    props: SectionTitleSplitContent,
) {
    const { sectionTitle, sectionTagline, sectionTagDescription } = props;
    return (
        <div className="flex flex-start align-top md:justify-between mb-16 items-start gap-1 md:gap-16 flex-col md:flex-row">
            <DSMotion variant="slide-right" delay={0.3} duration={0.3}>
                <DSText
                    as="h2"
                    variant={DSTextVariant.largerTitle}
                    weight={DSTextWeight.semiBold}
                    className="text-left mb-6 shrink-0 whitespace-nowrap"
                    fontStyle={FontStyle.Heading}
                >
                    {sectionTitle}
                </DSText>
            </DSMotion>

            <DSMotion
                variant="slide-left"
                delay={0.6}
                duration={0.6}
                className="flex flex-col items-start"
            >
                <DSText
                    as="h3"
                    variant={DSTextVariant.title2}
                    className="text-left mb-4"
                >
                    <span
                        dangerouslySetInnerHTML={{ __html: sectionTagline }}
                    />
                </DSText>
                <p className="">{sectionTagDescription}</p>
            </DSMotion>
        </div>
    );
}
