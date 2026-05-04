import heroData from "./hero-section-doctor-content.json";
import { HeroSectionDoctorContent } from "@repo/ui/design-systems/components/hero-sections/doctor/hero-section-doctor-content.ts";

export function getHeroContent(): HeroSectionDoctorContent {
    return heroData as HeroSectionDoctorContent;
}
