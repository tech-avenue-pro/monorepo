import {
    DSButtonVariant,
    DSLinkButton,
} from "@repo/ui/design-systems/DSButton";
import { DSLayoutBackground } from "@repo/ui/design-systems/DSLayout";
import {
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
} from "@repo/ui/design-systems/DSLink";
import StandardNavBar from "@repo/ui/design-systems/navigation-bar/StandardNavBar";
import React from "react";

export default function SecondaryNavBar() {
    return (
        <StandardNavBar
            links={[
                {
                    label: "Home",
                    href: "/",
                },
                {
                    label: "Services",
                    children: [
                        {
                            label: "Digital Marketing & Ads",
                            href: "/services/digital-marketing-ads",
                        },
                        {
                            label: "Premium Business Website",
                            href: "/services/premium-business-website",
                        },
                        {
                            label: "Branding & Visual Identity",
                            href: "/services/branding-visual-identity",
                        },
                        {
                            label: "Online Booking Solutions",
                            href: "/services/online-appointments",
                        },
                        {
                            label: "Social Media Presence Management",
                            href: "/services/social-media-presence-management",
                        },
                        {
                            label: "Google Visibility and Local Search",
                            href: "/services/google-visibility-and-local-search",
                        },
                    ],
                },
                {
                    label: "How We Help",
                    href: "#how-we-help",
                },
                {
                    label: "Why Choose Us",
                    href: "#why-choose-us",
                },
                {
                    label: "Live Queue",
                    href: "/services/live-queue",
                },
                {
                    label: "Online Appointments",
                    href: "/services/online-appointments",
                },
            ]}
            color={DSTextColor.primary}
            startingColor={DSTextColor.primary}
            hoverColor={DSTextColor.senary}
            textVariant={DSTextVariant.caption}
            fontWeight={DSTextWeight.medium}
            mobileFontWeight={DSTextWeight.regular}
            mobileTextVariant={DSTextVariant.largeTitle}
            logoSrc="../icons/tech-avenue-pro-navbar.png"
            name="Tech Avenue Pro"
            background={DSLayoutBackground.default}
            startingBackground={DSLayoutBackground.lightestBackground}
            stickyOnScrollOnly={true}
        />
    );
}
