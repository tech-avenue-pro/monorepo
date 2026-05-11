import { DSLayoutBackground } from "@repo/ui/design-systems/DSLayout";
import {
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
} from "@repo/ui/design-systems/DSLink";
import StandardNavBar from "@repo/ui/design-systems/navigation-bar/StandardNavBar";

export default function MainNavBar() {
    return (
        <StandardNavBar
            links={[
                { label: "Home", href: "/" },
                { label: "Courses", href: "#courses" },
                { label: "Our Services", href: "#services" },
                { label: "How It Works", href: "#how-it-works" },
                { label: "Teachers", href: "#teachers" },
                { label: "Location", href: "#location" },
            ]}
            color={DSTextColor.primary}
            startingColor={DSTextColor.white}
            hoverColor={DSTextColor.senary}
            textVariant={DSTextVariant.caption}
            fontWeight={DSTextWeight.medium}
            mobileFontWeight={DSTextWeight.medium}
            mobileTextVariant={DSTextVariant.title2}
            logoSrc="/icons/logo-60.png"
            name="Old Ravians Academy"
            background={DSLayoutBackground.default}
            startingBackground={DSLayoutBackground.primaryDarker}
            stickyOnScrollOnly={true}
        />
    );
}
