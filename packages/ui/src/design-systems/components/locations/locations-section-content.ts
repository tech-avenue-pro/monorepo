export interface LocationItemContent {
    name: string;
    address: string;
    phone: string;
    mapLink?: string;
}

export interface LocationsSectionContent {
    sectionTitle: string;
    sectionDescription?: string;
    locations: LocationItemContent[];
}
