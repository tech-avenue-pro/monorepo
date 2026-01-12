import { ServicesContent } from "@repo/ui/design-systems/components/services/ServiceSection";
import { ServiceDetailPageContent } from "@repo/ui/design-systems/components/services/ServiceDetails";
import servicesData from "./servicesContent.json";

export function getServices(): ServicesContent {
    return servicesData as ServicesContent;
}
export function getServiceBySlug(slug: string): ServiceDetailPageContent {
    return require(`./${slug}.json`) as ServiceDetailPageContent;
}
