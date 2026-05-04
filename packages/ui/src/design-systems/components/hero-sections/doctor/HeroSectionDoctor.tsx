import React from "react";
import { DSMotion } from "../../../DSMotion";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
    FontStyle,
} from "../../../DSText";
import { DSButtonVariant, DSLinkButton } from "../../../DSButton";
import { HeroSectionDoctorContent } from "./hero-section-doctor-content";

export default function HeroSectionDoctor(content: HeroSectionDoctorContent) {
    return (
        <div className="flex flex-col items-center text-center py-16 mx-auto">
            <DSMotion variant="fade-up" delay={0.55} duration={0.4}>
                <DSText
                    as="h1"
                    variant={DSTextVariant.largestTitle}
                    color={DSTextColor.primary}
                    weight={DSTextWeight.bold}
                    fontStyle={FontStyle.Heading}
                    className="mb-3"
                >
                    {content.name}
                </DSText>
            </DSMotion>

            <DSMotion variant="fade-up" delay={0.65} duration={0.4}>
                <DSText
                    as="p"
                    variant={DSTextVariant.title2}
                    color={DSTextColor.tintTheme}
                    weight={DSTextWeight.semiBold}
                    className="mb-6"
                >
                    {content.specialty}
                </DSText>
            </DSMotion>

            <DSMotion variant="fade-up" delay={0.75} duration={0.4}>
                <DSText
                    as="p"
                    variant={DSTextVariant.bodyLarge}
                    color={DSTextColor.secondary}
                    className="max-w-xl mb-10 text-left mt-2"
                >
                    {content.description}
                </DSText>
            </DSMotion>

            <DSMotion variant="scale-in" delay={0.9} duration={0.4}>
                <div className="flex flex-col sm:flex-row gap-4">
                    <DSLinkButton
                        variant={DSButtonVariant.primary}
                        href={content.primaryCta.href}
                    >
                        {content.primaryCta.label}
                    </DSLinkButton>
                    {content.secondaryCta && (
                        <DSLinkButton
                            variant={DSButtonVariant.accent}
                            href={content.secondaryCta.href}
                            glow
                        >
                            {content.secondaryCta.label}
                        </DSLinkButton>
                    )}
                </div>
            </DSMotion>
            <DSMotion variant="scale-in" delay={0.2} duration={0.5}>
                <div className="mb-6 overflow-hidden  mt-16 rounded-xl">
                    <img
                        src={content.image.src}
                        alt={content.image.alt}
                        className="w-full h-full object-cover object-top"
                        loading="eager"
                    />
                </div>
            </DSMotion>
        </div>
    );
}
