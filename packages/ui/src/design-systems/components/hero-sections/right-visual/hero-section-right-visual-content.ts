export interface HeroSectionRightVisualContent {
    title: string;
    summary: string;
    primaryCta: CTA;
    secondaryCta: CTA;
    image: { src: string; srcSet: string; alt: string };
    smallScreenImage: { src: string; srcSet: string; alt: string };
}

export interface CTA {
    label: string;
    href: string;
}
