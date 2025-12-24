"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import clsx from "clsx";
import MenuIcon from "../../icons/MenuIcon";
import CloseIcon from "../../icons/CloseIcon";
import { DSLayoutBackground, backgroundClasses } from "../DSLayout";
import { backgroundColorVars } from "../backgrounds";
import {
    colorClasses,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
    textColorVars,
    variantClasses,
} from "../typography";

type NavItem = {
    label: string;
    href?: string;
    children?: NavItem[];
};

type MobileMenuLevel = {
    title: string;
    items: NavItem[];
};

interface StandardNavBarProps {
    links: NavItem[];
    color?: DSTextColor;
    hoverColor?: DSTextColor;
    textVariant?: DSTextVariant;
    mobileTextVariant?: DSTextVariant;
    fontWeight?: React.CSSProperties["fontWeight"] | DSTextWeight;
    mobileFontWeight?: React.CSSProperties["fontWeight"] | DSTextWeight;
    logoSrc?: string;
    cta?: React.ReactNode;
    background?: DSLayoutBackground;
    stickyOnScrollOnly?: boolean;
}

const StandardNavBar = ({
    links,
    color,
    hoverColor,
    textVariant,
    mobileTextVariant,
    fontWeight,
    mobileFontWeight,
    logoSrc = "/tech-avenue-pro-navbar.png",
    cta,
    background = DSLayoutBackground.accent,
    stickyOnScrollOnly = false,
}: StandardNavBarProps) => {
    const [nav, setNav] = useState("");
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [mobileMenuDirection, setMobileMenuDirection] = useState<
        "forward" | "back"
    >("forward");
    const rootMobileLevel = useMemo<MobileMenuLevel>(
        () => ({
            title: "Menu",
            items: links,
        }),
        [links]
    );
    const [mobileMenuStack, setMobileMenuStack] = useState<MobileMenuLevel[]>([
        rootMobileLevel,
    ]);
    const closeTimeoutRef = useRef<number | null>(null);
    const customBackgroundStyle = useMemo(() => {
        const cssVar = backgroundColorVars[background];
        const style: React.CSSProperties & Record<string, string> = {};

        if (cssVar) {
            style["--nav-bg-color"] =
                `color-mix(in srgb, ${cssVar} 60%, transparent)`;
            style["--nav-bg-overlay"] =
                `color-mix(in srgb, ${cssVar} 45%, transparent)`;
            style["--nav-bg-solid"] = cssVar;
        }

        if (hoverColor) {
            style["--nav-hover-color"] = textColorVars[hoverColor];
        }

        if (color) {
            style["--nav-icon-color"] = textColorVars[color];
        }

        return Object.keys(style).length ? style : undefined;
    }, [background, hoverColor, color]);
    const clearCloseTimeout = () => {
        if (closeTimeoutRef.current !== null) {
            window.clearTimeout(closeTimeoutRef.current);
            closeTimeoutRef.current = null;
        }
    };

    const scheduleClose = (itemId: string) => {
        clearCloseTimeout();
        closeTimeoutRef.current = window.setTimeout(() => {
            setOpenDropdown((prev) => (prev === itemId ? null : prev));
        }, 150);
    };

    const closeNav = () => {
        setNav("");
        setOpenDropdown(null);
        setMobileMenuDirection("forward");
        setMobileMenuStack([rootMobileLevel]);
    };

    const textClassName = textVariant
        ? variantClasses[textVariant]
        : "nav-text-default";

    const mobileTextClassName = mobileTextVariant
        ? variantClasses[mobileTextVariant]
        : null;

    const isMobileNavOpen = nav === "nav-open";
    const currentTextClassName =
        isMobileNavOpen && mobileTextClassName
            ? mobileTextClassName
            : textClassName;
    const baseFontWeight = fontWeight ?? DSTextWeight.regular;
    const currentFontWeight = isMobileNavOpen
        ? (mobileFontWeight ?? baseFontWeight)
        : baseFontWeight;
    const textStyle = { fontWeight: currentFontWeight };

    const currentMobileLevel =
        mobileMenuStack[mobileMenuStack.length - 1] ?? rootMobileLevel;
    const canGoBack = mobileMenuStack.length > 1;

    useEffect(() => {
        setMobileMenuStack([rootMobileLevel]);
    }, [rootMobileLevel]);

    useEffect(() => {
        if (!stickyOnScrollOnly) {
            document.body.classList.add("sticky");
            return;
        }

        const heroSection = document.querySelector(".hero-section");
        if (!heroSection) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry) {
                    return;
                }

                document.body.classList.toggle("sticky", !entry.isIntersecting);
            },
            {
                root: null,
                threshold: 0,
                rootMargin: "-48px",
            }
        );

        observer.observe(heroSection);

        return () => {
            observer.disconnect();
            document.body.classList.remove("sticky");
        };
    }, [stickyOnScrollOnly]);

    return (
        <React.Fragment>
            <header
                className={` header px-4 md:px-8 ${nav} ${backgroundClasses[background]}`}
                style={customBackgroundStyle}
            >
                <div className="nav-inner">
                    <a href="#top-of-screen" className="nav-brand">
                        <img className="logo" src={logoSrc} alt="Navigation" />
                    </a>
                    <nav className="main-nav">
                        <ul
                            className={clsx(
                                "main-nav-list",
                                isMobileNavOpen && "mobile-menu-panel",
                                isMobileNavOpen &&
                                    (mobileMenuDirection === "forward"
                                        ? "mobile-menu-forward"
                                        : "mobile-menu-back")
                            )}
                            key={
                                isMobileNavOpen
                                    ? `mobile-${mobileMenuStack.length}-${currentMobileLevel.title}`
                                    : "desktop"
                            }
                        >
                            {isMobileNavOpen ? (
                                <React.Fragment>
                                    <li className="mobile-submenu-header">
                                        <button
                                            type="button"
                                            className={clsx(
                                                "mobile-back-button",
                                                !canGoBack &&
                                                    "mobile-back-button--hidden"
                                            )}
                                            onClick={() => {
                                                if (!canGoBack) {
                                                    return;
                                                }
                                                setMobileMenuDirection("back");
                                                setMobileMenuStack((prev) =>
                                                    prev.length > 1
                                                        ? prev.slice(0, -1)
                                                        : prev
                                                );
                                            }}
                                            aria-label="Back"
                                            disabled={!canGoBack}
                                        >
                                            {"<"}
                                        </button>
                                        <span className="mobile-submenu-title">
                                            {currentMobileLevel.title}
                                        </span>
                                        <button
                                            type="button"
                                            className="mobile-close-button"
                                            onClick={closeNav}
                                            aria-label="Close menu"
                                        >
                                            <CloseIcon className="icon-mobile-nav" />
                                        </button>
                                    </li>
                                    {currentMobileLevel.items.map(
                                        ({ label, href, children }, i) => {
                                            const itemId = `${label}-${
                                                href ?? i
                                            }`;
                                            const hasChildren =
                                                Array.isArray(children) &&
                                                children.length > 0;

                                            if (!hasChildren) {
                                                return (
                                                    <li
                                                        key={itemId}
                                                        className="nav-item"
                                                    >
                                                        <a
                                                            className={clsx(
                                                                "main-nav-link",
                                                                color &&
                                                                    colorClasses[
                                                                        color
                                                                    ],
                                                                currentTextClassName
                                                            )}
                                                            style={textStyle}
                                                            href={href ?? "#"}
                                                            onClick={closeNav}
                                                        >
                                                            {label}
                                                        </a>
                                                    </li>
                                                );
                                            }

                                            return (
                                                <li
                                                    key={itemId}
                                                    className={clsx(
                                                        "nav-item",
                                                        "has-children"
                                                    )}
                                                >
                                                    <button
                                                        type="button"
                                                        className={clsx(
                                                            "main-nav-link",
                                                            "dropdown-toggle",
                                                            color &&
                                                                colorClasses[
                                                                    color
                                                                ],
                                                            currentTextClassName
                                                        )}
                                                        style={textStyle}
                                                        onClick={() => {
                                                            setMobileMenuDirection(
                                                                "forward"
                                                            );
                                                            setMobileMenuStack(
                                                                (prev) => [
                                                                    ...prev,
                                                                    {
                                                                        title: label,
                                                                        items: children,
                                                                    },
                                                                ]
                                                            );
                                                        }}
                                                    >
                                                        {label}
                                                    </button>
                                                </li>
                                            );
                                        }
                                    )}
                                    {cta ? (
                                        <li className="nav-cta-item">{cta}</li>
                                    ) : null}
                                </React.Fragment>
                            ) : (
                                <React.Fragment>
                                    {links.map(
                                        ({ label, href, children }, i) => {
                                            const itemId = `${label}-${
                                                href ?? i
                                            }`;
                                            const hasChildren =
                                                Array.isArray(children) &&
                                                children.length > 0;
                                            const isOpen =
                                                openDropdown === itemId;

                                            if (!hasChildren) {
                                                return (
                                                    <li
                                                        key={itemId}
                                                        className="nav-item"
                                                    >
                                                        <a
                                                            className={clsx(
                                                                "main-nav-link",
                                                                color &&
                                                                    colorClasses[
                                                                        color
                                                                    ],
                                                                currentTextClassName
                                                            )}
                                                            style={textStyle}
                                                            href={href ?? "#"}
                                                            onClick={closeNav}
                                                        >
                                                            {label}
                                                        </a>
                                                    </li>
                                                );
                                            }

                                            return (
                                                <li
                                                    key={itemId}
                                                    className={clsx(
                                                        "nav-item",
                                                        "has-children",
                                                        {
                                                            "show-dropdown":
                                                                isOpen,
                                                        }
                                                    )}
                                                    onMouseEnter={() => {
                                                        if (isMobileNavOpen) {
                                                            return;
                                                        }
                                                        clearCloseTimeout();
                                                        setOpenDropdown(itemId);
                                                    }}
                                                    onMouseLeave={() => {
                                                        if (isMobileNavOpen) {
                                                            return;
                                                        }
                                                        scheduleClose(itemId);
                                                    }}
                                                >
                                                    <button
                                                        type="button"
                                                        className={clsx(
                                                            "main-nav-link",
                                                            "dropdown-toggle",
                                                            color &&
                                                                colorClasses[
                                                                    color
                                                                ],
                                                            currentTextClassName
                                                        )}
                                                        style={textStyle}
                                                        onClick={() =>
                                                            setOpenDropdown(
                                                                (prev) =>
                                                                    prev ===
                                                                    itemId
                                                                        ? null
                                                                        : itemId
                                                            )
                                                        }
                                                        aria-expanded={isOpen}
                                                    >
                                                        {label}
                                                        <span
                                                            className="caret"
                                                            aria-hidden="true"
                                                        />
                                                    </button>
                                                    <ul
                                                        className="dropdown-menu"
                                                        role="menu"
                                                        onMouseEnter={() => {
                                                            if (
                                                                isMobileNavOpen
                                                            ) {
                                                                return;
                                                            }
                                                            clearCloseTimeout();
                                                            setOpenDropdown(
                                                                itemId
                                                            );
                                                        }}
                                                        onMouseLeave={() => {
                                                            if (
                                                                isMobileNavOpen
                                                            ) {
                                                                return;
                                                            }
                                                            scheduleClose(
                                                                itemId
                                                            );
                                                        }}
                                                    >
                                                        {children.map(
                                                            (child) => {
                                                                const childId = `${child.label}-${child.href}`;
                                                                return (
                                                                    <li
                                                                        key={
                                                                            childId
                                                                        }
                                                                    >
                                                                        <a
                                                                            className={clsx(
                                                                                "dropdown-link",
                                                                                color &&
                                                                                    colorClasses[
                                                                                        color
                                                                                    ],
                                                                                currentTextClassName
                                                                            )}
                                                                            style={
                                                                                textStyle
                                                                            }
                                                                            href={
                                                                                child.href ??
                                                                                "#"
                                                                            }
                                                                            role="menuitem"
                                                                            onClick={
                                                                                closeNav
                                                                            }
                                                                        >
                                                                            {
                                                                                child.label
                                                                            }
                                                                        </a>
                                                                    </li>
                                                                );
                                                            }
                                                        )}
                                                    </ul>
                                                </li>
                                            );
                                        }
                                    )}
                                    {cta ? (
                                        <li className="nav-cta-item">{cta}</li>
                                    ) : null}
                                </React.Fragment>
                            )}
                        </ul>
                    </nav>
                    <button
                        className="btn-mobile-nav"
                        onClick={(e) => {
                            if (nav === "") {
                                setNav("nav-open");
                                setOpenDropdown(null);
                                setMobileMenuDirection("forward");
                                setMobileMenuStack([rootMobileLevel]);
                            } else {
                                closeNav();
                            }
                        }}
                    >
                        <MenuIcon
                            color={DSTextColor.white}
                            className="icon-mobile-nav open-menu"
                        />
                        <CloseIcon
                            color={DSTextColor.white}
                            className="icon-mobile-nav close-menu"
                        />
                    </button>
                </div>
            </header>
            <div className="navigation-margin-bottom" id="top-of-screen"></div>
        </React.Fragment>
    );
};

export default StandardNavBar;
