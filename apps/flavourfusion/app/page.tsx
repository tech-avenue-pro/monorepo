import { DSLayoutBackground } from "@repo/ui/design-systems/DSLayout";
import HeroSection from "@repo/ui/design-systems/layouts/HeroSection";
import BackgroundImageContainer from "@repo/ui/design-systems/layouts/BackgroundImageContainer";
import SmallSection from "@repo/ui/design-systems/layouts/SmallSection";
import RegularSection from "@repo/ui/design-systems/layouts/RegularSection";
import RegularContainer from "@repo/ui/design-systems/layouts/RegularContainer";
import HeroSectionBackgroundVisual from "@repo/ui/design-systems/components/hero-sections/background-visual/HeroSectionBackgroundVisual";
import HowItWorks from "@repo/ui/design-systems/components/how-it-works/HowItWorks";
import VerticalSplitSection from "@repo/ui/design-systems/components/vertical-split-section/VerticalSplitSection";
import Footer from "@repo/ui/design-systems/components/footer/Footer";
import FloatingWhatsAppButton from "@repo/ui/design-systems/components/floating-whatsapp/FloatingWhatsAppButton";

import MainNavBar from "./MainNavBar";
import CateringPackages from "./CateringPackages";
import Testimonials from "./Testimonials";
import { getHeroContent } from "./content/hero-section/getHeroContent";
import { getHowItWorksContent } from "./content/how-it-works/getHowItWorksContent";
import { getVerticalSplitSectionContent } from "./content/vertical-split-section/getVerticalSplitSectionContent";
import { getFooterContent } from "./content/footer-section/getFooterContent";
import ZeroSection from "@repo/ui/design-systems/layouts/ZeroSection";

export default function Home() {
    const hero = getHeroContent();
    const howItWorks = getHowItWorksContent();
    const whyChooseUs = getVerticalSplitSectionContent();
    const footer = getFooterContent();

    return (
        <main>
            <MainNavBar />

            <HeroSection id="hero-section" className="lg:h-[calc(100vh)]">
                <BackgroundImageContainer
                    imageSrc="/images/hero-background.webp"
                    imageAlt="Flavour Fusion catering spread"
                >
                    <HeroSectionBackgroundVisual {...hero} />
                </BackgroundImageContainer>
            </HeroSection>

            <SmallSection
                id="how-it-works-section"
                background={DSLayoutBackground.default}
            >
                <RegularContainer>
                    <HowItWorks {...howItWorks} />
                </RegularContainer>
            </SmallSection>

            <RegularSection
                id="catering-packages-section"
                background={DSLayoutBackground.defaultVariation1}
            >
                <RegularContainer>
                    <CateringPackages />
                </RegularContainer>
            </RegularSection>

            <ZeroSection
                id="why-choose-us-section"
                background={DSLayoutBackground.secondaryDarker}
            >
                <RegularContainer>
                    <VerticalSplitSection {...whyChooseUs} />
                </RegularContainer>
            </ZeroSection>

            <RegularSection
                id="testimonials-section"
                background={DSLayoutBackground.defaultVariation1}
            >
                <RegularContainer>
                    <Testimonials />
                </RegularContainer>
            </RegularSection>

            <hr className="my-0 border-gray-300" />

            <RegularSection background={DSLayoutBackground.default}>
                <RegularContainer>
                    <Footer {...footer} />
                </RegularContainer>
            </RegularSection>

            <FloatingWhatsAppButton phoneNumber="+923288288897" />
        </main>
    );
}
