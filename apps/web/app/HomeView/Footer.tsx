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
export default function Footer({
    logoSrc = "/icons/tech-avenue-pro-navbar.png",
}: FooterProps) {
    return (
        <footer>
            <div className="mx-auto">
                <div className="flex flex-col gap-8 sm:flex-col sm:items-left sm:justify-between">
                    <div className="flex justify-start items-center gap-2">
                        <a href="#top-of-screen" className="nav-brand">
                            <img
                                className="h-6"
                                src={logoSrc}
                                alt="Navigation"
                            />
                        </a>
                        <DSText
                            variant={DSTextVariant.headline1}
                            as="span"
                            className="nav-brand-name"
                            color={DSTextColor.secondary}
                        >
                            Tech Avenue Pro
                        </DSText>
                    </div>

                    <div className="grid grid-cols-3  gap-4 ">
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
                                >
                                    Digital Growth Management
                                </DSLink>
                            </div>
                            <div>
                                <DSLink
                                    variant={DSTextVariant.bodySmall}
                                    color={DSTextColor.tertiary}
                                    href="#social-media-management"
                                >
                                    Social Media Management
                                </DSLink>
                            </div>
                            <div>
                                <DSLink
                                    variant={DSTextVariant.bodySmall}
                                    color={DSTextColor.tertiary}
                                    href="#premium-business-website"
                                >
                                    Premium Business Website
                                </DSLink>
                            </div>
                            <div>
                                <DSLink
                                    variant={DSTextVariant.bodySmall}
                                    color={DSTextColor.tertiary}
                                    href="#premium-business-website"
                                >
                                    Google Visibility & Local Search
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
                                >
                                    Home
                                </DSLink>
                            </div>
                            <div>
                                <DSLink
                                    variant={DSTextVariant.bodySmall}
                                    color={DSTextColor.tertiary}
                                    href="#social-media-management"
                                >
                                    How It Works
                                </DSLink>
                            </div>
                            <div>
                                <DSLink
                                    variant={DSTextVariant.bodySmall}
                                    color={DSTextColor.tertiary}
                                    href="#premium-business-website"
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
                                >
                                    Live Queue
                                </DSLink>
                            </div>
                            <div>
                                <DSLink
                                    variant={DSTextVariant.bodySmall}
                                    color={DSTextColor.tertiary}
                                    href="#social-media-management"
                                >
                                    Online Appointments
                                </DSLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex flex-col gap-4 border-t border-neutral-800 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} Tech Avenue Pro. All rights
                        reserved.
                    </p>
                    <div className="flex gap-3">
                        <a href="#" className="hover:text-neutral-300">
                            Twitter
                        </a>
                        <a href="#" className="hover:text-neutral-300">
                            LinkedIn
                        </a>
                        <a href="#" className="hover:text-neutral-300">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
