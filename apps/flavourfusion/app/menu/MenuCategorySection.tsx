"use client";

import React, { useState } from "react";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
} from "@repo/ui/design-systems/DSText";
import { DSMotion, DSStagger } from "@repo/ui/design-systems/DSMotion";

interface MenuItem {
    name: string;
    price: string;
    description: string;
    image: string;
}

interface Category {
    category: string;
    items: MenuItem[];
}

interface Props {
    categories: Category[];
}

function ItemImage({ src, name }: { src: string; name: string }) {
    if (src) {
        return (
            <div className="w-full aspect-[4/3] overflow-hidden">
                <img
                    src={src}
                    alt={name}
                    className="w-full h-full object-cover"
                />
            </div>
        );
    }
    return (
        <div className="w-full aspect-[4/3] bg-[var(--primary-lighter)] flex flex-col items-center justify-center gap-2 overflow-hidden">
            <div className="w-12 h-12 rounded-full bg-[var(--primary)] opacity-20" />
            <DSText
                as="span"
                variant={DSTextVariant.footnote}
                color={DSTextColor.tertiary}
                className="text-center px-2"
            >
                {name}
            </DSText>
        </div>
    );
}

export default function MenuCategorySection({ categories }: Props) {
    const [activeCategory, setActiveCategory] = useState(
        categories[0]?.category ?? "",
    );

    const activeItems =
        categories.find((c) => c.category === activeCategory)?.items ?? [];

    return (
        <div>
            {/* Category Tabs */}
            <div className="sticky top-16 z-10 bg-white/90 backdrop-blur-sm border-b border-gray-100 -mx-4 md:-mx-8 px-4 md:px-8 py-4 mb-10">
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
                    {categories.map((cat) => (
                        <button
                            key={cat.category}
                            type="button"
                            onClick={() => setActiveCategory(cat.category)}
                            className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                                activeCategory === cat.category
                                    ? "bg-[var(--primary)] text-white"
                                    : "bg-[var(--primary-lighter)] text-[var(--primary-darker)] hover:bg-[var(--primary)] hover:text-white"
                            }`}
                        >
                            {cat.category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Active Category Title */}
            <DSMotion
                key={activeCategory}
                variant="fade-in"
                className="mb-8"
            >
                <DSText
                    as="h2"
                    variant={DSTextVariant.largeTitle}
                    color={DSTextColor.primary}
                    weight={DSTextWeight.bold}
                    className="mb-2"
                >
                    {activeCategory}
                </DSText>
                <div className="w-12 h-1 rounded-full bg-[var(--primary)]" />
            </DSMotion>

            {/* Items Grid */}
            <DSStagger
                key={activeCategory + "-items"}
                className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-16"
            >
                {activeItems.map((item) => (
                    <DSMotion
                        key={item.name}
                        variant="fade-up"
                        className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow"
                    >
                        <ItemImage src={item.image} name={item.name} />
                        <div className="p-5 flex flex-col flex-1">
                            <div className="flex items-start justify-between gap-2 mb-3">
                                <DSText
                                    as="h3"
                                    variant={DSTextVariant.headline1}
                                    color={DSTextColor.primary}
                                    weight={DSTextWeight.semiBold}
                                    className="flex-1"
                                >
                                    {item.name}
                                </DSText>
                                <span className="shrink-0 bg-[var(--primary-lighter)] text-[var(--primary-darker)] text-xs font-semibold px-3 py-1 rounded-full border border-[var(--primary)] border-opacity-30">
                                    {item.price}
                                </span>
                            </div>
                            <DSText
                                as="p"
                                variant={DSTextVariant.caption}
                                color={DSTextColor.tertiary}
                                className="flex-1"
                            >
                                {item.description}
                            </DSText>
                        </div>
                    </DSMotion>
                ))}
            </DSStagger>

            {/* CTA */}
            <DSMotion
                variant="fade-up"
                className="text-center py-10 rounded-2xl bg-[var(--primary-lighter)] border border-[var(--primary)] border-opacity-20"
            >
                <DSText
                    as="h3"
                    variant={DSTextVariant.title1}
                    color={DSTextColor.primary}
                    weight={DSTextWeight.bold}
                    className="mb-3"
                >
                    Want to Order?
                </DSText>
                <DSText
                    as="p"
                    variant={DSTextVariant.body}
                    color={DSTextColor.secondary}
                    className="mb-6 max-w-lg mx-auto"
                >
                    Reach out via WhatsApp to place an order or discuss a custom
                    catering package for your event.
                </DSText>
                <a
                    href="https://wa.me/923288288897"
                    className="inline-block bg-[var(--primary)] hover:bg-[var(--primary-darker)] text-white font-semibold px-8 py-3 rounded-full transition-colors"
                >
                    Order via WhatsApp
                </a>
            </DSMotion>
        </div>
    );
}
