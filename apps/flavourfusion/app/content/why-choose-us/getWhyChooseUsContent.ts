import whyChooseUsData from "./why-choose-us.json";
import { WhyChooseUsContent } from "@repo/ui/design-systems/components/why-choose-us/WhyChooseUs";

export function getWhyChooseUsContent(): WhyChooseUsContent {
    return whyChooseUsData as WhyChooseUsContent;
}
