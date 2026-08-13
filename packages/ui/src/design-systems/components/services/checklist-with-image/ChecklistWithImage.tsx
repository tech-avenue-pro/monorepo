import React from "react";
import { DSMotion, DSStagger } from "../../../DSMotion";
import { DSText, DSTextColor, DSTextVariant, DSTextWeight, FontStyle } from "../../../DSText";
import { ChecklistWithImageContent } from "./checklist-with-image-content";

export type { ChecklistWithImageContent };

function CheckIcon() {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--primary)"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5 shrink-0"
            aria-hidden="true"
        >
            <circle cx="12" cy="12" r="9" />
            <path d="M8.5 12.3l2.4 2.4L15.8 9" />
        </svg>
    );
}

export default function ChecklistWithImage({
    sectionTitle,
    items,
    image,
}: ChecklistWithImageContent) {
    return (
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
            <div>
                <DSMotion variant="fade-up" delay={0.2} duration={0.3}>
                    <DSText
                        as="h2"
                        variant={DSTextVariant.largeTitle}
                        color={DSTextColor.primary}
                        weight={DSTextWeight.bold}
                        fontStyle={FontStyle.Heading}
                        className="mb-8"
                    >
                        {sectionTitle}
                    </DSText>
                </DSMotion>
                <DSStagger className="flex flex-col gap-5">
                    {items.map((item) => (
                        <DSMotion key={item} variant="slide-right" duration={0.3}>
                            <div className="flex items-start gap-3 pb-4 border-b border-gray-200">
                                <CheckIcon />
                                <DSText
                                    as="p"
                                    variant={DSTextVariant.body}
                                    color={DSTextColor.secondary}
                                >
                                    {item}
                                </DSText>
                            </div>
                        </DSMotion>
                    ))}
                </DSStagger>
            </div>
            <DSMotion variant="blur-in" delay={0.4} duration={1}>
                <img
                    src={image.src}
                    srcSet={image.srcSet}
                    alt={image.alt}
                    className="w-full rounded-2xl shadow-lg object-cover"
                    loading="lazy"
                />
            </DSMotion>
        </div>
    );
}
