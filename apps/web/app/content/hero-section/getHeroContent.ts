import heroSectionData from "./hero-section-tech-content.json";
import { HeroSectionTechContent } from "@repo/ui/design-systems/components/hero-sections/tech/hero-section-tech-content.ts";
export function getHeroSectionContent(): HeroSectionTechContent {
    return heroSectionData as HeroSectionTechContent;
}
