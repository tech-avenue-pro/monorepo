import { DSLayoutBackground } from "@repo/ui/design-systems/DSLayout";
import HeroSection, {
    HeroSectionFullScreen,
} from "@repo/ui/design-systems/layouts/HeroSection";
import BackgroundImageContainer from "@repo/ui/design-systems/layouts/BackgroundImageContainer";
import SmallSection from "@repo/ui/design-systems/layouts/SmallSection";
import RegularSection from "@repo/ui/design-systems/layouts/RegularSection";
import RegularContainer from "@repo/ui/design-systems/layouts/RegularContainer";
import HeroSectionBackgroundVisual from "@repo/ui/design-systems/components/hero-sections/background-visual/HeroSectionBackgroundVisual";
import HowItWorks from "@repo/ui/design-systems/components/how-it-works/HowItWorks";
import VerticalSplitSection from "@repo/ui/design-systems/components/vertical-split-section/VerticalSplitSection";
import Footer from "@repo/ui/design-systems/components/footer/Footer";
import { TrackedWhatsAppButton } from "./WhatsAppTracking";

import MainNavBar from "./MainNavBar";
import CateringPackages from "./CateringPackages";
import Testimonials from "./Testimonials";
import { getHeroContent } from "./content/hero-section/getHeroContent";
import { getHowItWorksContent } from "./content/how-it-works/getHowItWorksContent";
import { getVerticalSplitWhyChooseUsContent } from "./content/vertical-split-section/getVerticalSplitWhyChooseUsContent";
import { getVerticalSplitWhatWeDoContent } from "./content/vertical-split-section/getVerticalSplitWhatWeDoContent";
import { getFooterContent } from "./content/footer-section/getFooterContent";
import ZeroSection from "@repo/ui/design-systems/layouts/ZeroSection";

export default function Home() {
    const hero = getHeroContent();
    const howItWorks = getHowItWorksContent();
    const whyChooseUs = getVerticalSplitWhyChooseUsContent();
    const whatWeDo = getVerticalSplitWhatWeDoContent();
    const footer = getFooterContent();

    return (
        <main>
            <MainNavBar />

            <HeroSectionFullScreen
                id="hero-section"
                className="lg:h-[calc(100vh)]"
            >
                <BackgroundImageContainer
                    imageSrc="/images/hero-background.webp"
                    imageAlt="Flavour Fusion catering spread"
                    className="h-full"
                >
                    <HeroSectionBackgroundVisual {...hero} />
                </BackgroundImageContainer>
            </HeroSectionFullScreen>

            <RegularSection
                id="how-it-works-section"
                background={DSLayoutBackground.default}
            >
                <RegularContainer>
                    <HowItWorks {...howItWorks} />
                </RegularContainer>
            </RegularSection>
            <SmallSection
                id="what-we-do-section"
                background={DSLayoutBackground.primaryLighter}
            >
                <RegularContainer>
                    <VerticalSplitSection {...whatWeDo} />
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

            <TrackedWhatsAppButton phoneNumber="+923288288897" />
        </main>
    );
}
