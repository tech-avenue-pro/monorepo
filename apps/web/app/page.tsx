import Image, { type ImageProps } from "next/image";
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
    return (
        <main className="">
            <StandardNavBar
                links={[
                    {
                        label: "Pages",
                        children: [
                            { label: "Colors", href: "#colors" },
                            { label: "Buttons", href: "#buttons" },
                            { label: "Links", href: "#links" },
                            { label: "Link Buttons", href: "#link-buttons" },
                        ],
                    },
                    {
                        label: "Colors",
                        href: "#colors",
                    },
                    {
                        label: "Buttons",
                        href: "#buttons",
                    },
                    {
                        label: "Links",
                        href: "#links",
                    },
                    {
                        label: "Link Buttons",
                        href: "#link-buttons",
                    },
                ]}
                color={DSTextColor.white}
                hoverColor={DSTextColor.senary}
                textVariant={DSTextVariant.bodySmall}
                fontWeight={DSTextWeight.regular}
                mobileFontWeight={DSTextWeight.regular}
                mobileTextVariant={DSTextVariant.largerTitle}
                logoSrc="/tech-avenue-pro.svg"
                cta={
                    <DSLinkButton
                        href="/signup"
                        variant={DSButtonVariant.primary}
                        className="h-10"
                    >
                        Sign Up
                    </DSLinkButton>
                }
                background={DSLayoutBackground.black}
                stickyOnScrollOnly={true}
            />

            <HeroSection
                background={DSLayoutBackground.black}
                className="hero-glow"
            >
                <HeroContainer>
                    <div className="text-left ">
                        <DSText
                            as="h1"
                            variant={DSTextVariant.headline2}
                            color={DSTextColor.white}
                            weight={DSTextWeight.bold}
                            fontStyle={FontStyle.Heading}
                            className="mb-8 mt-16 md:mt-28"
                        >
                            TECH AVENUE PRO
                        </DSText>
                        <div className="hero-reveal">
                            <DSText
                                as="h2"
                                variant={DSTextVariant.largestTitle}
                                color={DSTextColor.white}
                                weight={DSTextWeight.semiBold}
                                fontStyle={FontStyle.Heading}
                                className="mb-12 md:mb-16"
                            >
                                We Build Your{" "}
                                <span className="ds-text-color-senary">
                                    Brand
                                </span>{" "}
                                Online
                            </DSText>
                        </div>
                    </div>
                    <div
                        className="flex flex-col slide-up-animation"
                        style={{ animationDelay: "1s" }}
                    >
                        <div className="flex justify-center">
                            <DSText
                                as="p"
                                variant={DSTextVariant.bodyLarge}
                                color={DSTextColor.whiteVariant1}
                                className="max-w-2xl text-left mb-12 md:mb-16"
                            >
                                From websites to social media and online
                                bookings — we help your business stand out and
                                run smarter.
                            </DSText>
                        </div>
                        <div className="flex justify-center">
                            <DSLinkButton
                                href="/get-started"
                                variant={DSButtonVariant.primary}
                                glow={true}
                                className="mb-12 md:mb-16"
                            >
                                Lets Get in touch
                            </DSLinkButton>
                        </div>
                        <div className="flex justify-center">
                            <img
                                src="/hero-image.jpg"
                                alt="Hero Image"
                                className="rounded-lg"
                            />
                        </div>
                    </div>
                </HeroContainer>
            </HeroSection>

            <div className="mx-auto max-w-3xl space-y-6">
                <h1 className="text-3xl font-bold text-gray-900">
                    Next.js + Tailwind Playground
                </h1>

                <p className="text-gray-600">
                    This is your sandbox to practice components, layout, and
                    styling.
                </p>
            </div>
        </main>
    );
}
