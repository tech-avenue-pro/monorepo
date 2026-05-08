import founderData from "./vertical-split-founder-content.json";
import { VerticalSplitSectionContent } from "@repo/ui/design-systems/components/vertical-split-section/vertical-split-section-content.ts";

export function getVerticalSplitFounderContent(): VerticalSplitSectionContent {
    return founderData as VerticalSplitSectionContent;
}
