export type CTA = { label: string; href: string };
export type ServiceDetailPageContent = {
    slug: string;
    navTitle: string;
    hero: {
        title: string;
        summary: string;
        primaryCta: CTA;
        secondaryCta: CTA;
        image: { src: string; alt: string };
    };
    problem: { title: string; items: string[] };
    deliverables: { title: string; items: string[] };
    howItWorks: {
        title: string;
        steps: { number: string; title: string; description: string }[];
    };
    whoItsFor: { title: string; tags: string[] };
    whyChooseUs: {
        title: string;
        items: { title: string; description: string }[];
    };
    whyItWorks: {
        title: string;
        description: string;
        items: string[];
    };
    finalCta: {
        title: string;
        summary: string;
        primaryCta: CTA;
        secondaryCta: CTA;
    };
};

import Image from "next/image";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
    FontStyle,
} from "../../DSText";
import HeroSection from "../../layouts/HeroSection";
import HeroContainer from "../../layouts/HeroContainer";
import { DSLayoutBackground } from "../../backgrounds";
import { DSMotion } from "../../DSMotion";
import { DSButtonVariant, DSLinkButton } from "../../DSButton";
import RegularSection from "../../layouts/RegularSection";
import RegularContainer from "../../layouts/RegularContainer";

export function ServiceDetails({
    service,
}: {
    service: ServiceDetailPageContent;
}) {
    return (
        <main>
            {/* HERO */}
            <HeroSection
                background={DSLayoutBackground.defaultVariation1}
                className="lg:h-screen ds-bg-light-corners-mixed"
            >
                <HeroContainer className="h-full ds-bg-light-corners-mixed">
                    <div className="grid gap-10 lg:grid-cols-2 md:items-center h-full">
                        <div className="py-16">
                            <DSMotion variant="fade-up" delay={0.5}>
                                <DSText
                                    as="h1"
                                    variant={DSTextVariant.largestTitle}
                                    color={DSTextColor.primary}
                                    className="mb-6 text-left"
                                    fontStyle={FontStyle.Heading}
                                >
                                    {service.hero.title}
                                </DSText>
                            </DSMotion>
                            <DSMotion variant="slide-left" delay={0.7}>
                                <DSText
                                    as="p"
                                    variant={DSTextVariant.body}
                                    color={DSTextColor.tertiary}
                                    className="text-center mb-6 md:text-left"
                                >
                                    {service.hero.summary}
                                </DSText>
                            </DSMotion>

                            <div className="flex flex-col gap-4  sm:flex-row mt-16 ">
                                <DSLinkButton
                                    variant={DSButtonVariant.primary}
                                    href={service.hero.primaryCta.href}
                                >
                                    {service.hero.primaryCta.label}
                                </DSLinkButton>

                                <DSLinkButton
                                    variant={DSButtonVariant.contrast}
                                    href={service.hero.secondaryCta.href}
                                    className="inline-flex items-center justify-center rounded-xl border border-neutral-200 bg-white px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-neutral-50"
                                >
                                    {service.hero.secondaryCta.label}
                                </DSLinkButton>
                            </div>
                        </div>
                        <DSMotion
                            variant="slide-left"
                            delay={0.5}
                            duration={2}
                            className="h-full"
                        >
                            <div className="hidden lg:block relative h-full overflow-hidden rounded-3xl  p-2">
                                <Image
                                    src={service.hero.image.src}
                                    alt={service.hero.image.alt}
                                    width={1200}
                                    height={1000}
                                    className="h-full w-full rounded-2xl object-cover"
                                    priority
                                />
                            </div>
                        </DSMotion>
                    </div>
                </HeroContainer>
            </HeroSection>
            <Image
                src={service.hero.image.src}
                alt={service.hero.image.alt}
                width={1200}
                height={1000}
                className="lg:hidden h-full w-full object-cover"
                priority
            />
            {/* PROBLEM + DELIVERABLES */}

            {/* HOW IT WORKS */}
            <RegularSection>
                <RegularContainer>
                    <div className="">
                        <DSText
                            as="h2"
                            variant={DSTextVariant.largeTitle}
                            color={DSTextColor.primary}
                            className="text-left"
                            fontStyle={FontStyle.Heading}
                        >
                            {service.howItWorks.title}
                        </DSText>

                        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                            {service.howItWorks.steps.map((step) => (
                                <div
                                    key={step.number}
                                    className="rounded-3xl border ds-bg-default p-6 shadow-sm"
                                >
                                    <div className=" flex items-center justify-end">
                                        <DSText
                                            as="span"
                                            variant={DSTextVariant.largestTitle}
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
                            ))}
                        </div>
                    </div>
                </RegularContainer>
            </RegularSection>
            {/* Why Digital Marketing Works */}
            <RegularSection>
                <RegularContainer>
                    <div className="rounded-3xl border border-neutral-200 p-12 shadow-sm ds-bg-light-right">
                        <DSText
                            as="h2"
                            variant={DSTextVariant.largeTitle}
                            color={DSTextColor.primary}
                            fontStyle={FontStyle.Heading}
                        >
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: service.whyItWorks.title,
                                }}
                            />
                        </DSText>
                        <DSText
                            as="h3"
                            variant={DSTextVariant.body}
                            weight={DSTextWeight.semiBold}
                            color={DSTextColor.primary}
                            fontStyle={FontStyle.Body}
                            className="mt-4 max-w-2xl text-left"
                        >
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: service.whyItWorks.description,
                                }}
                            />
                        </DSText>

                        <div className="mt-8 flex flex-col gap-4">
                            {service.whyItWorks.items.map((item) => (
                                <li>
                                    <DSText
                                        as="p"
                                        variant={DSTextVariant.body}
                                        color={DSTextColor.primary}
                                        fontStyle={FontStyle.Body}
                                    >
                                        {item}
                                    </DSText>
                                </li>
                            ))}
                        </div>
                    </div>
                </RegularContainer>
            </RegularSection>
            {/* WHO IT'S FOR */}
            <section className="mt-16 rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm">
                <h2 className="text-lg font-semibold text-neutral-900">
                    {service.whoItsFor.title}
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                    {service.whoItsFor.tags.map((tag) => (
                        <span
                            key={tag}
                            className="rounded-full border border-neutral-200 bg-neutral-50 px-3 py-1 text-xs font-medium text-neutral-700"
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            </section>

            {/* WHY CHOOSE US */}
            <section className="mt-16">
                <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">
                    {service.whyChooseUs.title}
                </h2>
                <div className="mt-8 grid gap-5 sm:grid-cols-2">
                    {service.whyChooseUs.items.map((item) => (
                        <div
                            key={item.title}
                            className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm"
                        >
                            <h3 className="text-sm font-semibold text-neutral-900">
                                {item.title}
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-neutral-600">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* FINAL CTA */}
            <section className="mt-16">
                <div className="rounded-3xl border border-neutral-200 bg-neutral-900 p-8 text-white shadow-sm md:p-12">
                    <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                        {service.finalCta.title}
                    </h2>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-white/80 md:text-base">
                        {service.finalCta.summary}
                    </p>

                    <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                        <a
                            href={service.finalCta.primaryCta.href}
                            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-white/90"
                        >
                            {service.finalCta.primaryCta.label}
                        </a>
                        <a
                            href={service.finalCta.secondaryCta.href}
                            className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-transparent px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
                        >
                            {service.finalCta.secondaryCta.label}
                        </a>
                    </div>
                </div>
            </section>
        </main>
    );
}
