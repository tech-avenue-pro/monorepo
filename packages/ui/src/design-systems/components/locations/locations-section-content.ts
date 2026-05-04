export interface ClinicHours {
    day: string;
    hours: string;
    closed?: boolean;
}

export interface LocationItemContent {
    name: string;
    address: string;
    phone: string;
    mapLink?: string;
    schedule?: ClinicHours[];
}

export interface LocationsSectionContent {
    sectionTitle: string;
    sectionDescription?: string;
    locations: LocationItemContent[];
}
