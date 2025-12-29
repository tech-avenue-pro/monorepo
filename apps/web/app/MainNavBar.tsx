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
                    href: "#home",
                },
                {
                    label: "Services",
                    children: [
                        {
                            label: "Digital Growth Management",
                            href: "#digital-growth-management",
                        },
                        {
                            label: "Premium Business Websites",
                            href: "#premium-business-websites",
                        },
                        {
                            label: "Online Booking Solutions",
                            href: "#online-booking-solutions",
                        },
                        {
                            label: "Social Media Presence Management",
                            href: "#link-buttons",
                        },
                        {
                            label: "Google Visibility and Local Search",
                            href: "#google-visibility-and-local-search",
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
            color={DSTextColor.white}
            hoverColor={DSTextColor.senary}
            textVariant={DSTextVariant.bodySmall}
            fontWeight={DSTextWeight.regular}
            mobileFontWeight={DSTextWeight.regular}
            mobileTextVariant={DSTextVariant.largerTitle}
            logoSrc="icons/tech-avenue-pro-navbar.png"
            name="Tech Avenue Pro"
            background={DSLayoutBackground.black}
            stickyOnScrollOnly={true}
        />
    );
}
