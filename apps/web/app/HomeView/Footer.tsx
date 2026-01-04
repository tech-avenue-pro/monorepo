import { DSLink } from "@repo/ui/design-systems/DSLink";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
} from "@repo/ui/design-systems/DSText";
import React from "react";

interface FooterProps {
    logoSrc?: string;
}

export interface FooterContent {
    logoSrc?: string;
    links: {
        title: string;
        url: string;
    }[];
    copyright: string;
    socialLinks: {
        name: string;
        url: string;
    }[];
}

export default function Footer({
    logoSrc = "/icons/tech-avenue-pro-navbar.png",
}: FooterProps) {
    return (
        <footer>
            <div className="mx-auto">
                <div className="flex flex-col gap-8 sm:flex-col sm:items-left sm:justify-between">
                    <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-12">
                        <div className="flex flex-col gap-4 justify-between">
                            <div>
                                {/* Logo */}
                                <div className="flex justify-start items-start gap-2">
                                    <a
                                        href="#top-of-screen"
                                        className="nav-brand"
                                    >
                                        <img
                                            className="h-6"
                                            src={logoSrc}
                                            alt="Navigation"
                                        />
                                    </a>
                                    <DSText
                                        variant={DSTextVariant.headline2}
                                        as="span"
                                        className="nav-brand-name"
                                        color={DSTextColor.tertiary}
                                    >
                                        Tech Avenue Pro
                                    </DSText>
                                </div>
                                {/* Social Links */}
                                <div className="flex gap-8 mt-2">
                                    <img
                                        src="/icons/logo-facebook.svg"
                                        alt="Facebook"
                                        className="w-6 h-6"
                                    />
                                    <img
                                        src="/icons/logo-instagram.svg"
                                        alt="Instagram"
                                        className="w-6 h-6"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col gap-1">
                                <DSLink
                                    variant={DSTextVariant.bodySmall}
                                    color={DSTextColor.quaternary}
                                    href="tel:+14374483374"
                                    className="mt-4"
                                    showBottomLine={false}
                                >
                                    437-448-3374
                                </DSLink>
                                <DSLink
                                    variant={DSTextVariant.bodySmall}
                                    color={DSTextColor.quaternary}
                                    href="mailto:contact@techavenue.pro"
                                    className="mt-4"
                                    showBottomLine={false}
                                >
                                    contact@techavenue.pro
                                </DSLink>

                                <DSText
                                    variant={DSTextVariant.bodySmall}
                                    as="p"
                                    color={DSTextColor.quaternary}
                                    className="mt-4"
                                >
                                    © {new Date().getFullYear()} Tech Avenue
                                    Pro. All rights reserved.
                                </DSText>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <DSText
                                variant={DSTextVariant.headline3}
                                as="div"
                                className="nav-brand-name"
                                color={DSTextColor.primary}
                            >
                                Services
                            </DSText>
                            <div>
                                <DSLink
                                    variant={DSTextVariant.bodySmall}
                                    color={DSTextColor.tertiary}
                                    href="#digital-growth-management"
                                    showBottomLine={false}
                                >
                                    Digital Growth
                                </DSLink>
                            </div>
                            <div>
                                <DSLink
                                    variant={DSTextVariant.bodySmall}
                                    color={DSTextColor.tertiary}
                                    href="#social-media-management"
                                    showBottomLine={false}
                                >
                                    Social Media
                                </DSLink>
                            </div>
                            <div>
                                <DSLink
                                    variant={DSTextVariant.bodySmall}
                                    color={DSTextColor.tertiary}
                                    href="#premium-business-website"
                                    showBottomLine={false}
                                >
                                    Business Website
                                </DSLink>
                            </div>
                            <div>
                                <DSLink
                                    variant={DSTextVariant.bodySmall}
                                    color={DSTextColor.tertiary}
                                    href="#premium-business-website"
                                    showBottomLine={false}
                                >
                                    Google Visibility
                                </DSLink>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <DSText
                                variant={DSTextVariant.headline3}
                                as="div"
                                className="nav-brand-name"
                                color={DSTextColor.primary}
                            >
                                Menu
                            </DSText>
                            <div>
                                <DSLink
                                    variant={DSTextVariant.bodySmall}
                                    color={DSTextColor.tertiary}
                                    href="#digital-growth-management"
                                    showBottomLine={false}
                                >
                                    Home
                                </DSLink>
                            </div>
                            <div>
                                <DSLink
                                    variant={DSTextVariant.bodySmall}
                                    color={DSTextColor.tertiary}
                                    href="#social-media-management"
                                    showBottomLine={false}
                                >
                                    How It Works
                                </DSLink>
                            </div>
                            <div>
                                <DSLink
                                    variant={DSTextVariant.bodySmall}
                                    color={DSTextColor.tertiary}
                                    href="#premium-business-website"
                                    showBottomLine={false}
                                >
                                    Why Choose us
                                </DSLink>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <DSText
                                variant={DSTextVariant.headline3}
                                as="div"
                                className="nav-brand-name"
                                color={DSTextColor.primary}
                            >
                                Operations
                            </DSText>
                            <div>
                                <DSLink
                                    variant={DSTextVariant.bodySmall}
                                    color={DSTextColor.tertiary}
                                    href="#digital-growth-management"
                                    showBottomLine={false}
                                >
                                    Live Queue
                                </DSLink>
                            </div>
                            <div>
                                <DSLink
                                    variant={DSTextVariant.bodySmall}
                                    color={DSTextColor.tertiary}
                                    href="#social-media-management"
                                    showBottomLine={false}
                                >
                                    Online Appointments
                                </DSLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
