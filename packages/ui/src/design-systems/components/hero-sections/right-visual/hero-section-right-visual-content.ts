import { DSButtonVariant } from "../../../DSButton";

export interface HeroSectionRightVisualContent {
    title: string;
    summary: string;
    primaryCta: CTA;
    secondaryCta: CTA;
    secondaryCtaVariant?: DSButtonVariant;
    image: { src: string; srcSet: string; alt: string };
    smallScreenImage: { src: string; srcSet: string; alt: string };
}

export interface CTA {
    label: string;
    href: string;
}
