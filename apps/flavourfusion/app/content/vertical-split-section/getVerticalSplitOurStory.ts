import ourStoryData from "./vertical-split-our-story.json";
import { VerticalSplitSectionContent } from "@repo/ui/design-systems/components/vertical-split-section/vertical-split-section-content.ts";

export function getVerticalSplitOurStory(): VerticalSplitSectionContent {
    return ourStoryData as VerticalSplitSectionContent;
}
