import { WhyChooseUsContent } from "@repo/ui/design-systems/components/why-choose-us/why-choose-us.ts";
import whyChooseUsData from "./why-choose-us.json";

export function getWhyChooseUsContent(): WhyChooseUsContent {
    return whyChooseUsData as WhyChooseUsContent;
}
