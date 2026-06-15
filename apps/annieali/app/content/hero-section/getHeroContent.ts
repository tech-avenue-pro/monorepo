import heroData from "./hero-section-content.json";
import { HeroSectionBackgroundVisualContent } from "@repo/ui/design-systems/components/hero-sections/background-visual/HeroSectionBackgroundVisual";

export function getHeroContent(): HeroSectionBackgroundVisualContent {
    return heroData as HeroSectionBackgroundVisualContent;
}
