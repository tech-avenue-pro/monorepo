import { DSLayoutBackground } from "@repo/ui/design-systems/DSLayout";
import HeroSection from "@repo/ui/design-systems/layouts/HeroSection";
import HeroContainer from "@repo/ui/design-systems/layouts/HeroContainer";
import RegularSection from "@repo/ui/design-systems/layouts/RegularSection";
import RegularContainer from "@repo/ui/design-systems/layouts/RegularContainer";
import SmallSection from "@repo/ui/design-systems/layouts/SmallSection";
import HeroSectionDoctor from "@repo/ui/design-systems/components/hero-sections/doctor/HeroSectionDoctor";
import WhyChooseUs from "@repo/ui/design-systems/components/why-choose-us/WhyChooseUs";
import SpecializationsSection from "@repo/ui/design-systems/components/specializations/SpecializationsSection";
import LocationsSection from "@repo/ui/design-systems/components/locations/LocationsSection";
import ExperienceSection from "@repo/ui/design-systems/components/experience/ExperienceSection";
import Footer from "@repo/ui/design-systems/components/footer/Footer";

import MainNavBar from "./MainNavBar";
import { getHeroContent } from "./content/hero-section/getHeroContent";
import { getAboutContent } from "./content/about/getAboutContent";
import { getSpecializationsContent } from "./content/specializations/getSpecializationsContent";
import { getLocationsContent } from "./content/locations/getLocationsContent";
import { getExperienceContent } from "./content/experience/getExperienceContent";
import { getFooterContent } from "./content/footer-section/getFooterContent";

export default function Home() {
    const hero = getHeroContent();
    const about = getAboutContent();
    const specializations = getSpecializationsContent();
    const locations = getLocationsContent();
    const experience = getExperienceContent();
    const footer = getFooterContent();

    return (
        <main>
            <MainNavBar />

            <HeroSection
                id="hero-section"
                background={DSLayoutBackground.primaryLighter}
            >
                <HeroContainer>
                    <HeroSectionDoctor {...hero} />
                </HeroContainer>
            </HeroSection>

            <RegularSection
                id="about-section"
                background={DSLayoutBackground.default}
            >
                <RegularContainer>
                    <WhyChooseUs {...about} />
                </RegularContainer>
            </RegularSection>

            <RegularSection
                id="specializations-section"
                background={DSLayoutBackground.defaultVariation1}
            >
                <RegularContainer>
                    <SpecializationsSection {...specializations} />
                </RegularContainer>
            </RegularSection>

            <RegularSection
                id="locations-section"
                background={DSLayoutBackground.default}
            >
                <RegularContainer>
                    <LocationsSection {...locations} />
                </RegularContainer>
            </RegularSection>

            <RegularSection
                id="experience-section"
                background={DSLayoutBackground.defaultVariation1}
            >
                <RegularContainer>
                    <ExperienceSection {...experience} />
                </RegularContainer>
            </RegularSection>

            <hr className="my-0 border-gray-300" />

            <RegularSection background={DSLayoutBackground.default}>
                <RegularContainer>
                    <Footer {...footer} />
                </RegularContainer>
            </RegularSection>
        </main>
    );
}
