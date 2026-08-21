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
    isImageRounded = false,
    isLightBackground = false,
    isLandscapeImage = false,
}: VerticalSplitSectionContent) {
    const captionColor = isLightBackground
        ? DSTextColor.secondary
        : DSTextColor.white;
    const titleColor = isLightBackground
        ? DSTextColor.primary
        : DSTextColor.white;
    const bodyColor = isLightBackground
        ? DSTextColor.secondary
        : DSTextColor.white;

    return (
        <div className="grid lg:grid-cols-2 lg:min-h-150  overflow-hidden">
            {/* Text — top on mobile/tablet, position on desktop follows isImageOnLeft */}
            <DSMotion
                variant="slide-left"
                className={`flex flex-col justify-center py-12 md:py-16 lg:px-16 lg:py-20 order-1 ${isImageOnLeft ? "lg:order-2" : "lg:order-1"}`}
            >
                <DSText
                    as="p"
                    variant={DSTextVariant.bodyLarge}
                    color={captionColor}
                    weight={DSTextWeight.semiBold}
                    className="mb-4 uppercase tracking-widest"
                >
                    {caption}
                </DSText>

                <DSText
                    as="h2"
                    variant={DSTextVariant.largestTitle}
                    color={titleColor}
                    weight={DSTextWeight.bold}
                    className="mb-6"
                >
                    <span dangerouslySetInnerHTML={{ __html: title }} />
                </DSText>

                <DSText
                    as="p"
                    variant={DSTextVariant.body}
                    color={bodyColor}
                    className="leading-relaxed"
                >
                    <span dangerouslySetInnerHTML={{ __html: description }} />
                </DSText>
            </DSMotion>

            {/* Image — bottom on mobile/tablet, position on desktop follows isImageOnLeft */}
            <div
                className={`relative ${isLandscapeImage ? "aspect-4/3" : "aspect-3/4"} lg:aspect-auto order-2 ${
                    isImageOnLeft ? "lg:order-1" : "lg:order-2"
                }`}
            >
                {isImageRounded ? (
                    <div className="absolute inset-4 lg:inset-y-10 inset-x-0 overflow-hidden rounded-lg">
                        <img
                            src={image}
                            alt={title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </div>
                ) : (
                    <img
                        src={image}
                        alt={title}
                        className="pb-8 lg:pb-0 absolute inset-0 w-full h-full object-cover"
                    />
                )}
            </div>
        </div>
    );
}
