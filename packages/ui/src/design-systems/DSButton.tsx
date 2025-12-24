import React from "react";
import clsx from "clsx";

export enum DSButtonVariant {
    /**
     * Primary action — blue button (ds-btn-primary)
     */
    primary = "primary",

    /**
     * Secondary action — navy button (ds-btn-secondary)
     */
    secondary = "secondary",

    /**
     * Accent / danger / special action — red button (ds-btn-accent)
     */
    accent = "accent",

    /**
     * Neutral light button — white bg (ds-btn-white)
     */
    white = "white",

    /**
     * Neutral dark button — black bg (ds-btn-black)
     */
    black = "black",

    /**
     * Ghost / outlined button — transparent with border (ds-btn-outlined)
     */
    outlined = "outlined",

    /**
     * Contrast button — adapts to default background (ds-btn-contrast)
     */
    contrast = "contrast",
}

export interface DSButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: DSButtonVariant;
    /**
     * Adds a glow shadow around the button
     * Uses ds-btn-*-glow classes
     */
    glow?: boolean;
    /**
     * Makes button full width (w-full). Default: true
     */
    fullWidth?: boolean;
    /**
     * Makes the button pill-shaped by applying .ds-btn-pill.
     */
    rounded?: boolean;
    /**
     * Optional icons on the left or right side of the label.
     */
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    leftIconSrc?: string;
    rightIconSrc?: string;
    className?: string;
    children: React.ReactNode;
    disabled?: boolean;
    loading?: boolean;
}

const baseClass = "ds-btn";

const variantClasses: Record<DSButtonVariant, string> = {
    [DSButtonVariant.primary]: "ds-btn-primary",
    [DSButtonVariant.secondary]: "ds-btn-secondary",
    [DSButtonVariant.accent]: "ds-btn-accent",
    [DSButtonVariant.white]: "ds-btn-white",
    [DSButtonVariant.black]: "ds-btn-black",
    [DSButtonVariant.outlined]: "ds-btn-outlined",
    [DSButtonVariant.contrast]: "ds-btn-contrast",
};

const glowClasses: Record<DSButtonVariant, string> = {
    [DSButtonVariant.primary]: "ds-btn-primary-glow",
    [DSButtonVariant.secondary]: "ds-btn-secondary-glow",
    [DSButtonVariant.accent]: "ds-btn-accent-glow",
    [DSButtonVariant.white]: "ds-btn-white-glow",
    [DSButtonVariant.black]: "ds-btn-black-glow",
    [DSButtonVariant.outlined]: "ds-btn-outlined-glow",
    [DSButtonVariant.contrast]: "ds-btn-contrast-glow",
};

export function DSButton({
    variant = DSButtonVariant.primary,
    glow = false,
    fullWidth = false,
    rounded = false,
    leftIcon,
    rightIcon,
    leftIconSrc,
    rightIconSrc,
    className,
    children,
    disabled = false,
    loading = false,
    ...rest
}: DSButtonProps) {
    const variantClass = variantClasses[variant];
    const isDisabled = disabled || loading;
    const glowClass = glow && !isDisabled ? glowClasses[variant] : undefined;
    const iconBase = "inline-flex items-center justify-center shrink-0";
    const iconDimension = 25;
    const contentClasses = clsx(
        "inline-flex items-center justify-center",
        loading && "ds-btn-content-hidden"
    );

    return (
        <button
            className={clsx(
                baseClass,
                variantClass,
                glowClass,
                rounded && "ds-btn-pill",
                fullWidth && "w-full",
                isDisabled && "ds-btn-disabled",
                loading && "ds-btn-loading",
                className
            )}
            disabled={isDisabled}
            aria-busy={loading || undefined}
            {...rest}
        >
            {loading && <span className="ds-btn-spinner" aria-hidden="true" />}
            <span className={contentClasses}>
                {(leftIcon ?? leftIconSrc) && (
                    <span className={clsx(iconBase, children && "mr-2")}>
                        {leftIcon ??
                            (leftIconSrc && (
                                <img
                                    src={leftIconSrc}
                                    alt=""
                                    width={iconDimension}
                                    height={iconDimension}
                                />
                            ))}
                    </span>
                )}
                {children && (
                    <span className="inline-flex items-center justify-center">
                        {children}
                    </span>
                )}
                {(rightIcon ?? rightIconSrc) && (
                    <span className={clsx(iconBase, children && "ml-2")}>
                        {rightIcon ??
                            (rightIconSrc && (
                                <img
                                    src={rightIconSrc}
                                    alt=""
                                    width={iconDimension}
                                    height={iconDimension}
                                />
                            ))}
                    </span>
                )}
            </span>
        </button>
    );
}

export interface DSLinkButtonProps
    extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: DSButtonVariant;
    glow?: boolean;
    fullWidth?: boolean;
    rounded?: boolean;
    leftIcon?: React.ReactNode;
    rightIcon?: React.ReactNode;
    leftIconSrc?: string;
    rightIconSrc?: string;
    className?: string;
    children: React.ReactNode;
}

export function DSLinkButton({
    variant = DSButtonVariant.primary,
    glow = false,
    fullWidth = false,
    rounded = false,
    leftIcon,
    rightIcon,
    leftIconSrc,
    rightIconSrc,
    className,
    children,
    ...rest
}: DSLinkButtonProps) {
    const variantClass = variantClasses[variant];
    const glowClass = glow ? glowClasses[variant] : undefined;
    const iconBase = "inline-flex items-center justify-center shrink-0";
    const iconDimension = 25;

    return (
        <a
            className={clsx(
                baseClass,
                variantClass,
                glowClass,
                rounded && "ds-btn-pill",
                fullWidth && "w-full",
                className
            )}
            {...rest}
        >
            {(leftIcon ?? leftIconSrc) && (
                <span className={clsx(iconBase, children && "mr-2")}>
                    {leftIcon ??
                        (leftIconSrc && (
                            <img
                                src={leftIconSrc}
                                alt=""
                                width={iconDimension}
                                height={iconDimension}
                            />
                        ))}
                </span>
            )}
            {children && (
                <span className="inline-flex items-center justify-center">
                    {children}
                </span>
            )}
            {(rightIcon ?? rightIconSrc) && (
                <span className={clsx(iconBase, children && "ml-2")}>
                    {rightIcon ??
                        (rightIconSrc && (
                            <img
                                src={rightIconSrc}
                                alt=""
                                width={iconDimension}
                                height={iconDimension}
                            />
                        ))}
                </span>
            )}
        </a>
    );
}
