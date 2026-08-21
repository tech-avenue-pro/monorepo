import React from "react";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
    FontStyle,
} from "@repo/ui/design-systems/DSText";
import { DSButtonVariant, DSLinkButton } from "@repo/ui/design-systems/DSButton";
import { HeroSectionTechContent } from "@repo/ui/design-systems/components/hero-sections/tech/hero-section-tech-content.ts";

export default function Hero({
    smallTitle,
    title,
    description,
    ctaText,
    ctaLink,
}: HeroSectionTechContent) {
    return (
        <div className="text-left">
            {smallTitle?.trim() ? (
                <DSText
                    as="h1"
                    variant={DSTextVariant.headline2}
                    color={DSTextColor.white}
                    weight={DSTextWeight.bold}
                    fontStyle={FontStyle.Heading}
                    className="mb-4 mt-16 md:mt-28"
                >
                    {smallTitle}
                </DSText>
            ) : null}
            <div className="hero-reveal">
                <DSText
                    as="h2"
                    variant={DSTextVariant.largestTitle}
                    color={DSTextColor.white}
                    weight={DSTextWeight.semiBold}
                    fontStyle={FontStyle.Heading}
                    className="mb-12 md:mb-16"
                >
                    <span dangerouslySetInnerHTML={{ __html: title }} />
                </DSText>
            </div>
            <div
                className="flex flex-col slide-up-animation pb-16 md:pb-24"
                style={{ animationDelay: "1s" }}
            >
                <div className="flex justify-center">
                    <DSText
                        as="p"
                        variant={DSTextVariant.bodyLarge}
                        color={DSTextColor.whiteVariant1}
                        className="max-w-2xl lg:max-w-3xl text-left mb-12 md:mb-16"
                    >
                        <span
                            dangerouslySetInnerHTML={{ __html: description }}
                        />
                    </DSText>
                </div>
                <div className="flex justify-center">
                    <DSLinkButton
                        href={ctaLink}
                        variant={DSButtonVariant.primary}
                        glow={true}
                    >
                        {ctaText}
                    </DSLinkButton>
                </div>
            </div>
        </div>
    );
}
