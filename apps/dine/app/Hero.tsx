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

const chips = [
    { label: "Tandoori", position: "-top-4 -left-4 sm:-left-10" },
    { label: "Biryani", position: "-bottom-4 -right-2 sm:-right-8" },
];

export default function Hero({
    smallTitle,
    title,
    description,
    ctaText,
    ctaLink,
}: HeroSectionTechContent) {
    return (
        <div className="grid md:grid-cols-2 gap-12 items-center py-12 md:py-20">
            <div className="text-left">
                {smallTitle?.trim() ? (
                    <span className="block w-fit bg-[var(--primary-lighter)] text-[var(--primary-darker)] text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
                        {smallTitle}
                    </span>
                ) : null}
                <div className="hero-reveal">
                    <DSText
                        as="h1"
                        variant={DSTextVariant.largestTitle}
                        color={DSTextColor.primary}
                        weight={DSTextWeight.bold}
                        fontStyle={FontStyle.Heading}
                        className="mb-6 leading-tight"
                    >
                        <span dangerouslySetInnerHTML={{ __html: title }} />
                    </DSText>
                </div>
                <div className="slide-up-animation" style={{ animationDelay: "0.6s" }}>
                    <DSText
                        as="p"
                        variant={DSTextVariant.bodyLarge}
                        color={DSTextColor.secondary}
                        className="max-w-lg mb-8"
                    >
                        <span dangerouslySetInnerHTML={{ __html: description }} />
                    </DSText>
                    <div className="flex flex-wrap gap-4">
                        <DSLinkButton
                            href={ctaLink}
                            variant={DSButtonVariant.primary}
                            glow={true}
                        >
                            {ctaText}
                        </DSLinkButton>
                        <DSLinkButton
                            href="#location-section"
                            variant={DSButtonVariant.outlined}
                        >
                            Our Location
                        </DSLinkButton>
                    </div>
                </div>
            </div>

            <div className="relative flex justify-center md:justify-end">
                <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px]">
                    <div className="absolute -inset-6 rounded-full border-2 border-dashed border-[var(--primary)] opacity-40" />
                    <div className="absolute inset-0 rounded-full overflow-hidden shadow-xl ring-8 ring-white">
                        <img
                            src="/images/tandoori-corner/afghan-platter.png"
                            alt="Afghani Platter — chicken seekh kabab and tikka over fragrant rice"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {chips.map((chip) => (
                        <div
                            key={chip.label}
                            className={`hidden sm:flex items-center gap-2 bg-white shadow-md rounded-full pl-2 pr-4 py-2 absolute ${chip.position}`}
                        >
                            <span className="w-6 h-6 rounded-full bg-[var(--accent-lighter)] border border-[var(--accent)]" />
                            <DSText
                                as="span"
                                variant={DSTextVariant.footnote}
                                color={DSTextColor.primary}
                                weight={DSTextWeight.semiBold}
                            >
                                {chip.label}
                            </DSText>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
