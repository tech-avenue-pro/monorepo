import { DSText, DSTextVariant } from "@repo/ui/design-systems/DSText";
import React from "react";
import { getServiceBySlug } from "../../content/services/servicesContent";
import { ServiceDetails } from "@repo/ui/design-systems/components/services/ServiceDetails";
import MainNavBar from "../../MainNavBar";

interface ServicePageProps {
    params: Promise<{ slug: string }>;
}

export default async function ServicePage({ params }: ServicePageProps) {
    const { slug } = await params;
    const service = getServiceBySlug(slug);
    return (
        <React.Fragment>
            <MainNavBar />
            <ServiceDetails service={service} />
        </React.Fragment>
    );
}
