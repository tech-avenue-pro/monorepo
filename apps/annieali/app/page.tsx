import { DSLayoutBackground } from "@repo/ui/design-systems/DSLayout";
import HeroSection, {
    HeroSectionFullScreen,
} from "@repo/ui/design-systems/layouts/HeroSection";
import RegularSection from "@repo/ui/design-systems/layouts/RegularSection";
import RegularContainer from "@repo/ui/design-systems/layouts/RegularContainer";
import WhyChooseUs from "@repo/ui/design-systems/components/why-choose-us/WhyChooseUs";
import HowItWorks from "@repo/ui/design-systems/components/how-it-works/HowItWorks";
import ServiceSection from "@repo/ui/design-systems/components/services/ServiceSection/ServiceSection";

import Footer from "@repo/ui/design-systems/components/footer/Footer";
import Script from "next/script";
import {
    DSLinkButton,
    DSButtonVariant,
} from "@repo/ui/design-systems/DSButton";

import MainNavBar from "./MainNavBar";
import { getHeroContent } from "./content/hero-section/getHeroContent";
import { getAboutContent } from "./content/about/getAboutContent";
import { getApproachContent } from "./content/approach/getApproachContent";
import { getServicesContent } from "./content/services/getServicesContent";
import { getFooterContent } from "./content/footer-section/getFooterContent";
import { getFAQContent } from "./content/faq/getFAQContent";
import HeroSectionBackgroundVisual from "@repo/ui/design-systems/components/hero-sections/background-visual/HeroSectionBackgroundVisual";
import BackgroundImageContainer from "@repo/ui/design-systems/layouts/BackgroundImageContainer";
import FAQSection from "@repo/ui/design-systems/components/faq/FAQSection";
import SmallSection from "@repo/ui/design-systems/layouts/SmallSection";

export default function Home() {
    const hero = getHeroContent();
    const about = getAboutContent();
    const approach = getApproachContent();
    const services = getServicesContent();
    const footer = getFooterContent();
    const faq = getFAQContent();

    return (
        <main>
            <MainNavBar />
            {/* Hero Section */}
            <HeroSectionFullScreen
                id="hero-section"
                background={DSLayoutBackground.accentLighter}
                className="lg:h-[calc(100vh)]"
            >
                <BackgroundImageContainer
                    imageSrc="/images/hero-background.webp"
                    imageAlt="Flavour Fusion catering spread"
                    className="h-full"
                    hideImageOnMobile
                >
                    <HeroSectionBackgroundVisual {...hero} />
                </BackgroundImageContainer>
            </HeroSectionFullScreen>

            {/* Hero image for mobile/tablet only */}
            <img
                src="/images/hero-background.webp"
                alt="Annie Ali"
                className="block lg:hidden w-full object-cover"
            />

            <RegularSection
                id="about-section"
                background={DSLayoutBackground.accent}
            >
                <RegularContainer>
                    <WhyChooseUs {...about} />
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

            {/* FAQ */}
            <RegularSection
                id="faq"
                background={DSLayoutBackground.accentLighter}
            >
                <RegularContainer>
                    <FAQSection {...faq} />
                </RegularContainer>
            </RegularSection>

            {/* Book appointment */}
            <SmallSection
                background={DSLayoutBackground.accentDarker}
                id="contact"
            >
                <RegularContainer>
                    <div
                        style={{ width: "100%", height: "500px" }}
                        data-fillout-id="nGDxnrtPQxus"
                        data-fillout-embed-type="standard"
                        data-fillout-inherit-parameters
                        data-fillout-dynamic-resize
                    />
                    <Script
                        src="https://server.fillout.com/embed/v1/"
                        strategy="afterInteractive"
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
