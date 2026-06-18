export type HeroTextAlign = "left" | "center" | "right";
export type HeroTheme = "dark" | "light";

export interface HeroSectionBackgroundVisualContent {
    smallTitle?: string;
    title: string;
    description: string;
    descriptionWidthClass?: string;
    lineWidthClass?: string;
    primaryCtaText: string;
    primaryCtaLink: string;
    secondaryCtaText: string;
    secondaryCtaLink: string;
    textAlign?: HeroTextAlign;
    theme?: HeroTheme;
}
