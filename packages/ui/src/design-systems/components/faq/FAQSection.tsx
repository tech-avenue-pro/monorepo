"use client";

import React, { useState } from "react";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
    FontStyle,
} from "@repo/ui/design-systems/DSText";
import { DSMotion } from "../../DSMotion";
import type { FAQSectionContent, FAQItem } from "./faq";

export type { FAQSectionContent, FAQItem };

export default function FAQSection({
    sectionTitleTag,
    title,
    items,
}: FAQSectionContent) {
    const [openItems, setOpenItems] = useState<Set<number>>(new Set());

    const toggle = (index: number) => {
        setOpenItems((prev) => {
            const next = new Set(prev);
            if (next.has(index)) {
                next.delete(index);
            } else {
                next.add(index);
            }
            return next;
        });
    };

    return (
        <div className="mx-auto">
            <div className="flex flex-col md:flex-row md:gap-16 gap-8">
                {/* Left: label + title */}
                <div className="md:w-2/5 shrink-0">
                    {sectionTitleTag && (
                        <DSText
                            as="p"
                            variant={DSTextVariant.caption}
                            color={DSTextColor.tintTheme}
                            weight={DSTextWeight.semiBold}
                            className="tracking-widest uppercase mb-4"
                        >
                            {sectionTitleTag}
                        </DSText>
                    )}
                    <DSText
                        as="h2"
                        variant={DSTextVariant.largeTitle}
                        color={DSTextColor.primary}
                        weight={DSTextWeight.bold}
                        fontStyle={FontStyle.Heading}
                    >
                        <span dangerouslySetInnerHTML={{ __html: title }} />
                    </DSText>
                </div>

                {/* Right: accordion */}
                <div className="md:w-3/5 flex-1">
                    {items.map((item, index) => (
                        <div key={index}>
                            <button
                                className="w-full flex items-center justify-between py-5 text-left gap-4"
                                onClick={() => toggle(index)}
                                aria-expanded={openItems.has(index)}
                            >
                                <DSText
                                    as="span"
                                    variant={DSTextVariant.headline1}
                                    color={DSTextColor.primary}
                                    weight={DSTextWeight.medium}
                                    fontStyle={FontStyle.Heading}
                                >
                                    {item.question}
                                </DSText>
                                <span
                                    className="ds-text-color-tint-theme shrink-0 text-2xl leading-none select-none"
                                    aria-hidden="true"
                                >
                                    {openItems.has(index) ? "×" : "+"}
                                </span>
                            </button>

                            {openItems.has(index) && (
                                <div className="pb-5">
                                    <DSText
                                        as="p"
                                        variant={DSTextVariant.body}
                                        color={DSTextColor.tertiary}
                                    >
                                        {item.answer}
                                    </DSText>
                                </div>
                            )}

                            <hr className="border-gray-200 my-0" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
