import React from "react";
import { getWhyChooseUs } from "../content/why-choose-us/WhyChooseUs";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
} from "@repo/ui/design-systems/DSText";

export default function WhyChooseUs() {
    const { reasons } = getWhyChooseUs();
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
                        Why Choose Tech Avenue Pro
                    </DSText>
                    <DSText
                        as="p"
                        variant={DSTextVariant.body}
                        color={DSTextColor.secondary}
                    >
                        We help businesses build strong digital brands, simplify
                        operations, and grow with confidence.
                    </DSText>
                    <img
                        className="mt-10 rounded-lg shadow-lg w-full"
                        srcSet="/images/small/why-choose-us/why-choose-us@1x.jpeg 1x, /images/large/why-choose-us/why-choose-us@2x.jpeg 2x /images/large/why-choose-us/why-choose-us@3x.jpeg 3x"
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
                            <hr className="my-4 border-gray-200" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
