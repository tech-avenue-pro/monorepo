export interface HowItWorksStep {
    id: string;
    title: string;
    description: string;
}

export interface HowItWorks {
    title: string;
    description: string;
    buttonTitle: string;
    buttonLink: string;
    steps: HowItWorksStep[];
}
