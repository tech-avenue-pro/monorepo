import HeroSection from "../../layouts/HeroSection";
import HeroContainer from "../../layouts/HeroContainer";
import { DSLayoutBackground } from "../../backgrounds";
import { DSMotion } from "../../DSMotion";
import { DSButtonVariant, DSLinkButton } from "../../DSButton";
import RegularSection from "../../layouts/RegularSection";
import RegularContainer from "../../layouts/RegularContainer";
import { desc, s } from "framer-motion/client";
import { Odometer } from "../../Odometer";
import WhyChooseUs, {
    WhyChooseUsContent,
} from "@repo/ui/design-systems/components/why-choose-us/WhyChooseUs";
import SmallSection from "../../layouts/SmallSection";
export type CTA = { label: string; href: string };

export type ServiceDetailPageContent = {
    slug: string;
    navTitle: string;
    seoTitle?: string;
    seoDescription?: string;
    name: string;
    hero: HeroSectionRightVisualContent;
    problem: { title: string; items: string[] };
    deliverables: { title: string; items: string[] };
    howWeHelp: {
        title: string;
        steps: { number: string; title: string; description: string }[];
    };
    whoItsFor: { title: string; tags: string[] };
    whyChooseUs: WhyChooseUsContent;
    whyItWorks: WhyItWorksContent;
    stats: StatsContent;
    finalCta: {
        title: string;
        summary: string;
        primaryCta: CTA;
        secondaryCta: CTA;
    };
};

import {
    DSText,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
    FontStyle,
} from "../../DSText";
import { HeroSectionRightVisualContent } from "../hero-sections/right-visual/hero-section-right-visual-content";
import HeroSectionRightVisual from "../hero-sections/right-visual/HeroSectionRightVisual";
import { WhyItWorksContent } from "../why-it-works/why-it-works-content";
import WhyItWorks from "../why-it-works/WhyItWorks";
import { StatsContent } from "../stats/stats-content";
import StatsView from "../stats/StatsView";

export function ServiceDetails({
    service,
}: {
    service: ServiceDetailPageContent;
}) {
    return (
        <main>
            {/* HERO */}
            <HeroSection
                background={DSLayoutBackground.lightestBackground}
                className="lg:h-[calc(100vh-4rem)]"
            >
                <HeroContainer className="h-full">
                    <HeroSectionRightVisual {...service.hero} />
                </HeroContainer>
            </HeroSection>
            <img
                src={service.hero.image.src}
                srcSet={service.hero.image.srcSet}
                alt={service.hero.image.alt}
                width={1200}
                height={1000}
                className="lg:hidden h-full w-full object-cover"
                loading="eager"
                decoding="async"
            />

            {/* What We Do */}
            <RegularSection
                background={DSLayoutBackground.defaultVariation1}
                id="what-we-do"
            >
                <RegularContainer>
                    <div className="">
                        <DSMotion variant="fade-up" delay={0.3} duration={0.5}>
                            <DSText
                                as="h2"
                                variant={DSTextVariant.largeTitle}
                                color={DSTextColor.primary}
                                weight={DSTextWeight.bold}
                                className="text-left"
                                fontStyle={FontStyle.Heading}
                            >
                                {service.howWeHelp.title}
                            </DSText>
                        </DSMotion>

                        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {service.howWeHelp.steps.map((step) => (
                                <DSMotion
                                    variant="fade-up"
                                    delay={0.5}
                                    duration={0.5}
                                >
                                    <div
                                        key={step.number}
                                        className="rounded-3xl border ds-bg-default p-6 shadow-sm"
                                    >
                                        <div className=" flex items-center justify-end">
                                            <DSText
                                                as="span"
                                                variant={
                                                    DSTextVariant.largestTitle
                                                }
                                                color={DSTextColor.quinary}
                                                weight={DSTextWeight.semiBold}
                                                fontStyle={FontStyle.Heading}
                                            >
                                                {step.number}
                                            </DSText>
                                        </div>
                                        <DSText
                                            as="h3"
                                            variant={DSTextVariant.headline1}
                                            color={DSTextColor.primary}
                                            fontStyle={FontStyle.Heading}
                                            weight={DSTextWeight.bold}
                                            className="mt-4"
                                        >
                                            {step.title}
                                        </DSText>
                                        <DSText
                                            as="p"
                                            variant={DSTextVariant.body}
                                            color={DSTextColor.secondary}
                                            className="mt-4"
                                        >
                                            {step.description}
                                        </DSText>
                                    </div>
                                </DSMotion>
                            ))}
                        </div>
                    </div>
                </RegularContainer>
            </RegularSection>
            {/* Stats and Data */}
            <RegularSection>
                <RegularContainer>
                    <StatsView {...service.stats} />
                </RegularContainer>
            </RegularSection>
            {/* Why Digital Marketing Works */}
            <SmallSection>
                <RegularContainer>
                    <WhyItWorks {...service.whyItWorks} />
                </RegularContainer>
            </SmallSection>

            {/* WHY CHOOSE US */}

            <RegularSection
                id="why-choose-us"
                background={DSLayoutBackground.default}
            >
                <RegularContainer>
                    <WhyChooseUs {...service.whyChooseUs} />
                </RegularContainer>
            </RegularSection>
        </main>
    );
}
