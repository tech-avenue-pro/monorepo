import React from "react";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
} from "@repo/ui/design-systems/DSText";
import { DSMotion } from "../../DSMotion";
import { WhyChooseUsVerticalSplitContent } from "./why-choose-us-vertical-split-content";

export type { WhyChooseUsVerticalSplitContent };

export default function WhyChooseUsVerticalSplit({
    image,
    caption,
    title,
    description,
}: WhyChooseUsVerticalSplitContent) {
    return (
        <div className="grid lg:grid-cols-2 lg:min-h-150">
            {/* Text — top on mobile/tablet, right column on desktop */}
            <DSMotion
                variant="slide-left"
                className="flex flex-col justify-center px-8 py-12 md:px-12 md:py-16 order-1 lg:order-2"
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

            {/* Image — bottom on mobile/tablet, left column on desktop */}
            <div className="relative overflow-hidden rounded-2xl lg:rounded-r-none lg:rounded-l-2xl aspect-3/4 lg:aspect-auto order-2 lg:order-1">
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>
        </div>
    );
}
