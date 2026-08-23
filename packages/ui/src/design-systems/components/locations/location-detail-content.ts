import { LocationItemContent } from "./locations-section-content";

export interface LocationDetailSectionContent {
    eyebrow?: string;
    sectionTitle: string;
    sectionDescription?: string;
    location: LocationItemContent;
    directionsLabel?: string;
    mapPinLabel?: string;
    mapPinSubLabel?: string;
}
