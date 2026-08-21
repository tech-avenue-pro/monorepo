import React from "react";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
} from "@repo/ui/design-systems/DSText";
import { DSMotion, DSStagger } from "@repo/ui/design-systems/DSMotion";

const testimonials = [
    {
        name: "Rafia Ijaz",
        text: "The food felt modern yet comforting, and every dish was beautifully balanced. My guests kept talking about how refreshing it was compared to the usual catering — it truly elevated the entire evening.",
    },
    {
        name: "Ali Zafar",
        text: "I wasn't sure how everyone would react to a non-traditional menu, but recommending Flavour Fusion was the right call. My wife loved it, and our guests couldn't stop talking about the food. It made the entire gathering feel effortless and memorable.",
    },
];

export default function Testimonials() {
    return (
        <div>
            <DSMotion variant="fade-up" className="text-center mb-12">
                <DSText
                    as="h2"
                    variant={DSTextVariant.largerTitle}
                    color={DSTextColor.primary}
                    weight={DSTextWeight.bold}
                    className="mb-4"
                >
                    What Our Guests Say
                </DSText>
                <DSText
                    as="p"
                    variant={DSTextVariant.body}
                    color={DSTextColor.secondary}
                    className="max-w-xl mx-auto"
                >
                    Real experiences from people who've trusted us with their
                    special gatherings.
                </DSText>
            </DSMotion>

            <DSStagger className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto">
                {testimonials.map((t) => (
                    <DSMotion
                        key={t.name}
                        variant="fade-up"
                        className="bg-white rounded-2xl border border-gray-100 p-8 shadow-sm"
                    >
                        <div className="mb-4 text-[var(--primary)] text-4xl leading-none font-serif">
                            &ldquo;
                        </div>
                        <DSText
                            as="p"
                            variant={DSTextVariant.body}
                            color={DSTextColor.secondary}
                            className="mb-6 italic"
                        >
                            {t.text}
                        </DSText>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-[var(--primary-lighter)] flex items-center justify-center">
                                <DSText
                                    as="span"
                                    variant={DSTextVariant.caption}
                                    color={DSTextColor.senary}
                                    weight={DSTextWeight.bold}
                                >
                                    {t.name.charAt(0)}
                                </DSText>
                            </div>
                            <DSText
                                as="span"
                                variant={DSTextVariant.caption}
                                color={DSTextColor.primary}
                                weight={DSTextWeight.semiBold}
                            >
                                {t.name}
                            </DSText>
                        </div>
                    </DSMotion>
                ))}
            </DSStagger>
        </div>
    );
}
