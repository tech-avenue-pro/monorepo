import aboutData from "./about-content.json";
import { WhyChooseUsContent } from "@repo/ui/design-systems/components/why-choose-us/WhyChooseUs";

export function getAboutContent(): WhyChooseUsContent {
    return aboutData as WhyChooseUsContent;
}
