import whyChooseUsData from "./why-choose-us-content.json";
import { WhyChooseUsVerticalSplitContent } from "@repo/ui/design-systems/components/why-choose-us/why-choose-us-vertical-split-content.ts";

export function getWhyChooseUsContent(): WhyChooseUsVerticalSplitContent {
    return whyChooseUsData as WhyChooseUsVerticalSplitContent;
}
