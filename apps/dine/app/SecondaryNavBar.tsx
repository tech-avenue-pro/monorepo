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
                    label: "Menu",
                    href: "/menu",
                },
            ]}
            color={DSTextColor.primary}
            startingColor={DSTextColor.primary}
            hoverColor={DSTextColor.senary}
            textVariant={DSTextVariant.caption}
            fontWeight={DSTextWeight.medium}
            mobileFontWeight={DSTextWeight.medium}
            mobileTextVariant={DSTextVariant.title2}
            logoSrc="/icons/logo.svg"
            name="Dine"
            background={DSLayoutBackground.default}
            startingBackground={DSLayoutBackground.default}
            stickyOnScrollOnly={false}
        />
    );
}
