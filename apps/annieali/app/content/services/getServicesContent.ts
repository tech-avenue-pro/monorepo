import servicesData from "./services-content.json";
import { ServiceSectionContent } from "@repo/ui/design-systems/components/services/ServiceSection/service-section-content.ts";
import { CoachingServiceDetailContent } from "@repo/ui/design-systems/components/services/service-detail-coaching/service-detail-coaching-content.ts";

export function getServicesContent(): ServiceSectionContent {
    return servicesData as ServiceSectionContent;
}

export function getServiceBySlug(slug: string): CoachingServiceDetailContent {
    return require(`./${slug}.json`) as CoachingServiceDetailContent;
}
