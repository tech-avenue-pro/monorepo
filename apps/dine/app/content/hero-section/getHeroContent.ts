import heroData from "./hero-content.json";
import { HeroSectionTechContent } from "@repo/ui/design-systems/components/hero-sections/tech/hero-section-tech-content.ts";

export function getHeroContent(): HeroSectionTechContent {
    return heroData as HeroSectionTechContent;
}
