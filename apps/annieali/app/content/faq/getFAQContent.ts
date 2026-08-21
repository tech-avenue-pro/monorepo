import faqData from "./faq-content.json";
import { FAQSectionContent } from "@repo/ui/design-systems/components/faq/FAQSection";

export function getFAQContent(): FAQSectionContent {
    return faqData as FAQSectionContent;
}
