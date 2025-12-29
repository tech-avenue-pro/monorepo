import React from "react";
import clsx from "clsx";
import { DSLayoutBackground, backgroundClasses } from "../backgrounds";

interface SmallSectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    background?: DSLayoutBackground;
    className?: string;
}

export default function SmallSection({
    children,
    background = DSLayoutBackground.default,
    className,
    ...rest
}: SmallSectionProps) {
    return (
        <section
            className={clsx(
                backgroundClasses[background],
                "py-12 px-0",
                className
            )}
            {...rest}
        >
            {children}
        </section>
    );
}
