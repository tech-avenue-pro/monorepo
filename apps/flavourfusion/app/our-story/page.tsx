import React from "react";
import { DSLayoutBackground } from "@repo/ui/design-systems/DSLayout";
import HeroSection from "@repo/ui/design-systems/layouts/HeroSection";
import HeroContainer from "@repo/ui/design-systems/layouts/HeroContainer";
import RegularSection from "@repo/ui/design-systems/layouts/RegularSection";
import RegularContainer from "@repo/ui/design-systems/layouts/RegularContainer";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
} from "@repo/ui/design-systems/DSText";
import { DSMotion, DSStagger } from "@repo/ui/design-systems/DSMotion";
import Footer from "@repo/ui/design-systems/components/footer/Footer";
import FloatingWhatsAppButton from "@repo/ui/design-systems/components/floating-whatsapp/FloatingWhatsAppButton";
import MainNavBar from "../MainNavBar";
import { getFooterContent } from "../content/footer-section/getFooterContent";

const beliefs = [
    {
        title: "Quality Over Quantity",
        description:
            "Intentional portions crafted with care — every dish earns its place on the table.",
    },
    {
        title: "Balanced Flavour",
        description:
            "Bold yet refined. We pursue the perfect balance in every recipe we develop.",
    },
    {
        title: "Attention to Detail",
        description:
            "From ingredient selection to plating, no detail is too small to matter.",
    },
    {
        title: "Food as Connection",
        description:
            "Great food brings people together. We craft experiences, not just meals.",
    },
    {
        title: "The Power of Simplicity",
        description:
            "Clean, honest flavours done exceptionally well — that is our standard.",
    },
    {
        title: "Consistent Excellence",
        description:
            "Every order, every gathering — the same level of dedication and quality.",
    },
    {
        title: "Premium Ingredients",
        description:
            "We source carefully and cook intentionally. Quality starts with what goes in.",
    },
    {
        title: "Professional Service",
        description:
            "Seamless, thoughtful, and personal — from first inquiry to final bite.",
    },
    {
        title: "Food as Storytelling",
        description:
            "Every menu tells a story. We help your gathering write a memorable one.",
    },
];

