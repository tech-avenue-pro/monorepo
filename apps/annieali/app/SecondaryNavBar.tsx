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
                    label: "Your Experience",
                    href: "#section-experience",
                },
                {
                    label: "What It's For",
                    href: "#section-approach",
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
            logoSrc="/icons/icon-40.png"
            name=""
            background={DSLayoutBackground.accentDarker}
            startingBackground={DSLayoutBackground.transparent}
            stickyOnScrollOnly={false}
            isHeroFullScreen={false}
        />
    );
}
