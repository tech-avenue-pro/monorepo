import { WhyChooseUsContent } from "@repo/ui/design-systems/components/why-choose-us/WhyChooseUs";
import whyChooseUsData from "./why-choose-us.json";

export function getWhyChooseUsContent(): WhyChooseUsContent {
    return whyChooseUsData as WhyChooseUsContent;
}
