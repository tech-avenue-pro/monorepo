import { ServiceDetailPageContent } from "@repo/ui/design-systems/components/services/service-detail-page/service-detail-page-content.ts";
import servicesData from "./servicesContent.json";
import { ServiceSectionContent } from "@repo/ui/design-systems/components/services/ServiceSection/service-section-content.ts";
import { getMarketConfig } from "../markets/config";

export function getServices(): ServiceSectionContent {
    return servicesData as ServiceSectionContent;
}
export function getServiceBySlug(slug: string): ServiceDetailPageContent {
    const service = require(`./${slug}.json`) as ServiceDetailPageContent;

    return {
        ...service,
        finalCta: {
            ...service.finalCta,
            secondaryCta: {
                ...service.finalCta.secondaryCta,
                href: getMarketConfig().whatsappUrl,
            },
        },
    };
}
