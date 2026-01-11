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
import HowItWorks from "@repo/ui/design-systems/components/how-it-works/HowItWorks";
import WhyChooseUs from "@repo/ui/design-systems/components/why-choose-us/WhyChooseUs";

import MainNavBar from "./MainNavBar";
import Footer from "@repo/ui/design-systems/components/footer/Footer";
import SmallSection from "@repo/ui/design-systems/layouts/SmallSection";
import { getServices } from "./content/services/servicesContent";
import HeroSectionTech from "@repo/ui/design-systems/components/hero-sections/HeroSectionTech";
import { getHeroSectionContent } from "./content/hero-section/getHeroContent";
import { get } from "http";
import { getWhyChooseUsContent } from "./content/why-choose-us/WhyChooseUs";
import { getHowItWorksContent } from "./content/how-it-works/howItWorks";
import Form from "./HomeView/Form";
import FinalCTAWithForm from "@repo/ui/design-systems/components/cta/FinalCTAWithForm";
import { getCTASectionContent } from "./content/cta-section/getCTASectionContent";
import { getFooterContent } from "./content/footer-section/getFooterContent";

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
    const whyChooseUs = getWhyChooseUsContent();
    const howItWorks = getHowItWorksContent();
    return (
        <main className="">
            <MainNavBar />

            <HeroSection
                id="hero-section"
                background={DSLayoutBackground.black}
                className="hero-glow"
            >
                <HeroContainer>
                    <HeroSectionTech {...heroContent} />
                </HeroContainer>
            </HeroSection>

            <RegularSection
                id="services-section"
                background={DSLayoutBackground.defaultVariation1}
            >
                <RegularContainer>
                    <ServiceSection {...services} />
                </RegularContainer>
            </RegularSection>

            <RegularSection
                id="how-it-works"
                className="ds-bg-light-corners-mixed"
            >
                <RegularContainer>
                    <HowItWorks {...howItWorks} />
                </RegularContainer>
            </RegularSection>
            <RegularSection
                id="why-choose-us"
                background={DSLayoutBackground.default}
            >
                <RegularContainer>
                    <WhyChooseUs {...whyChooseUs} />
                </RegularContainer>
            </RegularSection>
            <SmallSection
                id="final-cta-with-form"
                background={DSLayoutBackground.default}
            >
                <RegularContainer>
                    <FinalCTAWithForm
                        form={<Form />}
                        {...getCTASectionContent()}
                    />
                </RegularContainer>
            </SmallSection>
            <hr className="my-0 border-gray-300" />
            <RegularSection background={DSLayoutBackground.default}>
                <RegularContainer>
                    <Footer {...getFooterContent()} />
                </RegularContainer>
            </RegularSection>
        </main>
    );
}
