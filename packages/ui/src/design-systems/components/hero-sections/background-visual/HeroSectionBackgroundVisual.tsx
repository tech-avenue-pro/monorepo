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

const themeClasses = {
    dark: {
        smallTitle: DSTextColor.white,
        title: DSTextColor.white,
        description: DSTextColor.whiteVariant1,
        primaryButton: DSButtonVariant.primary,
    },
    light: {
        smallTitle: DSTextColor.primary,
        title: DSTextColor.primary,
        description: DSTextColor.secondary,
        primaryButton: DSButtonVariant.primary,
    },
};

const alignClasses = {
    left: {
        outer: "justify-start",
        inner: "text-left",
        buttons: "",
        padding: "pl-10 md:pl-20 pr-6",
    },
    center: {
        outer: "justify-center",
        inner: "text-center mx-auto",
        buttons: "justify-center",
        padding: "px-6",
    },
    right: {
        outer: "justify-end",
        inner: "text-right ml-auto",
        buttons: "justify-end",
        padding: "pr-10 md:pr-20 pl-6",
    },
};

export default function HeroSectionBackgroundVisual({
    smallTitle,
    title,
    description,
    primaryCtaText,
    primaryCtaLink,
    secondaryCtaText,
    secondaryCtaLink,
    textAlign = "center",
    theme = "dark",
}: HeroSectionBackgroundVisualContent) {
    const align = alignClasses[textAlign];
    const t = themeClasses[theme];
    return (
        <div
            className={`flex items-center ${align.outer} h-full ${align.padding} py-20 md:py-28`}
        >
            <div className={`${align.inner} max-w-3xl`}>
                {smallTitle?.trim() ? (
                    <DSMotion variant="fade-in">
                        <DSText
                            as="p"
                            variant={DSTextVariant.caption}
                            color={t.smallTitle}
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
                        color={t.title}
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
                        color={t.description}
                        className="mb-10 leading-relaxed"
                    >
                        <span
                            dangerouslySetInnerHTML={{ __html: description }}
                        />
                    </DSText>
                </DSMotion>

                <DSMotion variant="fade-up">
                    <div
                        className={`flex flex-col sm:flex-row gap-4 ${align.buttons}`}
                    >
                        <DSLinkButton
                            href={primaryCtaLink}
                            variant={t.primaryButton}
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
