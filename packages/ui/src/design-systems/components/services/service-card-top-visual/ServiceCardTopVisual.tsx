import React from "react";
import { DSText, DSTextVariant } from "../../../DSText";
import { DSLink, DSTextColor, DSTextWeight } from "../../../DSLink";
import type { ServiceCardTopVisualContent } from "./service-card-top-visual-content";

export type { ServiceCardTopVisualContent };

export function ServiceCardTopVisual({
    title,
    description,
    href,
    image,
    srcSet,
    alt,
    badge,
    linkTitle,
}: ServiceCardTopVisualContent) {
    const CardWrapper: React.ElementType = href ? "a" : "div";

    return (
        <CardWrapper
            href={href}
            className={[
                "group relative block rounded-2xl border border-gray-200 ds-bg-default shadow-sm",
                "transition hover:-translate-y-0.5 hover:shadow-md",
                "focus:outline-none focus-visible:ring-2 focus-visible:ring-black/30",
            ].join(" ")}
        >
            {image && (
                <div className="mb-4 overflow-hidden h-48 [&>img]:h-full [&>img]:w-full [&>img]:object-cover rounded-t-2xl">
                    <img src={image} alt={alt || ""} srcSet={srcSet || ""} />
                </div>
            )}

            {badge ? (
                <div className="absolute right-0 top-0 -mt-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
                    {badge}
                </div>
            ) : null}

            <div className="flex items-start gap-4 p-4">
                <div className="min-w-0">
                    <DSText
                        as="h3"
                        variant={DSTextVariant.headline1}
                        weight={DSTextWeight.bold}
                        className="mt-2 mb-4"
                    >
                        {title}
                    </DSText>
                    <DSText
                        as="p"
                        variant={DSTextVariant.body}
                        color={DSTextColor.secondary}
                        className="mb-4"
                    >
                        {description}
                    </DSText>

                    {href ? (
                        <DSLink
                            variant={DSTextVariant.bodySmall}
                            color={DSTextColor.senary}
                            href={href}
                            className="font-semibold"
                        >
                            {linkTitle || "Learn More"}
                        </DSLink>
                    ) : null}
                </div>
            </div>
        </CardWrapper>
    );
}
