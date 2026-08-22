import { DSLayoutBackground } from "@repo/ui/design-systems/DSLayout";
import HeroSection from "@repo/ui/design-systems/layouts/HeroSection";
import HeroContainer from "@repo/ui/design-systems/layouts/HeroContainer";
import SmallSection from "@repo/ui/design-systems/layouts/SmallSection";
import RegularSection from "@repo/ui/design-systems/layouts/RegularSection";
import RegularContainer from "@repo/ui/design-systems/layouts/RegularContainer";
import Hero from "./Hero";
import HowItWorks from "@repo/ui/design-systems/components/how-it-works/HowItWorks";
import StatsView from "@repo/ui/design-systems/components/stats/StatsView";
import Footer from "@repo/ui/design-systems/components/footer/Footer";
import { TrackedWhatsAppButton } from "./WhatsAppButton";

import MainNavBar from "./MainNavBar";
import FeaturedDishes from "./FeaturedDishes";
import Testimonials from "./Testimonials";
import { getHeroContent } from "./content/hero-section/getHeroContent";
import { getHowItWorksContent } from "./content/how-it-works/getHowItWorksContent";
import { getStatsContent } from "./content/stats/getStatsContent";
import { getFooterContent } from "./content/footer-section/getFooterContent";

export default function Home() {
    const hero = getHeroContent();
    const howItWorks = getHowItWorksContent();
    const stats = getStatsContent();
    const footer = getFooterContent();

    return (
        <main>
            <MainNavBar />

            <HeroSection
                id="hero-section"
                background={DSLayoutBackground.default}
            >
                <HeroContainer>
                    <Hero {...hero} />
                </HeroContainer>
            </HeroSection>

            <RegularSection
                id="how-it-works-section"
                background={DSLayoutBackground.default}
            >
                <RegularContainer>
                    <HowItWorks {...howItWorks} />
                </RegularContainer>
            </RegularSection>

            <RegularSection
                id="featured-dishes-section"
                background={DSLayoutBackground.defaultVariation1}
            >
                <RegularContainer>
                    <FeaturedDishes />
                </RegularContainer>
            </RegularSection>

            <SmallSection
                id="stats-section"
                background={DSLayoutBackground.default}
            >
                <RegularContainer>
                    <StatsView {...stats} />
                </RegularContainer>
            </SmallSection>

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

            <TrackedWhatsAppButton phoneNumber="+14160000000" />
        </main>
    );
}
