"use client";

import React from "react";
import { DSMotion, DSStagger } from "../../DSMotion";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
    FontStyle,
} from "../../DSText";
import { trackMetaPixelEvent } from "../../utils/meta-pixel";
import {
    LocationsSectionContent,
    LocationItemContent,
} from "./locations-section-content";

export type { LocationsSectionContent, LocationItemContent };

function LocationCard({
    name,
    address,
    phone,
    mapLink,
    schedule,
}: LocationItemContent) {
    const cleanPhone = phone.replace(/\s+/g, "");
    return (
        <DSMotion variant="fade-up">
            <div
                className="rounded-2xl p-8 h-full border border-gray-200"
                style={{
                    background: "rgba(255,255,255,0.45)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                }}
            >
                <div className="flex items-start gap-3 mb-5">
                    <svg
                        className="w-6 h-6 mt-1 shrink-0 ds-text-color-tintTheme"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.8}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"
                        />
                    </svg>
                    <DSText
                        as="h3"
                        variant={DSTextVariant.headline1}
                        color={DSTextColor.primary}
                        weight={DSTextWeight.semiBold}
                        fontStyle={FontStyle.Heading}
                    >
                        {name}
                    </DSText>
                </div>

                <DSText
                    as="p"
                    variant={DSTextVariant.body}
                    color={DSTextColor.secondary}
                    className="mb-5 whitespace-pre-line"
                >
                    {address}
                </DSText>

                <a
                    href={`tel:${cleanPhone}`}
                    className="flex items-center gap-2 mb-4"
                    onClick={() =>
                        trackMetaPixelEvent("Contact", {
                            content_name: "Location Phone Call",
                            location: name,
                        })
                    }
                >
                    <svg
                        className="w-4 h-4 shrink-0 ds-text-color-tintTheme"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.8}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2 3a1 1 0 011-1h4a1 1 0 011 1l.5 3a1 1 0 01-.293.707L7 8a16.016 16.016 0 006 6l1.293-1.207A1 1 0 0115 12.5l3-.5a1 1 0 011 1v4a1 1 0 01-1 1C9.163 22 2 14.837 2 6V3z"
                        />
                    </svg>
                    <DSText
                        as="span"
                        variant={DSTextVariant.body}
                        color={DSTextColor.tintTheme}
                        weight={DSTextWeight.medium}
                    >
                        {phone}
                    </DSText>
                </a>

                {mapLink && (
                    <a
                        href={mapLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1"
                        onClick={() =>
                            trackMetaPixelEvent("FindLocation", {
                                content_name: name,
                            })
                        }
                    >
                        <DSText
                            as="span"
                            variant={DSTextVariant.bodySmall}
                            color={DSTextColor.tintTheme}
                        >
                            View on map →
                        </DSText>
                    </a>
                )}

                {schedule && schedule.length > 0 && (
                    <div className="mt-6 pt-5 border-t border-gray-200">
                        <div className="flex items-center gap-2 mb-3">
                            <svg
                                className="w-4 h-4 shrink-0 ds-text-color-tintTheme"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.8}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z"
                                />
                            </svg>
                            <DSText
                                as="span"
                                variant={DSTextVariant.bodySmall}
                                color={DSTextColor.primary}
                                weight={DSTextWeight.semiBold}
                            >
                                Clinic Hours
                            </DSText>
                        </div>
                        <div className="flex flex-col gap-1">
                            {schedule.map(({ day, hours, closed }) => (
                                <div
                                    key={day}
                                    className="flex justify-between items-center"
                                >
                                    <DSText
                                        as="span"
                                        variant={DSTextVariant.bodySmall}
                                        color={DSTextColor.secondary}
                                    >
                                        {day}
                                    </DSText>
                                    <DSText
                                        as="span"
                                        variant={DSTextVariant.bodySmall}
                                        color={
                                            closed
                                                ? DSTextColor.secondary
                                                : DSTextColor.primary
                                        }
                                        weight={
                                            closed
                                                ? undefined
                                                : DSTextWeight.medium
                                        }
                                    >
                                        {hours}
                                    </DSText>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </DSMotion>
    );
}

export default function LocationsSection({
    sectionTitle,
    sectionDescription,
    locations,
}: LocationsSectionContent) {
    return (
        <div>
            <DSMotion variant="fade-up" className="text-center mb-12">
                <DSText
                    as="h2"
                    variant={DSTextVariant.largeTitle}
                    color={DSTextColor.primary}
                    weight={DSTextWeight.bold}
                    fontStyle={FontStyle.Heading}
                    className="mb-4"
                >
                    {sectionTitle}
                </DSText>
                {sectionDescription && (
                    <DSText
                        as="p"
                        variant={DSTextVariant.bodyLarge}
                        color={DSTextColor.secondary}
                        className="max-w-2xl mx-auto"
                    >
                        {sectionDescription}
                    </DSText>
                )}
            </DSMotion>

            <DSStagger className="grid gap-6 md:grid-cols-2">
                {locations.map((loc) => (
                    <LocationCard key={loc.name} {...loc} />
                ))}
            </DSStagger>
        </div>
    );
}
