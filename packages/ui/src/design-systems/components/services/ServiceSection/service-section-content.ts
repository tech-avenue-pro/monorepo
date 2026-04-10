import { ServiceCardTopVisualContent } from "../service-card-top-visual/service-card-top-visual-content";

export interface ServiceSectionContent {
    sectionTitle: string;
    sectionTagline: string;
    sectionTagDescription: string;
    linkTitle: string;
    services: ServiceCardTopVisualContent[];
}
