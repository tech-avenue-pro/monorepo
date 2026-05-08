import React from "react";
import { DSLayoutBackground } from "@repo/ui/design-systems/DSLayout";
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
import FloatingWhatsAppButton from "@repo/ui/design-systems/components/floating-whatsapp/FloatingWhatsAppButton";
import MainNavBar from "../MainNavBar";
import MenuCategorySection from "./MenuCategorySection";
import { getFooterContent } from "../content/footer-section/getFooterContent";
import menuData from "../content/menu/menu-data.json";
import SmallSection from "@repo/ui/design-systems/layouts/SmallSection";
import ZeroSection from "@repo/ui/design-systems/layouts/ZeroSection";

export default function MenuPage() {
    const footer = getFooterContent();

    return (
        <main>
            <MainNavBar />

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
                        <DSText
                            as="p"
                            variant={DSTextVariant.body}
                            color={DSTextColor.secondary}
                            className="max-w-2xl mx-auto text-left"
                        >
                            Every item on our menu is made from scratch with
                            quality ingredients. Order individually for a la
                            carte catering, or choose a curated package.
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

            <FloatingWhatsAppButton phoneNumber="+923288288897" />
        </main>
    );
}
