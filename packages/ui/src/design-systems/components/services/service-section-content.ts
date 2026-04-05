import { ServiceCardTopVisualContent } from "./service-card-top-viaual/service-card-to-visual-content";

export interface ServiceSectionContent {
    sectionTitle: string;
    sectionTagline: string;
    sectionTagDescription: string;
    linkTitle: string;
    services: ServiceCardTopVisualContent[];
}
