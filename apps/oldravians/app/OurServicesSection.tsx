"use client";

import React from "react";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
} from "@repo/ui/design-systems/DSText";
import { DSMotion } from "@repo/ui/design-systems/DSMotion";

const services = [
    {
        icon: "✅",
        title: "Verified Teachers",
        description:
            "Every instructor goes through a rigorous verification process. We only onboard teachers who are true experts in their subjects.",
    },
    {
        icon: "🎯",
        title: "Customised Teaching",
        description:
            "We tailor teaching methods to each student's learning pace and style, ensuring concepts are genuinely understood — not just memorised.",
    },
    {
        icon: "📚",
        title: "Comprehensive Support",
        description:
            "From concept clarity to exam preparation, our teachers provide end-to-end academic support throughout the course duration.",
    },
    {
        icon: "💪",
        title: "Build Confidence",
        description:
            "Our approach focuses on building genuine understanding and confidence in students so they can tackle any exam with ease.",
    },
];

export default function OurServicesSection() {
    return (
        <section id="services" className="mx-auto max-w-6xl px-4">
            <DSMotion variant="fade-up" className="text-center mb-12">
                <DSText
                    as="p"
                    variant={DSTextVariant.caption}
                    color={DSTextColor.senary}
                    weight={DSTextWeight.semiBold}
                    className="uppercase tracking-widest mb-3"
                >
                    Why Old Ravians
                </DSText>
                <DSText
                    as="h2"
                    variant={DSTextVariant.largeTitle}
                    color={DSTextColor.primary}
                    weight={DSTextWeight.bold}
                    className="mb-4"
                >
                    Our Services
                </DSText>
                <DSText
                    as="p"
                    variant={DSTextVariant.bodyLarge}
                    color={DSTextColor.tertiary}
                    className="max-w-2xl mx-auto"
                >
                    We combine verified expertise with personalised teaching to
                    deliver academic results that matter.
                </DSText>
            </DSMotion>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {services.map((service, i) => (
                    <DSMotion key={i} variant="fade-up" delay={0.1 * i}>
                        <div className="flex flex-col gap-4 p-6 rounded-xl bg-white border border-gray-100 shadow-sm h-full">
                            <span className="text-4xl">{service.icon}</span>
                            <DSText
                                as="h3"
                                variant={DSTextVariant.title2}
                                color={DSTextColor.primary}
                                weight={DSTextWeight.bold}
                            >
                                {service.title}
                            </DSText>
                            <DSText
                                as="p"
                                variant={DSTextVariant.body}
                                color={DSTextColor.tertiary}
                            >
                                {service.description}
                            </DSText>
                        </div>
                    </DSMotion>
                ))}
            </div>
        </section>
    );
}
