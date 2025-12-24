import React from "react";
import clsx from "clsx";
import {
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
    colorClasses,
    variantClasses,
} from "./typography";
import { FontStyle, fontStyleClasses } from "./fontStyle";

export { DSTextColor, DSTextVariant, DSTextWeight } from "./typography";
export { FontStyle } from "./fontStyle";

// Only allow HTML texty elements – no SVG tags
type TextElement =
    | "p"
    | "span"
    | "div"
    | "label"
    | "strong"
    | "em"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6";

interface DSTextProps extends React.HTMLAttributes<HTMLElement> {
    variant: DSTextVariant;
    as: TextElement;
    color?: DSTextColor; // optional
    children: React.ReactNode;
    className?: string;
    /**
     * Optional font weight override (e.g., "bold", 500, "600").
     */
    weight?: React.CSSProperties["fontWeight"] | DSTextWeight;
    fontStyle?: FontStyle;
}

export function DSText({
    variant,
    as: Tag,
    className,
    color = DSTextColor.primary, // default text color
    weight,
    fontStyle = FontStyle.Body,
    style,
    children,
    ...rest
}: DSTextProps) {
    const mergedStyle = weight
        ? {
              ...style,
              fontWeight: weight,
          }
        : style;

    return (
        <Tag
            className={clsx(
                variantClasses[variant],
                colorClasses[color],
                fontStyleClasses[fontStyle],
                className
            )}
            style={mergedStyle}
            {...rest}
        >
            {children}
        </Tag>
    );
}
