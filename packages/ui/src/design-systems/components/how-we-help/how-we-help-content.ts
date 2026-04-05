export interface HowWeHelpStep {
    number: string;
    title: string;
    description: string;
}

export interface HowWeHelpContent {
    title: string;
    steps: HowWeHelpStep[];
}