export default function OurStoryPage() {
    const footer = getFooterContent();

    return (
        <main>
            <MainNavBar />

            <HeroSection
                id="hero-section"
                background={DSLayoutBackground.primaryLighter}
            >
                <HeroContainer>
                    <DSMotion variant="fade-up" className="text-center py-8">
                        <DSText
                            as="p"
                            variant={DSTextVariant.caption}
                            color={DSTextColor.senary}
                            weight={DSTextWeight.semiBold}
                            className="mb-3 uppercase tracking-widest"
                        >
                            Born out of obsession
                        </DSText>
                        <DSText
                            as="h1"
                            variant={DSTextVariant.largestTitle}
                            color={DSTextColor.primary}
                            weight={DSTextWeight.bold}
                            className="mb-4"
                        >
                            Our Story
                        </DSText>
                        <DSText
                            as="p"
                            variant={DSTextVariant.body}
                            color={DSTextColor.secondary}
                            className="max-w-2xl mx-auto"
                        >
                            A relentless obsession with flavour, balance, and
                            detail — that is where Flavour Fusion began.
                        </DSText>
                    </DSMotion>
                </HeroContainer>
            </HeroSection>

            {/* Origin Story */}
            <RegularSection background={DSLayoutBackground.default}>
                <RegularContainer>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <DSMotion variant="slide-right">
                            <DSText
                                as="h2"
                                variant={DSTextVariant.largeTitle}
                                color={DSTextColor.primary}
                                weight={DSTextWeight.bold}
                                className="mb-6"
                            >
                                Where It All Began
                            </DSText>
                            <DSText
                                as="p"
                                variant={DSTextVariant.body}
                                color={DSTextColor.secondary}
                                className="mb-4 leading-relaxed"
                            >
                                Flavour Fusion was born from a simple belief: that
                                extraordinary food shouldn&apos;t be reserved for
                                grand venues or large events. Every intimate gathering
                                — a family Iftar, a birthday dinner, a small
                                celebration — deserves food that is crafted with
                                intention and served with pride.
                            </DSText>
                            <DSText
                                as="p"
                                variant={DSTextVariant.body}
                                color={DSTextColor.secondary}
                                className="leading-relaxed"
                            >
                                Founded by Afshan Umar, Flavour Fusion grew out of
                                years of home cooking, experimenting with flavours,
                                and a deep-seated belief that precision and care
                                matter more than excess. Every dish we create reflects
                                that philosophy.
                            </DSText>
                        </DSMotion>
                        <DSMotion variant="slide-left">
                            <div className="aspect-[4/3] rounded-2xl bg-[var(--primary-lighter)] flex items-center justify-center overflow-hidden">
                                <div className="text-center p-8">
                                    <div className="w-24 h-24 rounded-full bg-[var(--primary)] opacity-20 mx-auto mb-4" />
                                    <DSText
                                        as="p"
                                        variant={DSTextVariant.caption}
                                        color={DSTextColor.tertiary}
                                    >
                                        Photo coming soon
                                    </DSText>
                                </div>
                            </div>
                        </DSMotion>
                    </div>
                </RegularContainer>
            </RegularSection>

            {/* Founder */}
            <RegularSection background={DSLayoutBackground.defaultVariation1}>
                <RegularContainer>
                    <div className="max-w-3xl mx-auto text-center">
                        <DSMotion variant="fade-up" className="mb-8">
                            <DSText
                                as="h2"
                                variant={DSTextVariant.largeTitle}
                                color={DSTextColor.primary}
                                weight={DSTextWeight.bold}
                                className="mb-6"
                            >
                                The Founder
                            </DSText>
                        </DSMotion>
                        <DSMotion variant="fade-up">
                            <div className="w-24 h-24 rounded-full bg-[var(--primary-lighter)] border-4 border-[var(--primary)] mx-auto mb-6 flex items-center justify-center">
                                <DSText
                                    as="span"
                                    variant={DSTextVariant.largeTitle}
                                    color={DSTextColor.senary}
                                    weight={DSTextWeight.bold}
                                >
                                    A
                                </DSText>
                            </div>
                            <DSText
                                as="h3"
                                variant={DSTextVariant.title1}
                                color={DSTextColor.primary}
                                weight={DSTextWeight.bold}
                                className="mb-2"
                            >
                                Afshan Umar
                            </DSText>
                            <DSText
                                as="p"
                                variant={DSTextVariant.caption}
                                color={DSTextColor.senary}
                                weight={DSTextWeight.semiBold}
                                className="mb-6 uppercase tracking-wider"
                            >
                                Founder & Head Chef
                            </DSText>
                            <DSText
                                as="p"
                                variant={DSTextVariant.body}
                                color={DSTextColor.secondary}
                                className="leading-relaxed"
                            >
                                Afshan established Flavour Fusion with a clear
                                vision: food built on balance, intention, and care —
                                not excess. She approaches every menu with the belief
                                that quality ingredients and personal attention are
                                non-negotiable. Her hands-on involvement in every
                                order ensures that the Flavour Fusion standard is
                                never compromised.
                            </DSText>
                        </DSMotion>
                    </div>
                </RegularContainer>
            </RegularSection>

            {/* Core Beliefs */}
            <RegularSection background={DSLayoutBackground.default}>
                <RegularContainer>
                    <DSMotion variant="fade-up" className="text-center mb-12">
                        <DSText
                            as="h2"
                            variant={DSTextVariant.largeTitle}
                            color={DSTextColor.primary}
                            weight={DSTextWeight.bold}
                            className="mb-4"
                        >
                            What We Believe In
                        </DSText>
                        <DSText
                            as="p"
                            variant={DSTextVariant.body}
                            color={DSTextColor.secondary}
                            className="max-w-xl mx-auto"
                        >
                            These are the principles that guide every dish we
                            prepare and every gathering we serve.
                        </DSText>
                    </DSMotion>

                    <DSStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {beliefs.map((belief, i) => (
                            <DSMotion
                                key={belief.title}
                                variant="fade-up"
                                className="bg-[var(--primary-lighter)] rounded-2xl p-6 border border-[var(--primary)] border-opacity-20"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="w-8 h-8 rounded-full bg-[var(--primary)] text-white text-sm font-bold flex items-center justify-center shrink-0">
                                        {i + 1}
                                    </span>
                                    <DSText
                                        as="h3"
                                        variant={DSTextVariant.headline1}
                                        color={DSTextColor.primary}
                                        weight={DSTextWeight.bold}
                                    >
                                        {belief.title}
                                    </DSText>
                                </div>
                                <DSText
                                    as="p"
                                    variant={DSTextVariant.caption}
                                    color={DSTextColor.secondary}
                                >
                                    {belief.description}
                                </DSText>
                            </DSMotion>
                        ))}
                    </DSStagger>
                </RegularContainer>
            </RegularSection>

            {/* CTA */}
            <RegularSection background={DSLayoutBackground.primaryLighter}>
                <RegularContainer>
                    <DSMotion variant="fade-up" className="text-center">
                        <DSText
                            as="h2"
                            variant={DSTextVariant.largeTitle}
                            color={DSTextColor.primary}
                            weight={DSTextWeight.bold}
                            className="mb-4"
                        >
                            Ready to Experience It?
                        </DSText>
                        <DSText
                            as="p"
                            variant={DSTextVariant.body}
                            color={DSTextColor.secondary}
                            className="mb-8 max-w-xl mx-auto"
                        >
                            Let us bring our flavours to your next gathering.
                            Reach out today and let&apos;s build your perfect menu.
                        </DSText>
                        <a
                            href="https://wa.me/923288288897"
                            className="inline-block bg-[var(--primary)] hover:bg-[var(--primary-darker)] text-white font-semibold px-8 py-3 rounded-full transition-colors"
                        >
                            Get in Touch via WhatsApp
                        </a>
                    </DSMotion>
                </RegularContainer>
            </RegularSection>

            <hr className="my-0 border-gray-300" />

            <RegularSection background={DSLayoutBackground.default}>
                <RegularContainer>
                    <Footer {...footer} />
                </RegularContainer>
            </RegularSection>

            <FloatingWhatsAppButton phoneNumber="+923288288897" />
        </main>
    );
}
