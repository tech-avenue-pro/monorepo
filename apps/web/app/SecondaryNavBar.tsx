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
                    label: "What we do",
                    href: "#what-we-do",
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
            startingColor={DSTextColor.gray3333}
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
