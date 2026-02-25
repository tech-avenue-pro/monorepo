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

export default function MainNavBar() {
    return (
        <StandardNavBar
            links={[
                {
                    label: "Home",
                    href: "#hero-section",
                },
                {
                    label: "Services",
                    children: [
                        {
                            label: "Digital Growth Management",
                            href: "/services/digital-growth-management",
                        },
                        {
                            label: "Premium Business Website",
                            href: "/services/premium-business-website",
                        },
                        {
                            label: "Online Booking Solutions",
                            href: "/services/online-booking-solutions",
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
                    label: "How It Works",
                    href: "#how-it-works",
                },
                {
                    label: "Why Choose Us",
                    href: "#why-choose-us",
                },
                {
                    label: "Live Queue",
                    href: "#live-queue",
                },
                {
                    label: "Online Appointments",
                    href: "#online-appointments",
                },
            ]}
            color={DSTextColor.primary}
            startingColor={DSTextColor.white}
            hoverColor={DSTextColor.senary}
            textVariant={DSTextVariant.caption}
            fontWeight={DSTextWeight.medium}
            mobileFontWeight={DSTextWeight.regular}
            mobileTextVariant={DSTextVariant.largeTitle}
            logoSrc="icons/tech-avenue-pro-navbar.png"
            name=""
            background={DSLayoutBackground.default}
            startingBackground={DSLayoutBackground.black}
            stickyOnScrollOnly={true}
        />
    );
}
