import React from "react";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
} from "@repo/ui/design-systems/DSText";
import { DSMotion } from "../../DSMotion";
import { VerticalSplitSectionContent } from "./vertical-split-section-content";

export type { VerticalSplitSectionContent };

export default function VerticalSplitSection({
    image,
    caption,
    title,
    description,
    isImageOnLeft = true,
}: VerticalSplitSectionContent) {
    return (
        <div className="grid lg:grid-cols-2 lg:min-h-150">
            {/* Text — top on mobile/tablet, position on desktop follows isImageOnLeft */}
            <DSMotion
                variant="slide-left"
                className={`flex flex-col justify-center px-8 py-12 md:px-12 md:py-16 order-1 ${isImageOnLeft ? "lg:order-2" : "lg:order-1"}`}
            >
                <DSText
                    as="p"
                    variant={DSTextVariant.bodyLarge}
                    color={DSTextColor.white}
                    weight={DSTextWeight.semiBold}
                    className="mb-4 uppercase tracking-widest"
                >
                    {caption}
                </DSText>

                <DSText
                    as="h2"
                    variant={DSTextVariant.largestTitle}
                    color={DSTextColor.white}
                    weight={DSTextWeight.bold}
                    className="mb-6"
                >
                    <span dangerouslySetInnerHTML={{ __html: title }} />
                </DSText>

                <DSText
                    as="p"
                    variant={DSTextVariant.bodyLarge}
                    color={DSTextColor.white}
                    className="leading-relaxed"
                >
                    {description}
                </DSText>
            </DSMotion>

            {/* Image — bottom on mobile/tablet, position on desktop follows isImageOnLeft */}
            <div
                className={`relative overflow-hidden rounded-2xl aspect-3/4 lg:aspect-auto order-2 ${
                    isImageOnLeft
                        ? "lg:order-1 lg:rounded-r-none lg:rounded-l-2xl"
                        : "lg:order-2 lg:rounded-l-none lg:rounded-r-2xl"
                }`}
            >
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
        </div>
    );
}
