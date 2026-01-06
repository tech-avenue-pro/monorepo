import React from "react";
import Link from "next/link";
import clsx from "clsx";
import {
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
    colorClasses,
    variantClasses,
} from "./typography";

export interface DSInternalLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    href: string;
    prefetch?: boolean;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    locale?: string | false;
    variant: DSTextVariant;
    color?: DSTextColor;
    weight?: React.CSSProperties["fontWeight"] | DSTextWeight;
    className?: string;
    children: React.ReactNode;
    glow?: boolean;
    arrow?: boolean;
    showBottomLine?: boolean;
}

export function DSInternalLink({
    href,
    prefetch = false,
    replace,
    scroll,
    shallow,
    locale,
    variant,
    color = DSTextColor.primary,
    weight,
    className,
    style,
    glow = false,
    arrow = false,
    showBottomLine = true,
    children,
    ...rest
}: DSInternalLinkProps) {
    const mergedStyle = weight
        ? {
              ...style,
              fontWeight: weight,
          }
        : style;

    return (
        <Link
            href={href}
            prefetch={prefetch}
            replace={replace}
            scroll={scroll}
            shallow={shallow}
            locale={locale}
            legacyBehavior
        >
            <a
                className={clsx(
                    "ds-link",
                    variantClasses[variant],
                    colorClasses[color],
                    glow && "ds-link-glow",
                    arrow && "ds-link-arrow",
                    !showBottomLine && "ds-link-no-bottom-line",
                    className
                )}
                style={mergedStyle}
                {...rest}
            >
                {children}
            </a>
        </Link>
    );
}
