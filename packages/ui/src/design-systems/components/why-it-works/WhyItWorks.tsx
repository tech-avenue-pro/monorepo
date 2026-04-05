import React from "react";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
    FontStyle,
} from "../../DSText";
import { DSMotion } from "../../DSMotion";
import { WhyItWorksContent } from "./why-it-works-content";

export default function WhyItWorks(whyItWorks: WhyItWorksContent) {
    return (
        <div className="rounded-3xl border border-neutral-200 p-12 shadow-sm ds-bg-light-right">
            <DSMotion variant="fade-up" delay={0.3} duration={0.3}>
                <DSText
                    as="h2"
                    variant={DSTextVariant.largeTitle}
                    weight={DSTextWeight.bold}
                    color={DSTextColor.primary}
                    fontStyle={FontStyle.Heading}
                >
                    <span
                        dangerouslySetInnerHTML={{
                            __html: whyItWorks.title,
                        }}
                    />
                </DSText>
            </DSMotion>

            <DSMotion variant="fade-in" delay={0.5} duration={0.5}>
                <DSText
                    as="p"
                    variant={DSTextVariant.body}
                    weight={DSTextWeight.light}
                    color={DSTextColor.tertiary}
                    fontStyle={FontStyle.Body}
                    className="mt-6 max-w-2xl text-left"
                >
                    <span
                        dangerouslySetInnerHTML={{
                            __html: whyItWorks.description,
                        }}
                    />
                </DSText>
            </DSMotion>
            <DSMotion variant="slide-left" delay={0.7} duration={1}>
                <div className="mt-8 flex flex-col gap-4">
                    {whyItWorks.items.map((item) => (
                        <li>
                            <DSText
                                as="p"
                                variant={DSTextVariant.body}
                                color={DSTextColor.secondary}
                                fontStyle={FontStyle.Body}
                            >
                                {item}
                            </DSText>
                        </li>
                    ))}
                </div>
            </DSMotion>
        </div>
    );
}
