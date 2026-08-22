import { DSLayoutBackground } from "@repo/ui/design-systems/DSLayout";
import HeroSection from "@repo/ui/design-systems/layouts/HeroSection";
import HeroContainer from "@repo/ui/design-systems/layouts/HeroContainer";
import SmallSection from "@repo/ui/design-systems/layouts/SmallSection";
import RegularSection from "@repo/ui/design-systems/layouts/RegularSection";
import RegularContainer from "@repo/ui/design-systems/layouts/RegularContainer";
import Hero from "./Hero";
import StatsView from "@repo/ui/design-systems/components/stats/StatsView";
import Footer from "@repo/ui/design-systems/components/footer/Footer";
import { TrackedWhatsAppButton } from "./WhatsAppButton";

import MainNavBar from "./MainNavBar";
import Excellence from "./Excellence";
import CateringPackages from "./CateringPackages";
import FeaturedDishes from "./FeaturedDishes";
import Testimonials from "./Testimonials";
import { getHeroContent } from "./content/hero-section/getHeroContent";
import { getStatsContent } from "./content/stats/getStatsContent";
import { getFooterContent } from "./content/footer-section/getFooterContent";

export default function Home() {
    const hero = getHeroContent();
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
                id="excellence-section"
                background={DSLayoutBackground.darkestBackground}
            >
                <RegularContainer>
                    <Excellence />
                </RegularContainer>
            </RegularSection>

            <RegularSection
                id="catering-packages-section"
                background={DSLayoutBackground.default}
            >
                <RegularContainer>
                    <CateringPackages />
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
