import React from "react";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
    FontStyle,
} from "../../../DSText";
import { DSButtonVariant, DSLinkButton } from "../../../DSButton";
import { DSMotion } from "../../../DSMotion";
import { HeroSectionBackgroundVisualContent } from "./hero-section-background-visual-content";

export type { HeroSectionBackgroundVisualContent };

export default function HeroSectionBackgroundVisual({
    smallTitle,
    title,
    description,
    primaryCtaText,
    primaryCtaLink,
    secondaryCtaText,
    secondaryCtaLink,
}: HeroSectionBackgroundVisualContent) {
    return (
        <div className="flex items-center justify-center h-full px-6 py-20 md:py-28">
            <div className="text-center max-w-3xl mx-auto">
                {smallTitle?.trim() ? (
                    <DSMotion variant="fade-in">
                        <DSText
                            as="p"
                            variant={DSTextVariant.caption}
                            color={DSTextColor.white}
                            weight={DSTextWeight.semiBold}
                            fontStyle={FontStyle.Body}
                            className="mb-4 uppercase tracking-widest opacity-90"
                        >
                            {smallTitle}
                        </DSText>
                    </DSMotion>
                ) : null}

                <DSMotion variant="fade-up">
                    <DSText
                        as="h1"
                        variant={DSTextVariant.largestTitle}
                        color={DSTextColor.white}
                        weight={DSTextWeight.bold}
                        fontStyle={FontStyle.Heading}
                        className="mb-6"
                    >
                        <span dangerouslySetInnerHTML={{ __html: title }} />
                    </DSText>
                </DSMotion>

                <DSMotion variant="fade-up">
                    <DSText
                        as="p"
                        variant={DSTextVariant.bodyLarge}
                        color={DSTextColor.whiteVariant1}
                        className="mb-10 leading-relaxed"
                    >
                        <span
                            dangerouslySetInnerHTML={{ __html: description }}
                        />
                    </DSText>
                </DSMotion>

                <DSMotion variant="fade-up">
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <DSLinkButton
                            href={primaryCtaLink}
                            variant={DSButtonVariant.primary}
                            glow={true}
                        >
                            {primaryCtaText}
                        </DSLinkButton>
                        <DSLinkButton
                            href={secondaryCtaLink}
                            variant={DSButtonVariant.white}
                        >
                            {secondaryCtaText}
                        </DSLinkButton>
                    </div>
                </DSMotion>
            </div>
        </div>
    );
}
