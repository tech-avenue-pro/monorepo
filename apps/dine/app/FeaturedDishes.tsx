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
        name: "Afghani Platter",
        price: "$18.99",
        description:
            "Chicken seekh kabab and chicken tikka served over fragrant rice with fried carrots and raisins.",
        image: "/images/tandoori-corner/afghan-platter.png",
    },
    {
        name: "Tandoori Style Chinese",
        price: "$16.99",
        description:
            "Grilled chicken tikka tossed with peppers, onions and tomatoes in tandoori sauce.",
        image: "/images/tandoori-corner/tandoori-style-chineese.png",
    },
    {
        name: "Butter Chicken",
        price: "$14.99",
        description:
            "Boneless tandoori chicken simmered in a velvety tomato, butter and cream sauce.",
        image: "",
    },
    {
        name: "Chicken Biryani",
        price: "$12.99",
        description:
            "Stewed chicken layered with fragrant rice, mint and fresh herbs.",
        image: "",
    },
];

function DishImage({ src, name }: { src: string; name: string }) {
    if (src) {
        return (
            <div className="w-full aspect-[4/3] overflow-hidden rounded-2xl">
                <img
                    src={src}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>
        );
    }
    return (
        <div className="w-full aspect-[4/3] rounded-2xl bg-[var(--primary-lighter)] flex items-center justify-center">
            <span className="w-14 h-14 rounded-full bg-[var(--primary)] opacity-20" />
        </div>
    );
}

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
                        className="bg-white rounded-3xl border border-[var(--primary)] border-opacity-10 shadow-sm p-4 flex flex-col hover:shadow-md transition-shadow"
                    >
                        <DishImage src={dish.image} name={dish.name} />
                        <DSText
                            as="h3"
                            variant={DSTextVariant.headline1}
                            color={DSTextColor.primary}
                            weight={DSTextWeight.semiBold}
                            className="mt-4 mb-2"
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
                        <span className="self-start bg-[var(--primary-lighter)] text-[var(--primary-darker)] text-xs font-semibold px-3 py-1.5 rounded-full">
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
