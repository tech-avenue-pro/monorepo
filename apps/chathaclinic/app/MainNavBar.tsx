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
                    label: "Specializations",
                    href: "#specializations-section",
                },
                {
                    label: "Locations",
                    href: "#locations-section",
                },
                {
                    label: "Experience & Education",
                    href: "#experience-section",
                },
            ]}
            color={DSTextColor.primary}
            startingColor={DSTextColor.tintTheme}
            hoverColor={DSTextColor.tintTheme}
            textVariant={DSTextVariant.caption}
            fontWeight={DSTextWeight.medium}
            mobileFontWeight={DSTextWeight.medium}
            mobileTextVariant={DSTextVariant.title2}
            logoSrc="icons/icon-40.png"
            name="Chatha Children Clinic"
            background={DSLayoutBackground.default}
            startingBackground={DSLayoutBackground.primaryLighter}
            stickyOnScrollOnly={true}
        />
    );
}
