import { DSLayoutBackground } from "@repo/ui/design-systems/DSLayout";
import HeroSection, {
    HeroSectionFullScreen,
} from "@repo/ui/design-systems/layouts/HeroSection";
import HeroContainer from "@repo/ui/design-systems/layouts/HeroContainer";
import RegularSection from "@repo/ui/design-systems/layouts/RegularSection";
import RegularContainer from "@repo/ui/design-systems/layouts/RegularContainer";
import SmallSection from "@repo/ui/design-systems/layouts/SmallSection";
import HeroSectionDoctor from "@repo/ui/design-systems/components/hero-sections/doctor/HeroSectionDoctor";
import WhyChooseUs from "@repo/ui/design-systems/components/why-choose-us/WhyChooseUs";
import HowItWorks from "@repo/ui/design-systems/components/how-it-works/HowItWorks";
import ServiceSection from "@repo/ui/design-systems/components/services/ServiceSection/ServiceSection";
import StatsView from "@repo/ui/design-systems/components/stats/StatsView";
import FinalCTAWithForm from "@repo/ui/design-systems/components/cta/FinalCTAWithForm";
import Footer from "@repo/ui/design-systems/components/footer/Footer";
import {
    DSLinkButton,
    DSButtonVariant,
} from "@repo/ui/design-systems/DSButton";

import MainNavBar from "./MainNavBar";
import { getHeroContent } from "./content/hero-section/getHeroContent";
import { getAboutContent } from "./content/about/getAboutContent";
import { getApproachContent } from "./content/approach/getApproachContent";
import { getStatsContent } from "./content/stats/getStatsContent";
import { getServicesContent } from "./content/services/getServicesContent";
import { getCTAContent } from "./content/cta-section/getCTAContent";
import { getFooterContent } from "./content/footer-section/getFooterContent";
import HeroSectionBackgroundVisual from "@repo/ui/design-systems/components/hero-sections/background-visual/HeroSectionBackgroundVisual";
import BackgroundImageContainer from "@repo/ui/design-systems/layouts/BackgroundImageContainer";

export default function Home() {
    const hero = getHeroContent();
    const about = getAboutContent();
    const approach = getApproachContent();
    const stats = getStatsContent();
    const services = getServicesContent();
    const cta = getCTAContent();
    const footer = getFooterContent();

    return (
        <main>
            <MainNavBar />
            {/* Hero Section */}
            <HeroSectionFullScreen
                id="hero-section"
                className="lg:h-[calc(100vh)]"
            >
                <BackgroundImageContainer
                    imageSrc="/images/hero-background.png"
                    imageAlt="Flavour Fusion catering spread"
                    className="h-full"
                >
                    <HeroSectionBackgroundVisual {...hero} />
                </BackgroundImageContainer>
            </HeroSectionFullScreen>

            <RegularSection
                id="about-section"
                background={DSLayoutBackground.accent}
            >
                <RegularContainer>
                    <WhyChooseUs {...about} />
                </RegularContainer>
            </RegularSection>

            <RegularSection
                id="stats-section"
                background={DSLayoutBackground.accentDarker}
            >
                <RegularContainer>
                    <StatsView {...stats} />
                </RegularContainer>
            </RegularSection>

            <RegularSection
                id="approach-section"
                background={DSLayoutBackground.accentLighter}
            >
                <RegularContainer>
                    <HowItWorks {...approach} />
                </RegularContainer>
            </RegularSection>

            <RegularSection
                id="services-section"
                background={DSLayoutBackground.accent}
            >
                <RegularContainer>
                    <ServiceSection {...services} />
                </RegularContainer>
            </RegularSection>

            <SmallSection background={DSLayoutBackground.default}>
                <RegularContainer>
                    <FinalCTAWithForm
                        {...cta}
                        form={
                            <div className="flex items-center justify-center md:justify-end">
                                <DSLinkButton
                                    href="https://calendly.com/annieali"
                                    variant={DSButtonVariant.primary}
                                >
                                    Book Your Free 30-Minute Call
                                </DSLinkButton>
                            </div>
                        }
                    />
                </RegularContainer>
            </SmallSection>

            <hr className="my-0 border-gray-300" />

            <RegularSection background={DSLayoutBackground.default}>
                <RegularContainer>
                    <Footer {...footer} />
                </RegularContainer>
            </RegularSection>
        </main>
    );
}
