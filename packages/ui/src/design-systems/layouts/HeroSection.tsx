import React from "react";
import clsx from "clsx";
import {
    DSLayoutBackground,
    backgroundClasses,
} from "../backgrounds";

interface HeroSectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    background?: DSLayoutBackground;
    className?: string;
}

export default function HeroSection({
    children,
    background = DSLayoutBackground.default,
    className,
    ...rest
}: HeroSectionProps) {
    return (
        <section
            className={clsx(
                backgroundClasses[background],
                "pb-16 md:pb-24  text-center hero-section",
                className
            )}
            {...rest}
        >
            {children}
        </section>
    );
}
