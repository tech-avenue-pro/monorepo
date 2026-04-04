export interface Reason {
    id: number;
    title: string;
    description: string;
}

export interface WhyChooseUsContent {
    sectionTitle: string;
    introText: string;
    src: string;
    srcSet: string;
    reasons: Reason[];
}
