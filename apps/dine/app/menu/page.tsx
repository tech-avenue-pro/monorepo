import React from "react";
import { DSLayoutBackground } from "@repo/ui/design-systems/DSLayout";
import HeroContainer from "@repo/ui/design-systems/layouts/HeroContainer";
import RegularContainer from "@repo/ui/design-systems/layouts/RegularContainer";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
} from "@repo/ui/design-systems/DSText";
import { DSMotion } from "@repo/ui/design-systems/DSMotion";
import Footer from "@repo/ui/design-systems/components/footer/Footer";
import { TrackedWhatsAppButton } from "../WhatsAppButton";
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
                background={DSLayoutBackground.default}
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
                            Fresh from the Tandoor
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
                        <DSText
                            as="p"
                            variant={DSTextVariant.body}
                            color={DSTextColor.secondary}
                            className="max-w-2xl mx-auto text-left"
                        >
                            Every dish is cooked to order with quality
                            ingredients. Browse by category and find your next
                            favourite.
                        </DSText>
                    </DSMotion>
                </HeroContainer>
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

            <TrackedWhatsAppButton phoneNumber="+14160000000" />
        </main>
    );
}
