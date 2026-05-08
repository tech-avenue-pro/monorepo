import heroData from "./hero-content.json";
import { HeroSectionBackgroundVisualContent } from "@repo/ui/design-systems/components/hero-sections/background-visual/hero-section-background-visual-content.ts";

export function getHeroContent(): HeroSectionBackgroundVisualContent {
    return heroData as HeroSectionBackgroundVisualContent;
}
