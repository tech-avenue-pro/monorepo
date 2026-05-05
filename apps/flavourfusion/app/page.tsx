import { DSLayoutBackground } from "@repo/ui/design-systems/DSLayout";
import RegularSection from "@repo/ui/design-systems/layouts/RegularSection";
import RegularContainer from "@repo/ui/design-systems/layouts/RegularContainer";
import HeroSectionBackgroundVisual from "@repo/ui/design-systems/components/hero-sections/background-visual/HeroSectionBackgroundVisual";
import HowItWorks from "@repo/ui/design-systems/components/how-it-works/HowItWorks";
import WhyChooseUs from "@repo/ui/design-systems/components/why-choose-us/WhyChooseUs";
import Footer from "@repo/ui/design-systems/components/footer/Footer";
import FloatingWhatsAppButton from "@repo/ui/design-systems/components/floating-whatsapp/FloatingWhatsAppButton";

import MainNavBar from "./MainNavBar";
import CateringPackages from "./CateringPackages";
import Testimonials from "./Testimonials";
import { getHeroContent } from "./content/hero-section/getHeroContent";
import { getHowItWorksContent } from "./content/how-it-works/getHowItWorksContent";
import { getWhyChooseUsContent } from "./content/why-choose-us/getWhyChooseUsContent";
import { getFooterContent } from "./content/footer-section/getFooterContent";
import HeroSection from "@repo/ui/design-systems/layouts/HeroSection";
import HeroContainer from "@repo/ui/design-systems/layouts/HeroContainer";
import SmallSection from "@repo/ui/design-systems/layouts/SmallSection";

export default function Home() {
    const hero = getHeroContent();
    const howItWorks = getHowItWorksContent();
    const whyChooseUs = getWhyChooseUsContent();
    const footer = getFooterContent();

    return (
        <main>
            <MainNavBar />

            <HeroSection id="hero-section" className="lg:h-[calc(100vh)]">
                <HeroSectionBackgroundVisual {...hero} />
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

            <RegularSection
                id="why-choose-us-section"
                background={DSLayoutBackground.default}
            >
                <RegularContainer>
                    <WhyChooseUs {...whyChooseUs} />
                </RegularContainer>
            </RegularSection>

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
