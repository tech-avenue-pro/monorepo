"use client";

import { ServiceCardTopVisual } from "../service-card-top-visual/ServiceCardTopVisual";
import {
    DSText,
    DSTextVariant,
    DSTextWeight,
    FontStyle,
} from "@repo/ui/design-systems/DSText";
import { DSMotion } from "../../../DSMotion";
import { ServiceSectionContent } from "./service-section-content";
import SectionTitleSplitMessageView from "../../section-title/split-messages/SectionTitleSplitMessageView";

export default function ServiceSection({
    sectionTitle,
    sectionTagline,
    sectionTagDescription,
    linkTitle,
    services,
}: ServiceSectionContent) {
    return (
        <section className="mx-auto max-w-6xl px-4">
            <SectionTitleSplitMessageView
                sectionTitle={sectionTitle}
                sectionTagline={sectionTagline}
                sectionTagDescription={sectionTagDescription}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
                {services.map((service, index) => {
                    const href = service.slug
                        ? `/services/${service.slug}`
                        : service.href;

                    return (
                        <DSMotion
                            variant="fade-up"
                            delay={0.3}
                            duration={0.3}
                            key={service.id}
                        >
                            <ServiceCardTopVisual
                                id={service.id}
                                image={service.image}
                                srcSet={service.srcSet}
                                alt={service.alt}
                                title={service.title}
                                description={service.description}
                                href={href}
                                linkTitle={service.linkTitle}
                                badge={service.badge}
                            />
                        </DSMotion>
                    );
                })}
            </div>
        </section>
    );
}
