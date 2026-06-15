import React from "react";
import clsx from "clsx";

interface BackgroundImageContainerProps
    extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    imageSrc: string;
    imageAlt?: string;
    className?: string;
    hideImageOnMobile?: boolean;
}

export default function BackgroundImageContainer({
    children,
    imageSrc,
    imageAlt = "",
    className,
    hideImageOnMobile = false,
    ...rest
}: BackgroundImageContainerProps) {
    const imageVisibility = hideImageOnMobile ? "hidden lg:block" : "";

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
                className={clsx("absolute inset-0 w-full h-full object-cover", imageVisibility)}
            />

            {/* Radial gradient overlay: transparent at centre, 30% black at edges */}
            <div
                className={clsx("absolute inset-0", imageVisibility)}
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
