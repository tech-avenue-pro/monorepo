import verticalSplitData from "./vertical-split-section-content.json";
import { VerticalSplitSectionContent } from "@repo/ui/design-systems/components/vertical-split-section/vertical-split-section-content.ts";

export function getVerticalSplitSectionContent(): VerticalSplitSectionContent {
    return verticalSplitData as VerticalSplitSectionContent;
}
