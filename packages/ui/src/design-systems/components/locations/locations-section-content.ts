export interface BusinessHours {
    day: string;
    hours: string;
    closed?: boolean;
}

export interface LocationItemContent {
    name: string;
    address: string;
    phone: string;
    email?: string;
    website?: string;
    mapLink?: string;
    mapEmbedUrl?: string;
    mapImageSrc?: string;
    mapImageAlt?: string;
    schedule?: BusinessHours[];
}

export interface LocationsSectionContent {
    sectionTitle: string;
    sectionDescription?: string;
    locations: LocationItemContent[];
}
