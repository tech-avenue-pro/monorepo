import { WhyChooseUs } from "@repo/ui/design-systems/components/why-choose-us/WhyChooseUs";
import whyChooseUsData from "./why-choose-us.json";

export function getWhyChooseUsContent(): WhyChooseUs {
    return whyChooseUsData as WhyChooseUs;
}
