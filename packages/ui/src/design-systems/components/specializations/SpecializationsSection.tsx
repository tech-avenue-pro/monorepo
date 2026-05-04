import React from "react";
import { DSMotion, DSStagger } from "../../DSMotion";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
    FontStyle,
} from "../../DSText";
import {
    SpecializationsSectionContent,
    SpecializationItemContent,
} from "./specializations-section-content";

export type { SpecializationsSectionContent, SpecializationItemContent };

function SpecializationCard({ icon, title, description }: SpecializationItemContent) {
    return (
        <DSMotion variant="fade-up">
            <div className="rounded-2xl p-8 h-full ds-bg-defaultVariation1 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                <img
                    src={icon}
                    alt={title}
                    className="w-12 h-12 mb-5 object-contain"
                />
                <DSText
                    as="h3"
                    variant={DSTextVariant.headline1}
                    color={DSTextColor.primary}
                    weight={DSTextWeight.semiBold}
                    fontStyle={FontStyle.Heading}
                    className="mb-3"
                >
                    {title}
                </DSText>
                <DSText
                    as="p"
                    variant={DSTextVariant.body}
                    color={DSTextColor.secondary}
                >
                    {description}
                </DSText>
            </div>
        </DSMotion>
    );
}

export default function SpecializationsSection({
    sectionTitle,
    sectionDescription,
    items,
}: SpecializationsSectionContent) {
    return (
        <div>
            <DSMotion variant="fade-up" className="text-center mb-12">
                <DSText
                    as="h2"
                    variant={DSTextVariant.largeTitle}
                    color={DSTextColor.primary}
                    weight={DSTextWeight.bold}
                    fontStyle={FontStyle.Heading}
                    className="mb-4"
                >
                    {sectionTitle}
                </DSText>
                {sectionDescription && (
                    <DSText
                        as="p"
                        variant={DSTextVariant.bodyLarge}
                        color={DSTextColor.secondary}
                        className="max-w-2xl mx-auto"
                    >
                        {sectionDescription}
                    </DSText>
                )}
            </DSMotion>

            <DSStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                    <SpecializationCard key={item.title} {...item} />
                ))}
            </DSStagger>
        </div>
    );
}
