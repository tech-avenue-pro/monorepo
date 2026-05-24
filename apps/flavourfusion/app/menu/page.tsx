import React from "react";
import { DSLayout, DSLayoutBackground } from "@repo/ui/design-systems/DSLayout";
import HeroSection from "@repo/ui/design-systems/layouts/HeroSection";
import HeroContainer from "@repo/ui/design-systems/layouts/HeroContainer";
import RegularSection from "@repo/ui/design-systems/layouts/RegularSection";
import RegularContainer from "@repo/ui/design-systems/layouts/RegularContainer";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
} from "@repo/ui/design-systems/DSText";
import { DSMotion, DSStagger } from "@repo/ui/design-systems/DSMotion";
import Footer from "@repo/ui/design-systems/components/footer/Footer";
import { TrackedWhatsAppButton } from "../WhatsAppTracking";
import MainNavBar from "../MainNavBar";
import MenuCategorySection from "./MenuCategorySection";
import { getFooterContent } from "../content/footer-section/getFooterContent";
import menuData from "../content/menu/menu-data.json";
import SmallSection from "@repo/ui/design-systems/layouts/SmallSection";
import ZeroSection from "@repo/ui/design-systems/layouts/ZeroSection";
import SecondaryNavBar from "../SecondaryNavBar";

export default function MenuPage() {
    const footer = getFooterContent();

    return (
        <main>
            <SecondaryNavBar />

            <ZeroSection
                id="hero-section"
                background={DSLayoutBackground.defaultVariation2}
                className="py-12"
            >
                <HeroContainer>
                    <DSMotion variant="fade-up" className="text-center py-8">
                        <DSText
                            as="p"
                            variant={DSTextVariant.caption}
                            color={DSTextColor.senary}
                            weight={DSTextWeight.semiBold}
                            className="mb-3 uppercase tracking-widest"
                        >
                            Fresh & Home made
                        </DSText>
                        <DSText
                            as="h1"
                            variant={DSTextVariant.largestTitle}
                            color={DSTextColor.primary}
                            weight={DSTextWeight.bold}
                            className="mb-4"
                        >
                            Our Menu
                        </DSText>
                    </DSMotion>
                </HeroContainer>
            </ZeroSection>
            <ZeroSection>
                <RegularContainer>
                    <div className="ds-bg-secondary-darker w-full  rounded-2xl px-6 py-8 flex flex-col gap-4">
                        <DSText
                            as="h2"
                            variant={DSTextVariant.largeTitle}
                            weight={DSTextWeight.bold}
                            color={DSTextColor.white}
                        >
                            Clasic Fusion
                        </DSText>
                        <DSText
                            as="p"
                            variant={DSTextVariant.body}
                            weight={DSTextWeight.regular}
                            color={DSTextColor.white}
                            className="p-1 max-w-xl hidden md:block"
                        >
                            Minimum order of 15 people. <br />
                            Perfect for office lunches, family gatherings, or
                            any occasion where you want to impress without the
                            hassle of cooking.
                        </DSText>
                        <ul className="flex flex-col gap-2">
                            {[
                                "15 Crispy Chicken Burgers",
                                "10 Sliders",
                                "5 Sandwiches",
                                "1 plate — Rice and Chicken",
                            ].map((item) => (
                                <li
                                    key={item}
                                    className="flex items-center gap-2"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-white shrink-0" />
                                    <DSText
                                        as="span"
                                        variant={DSTextVariant.body}
                                        color={DSTextColor.white}
                                    >
                                        {item}
                                    </DSText>
                                </li>
                            ))}
                        </ul>
                    </div>
                </RegularContainer>
            </ZeroSection>

            <SmallSection background={DSLayoutBackground.default}>
                <RegularContainer>
                    <MenuCategorySection categories={menuData.categories} />
                </RegularContainer>
            </SmallSection>

            <hr className="my-0 border-gray-300" />

            <SmallSection background={DSLayoutBackground.default}>
                <RegularContainer>
                    <Footer {...footer} />
                </RegularContainer>
            </SmallSection>

            <TrackedWhatsAppButton phoneNumber="+923288288897" />
        </main>
    );
}
