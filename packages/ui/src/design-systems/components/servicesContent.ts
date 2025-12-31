import { ServicesContent } from "@repo/ui/design-systems/components/ServiceSection";
import servicesData from "../../../../../apps/web/app/content/services/servicesContent.json";

export function getServices(): ServicesContent {
    return servicesData as ServicesContent;
}
