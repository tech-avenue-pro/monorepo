import howItWorksData from "./how-it-works.json";

export interface HowItWorks {
    steps: HowItWorksStep[];
}

export interface HowItWorksStep {
    id: string;
    title: string;
    description: string;
}

export function getHowItWorks(): HowItWorks {
    return howItWorksData as HowItWorks;
}
