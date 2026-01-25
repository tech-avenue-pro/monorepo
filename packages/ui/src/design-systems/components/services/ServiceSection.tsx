"use client";

import { ServiceCard } from "./ServiceCard";
import {
    DSText,
    DSTextVariant,
    DSTextWeight,
    FontStyle,
} from "@repo/ui/design-systems/DSText";
import { DSMotion } from "../../DSMotion";

export interface ServicesContent {
    sectionTitle: string;
    sectionTagline: string;
    sectionTagDescription: string;
    linkTitle: string;
    services: ServiceDetailContent[];
}

export interface ServiceDetailContent {
    id: number;
    title: string;
    slug?: string;
    description: string;
    image: string;
    srcSet: string;
    alt: string;
    href: string;
    badge?: string;
}

export default function ServiceSection({
    sectionTitle,
    sectionTagline,
    sectionTagDescription,
    linkTitle,
    services,
}: ServicesContent) {
    return (
        <section className="mx-auto max-w-6xl px-4">
            <div className="flex flex-start align-top md:justify-between mb-16 items-start gap-1 md:gap-16 flex-col md:flex-row">
                <DSMotion variant="slide-right" delay={0.5} duration={0.5}>
                    <DSText
                        as="h2"
                        variant={DSTextVariant.largerTitle}
                        weight={DSTextWeight.semiBold}
                        className="text-left mb-6 shrink-0 whitespace-nowrap"
                        fontStyle={FontStyle.Heading}
                    >
                        {sectionTitle}
                    </DSText>
                </DSMotion>

                <DSMotion
                    variant="slide-left"
                    delay={1}
                    duration={1}
                    className="flex flex-col items-start"
                >
                    <DSText
                        as="h3"
                        variant={DSTextVariant.title2}
                        className="text-left mb-4"
                    >
                        <span
                            dangerouslySetInnerHTML={{ __html: sectionTagline }}
                        />
                    </DSText>
                    <p className="">{sectionTagDescription}</p>
                </DSMotion>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
                {services.map((service, index) => {
                    const href = service.slug
                        ? `/services/${service.slug}`
                        : service.href;

                    return (
                        <DSMotion variant="fade-up" delay={0.3}>
                            <ServiceCard
                                image={
                                    <img
                                        src={service.image}
                                        alt={service.alt}
                                        srcSet={service.srcSet}
                                        className=""
                                    />
                                }
                                title={service.title}
                                description={service.description}
                                href={href}
                                badge="Availeble Now"
                                linkTitle={linkTitle}
                            />
                        </DSMotion>
                    );
                })}
            </div>
        </section>
    );
}
