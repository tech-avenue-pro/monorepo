import React from "react";
import clsx from "clsx";

interface HeroSectionProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export default function HeroContainer({
    children,
    className,
    ...rest
}: HeroSectionProps) {
    return (
        <div className={clsx("relative z-10 px-4 md:px-8", className)} {...rest}>
            {children}
        </div>
    );
}
