export type SocialPlatform = "facebook" | "instagram" | "youtube";

export interface FooterContent {
    footerTitle: string;
    footerLogo: string;
    socialLinks: {
        platform: SocialPlatform;
        link: string;
        alt: string;
    }[];
    phoneNumber: string;
    emailAddress: string;
    copyrightText: string;
    footerLinks: {
        title: string;
        links: {
            title: string;
            link: string;
        }[];
    }[];
}
