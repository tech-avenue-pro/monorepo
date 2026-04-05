import { ServiceDetailPageContent } from "@repo/ui/design-systems/components/services/ServiceDetails";
import servicesData from "./servicesContent.json";
import { ServiceSectionContent } from "@repo/ui/design-systems/components/services/service-section-content.ts";

export function getServices(): ServiceSectionContent {
    return servicesData as ServiceSectionContent;
}
export function getServiceBySlug(slug: string): ServiceDetailPageContent {
    return require(`./${slug}.json`) as ServiceDetailPageContent;
}
