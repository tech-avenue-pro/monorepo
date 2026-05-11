"use client";

import React from "react";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
} from "@repo/ui/design-systems/DSText";
import { DSLinkButton, DSButtonVariant } from "@repo/ui/design-systems/DSButton";
import { DSMotion } from "@repo/ui/design-systems/DSMotion";

export default function TeachersSection() {
    return (
        <section
            id="teachers"
            className="mx-auto max-w-3xl px-4 text-center"
        >
            <DSMotion variant="fade-up">
                <DSText
                    as="p"
                    variant={DSTextVariant.caption}
                    color={DSTextColor.senary}
                    weight={DSTextWeight.semiBold}
                    className="uppercase tracking-widest mb-3"
                >
                    Join Our Team
                </DSText>
                <DSText
                    as="h2"
                    variant={DSTextVariant.largeTitle}
                    color={DSTextColor.primary}
                    weight={DSTextWeight.bold}
                    className="mb-4"
                >
                    Become a Teacher
                </DSText>
                <DSText
                    as="p"
                    variant={DSTextVariant.bodyLarge}
                    color={DSTextColor.tertiary}
                    className="mb-8"
                >
                    Are you an expert educator? We&apos;re always looking for
                    passionate, qualified teachers to join Old Ravians Academy.
                    Share your subject expertise and experience with us.
                </DSText>
            </DSMotion>

            <DSMotion variant="fade-up" delay={0.2}>
                <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm text-left">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div className="flex flex-col gap-1">
                            <DSText
                                as="label"
                                variant={DSTextVariant.caption}
                                color={DSTextColor.secondary}
                                weight={DSTextWeight.semiBold}
                            >
                                Full Name
                            </DSText>
                            <input
                                type="text"
                                placeholder="Your full name"
                                className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <DSText
                                as="label"
                                variant={DSTextVariant.caption}
                                color={DSTextColor.secondary}
                                weight={DSTextWeight.semiBold}
                            >
                                Phone Number
                            </DSText>
                            <input
                                type="tel"
                                placeholder="03XX-XXXXXXX"
                                className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <DSText
                                as="label"
                                variant={DSTextVariant.caption}
                                color={DSTextColor.secondary}
                                weight={DSTextWeight.semiBold}
                            >
                                Email Address
                            </DSText>
                            <input
                                type="email"
                                placeholder="you@example.com"
                                className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                        <div className="flex flex-col gap-1">
                            <DSText
                                as="label"
                                variant={DSTextVariant.caption}
                                color={DSTextColor.secondary}
                                weight={DSTextWeight.semiBold}
                            >
                                Subjects & Experience
                            </DSText>
                            <input
                                type="text"
                                placeholder="e.g. Physics, 5 years"
                                className="border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>
                    <DSLinkButton
                        href="mailto:info@oldravians.com"
                        variant={DSButtonVariant.primary}
                        className="w-full justify-center"
                    >
                        Submit Application
                    </DSLinkButton>
                </div>
            </DSMotion>
        </section>
    );
}
