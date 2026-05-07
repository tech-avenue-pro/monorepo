import React from "react";
import clsx from "clsx";
import { DSLayoutBackground, backgroundClasses } from "../backgrounds";

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
                "pb-16 md:pb-24 text-center hero-section section-anchor",
                className,
            )}
            {...rest}
        >
            {children}
        </section>
    );
}

export function HeroSectionFullScreen({
    children,
    background = DSLayoutBackground.default,
    className,
    ...rest
}: HeroSectionProps) {
    return (
        <section
            className={clsx(
                backgroundClasses[background],
                "pb-16 md:pb-24 lg:pb-0 lg:h-[calc(100vh-4rem)] text-center hero-section section-anchor",
                className,
            )}
            {...rest}
        >
            {children}
        </section>
    );
}
