import { DSLink } from "@repo/ui/design-systems/DSLink";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
} from "@repo/ui/design-systems/DSText";
import React from "react";
import footerContent from "../../../../../../apps/web/app/content/footer-section/footer-content.json";

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

export default function Footer({
    footerTitle,
    footerLogo,
    socialLinks,
    phoneNumber,
    emailAddress,
    copyrightText,
    footerLinks,
}: FooterContent) {
    const phoneHref = `tel:${phoneNumber.replace(/[^+\d]/g, "")}`;
    const emailHref = `mailto:${emailAddress}`;

    return (
        <footer>
            <div className="mx-auto">
                <div className="flex flex-col gap-8 sm:flex-col sm:items-left sm:justify-between">
                    <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-12">
                        <div
                            className="flex flex-col gap-4 justify-between col-span-3 order-last md:col-span-1 md:order-first"
                            id="footer-logo-section"
                        >
                            <div>
                                {/* Logo */}
                                <div className="flex justify-start items-start gap-2">
                                    <a
                                        href="#top-of-screen"
                                        className="nav-brand"
                                    >
                                        <img
                                            className="h-6"
                                            src={footerLogo}
                                            alt="Navigation"
                                        />
                                    </a>
                                    <DSText
                                        variant={DSTextVariant.headline2}
                                        as="span"
                                        className="nav-brand-name"
                                        color={DSTextColor.tertiary}
                                    >
                                        {footerTitle}
                                    </DSText>
                                </div>
                                {/* Social Links */}
                                <div className="flex gap-8 mt-2">
                                    {socialLinks.map((socialLink) => (
                                        <a
                                            target="_blank"
                                            key={socialLink.link}
                                            href={socialLink.link}
                                            aria-label={socialLink.alt}
                                        >
                                            <img
                                                src={socialLink.logo}
                                                alt={socialLink.alt}
                                                className="w-6 h-6"
                                            />
                                        </a>
                                    ))}
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <DSLink
                                    variant={DSTextVariant.bodySmall}
                                    color={DSTextColor.quaternary}
                                    href={phoneHref}
                                    className="mt-4"
                                    showBottomLine={false}
                                >
                                    {phoneNumber}
                                </DSLink>
                                <DSLink
                                    variant={DSTextVariant.bodySmall}
                                    color={DSTextColor.quaternary}
                                    href={emailHref}
                                    className="mt-4"
                                    showBottomLine={false}
                                >
                                    {emailAddress}
                                </DSLink>

                                <DSText
                                    variant={DSTextVariant.bodySmall}
                                    as="p"
                                    color={DSTextColor.quaternary}
                                    className="mt-4"
                                >
                                    © {new Date().getFullYear()} {copyrightText}
                                </DSText>
                            </div>
                        </div>

                        {footerLinks.map((footerSection) => (
                            <div
                                className="flex flex-col gap-4"
                                key={footerSection.title}
                            >
                                <DSText
                                    variant={DSTextVariant.headline3}
                                    as="div"
                                    className="nav-brand-name"
                                    color={DSTextColor.primary}
                                >
                                    {footerSection.title}
                                </DSText>
                                {footerSection.links.map((footerLink) => (
                                    <div
                                        key={`${footerSection.title}-${footerLink.title}`}
                                    >
                                        <DSLink
                                            variant={DSTextVariant.bodySmall}
                                            color={DSTextColor.tertiary}
                                            href={footerLink.link}
                                            showBottomLine={false}
                                        >
                                            {footerLink.title}
                                        </DSLink>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
