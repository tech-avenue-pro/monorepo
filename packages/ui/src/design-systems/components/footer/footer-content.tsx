export interface FooterContent {
    footerTitle: string;
    footerLogo: string;
    socialLinks: {
        logo: string;
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
