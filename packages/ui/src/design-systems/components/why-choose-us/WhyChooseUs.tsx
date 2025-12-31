import React from "react";
import { getWhyChooseUsContent } from "../../../../../../apps/web/app/content/why-choose-us/WhyChooseUs";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
} from "@repo/ui/design-systems/DSText";

export interface WhyChooseUs {
    sectionTitle: string;
    introText: string;
    src: string;
    srcSet: string;
    reasons: Reason[];
}

export interface Reason {
    id: number;
    title: string;
    description: string;
}

export default function WhyChooseUs({
    sectionTitle,
    introText,
    src,
    srcSet,
    reasons,
}: WhyChooseUs) {
    return (
        <div className="mx-auto">
            <div className="grid gap-10 md:grid-cols-2">
                {/* Left */}
                <div>
                    <DSText
                        as="h2"
                        variant={DSTextVariant.largeTitle}
                        color={DSTextColor.primary}
                        className="mb-8"
                    >
                        {sectionTitle}
                    </DSText>
                    <DSText
                        as="p"
                        variant={DSTextVariant.body}
                        color={DSTextColor.secondary}
                    >
                        {introText}
                    </DSText>
                    <img
                        className="mt-10 rounded-lg shadow-lg w-full"
                        src={src}
                        srcSet={srcSet}
                        alt="Why Choose Us Illustration"
                    />
                </div>

                {/* Right */}
                <div className="grid gap-5 sm:grid-cols-1">
                    {reasons.map((reason) => (
                        <div key={reason.title}>
                            <DSText
                                as="h3"
                                variant={DSTextVariant.headline2}
                                color={DSTextColor.tintTheme}
                                className="mb-2"
                            >
                                {reason.title}
                            </DSText>
                            <DSText
                                as="p"
                                variant={DSTextVariant.body}
                                color={DSTextColor.tertiary}
                                className="mb-4"
                            >
                                {reason.description}
                            </DSText>
                            {reasons.indexOf(reason) !== reasons.length - 1 && (
                                <hr className="my-4 border-gray-200" />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
