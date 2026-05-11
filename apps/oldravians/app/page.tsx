import { DSLayoutBackground } from "@repo/ui/design-systems/DSLayout";
import HeroSection, {
    HeroSectionFullScreen,
} from "@repo/ui/design-systems/layouts/HeroSection";
import HeroContainer from "@repo/ui/design-systems/layouts/HeroContainer";
import RegularSection from "@repo/ui/design-systems/layouts/RegularSection";
import RegularContainer from "@repo/ui/design-systems/layouts/RegularContainer";
import SmallSection from "@repo/ui/design-systems/layouts/SmallSection";
import HeroSectionBackgroundVisual from "@repo/ui/design-systems/components/hero-sections/background-visual/HeroSectionBackgroundVisual";
import HowItWorks from "@repo/ui/design-systems/components/how-it-works/HowItWorks";
import Footer from "@repo/ui/design-systems/components/footer/Footer";

import MainNavBar from "./MainNavBar";
import CoursesSection from "./CoursesSection";
import OurServicesSection from "./OurServicesSection";
import TeachersSection from "./TeachersSection";
import { getHeroContent } from "./content/hero-section/getHeroContent";
import { getHowItWorksContent } from "./content/how-it-works/getHowItWorksContent";
import { getFooterContent } from "./content/footer-section/getFooterContent";

export default function Home() {
    const hero = getHeroContent();
    const howItWorks = getHowItWorksContent();
    const footer = getFooterContent();

    return (
        <main>
            <MainNavBar />

            <HeroSectionFullScreen
                id="hero-section"
                background={DSLayoutBackground.primaryDarker}
            >
                <HeroContainer>
                    <HeroSectionBackgroundVisual {...hero} />
                </HeroContainer>
            </HeroSectionFullScreen>

            <RegularSection
                id="courses"
                background={DSLayoutBackground.defaultVariation1}
            >
                <RegularContainer>
                    <CoursesSection />
                </RegularContainer>
            </RegularSection>

            <RegularSection
                id="how-it-works"
                background={DSLayoutBackground.default}
            >
                <RegularContainer>
                    <HowItWorks {...howItWorks} />
                </RegularContainer>
            </RegularSection>

            <RegularSection
                id="services"
                background={DSLayoutBackground.primaryLighter}
            >
                <RegularContainer>
                    <OurServicesSection />
                </RegularContainer>
            </RegularSection>

            <SmallSection
                id="teachers"
                background={DSLayoutBackground.defaultVariation1}
            >
                <RegularContainer>
                    <TeachersSection />
                </RegularContainer>
            </SmallSection>

            <RegularSection
                id="location"
                background={DSLayoutBackground.primaryDarker}
            >
                <RegularContainer>
                    <div className="text-center py-8">
                        <p className="text-white text-lg font-semibold mb-2">
                            📍 572 L Block Khayaban-e-Amin, Lahore, Pakistan
                        </p>
                        <p className="text-blue-200 text-sm">
                            Classes are conducted online via Google Meet
                        </p>
                    </div>
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
