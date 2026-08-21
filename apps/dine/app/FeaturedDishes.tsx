import React from "react";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
} from "@repo/ui/design-systems/DSText";
import { DSMotion, DSStagger } from "@repo/ui/design-systems/DSMotion";
import { DSLinkButton, DSButtonVariant } from "@repo/ui/design-systems/DSButton";

const featuredDishes = [
    {
        name: "Butter Chicken",
        price: "$14.99",
        description:
            "Boneless tandoori chicken simmered in a velvety tomato, butter and cream sauce.",
    },
    {
        name: "Chicken Biryani",
        price: "$12.99",
        description:
            "Stewed chicken layered with fragrant rice, mint and fresh herbs.",
    },
    {
        name: "Afghani Platter",
        price: "$18.99",
        description:
            "Chicken seekh kabab and chicken tikka served over fragrant rice with fried carrots and raisins.",
    },
    {
        name: "Fish Tikka",
        price: "$16.99",
        description:
            "Boneless marinated fish cooked in the clay oven, served with naan or rice.",
    },
];

export default function FeaturedDishes() {
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
                    Chef&apos;s Specials
                </DSText>
                <DSText
                    as="p"
                    variant={DSTextVariant.body}
                    color={DSTextColor.secondary}
                    className="max-w-2xl mx-auto text-left"
                >
                    A taste of what keeps our guests coming back — see the
                    full menu for everything we serve.
                </DSText>
            </DSMotion>

            <DSStagger className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12">
                {featuredDishes.map((dish) => (
                    <DSMotion
                        key={dish.name}
                        variant="fade-up"
                        className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 flex flex-col hover:shadow-md transition-shadow"
                    >
                        <DSText
                            as="h3"
                            variant={DSTextVariant.headline1}
                            color={DSTextColor.primary}
                            weight={DSTextWeight.semiBold}
                            className="mb-2"
                        >
                            {dish.name}
                        </DSText>
                        <DSText
                            as="p"
                            variant={DSTextVariant.caption}
                            color={DSTextColor.tertiary}
                            className="flex-1 mb-4"
                        >
                            {dish.description}
                        </DSText>
                        <span className="self-start bg-[var(--secondary-lighter)] text-[var(--primary-darker)] text-xs font-semibold px-3 py-1 rounded-full border border-[var(--primary)] border-opacity-30">
                            {dish.price}
                        </span>
                    </DSMotion>
                ))}
            </DSStagger>

            <div className="text-center">
                <DSLinkButton href="/menu" variant={DSButtonVariant.primary}>
                    View Full Menu
                </DSLinkButton>
            </div>
        </div>
    );
}
