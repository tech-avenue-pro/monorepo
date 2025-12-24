import React from "react";
import clsx from "clsx";
import { DSLayoutBackground, backgroundClasses } from "./backgrounds";

type LayoutElement =
    | "div"
    | "section"
    | "article"
    | "main"
    | "aside"
    | "nav"
    | "header"
    | "footer"
    | "span";

export interface DSLayoutProps extends React.HTMLAttributes<HTMLElement> {
    as?: LayoutElement;
    background?: DSLayoutBackground;
    className?: string;
    children?: React.ReactNode;
}

export { DSLayoutBackground, backgroundClasses } from "./backgrounds";

export function DSLayout({
    as: Tag = "div",
    background = DSLayoutBackground.default,
    className,
    children,
    ...rest
}: DSLayoutProps) {
    return (
        <Tag
            className={clsx(backgroundClasses[background], className)}
            {...rest}
        >
            {children}
        </Tag>
    );
}
