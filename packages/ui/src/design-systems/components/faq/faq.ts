export interface FAQItem {
    question: string;
    answer: string;
}

export interface FAQSectionContent {
    sectionTitle: string;
    title: string; // supports inline HTML for italic/bold words e.g. "Good questions, <em>honest</em> answers."
    items: FAQItem[];
}
