import { HeroSectionContent } from "@repo/ui/design-systems/components/hero-sections/HeroSectionTech";
import heroSectionData from "./hero-section-content.json";
export function getHeroSectionContent(): HeroSectionContent {
    return heroSectionData as HeroSectionContent;
}
