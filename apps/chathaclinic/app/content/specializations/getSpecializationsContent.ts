import specializationsData from "./specializations-content.json";
import { SpecializationsSectionContent } from "@repo/ui/design-systems/components/specializations/SpecializationsSection";

export function getSpecializationsContent(): SpecializationsSectionContent {
    return specializationsData as SpecializationsSectionContent;
}
