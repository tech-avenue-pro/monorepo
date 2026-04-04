import React from "react";
import { DSMotion } from "../../../DSMotion";
import { DSText, DSTextColor, DSTextVariant, FontStyle } from "../../../DSText";
import { DSButtonVariant, DSLinkButton } from "../../../DSButton";
import { HeroSectionRightVisualContent } from "./hero-section-right-visual-content";

export default function HeroSectionRightVisual(
    content: HeroSectionRightVisualContent,
) {
    return (
        <div className="grid gap-10 lg:grid-cols-2 md:items-center h-full">
            <div className="py-16">
                <DSMotion variant="fade-up" delay={0.3} duration={0.3}>
                    <DSText
                        as="h1"
                        variant={DSTextVariant.largestTitle}
                        color={DSTextColor.primary}
                        className="mb-6 text-left"
                        fontStyle={FontStyle.Heading}
                    >
                        {content.title}
                    </DSText>
                </DSMotion>
                <DSMotion variant="slide-left" delay={0.3} duration={0.3}>
                    <DSText
                        as="p"
                        variant={DSTextVariant.body}
                        color={DSTextColor.secondary}
                        className="text-center mb-6 md:text-left"
                    >
                        {content.summary}
                    </DSText>
                </DSMotion>
                <DSMotion variant="scale-in" delay={1} duration={0.5}>
                    <div className="flex flex-col gap-4  sm:flex-row mt-16 ">
                        <DSLinkButton
                            variant={DSButtonVariant.primary}
                            href={content.primaryCta.href}
                        >
                            {content.primaryCta.label}
                        </DSLinkButton>

                        <DSLinkButton
                            variant={DSButtonVariant.contrast}
                            href={content.secondaryCta.href}
                            className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
                        >
                            {content.secondaryCta.label}
                        </DSLinkButton>
                    </div>
                </DSMotion>
            </div>
            <DSMotion
                variant="slide-left"
                delay={0.5}
                duration={1}
                className="h-full"
            >
                <div className="hidden lg:block relative h-full overflow-hidden rounded-3xl  p-2">
                    <img
                        src={content.image.src}
                        srcSet={content.image.srcSet}
                        alt={content.image.alt}
                        width={1200}
                        height={1000}
                        className="h-full w-full rounded-2xl object-cover"
                        loading="eager"
                        decoding="async"
                    />
                </div>
            </DSMotion>
        </div>
    );
}
