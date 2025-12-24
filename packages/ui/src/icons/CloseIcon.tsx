import React from "react";
import clsx from "clsx";
import { DSTextColor, colorClasses } from "../design-systems/typography";

interface IconProps extends React.SVGProps<SVGSVGElement> {
    color?: DSTextColor;
}

const CloseIcon = ({ color, className, ...props }: IconProps) => {
    const colorClass = color ? colorClasses[color] : undefined;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={clsx("ionicon", colorClass, className)}
            viewBox="0 0 512 512"
            {...props}
        >
            <title>Close</title>
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="32"
                d="M368 368L144 144M368 144L144 368"
            />
        </svg>
    );
};

export default CloseIcon;
