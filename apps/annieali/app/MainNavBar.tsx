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
                    label: "About",
                    href: "#about-section",
                },
                {
                    label: "Approach",
                    href: "#approach-section",
                },
                {
                    label: "Services",
                    href: "#services-section",
                },
                {
                    label: "Book a Call",
                    href: "#contact",
                },
            ]}
            color={DSTextColor.primary}
            startingColor={DSTextColor.primary}
            hoverColor={DSTextColor.senary}
            textVariant={DSTextVariant.caption}
            fontWeight={DSTextWeight.medium}
            mobileFontWeight={DSTextWeight.medium}
            mobileTextVariant={DSTextVariant.title2}
            logoSrc="icons/icon-40.png"
            name=""
            background={DSLayoutBackground.accentDarker}
            startingBackground={DSLayoutBackground.transparent}
            stickyOnScrollOnly={true}
            isHeroFullScreen={true}
        />
    );
}
