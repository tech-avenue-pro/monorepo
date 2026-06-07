import servicesData from "./services-content.json";
import { ServiceSectionContent } from "@repo/ui/design-systems/components/services/ServiceSection/service-section-content.ts";

export function getServicesContent(): ServiceSectionContent {
    return servicesData as ServiceSectionContent;
}
