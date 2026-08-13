import HeroSection from "../../../layouts/HeroSection";
import HeroContainer from "../../../layouts/HeroContainer";
import RegularSection from "../../../layouts/RegularSection";
import RegularContainer from "../../../layouts/RegularContainer";
import { DSLayoutBackground } from "../../../backgrounds";

import HeroSectionRightVisual from "../../hero-sections/right-visual/HeroSectionRightVisual";
import IconFeatureGrid from "../icon-feature-grid/IconFeatureGrid";
import ChecklistWithImage from "../checklist-with-image/ChecklistWithImage";
import PullQuote from "../pull-quote/PullQuote";
import { CoachingServiceDetailContent } from "./service-detail-coaching-content";

export type { CoachingServiceDetailContent };

export default function ServiceDetailCoaching({
    service,
}: {
    service: CoachingServiceDetailContent;
}) {
    return (
        <main>
            <HeroSection background={DSLayoutBackground.accentLighter}>
                <HeroContainer>
                    <HeroSectionRightVisual {...service.hero} />
                </HeroContainer>
            </HeroSection>

            <RegularSection
                id="section-experience"
                background={DSLayoutBackground.secondaryDarker}
            >
                <RegularContainer>
                    <IconFeatureGrid {...service.experience} />
                </RegularContainer>
            </RegularSection>

            <RegularSection
                id="section-who-its-for"
                background={DSLayoutBackground.default}
            >
                <RegularContainer>
                    <ChecklistWithImage {...service.checklist} />
                </RegularContainer>
            </RegularSection>

            <RegularSection
                id="quote"
                background={DSLayoutBackground.accentLighter}
            >
                <RegularContainer>
                    <PullQuote {...service.quote} />
                </RegularContainer>
            </RegularSection>
        </main>
    );
}
