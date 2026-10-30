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
        name: "Ahmed R.",
        text: "The tandoori chicken tastes exactly like it should — smoky, tender and full of flavour. This has become our go-to spot for a family dinner out.",
    },
    {
        name: "Sana K.",
        text: "The biryani is generously spiced without being overwhelming, and the naan is always fresh off the tandoor. Consistently great every time.",
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
                    Real experiences from the people who keep coming back for
                    more.
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
