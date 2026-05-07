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
        <div className="grid md:grid-cols-2 min-h-[480px] md:min-h-[600px]">
            {/* Left — full-height image */}
            <div className="relative overflow-hidden rounded-2xl md:rounded-r-none md:rounded-l-2xl min-h-[300px]">
                <img
                    src={image}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            {/* Right — text */}
            <DSMotion
                variant="slide-left"
                className="flex flex-col justify-center px-8 py-12 md:px-12 md:py-16"
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
                    color={DSTextColor.whiteVariant1}
                    className="leading-relaxed"
                >
                    {description}
                </DSText>
            </DSMotion>
        </div>
    );
}
