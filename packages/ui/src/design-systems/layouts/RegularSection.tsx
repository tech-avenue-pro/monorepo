import React from "react";
import clsx from "clsx";
import { DSLayoutBackground, backgroundClasses } from "../backgrounds";

interface RegularSectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    background?: DSLayoutBackground;
    className?: string;
}

export default function RegularSection({
    children,
    background = DSLayoutBackground.default,
    className,
    ...rest
}: RegularSectionProps) {
    return (
        <section
            className={clsx(
                backgroundClasses[background],
                "py-24 px-0 section-anchor",
                className
            )}
            {...rest}
        >
            {children}
        </section>
    );
}
