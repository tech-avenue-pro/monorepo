import whyChooseUsData from "./why-choose-us.json";

export interface WhyChooseUs {
    sectionTitle: string;
    introText: string;
    reasons: Reason[];
}

export interface Reason {
    id: number;
    title: string;
    description: string;
}

export function getWhyChooseUs(): WhyChooseUs {
    return whyChooseUsData as WhyChooseUs;
}
