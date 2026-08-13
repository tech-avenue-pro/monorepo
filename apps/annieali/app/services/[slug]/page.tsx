import React from "react";
import { Metadata } from "next";
import Script from "next/script";

import { DSLayoutBackground } from "@repo/ui/design-systems/DSLayout";
import RegularSection from "@repo/ui/design-systems/layouts/RegularSection";
import RegularContainer from "@repo/ui/design-systems/layouts/RegularContainer";
import SmallSection from "@repo/ui/design-systems/layouts/SmallSection";
import Footer from "@repo/ui/design-systems/components/footer/Footer";
import ServiceDetailCoaching from "@repo/ui/design-systems/components/services/service-detail-coaching/ServiceDetailCoaching";

import { getServiceBySlug } from "../../content/services/getServicesContent";
import { getFooterContent } from "../../content/footer-section/getFooterContent";
import SecondaryNavBar from "../../SecondaryNavBar";

interface ServicePageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({
    params,
}: ServicePageProps): Promise<Metadata> {
    const { slug } = await params;
    const service = getServiceBySlug(slug);
    const url = `https://www.annieali.ca/services/${slug}`;

    return {
        title: service.seoTitle ?? service.navTitle ?? "Annie Ali",
        description: service.seoDescription ?? service.hero.summary,
        openGraph: {
            title: service.seoTitle ?? service.navTitle ?? "Annie Ali",
            description: service.seoDescription ?? service.hero.summary,
            url,
            siteName: "Annie Ali",
            type: "website",
            images: [
                { url: service.hero.image.src, alt: service.hero.image.alt },
            ],
        },
    };
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);

    return (
        <main>
            <SecondaryNavBar />
            <ServiceDetailCoaching service={service} />

            {/* Book appointment */}
            <SmallSection
                background={DSLayoutBackground.accentDarker}
                id="contact"
            >
                <RegularContainer>
                    <div
                        style={{ width: "100%", height: "500px" }}
                        data-fillout-id="nGDxnrtPQxus"
                        data-fillout-embed-type="standard"
                        data-fillout-inherit-parameters
                        data-fillout-dynamic-resize
                    />
                    <Script
                        src="https://server.fillout.com/embed/v1/"
                        strategy="lazyOnload"
                    />
                </RegularContainer>
            </SmallSection>

            <hr className="my-0 border-gray-300" />

            <RegularSection background={DSLayoutBackground.default}>
                <RegularContainer>
                    <Footer {...getFooterContent()} />
                </RegularContainer>
            </RegularSection>
        </main>
    );
}
