import React from "react";
import clsx from "clsx";

interface BackgroundImageContainerProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    imageSrc: string;
    imageAlt?: string;
    className?: string;
}

export default function BackgroundImageContainer({
    children,
    imageSrc,
    imageAlt = "",
    className,
    ...rest
}: BackgroundImageContainerProps) {
    return (
        <div
            className={clsx("relative w-full h-full overflow-hidden", className)}
            {...rest}
        >
            {/* Background image */}
            <img
                src={imageSrc}
                alt={imageAlt}
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Radial gradient overlay: transparent at centre, 30% black at edges */}
            <div
                className="absolute inset-0"
                style={{
                    background:
                        "radial-gradient(ellipse at center, rgba(0,0,0,0) 50%, rgba(0,0,0,0.30) 100%)",
                }}
            />

            {/* Content */}
            <div className="relative z-10 h-full">
                {children}
            </div>
        </div>
    );
}
