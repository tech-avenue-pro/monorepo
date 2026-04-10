import { HeroSectionRightVisualContent } from "../../hero-sections/right-visual/hero-section-right-visual-content";
import { WhyChooseUsContent } from "../../why-choose-us/WhyChooseUs";
import { WhyItWorksContent } from "../../why-it-works/why-it-works-content";
import { StatsContent } from "../../stats/stats-content";
import { ServiceCardTopNumberContent } from "../service-card-top-number/service-card-top-number-content";
import { CTA } from "../../../common-content-mappers/cta-content";

export type ServiceDetailPageContent = {
    slug: string;
    navTitle: string;
    seoTitle?: string;
    seoDescription?: string;
    name: string;
    hero: HeroSectionRightVisualContent;
    problem: { title: string; items: string[] };
    deliverables: { title: string; items: string[] };
    howWeHelp: {
        title: string;
        steps: ServiceCardTopNumberContent[];
    };
    whoItsFor: { title: string; tags: string[] };
    whyChooseUs: WhyChooseUsContent;
    whyItWorks: WhyItWorksContent;
    stats: StatsContent;
    finalCta: {
        title: string;
        summary: string;
        primaryCta: CTA;
        secondaryCta: CTA;
    };
};
