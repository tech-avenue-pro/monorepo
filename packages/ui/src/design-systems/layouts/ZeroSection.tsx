import React from "react";
import clsx from "clsx";
import { DSLayoutBackground, backgroundClasses } from "../backgrounds";

interface ZeroSectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    background?: DSLayoutBackground;
    className?: string;
}
export default function ZeroSection({
    children,
    background = DSLayoutBackground.default,
    className,
    ...rest
}: ZeroSectionProps) {
    return (
        <section
            className={clsx(
                backgroundClasses[background],
                "py-0 px-0 section-anchor",
                className,
            )}
            {...rest}
        >
            {children}
        </section>
    );
}
