import React from "react";
import { DSMotion, DSStagger } from "../../../DSMotion";
import { DSText, DSTextColor, DSTextVariant, DSTextWeight, FontStyle } from "../../../DSText";
import {
    IconFeatureGridContent,
    IconFeatureGridIconKey,
    IconFeatureGridItem,
} from "./icon-feature-grid-content";

export type { IconFeatureGridContent, IconFeatureGridItem, IconFeatureGridIconKey };

const icons: Record<IconFeatureGridIconKey, React.ReactNode> = {
    heart: (
        <>
            <path d="M12 21s-6.5-4.35-9.2-8.3C1 10.1 1.6 6.9 4.2 5.4c2.2-1.3 4.8-.7 6.3 1.1l1.5 1.8 1.5-1.8c1.5-1.8 4.1-2.4 6.3-1.1 2.6 1.5 3.2 4.7 1.4 7.3C18.5 16.65 12 21 12 21Z" />
            <path d="M9 9.5c1 1 3 1 4 0" />
        </>
    ),
    star: (
        <path d="M12 2.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3.1-5.4 3.1 1.3-6-4.6-4.1 6.1-.6L12 2.5Z" />
    ),
    book: (
        <>
            <path d="M4 4.5h6a2 2 0 0 1 2 2V20a2 2 0 0 0-2-1.5H4Z" />
            <path d="M20 4.5h-6a2 2 0 0 0-2 2V20a2 2 0 0 1 2-1.5h6Z" />
        </>
    ),
    leaf: (
        <>
            <path d="M20 4C11 4 4 11 4 20c9 0 16-7 16-16Z" />
            <path d="M9 20c2-4 6-8 11-11" />
        </>
    ),
    compass: (
        <>
            <circle cx="12" cy="12" r="9" />
            <path d="M15.5 8.5 13 13l-4.5 2.5L11 11l4.5-2.5Z" />
        </>
    ),
    shield: <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3Z" />,
    spark: (
        <path d="M12 2v6M12 16v6M4.5 4.5l4.2 4.2M15.3 15.3l4.2 4.2M2 12h6M16 12h6M4.5 19.5l4.2-4.2M15.3 8.7l4.2-4.2" />
    ),
    circle: <circle cx="12" cy="12" r="8" />,
};

function FeatureIcon({ icon }: { icon: IconFeatureGridIconKey }) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="var(--primary)"
            strokeWidth={1.4}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-10 h-10"
            aria-hidden="true"
        >
            {icons[icon]}
        </svg>
    );
}

function FeatureItem({ icon, title, description }: IconFeatureGridItem) {
    return (
        <DSMotion variant="fade-up" className="h-full">
            <div className="flex flex-col items-center text-center h-full px-4">
                <FeatureIcon icon={icon} />
                <DSText
                    as="h3"
                    variant={DSTextVariant.headline1}
                    color={DSTextColor.white}
                    weight={DSTextWeight.semiBold}
                    fontStyle={FontStyle.Heading}
                    className="mt-5 mb-3"
                >
                    {title}
                </DSText>
                <DSText
                    as="p"
                    variant={DSTextVariant.body}
                    color={DSTextColor.whiteVariant1}
                >
                    {description}
                </DSText>
            </div>
        </DSMotion>
    );
}

export default function IconFeatureGrid({
    sectionTitle,
    items,
}: IconFeatureGridContent) {
    return (
        <div>
            <DSMotion variant="fade-up" className="mb-14">
                <div className="flex items-center justify-center gap-4">
                    <span className="h-px w-10 bg-white/30" />
                    <DSText
                        as="h2"
                        variant={DSTextVariant.largeTitle}
                        color={DSTextColor.white}
                        weight={DSTextWeight.semiBold}
                        fontStyle={FontStyle.Heading}
                        className="text-center"
                    >
                        {sectionTitle}
                    </DSText>
                    <span className="h-px w-10 bg-white/30" />
                </div>
            </DSMotion>

            <DSStagger className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 divide-y divide-white/10 sm:divide-y-0 lg:divide-x">
                {items.map((item) => (
                    <FeatureItem key={item.title} {...item} />
                ))}
            </DSStagger>
        </div>
    );
}
