import experienceData from "./experience-content.json";
import { ExperienceSectionContent } from "@repo/ui/design-systems/components/experience/ExperienceSection";

export function getExperienceContent(): ExperienceSectionContent {
    return experienceData as ExperienceSectionContent;
}
