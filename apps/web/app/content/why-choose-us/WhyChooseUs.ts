import { WhyChooseUs } from "@repo/ui/design-systems/components/why-choose-us/WhyChooseUs";
import whyChooseUsData from "./why-choose-us.json";
import whyChooseUsDMData from "./why-choose-us-digital-marketing.json";

export function getWhyChooseUsDMContent(): WhyChooseUs {
    return whyChooseUsDMData as WhyChooseUs;
}
export function getWhyChooseUsContent(): WhyChooseUs {
    return whyChooseUsData as WhyChooseUs;
}
