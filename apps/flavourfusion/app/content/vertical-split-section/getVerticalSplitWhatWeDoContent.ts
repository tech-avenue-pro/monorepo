import whatWeDoData from "./vertical-split-what-we-do-content.json";
import { VerticalSplitSectionContent } from "@repo/ui/design-systems/components/vertical-split-section/vertical-split-section-content.ts";

export function getVerticalSplitWhatWeDoContent(): VerticalSplitSectionContent {
    return whatWeDoData as VerticalSplitSectionContent;
}
