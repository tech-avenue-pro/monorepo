import Image, { type ImageProps } from "next/image";
import type { CSSProperties } from "react";
import { Button } from "@repo/ui/button";
import styles from "./page.module.css";
import {
    DSButton,
    DSButtonVariant,
    DSLinkButton,
} from "@repo/ui/design-systems/DSButton";
import StandardNavBar from "@repo/ui/design-systems/navigation-bar/StandardNavBar";
import {
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
} from "@repo/ui/design-systems/DSLink";
import { DSLayoutBackground } from "@repo/ui/design-systems/DSLayout";
import HeroSection from "@repo/ui/design-systems/layouts/HeroSection";
import HeroContainer from "@repo/ui/design-systems/layouts/HeroContainer";
import { DSText, FontStyle } from "@repo/ui/design-systems/DSText";
import ServiceSection from "@repo/ui/design-systems/components/services/ServiceSection";
import RegularSection from "@repo/ui/design-systems/layouts/RegularSection";
import RegularContainer from "@repo/ui/design-systems/layouts/RegularContainer";
import HowItWorks from "./HomeView/HowItWorks";
import WhyChooseUs from "./HomeView/WhyChooseUs";
import { FinalCTA } from "./HomeView/FinalCTA";
import { FinalCTAWithForm } from "./HomeView/FinalCTAWithForm";
import MainNavBar from "./MainNavBar";
import Footer from "./HomeView/Footer";
import SmallSection from "@repo/ui/design-systems/layouts/SmallSection";
import { getServices } from "./content/services/servicesContent";
import HeroSectionTech from "@repo/ui/design-systems/components/hero-sections/HeroSectionTech";
import { getHeroSectionContent } from "./content/hero-section/getHeroContent";

type Props = Omit<ImageProps, "src"> & {
    srcLight: string;
    srcDark: string;
};

const ThemeImage = (props: Props) => {
    const { srcLight, srcDark, ...rest } = props;

    return (
        <>
            <Image {...rest} src={srcLight} className="imgLight" />
            <Image {...rest} src={srcDark} className="imgDark" />
        </>
    );
};

export default function Home() {
    const services = getServices();
    const heroContent = getHeroSectionContent();
    return (
        <main className="">
            <MainNavBar />

            <HeroSection
                background={DSLayoutBackground.black}
                className="hero-glow"
            >
                <HeroContainer>
                    <HeroSectionTech {...heroContent} />
                </HeroContainer>
            </HeroSection>

            <RegularSection background={DSLayoutBackground.defaultVariation1}>
                <RegularContainer>
                    <ServiceSection {...services} />
                </RegularContainer>
            </RegularSection>

            <RegularSection background={DSLayoutBackground.lightestBackground}>
                <RegularContainer>
                    <HowItWorks />
                </RegularContainer>
            </RegularSection>
            <RegularSection background={DSLayoutBackground.default}>
                <RegularContainer>
                    <WhyChooseUs />
                </RegularContainer>
            </RegularSection>
            <SmallSection background={DSLayoutBackground.default}>
                <RegularContainer>
                    <FinalCTAWithForm />
                </RegularContainer>
            </SmallSection>
            <RegularSection background={DSLayoutBackground.default}>
                <RegularContainer>
                    <Footer />
                </RegularContainer>
            </RegularSection>
        </main>
    );
}
