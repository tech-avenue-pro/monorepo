import { HeroSectionRightVisualContent } from "../../hero-sections/right-visual/hero-section-right-visual-content";
import { IconFeatureGridContent } from "../icon-feature-grid/icon-feature-grid-content";
import { ChecklistWithImageContent } from "../checklist-with-image/checklist-with-image-content";
import { PullQuoteContent } from "../pull-quote/pull-quote-content";

export type CoachingServiceDetailContent = {
    slug: string;
    navTitle: string;
    seoTitle?: string;
    seoDescription?: string;
    hero: HeroSectionRightVisualContent;
    experience: IconFeatureGridContent;
    checklist: ChecklistWithImageContent;
    quote: PullQuoteContent;
};
