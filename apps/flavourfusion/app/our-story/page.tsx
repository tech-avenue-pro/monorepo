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
import { getWhyChooseUsContent } from "../content/why-choose-us/getWhyChooseUsContent";
import { getVerticalSplitOurStory } from "../content/vertical-split-section/getVerticalSplitOurStory";
import { getVerticalSplitFounderContent } from "../content/vertical-split-section/getVerticalSplitFounderContent";
import VerticalSplitSection from "@repo/ui/design-systems/components/vertical-split-section/VerticalSplitSection";
import ZeroSection from "@repo/ui/design-systems/layouts/ZeroSection";
import SmallSection from "@repo/ui/design-systems/layouts/SmallSection";
import WhyChooseUs from "@repo/ui/design-systems/components/why-choose-us/WhyChooseUs";


export default function OurStoryPage() {
    const footer = getFooterContent();
    const ourStory = getVerticalSplitOurStory();
    const whyChooseUs = getWhyChooseUsContent();
    const founder = getVerticalSplitFounderContent();

    return (
        <main>
            <MainNavBar />

            <SmallSection
                id="hero-section"
                background={DSLayoutBackground.primaryLighter}
            >
                <HeroContainer>
                    <VerticalSplitSection {...ourStory} />
                </HeroContainer>
            </SmallSection>
            {/* Origin Story */}
            <RegularSection background={DSLayoutBackground.secondaryLighter}>
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
                                Flavour Fusion was born from a simple belief:
                                that extraordinary food shouldn&apos;t be
                                reserved for grand venues or large events. Every
                                intimate gathering — a family Iftar, a birthday
                                dinner, a small celebration — deserves food that
                                is crafted with intention and served with pride.
                            </DSText>
                            <DSText
                                as="p"
                                variant={DSTextVariant.body}
                                color={DSTextColor.secondary}
                                className="leading-relaxed"
                            >
                                Founded by Afshan Umar, Flavour Fusion grew out
                                of years of home cooking, experimenting with
                                flavours, and a deep-seated belief that
                                precision and care matter more than excess.
                                Every dish we create reflects that philosophy.
                            </DSText>
                        </DSMotion>
                        <DSMotion variant="slide-left">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                                <img
                                    src="/images/where-it-all-began.webp"
                                    alt="Where it all began"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </DSMotion>
                    </div>
                </RegularContainer>
            </RegularSection>
            <RegularSection background={DSLayoutBackground.default}>
                <RegularContainer>
                    <VerticalSplitSection {...founder} />
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
                                vision: food built on balance, intention, and
                                care — not excess. She approaches every menu
                                with the belief that quality ingredients and
                                personal attention are non-negotiable. Her
                                hands-on involvement in every order ensures that
                                the Flavour Fusion standard is never
                                compromised.
                            </DSText>
                        </DSMotion>
                    </div>
                </RegularContainer>
            </RegularSection>

            {/* Core Beliefs */}
            <RegularSection background={DSLayoutBackground.default}>
                <RegularContainer>
                    <WhyChooseUs {...whyChooseUs} />
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
                            Reach out today and let&apos;s build your perfect
                            menu.
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
