import React from "react";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
    FontStyle,
} from "../../DSText";
import { DSButtonVariant, DSLinkButton } from "../../DSButton";

export interface HeroSectionContent {
    smallTitle?: string;
    title: string;
    description: string;
    ctaText: string;
    ctaLink: string;
}

export default function HeroSectionTech({
    smallTitle,
    title,
    description,
    ctaText,
    ctaLink,
}: HeroSectionContent) {
    return (
        <React.Fragment>
            <div className="text-left ">
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
            </div>
            <div
                className="flex flex-col slide-up-animation"
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
                        className="mb-12 md:mb-16"
                    >
                        {ctaText}
                    </DSLinkButton>
                </div>
                <div className="flex justify-center">
                    <img
                        src="/hero-image.jpg"
                        alt="Hero Image"
                        className="rounded-lg"
                    />
                </div>
            </div>
        </React.Fragment>
    );
}
