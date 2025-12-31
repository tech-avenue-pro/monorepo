import { ServicesContent } from "@repo/ui/design-systems/components/services/ServiceSection";
import servicesData from "./servicesContent.json";

export function getServices(): ServicesContent {
    return servicesData as ServicesContent;
}
