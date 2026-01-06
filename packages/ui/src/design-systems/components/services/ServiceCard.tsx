import React from "react";
import { DSText, DSTextVariant } from "../../DSText";
import { DSLink, DSTextColor, DSTextWeight } from "../../DSLink";
import { DSButtonVariant, DSLinkButton } from "../../DSButton";

export type ServiceCardProps = {
    image?: React.ReactNode;
    title: string;
    description: string;
    icon?: React.ReactNode;
    href?: string;
    badge?: string; // e.g. "Popular", "New"
    linkTitle?: string;
};

export function ServiceCard({
    title,
    description,
    icon,
    href,
    image,
    badge,
    linkTitle,
}: ServiceCardProps) {
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
                <div className="mb-4 overflow-hidden h-44 [&>img]:h-full [&>img]:w-full [&>img]:object-cover rounded-t-2xl">
                    {image}
                </div>
            )}

            {badge ? (
                <div className="absolute right-0 top-0 -mt-2 rounded-full border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-700">
                    {badge}
                </div>
            ) : null}

            <div className="flex items-start gap-4 p-4">
                {icon ? (
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-gray-50">
                        {icon}
                    </div>
                ) : null}

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
