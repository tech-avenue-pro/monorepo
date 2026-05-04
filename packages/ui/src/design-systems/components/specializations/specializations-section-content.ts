export interface SpecializationItemContent {
    icon: string;
    title: string;
    description: string;
}

export interface SpecializationsSectionContent {
    sectionTitle: string;
    sectionDescription?: string;
    items: SpecializationItemContent[];
}
