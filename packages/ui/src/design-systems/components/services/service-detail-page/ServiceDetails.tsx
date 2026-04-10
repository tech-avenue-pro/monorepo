import HeroSection from "../../../layouts/HeroSection";
import HeroContainer from "../../../layouts/HeroContainer";
import { DSLayoutBackground } from "../../../backgrounds";

import RegularSection from "../../../layouts/RegularSection";
import RegularContainer from "../../../layouts/RegularContainer";

import WhyChooseUs from "@repo/ui/design-systems/components/why-choose-us/WhyChooseUs";
import SmallSection from "../../../layouts/SmallSection";
import { ServiceDetailPageContent } from "./service-detail-page-content";

import HeroSectionRightVisual from "../../hero-sections/right-visual/HeroSectionRightVisual";
import WhyItWorks from "../../why-it-works/WhyItWorks";
import StatsView from "../../stats/StatsView";
import HowWeHelpView from "../../how-we-help/HowWeHelpView";

export function ServiceDetails({
    service,
}: {
    service: ServiceDetailPageContent;
}) {
    return (
        <main>
            {/* HERO */}
            <HeroSection
                background={DSLayoutBackground.lightestBackground}
                className="lg:h-[calc(100vh-4rem)]"
            >
                <HeroContainer className="h-full">
                    <HeroSectionRightVisual {...service.hero} />
                </HeroContainer>
            </HeroSection>
            <img
                src={service.hero.image.src}
                srcSet={service.hero.image.srcSet}
                alt={service.hero.image.alt}
                width={1200}
                height={1000}
                className="lg:hidden h-full w-full object-cover"
                loading="eager"
                decoding="async"
            />

            {/* How We Help */}
            <RegularSection
                background={DSLayoutBackground.defaultVariation1}
                id="what-we-do"
            >
                <RegularContainer>
                    <HowWeHelpView {...service.howWeHelp} />
                </RegularContainer>
            </RegularSection>
            {/* Stats and Data */}
            <RegularSection>
                <RegularContainer>
                    <StatsView {...service.stats} />
                </RegularContainer>
            </RegularSection>
            {/* Why Digital Marketing Works */}
            <SmallSection>
                <RegularContainer>
                    <WhyItWorks {...service.whyItWorks} />
                </RegularContainer>
            </SmallSection>

            {/* WHY CHOOSE US */}

            <RegularSection
                id="why-choose-us"
                background={DSLayoutBackground.default}
            >
                <RegularContainer>
                    <WhyChooseUs {...service.whyChooseUs} />
                </RegularContainer>
            </RegularSection>
        </main>
    );
}
