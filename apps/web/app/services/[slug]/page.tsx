import { DSText, DSTextVariant } from "@repo/ui/design-systems/DSText";
import React from "react";
import { getServiceBySlug } from "../../content/services/servicesContent";
import {
    ServiceDetailPageContent,
    ServiceDetails,
} from "@repo/ui/design-systems/components/services/ServiceDetails";
import MainNavBar from "../../MainNavBar";
import SecondaryNavBar from "../../SecondaryNavBar";
import { Metadata } from "next";

interface ServicePageProps {
    params: Promise<{ slug: string }>;
}

export async function generateMetadata({
    params,
}: ServicePageProps): Promise<Metadata> {
    const { slug } = await params;
    const service: ServiceDetailPageContent = getServiceBySlug(slug);
    const url = `https://techavenue.pro/services/${slug}`;

    return {
        title: service.seoTitle ?? service.navTitle ?? "Tech Avenue Pro",
        description:
            service.seoDescription ??
            service.hero.summary ??
            "Your digital partner for innovative tech solutions.",
        openGraph: {
            title: service.seoTitle ?? service.navTitle ?? "Tech Avenue Pro",
            description:
                service.seoDescription ??
                service.hero.summary ??
                "Your digital partner for innovative tech solutions.",
            url,
            siteName: "Tech Avenue Pro",
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
        <React.Fragment>
            <SecondaryNavBar />
            <ServiceDetails service={service} />
        </React.Fragment>
    );
}
