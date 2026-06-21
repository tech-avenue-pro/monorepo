import React from "react";
import clsx from "clsx";
import { DSTextColor, colorClasses } from "../design-systems/typography";

interface IconProps extends React.SVGProps<SVGSVGElement> {
    color?: DSTextColor;
}

const YoutubeIcon = ({ color, className, ...props }: IconProps) => {
    const colorClass = color ? colorClasses[color] : undefined;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={clsx("ionicon", colorClass, className)}
            viewBox="0 0 512 512"
            {...props}
        >
            <title>Logo Youtube</title>
            <path
                fill="currentColor"
                d="M488 161.84a48 48 0 00-33.91-34C422.6 119.34 256 119.34 256 119.34s-166.6 0-198.09 8.5a48 48 0 00-33.91 34C16 193.32 16 256 16 256s0 62.68 8 94.16a48 48 0 0033.91 34c31.49 8.5 198.09 8.5 198.09 8.5s166.6 0 198.09-8.5a48 48 0 0033.91-34c8-31.48 8-94.16 8-94.16s0-62.68-8-94.16zM208 327.34v-142l142 71z"
            />
        </svg>
    );
};

export default YoutubeIcon;
