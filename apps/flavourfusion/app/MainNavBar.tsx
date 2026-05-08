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
                    href: "/",
                },
                {
                    label: "Menu",
                    href: "/menu",
                },
                {
                    label: "Our Story",
                    href: "/our-story",
                },
            ]}
            color={DSTextColor.primary}
            startingColor={DSTextColor.white}
            hoverColor={DSTextColor.senary}
            textVariant={DSTextVariant.caption}
            fontWeight={DSTextWeight.medium}
            mobileFontWeight={DSTextWeight.medium}
            mobileTextVariant={DSTextVariant.title2}
            logoSrc="/icons/logo-60.png"
            name="Flavour Fusion"
            background={DSLayoutBackground.default}
            startingBackground={DSLayoutBackground.blackVariation1}
            stickyOnScrollOnly={true}
        />
    );
}
