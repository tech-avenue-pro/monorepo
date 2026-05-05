import React from "react";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
} from "@repo/ui/design-systems/DSText";
import { DSMotion, DSStagger } from "@repo/ui/design-systems/DSMotion";
import { DSLinkButton, DSButtonVariant } from "@repo/ui/design-systems/DSButton";

const iftarPackages = [
    {
        name: "Classic Iftar Fusion",
        price: "Rs. 10,000/-",
        guests: "5+ guests",
        items: [
            "Club Sandwiches",
            "Sliders",
            "Chicken Strips",
            "Potato Croquettes",
            "Dahi Phulki Chaat",
            "Lasagne",
        ],
    },
    {
        name: "Value Iftar Fusion",
        price: "Rs. 14,500/-",
        guests: "10+ guests",
        items: [
            "Double portions of Classic",
            "Club Sandwiches",
            "Sliders",
            "Chicken Strips",
            "Potato Croquettes",
            "Dahi Phulki Chaat",
            "Lasagne",
        ],
        featured: true,
    },
    {
        name: "Grand Iftar Fusion",
        price: "Rs. 19,500/-",
        guests: "15+ guests",
        items: [
            "6 Club Sandwiches",
            "15 Sliders",
            "25 Chicken Strips",
            "3 Lasagnes",
            "Potato Croquettes",
            "Dahi Phulki Chaat",
        ],
    },
];

const generalPackages = [
    {
        name: "Classic Fusion",
        price: "Rs. 5,500/-",
        guests: "15+ guests",
        description:
            "Burgers, sliders, and sandwiches — crowd-pleasing favourites crafted with care.",
    },
    {
        name: "Signature Fusion",
        price: "Rs. 7,500/-",
        guests: "15+ guests",
        description:
            "Buttermilk chicken burgers with expanded portions — a more elevated spread for discerning guests.",
        featured: true,
    },
];

export default function CateringPackages() {
    return (
        <div>
            <DSMotion variant="fade-up" className="text-center mb-12">
                <DSText
                    as="h2"
                    variant={DSTextVariant.largerTitle}
                    color={DSTextColor.primary}
                    weight={DSTextWeight.bold}
                    className="mb-4"
                >
                    Catering Packages
                </DSText>
                <DSText
                    as="p"
                    variant={DSTextVariant.body}
                    color={DSTextColor.secondary}
                    className="max-w-2xl mx-auto"
                >
                    Choose a package that suits your gathering, or contact us to
                    build something entirely bespoke.
                </DSText>
            </DSMotion>

            {/* Iftar Packages */}
            <DSMotion variant="fade-up" className="mb-4">
                <DSText
                    as="h3"
                    variant={DSTextVariant.title1}
                    color={DSTextColor.secondary}
                    weight={DSTextWeight.semiBold}
                    className="mb-8 text-center"
                >
                    Iftar Menus
                </DSText>
            </DSMotion>
            <DSStagger className="grid gap-6 md:grid-cols-3 mb-16">
                {iftarPackages.map((pkg) => (
                    <DSMotion
                        key={pkg.name}
                        variant="fade-up"
                        className={`relative rounded-2xl border p-6 flex flex-col ${
                            pkg.featured
                                ? "border-[var(--primary)] bg-[var(--primary-lighter)] shadow-lg"
                                : "border-gray-200 bg-white"
                        }`}
                    >
                        {pkg.featured && (
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--primary)] text-white text-xs font-semibold px-4 py-1 rounded-full">
                                Most Popular
                            </span>
                        )}
                        <DSText
                            as="h4"
                            variant={DSTextVariant.title2}
                            color={DSTextColor.primary}
                            weight={DSTextWeight.bold}
                            className="mb-1"
                        >
                            {pkg.name}
                        </DSText>
                        <DSText
                            as="p"
                            variant={DSTextVariant.caption}
                            color={DSTextColor.tertiary}
                            className="mb-4"
                        >
                            {pkg.guests} minimum
                        </DSText>
                        <DSText
                            as="p"
                            variant={DSTextVariant.title1}
                            color={DSTextColor.primary}
                            weight={DSTextWeight.bold}
                            className="mb-6"
                        >
                            {pkg.price}
                        </DSText>
                        <ul className="space-y-2 flex-1">
                            {pkg.items.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-center gap-2"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--primary)] shrink-0" />
                                    <DSText
                                        as="span"
                                        variant={DSTextVariant.caption}
                                        color={DSTextColor.secondary}
                                    >
                                        {item}
                                    </DSText>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-6">
                            <DSLinkButton
                                variant={
                                    pkg.featured
                                        ? DSButtonVariant.primary
                                        : DSButtonVariant.secondary
                                }
                                href="https://wa.me/923288288897"
                                className="w-full text-center"
                            >
                                Book Now
                            </DSLinkButton>
                        </div>
                    </DSMotion>
                ))}
            </DSStagger>

            {/* General Catering */}
            <DSMotion variant="fade-up" className="mb-4">
                <DSText
                    as="h3"
                    variant={DSTextVariant.title1}
                    color={DSTextColor.secondary}
                    weight={DSTextWeight.semiBold}
                    className="mb-8 text-center"
                >
                    General Catering
                </DSText>
            </DSMotion>
            <DSStagger className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto">
                {generalPackages.map((pkg) => (
                    <DSMotion
                        key={pkg.name}
                        variant="fade-up"
                        className={`relative rounded-2xl border p-6 flex flex-col ${
                            pkg.featured
                                ? "border-[var(--primary)] bg-[var(--primary-lighter)] shadow-lg"
                                : "border-gray-200 bg-white"
                        }`}
                    >
                        {pkg.featured && (
                            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[var(--primary)] text-white text-xs font-semibold px-4 py-1 rounded-full">
                                Recommended
                            </span>
                        )}
                        <DSText
                            as="h4"
                            variant={DSTextVariant.title2}
                            color={DSTextColor.primary}
                            weight={DSTextWeight.bold}
                            className="mb-1"
                        >
                            {pkg.name}
                        </DSText>
                        <DSText
                            as="p"
                            variant={DSTextVariant.caption}
                            color={DSTextColor.tertiary}
                            className="mb-4"
                        >
                            {pkg.guests} minimum
                        </DSText>
                        <DSText
                            as="p"
                            variant={DSTextVariant.title1}
                            color={DSTextColor.primary}
                            weight={DSTextWeight.bold}
                            className="mb-4"
                        >
                            {pkg.price}
                        </DSText>
                        <DSText
                            as="p"
                            variant={DSTextVariant.caption}
                            color={DSTextColor.secondary}
                            className="flex-1 mb-6"
                        >
                            {pkg.description}
                        </DSText>
                        <DSLinkButton
                            variant={
                                pkg.featured
                                    ? DSButtonVariant.primary
                                    : DSButtonVariant.secondary
                            }
                            href="https://wa.me/923288288897"
                            className="w-full text-center"
                        >
                            Book Now
                        </DSLinkButton>
                    </DSMotion>
                ))}
            </DSStagger>
        </div>
    );
}
