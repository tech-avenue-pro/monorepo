import React from "react";
import clsx from "clsx";
import {
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
    colorClasses,
    variantClasses,
} from "./typography";

export { DSTextColor, DSTextVariant, DSTextWeight } from "./typography";

interface DSLinkProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    variant: DSTextVariant;
    color?: DSTextColor;
    weight?: React.CSSProperties["fontWeight"] | DSTextWeight;
    className?: string;
    children: React.ReactNode;
    glow?: boolean;
    arrow?: boolean;
    showBottomLine?: boolean;
}

export function DSLink({
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
}: DSLinkProps) {
    const mergedStyle = weight
        ? {
              ...style,
              fontWeight: weight,
          }
        : style;

    return (
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
    );
}
