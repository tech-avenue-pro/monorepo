"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type NavLink = {
    label: string;
    href: string;
    external?: boolean;
};

type NavCta =
    | {
          label: string;
          href: string;
          external?: boolean;
      }
    | {
          label: string;
          onClick: () => void;
      };

interface NavigationBarProps {
    brand?: React.ReactNode;
    links: NavLink[];
    rightSlot?: React.ReactNode;
    cta?: NavCta;
    className?: string;
}

export function NavigationBar({
    brand = <span className="text-lg font-semibold text-gray-900">Brand</span>,
    links,
    rightSlot,
    cta,
    className,
}: NavigationBarProps) {
    const pathname = usePathname();

    return (
        <header
            className={clsx(
                "sticky top-0 z-40 w-full bg-white/85 backdrop-blur",
                "border-b border-gray-200/80 shadow-[0_4px_24px_rgba(0,0,0,0.05)]",
                className
            )}
        >
            <div className="flex w-full items-center py-4 gap-6">
                <div className="flex items-center gap-3">{brand}</div>

                <div className="ml-auto flex items-center gap-4">
                    <nav
                        className="flex items-center gap-4 text-sm font-semibold tracking-tight text-gray-700"
                        aria-label="Main navigation"
                    >
                        {links.map(({ label, href, external }) => {
                            const isActive =
                                !external && pathname
                                    ? pathname === href ||
                                      (href !== "/" && pathname?.startsWith(href))
                                    : false;

                            const linkClasses = clsx(
                                "rounded-full px-3.5 py-2 transition-colors duration-200",
                                isActive
                                    ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                                    : "text-gray-700 hover:bg-gray-50"
                            );

                            if (external) {
                                return (
                                    <a
                                        key={href}
                                        href={href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={linkClasses}
                                    >
                                        {label}
                                    </a>
                                );
                            }

                            return (
                                <Link key={href} href={href} className={linkClasses}>
                                    {label}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="flex items-center gap-3">
                        {rightSlot}
                        {cta ? (
                            "href" in cta ? (
                                cta.external ? (
                                    <a
                                        href={cta.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-emerald-500/25 transition hover:bg-emerald-600"
                                    >
                                        {cta.label}
                                    </a>
                                ) : (
                                    <Link
                                        href={cta.href}
                                        className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-emerald-500/25 transition hover:bg-emerald-600"
                                    >
                                        {cta.label}
                                    </Link>
                                )
                            ) : (
                                <button
                                    type="button"
                                    onClick={cta.onClick}
                                    className="inline-flex items-center rounded-full bg-emerald-500 px-4 py-2 text-sm font-semibold text-white shadow-md shadow-emerald-500/25 transition hover:bg-emerald-600"
                                >
                                    {cta.label}
                                </button>
                            )
                        ) : null}
                    </div>
                </div>
            </div>
        </header>
    );
}
