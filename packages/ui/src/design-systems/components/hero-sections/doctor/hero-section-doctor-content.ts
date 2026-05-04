export interface HeroSectionDoctorContent {
    badge?: string;
    name: string;
    specialty: string;
    description: string;
    primaryCta: { label: string; href: string };
    secondaryCta?: { label: string; href: string };
    image: { src: string; alt: string };
}
