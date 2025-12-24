import React from "react";
import clsx from "clsx";
import { DSTextColor, colorClasses } from "../design-systems/typography";

interface IconProps extends React.SVGProps<SVGSVGElement> {
    color?: DSTextColor;
}

const MenuIcon = ({ color, className, ...props }: IconProps) => {
    const colorClass = color ? colorClasses[color] : undefined;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className={clsx("ionicon", colorClass, className)}
            viewBox="0 0 512 512"
            {...props}
        >
            <title>Menu</title>
            <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeMiterlimit="10"
                strokeWidth="32"
                d="M80 160h352M80 256h352M80 352h352"
            />
        </svg>
    );
};

export default MenuIcon;
