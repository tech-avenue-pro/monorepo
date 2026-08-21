import React from "react";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
    FontStyle,
} from "@repo/ui/design-systems/DSText";
import { WhyChooseUsContent, Reason } from "./why-choose-us";
import { DSMotion } from "../../DSMotion";

export type { WhyChooseUsContent, Reason };

export default function WhyChooseUs({
    sectionTitleTag,
    sectionTitle,
    introText,
    src,
    srcSet,
    reasons,
}: WhyChooseUsContent) {
    return (
        <div className="mx-auto">
            {sectionTitleTag && (
                <DSText
                    as="p"
                    variant={DSTextVariant.caption}
                    color={DSTextColor.tintTheme}
                    weight={DSTextWeight.semiBold}
                    className="tracking-widest mb-4"
                >
                    {sectionTitleTag}
                </DSText>
            )}
            <div className="grid gap-10 md:grid-cols-2">
                {/* Left */}
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
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: sectionTitle,
                                }}
                            />
                        </DSText>
                    </DSMotion>
                    <DSMotion variant="slide-right" delay={0.4} duration={0.3}>
                        <DSText
                            as="p"
                            variant={DSTextVariant.body}
                            color={DSTextColor.secondary}
                        >
                            {introText}
                        </DSText>
                    </DSMotion>
                    <DSMotion variant="blur-in" delay={0.6} duration={1.2}>
                        <img
                            className="mt-10 rounded-lg shadow-lg w-full"
                            src={src}
                            srcSet={srcSet}
                            alt="Why Choose Us Illustration"
                        />
                    </DSMotion>
                </div>

                {/* Right */}
                <DSMotion variant="slide-left" delay={0.4} duration={0.3}>
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
                                {reasons.indexOf(reason) !==
                                    reasons.length - 1 && (
                                    <hr className="my-4 border-gray-200" />
                                )}
                            </div>
                        ))}
                    </div>
                </DSMotion>
            </div>
        </div>
    );
}
