import React from "react";
import { DSMotion } from "../../DSMotion";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
    FontStyle,
} from "../../DSText";
import {
    ExperienceSectionContent,
    ExperienceItemContent,
    EducationItemContent,
} from "./experience-section-content";

export type {
    ExperienceSectionContent,
    ExperienceItemContent,
    EducationItemContent,
};

function ExperienceItem({ period, role, institution }: ExperienceItemContent) {
    return (
        <div className="relative pl-6 pb-8 border-l-2 border-gray-200 last:pb-0 last:border-transparent">
            <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full ds-bg-primary" />
            <DSText
                as="span"
                variant={DSTextVariant.caption}
                color={DSTextColor.tintTheme}
                weight={DSTextWeight.medium}
                className="block mb-1"
            >
                {period}
            </DSText>
            <DSText
                as="h4"
                variant={DSTextVariant.headline2}
                color={DSTextColor.primary}
                weight={DSTextWeight.semiBold}
                className="mb-1"
            >
                {role}
            </DSText>
            <DSText
                as="p"
                variant={DSTextVariant.bodySmall}
                color={DSTextColor.tertiary}
            >
                {institution}
            </DSText>
        </div>
    );
}

function EducationItem({ degree, institution, period }: EducationItemContent) {
    return (
        <div className="relative pl-6 pb-8 border-l-2 border-gray-200 last:pb-0 last:border-transparent">
            <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full ds-bg-primary" />
            <DSText
                as="span"
                variant={DSTextVariant.caption}
                color={DSTextColor.tintTheme}
                weight={DSTextWeight.medium}
                className="block mb-1"
            >
                {period}
            </DSText>
            <DSText
                as="h4"
                variant={DSTextVariant.headline2}
                color={DSTextColor.primary}
                weight={DSTextWeight.semiBold}
                className="mb-1"
            >
                {degree}
            </DSText>
            <DSText
                as="p"
                variant={DSTextVariant.bodySmall}
                color={DSTextColor.tertiary}
            >
                {institution}
            </DSText>
        </div>
    );
}

export default function ExperienceSection({
    experienceTitle,
    experience,
    educationTitle,
    education,
}: ExperienceSectionContent) {
    return (
        <div className="grid gap-12 md:grid-cols-2">
            <DSMotion variant="fade-up" delay={0.1}>
                <DSText
                    as="h2"
                    variant={DSTextVariant.largeTitle}
                    color={DSTextColor.primary}
                    weight={DSTextWeight.bold}
                    fontStyle={FontStyle.Heading}
                    className="mb-8"
                >
                    {experienceTitle}
                </DSText>
                <div>
                    {experience.map((item) => (
                        <ExperienceItem key={item.role} {...item} />
                    ))}
                </div>
            </DSMotion>

            <DSMotion variant="fade-up" delay={0.25}>
                <DSText
                    as="h2"
                    variant={DSTextVariant.largeTitle}
                    color={DSTextColor.primary}
                    weight={DSTextWeight.bold}
                    fontStyle={FontStyle.Heading}
                    className="mb-8"
                >
                    {educationTitle}
                </DSText>
                <div>
                    {education.map((item) => (
                        <EducationItem key={item.degree} {...item} />
                    ))}
                </div>
            </DSMotion>
        </div>
    );
}
