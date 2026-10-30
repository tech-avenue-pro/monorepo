import React from "react";
import { DSMotion } from "../../DSMotion";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
    FontStyle,
} from "../../DSText";
import { DSButtonVariant, DSLinkButton } from "../../DSButton";
import { LocationDetailSectionContent } from "./location-detail-content";

export type { LocationDetailSectionContent };

function InfoRow({
    icon,
    label,
    children,
}: {
    icon: React.ReactNode;
    label: string;
    children: React.ReactNode;
}) {
    return (
        <div className="flex items-start gap-4 py-5 border-b border-gray-200 last:border-b-0">
            <span className="shrink-0 mt-0.5 ds-text-color-tintTheme">
                {icon}
            </span>
            <div className="flex-1">
                <DSText
                    as="p"
                    variant={DSTextVariant.body}
                    color={DSTextColor.primary}
                    weight={DSTextWeight.semiBold}
                    className="mb-1"
                >
                    {label}
                </DSText>
                <DSText
                    as="div"
                    variant={DSTextVariant.bodySmall}
                    color={DSTextColor.secondary}
                >
                    {children}
                </DSText>
            </div>
            <svg
                className="shrink-0 mt-1.5 w-4 h-4 text-gray-400 md:hidden"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 18l6-6-6-6"
                />
            </svg>
        </div>
    );
}

export default function LocationDetailSection({
    eyebrow = "Find Us",
    sectionTitle,
    sectionDescription,
    location,
    directionsLabel = "Get Directions",
    mapPinLabel,
    mapPinSubLabel,
}: LocationDetailSectionContent) {
    const { name, address, phone, email, website, mapLink, schedule } =
        location;
    const cleanPhone = phone.replace(/\s+/g, "");
    const directionsHref =
        mapLink ||
        `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
    const websiteHref = website && /^https?:\/\//.test(website)
        ? website
        : `https://${website}`;
    const websiteLabel = website?.replace(/^https?:\/\//, "");

    return (
        <div>
            <DSMotion variant="fade-up" className="text-center mb-14">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <svg
                        className="w-5 h-5 ds-text-color-tintTheme"
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
                        as="span"
                        variant={DSTextVariant.caption}
                        color={DSTextColor.tintTheme}
                        weight={DSTextWeight.semiBold}
                        className="uppercase tracking-wide"
                    >
                        {eyebrow}
                    </DSText>
                </div>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">
                <DSMotion variant="fade-up" className="order-2 md:order-1">
                    <div>
                        <InfoRow
                            label="Visit Us"
                            icon={
                                <svg
                                    className="w-5 h-5"
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
                            }
                        >
                            <span className="whitespace-pre-line">
                                {address}
                            </span>
                        </InfoRow>

                        {schedule && schedule.length > 0 && (
                            <InfoRow
                                label="Opening Hours"
                                icon={
                                    <svg
                                        className="w-5 h-5"
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
                                }
                            >
                                <div className="flex flex-col gap-1">
                                    {schedule.map(
                                        ({ day, hours, closed }) => (
                                            <div
                                                key={day}
                                                className="flex justify-between gap-4"
                                            >
                                                <span>{day}</span>
                                                <span
                                                    className={
                                                        closed
                                                            ? undefined
                                                            : "font-medium"
                                                    }
                                                >
                                                    {hours}
                                                </span>
                                            </div>
                                        )
                                    )}
                                </div>
                            </InfoRow>
                        )}

                        <InfoRow
                            label="Call Us"
                            icon={
                                <svg
                                    className="w-5 h-5"
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
                            }
                        >
                            <a href={`tel:${cleanPhone}`}>{phone}</a>
                        </InfoRow>

                        {email && (
                            <InfoRow
                                label="Email Us"
                                icon={
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1.8}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 6a2 2 0 012-2h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V6zm2 0l7 6 7-6"
                                        />
                                    </svg>
                                }
                            >
                                <a href={`mailto:${email}`}>{email}</a>
                            </InfoRow>
                        )}

                        {website && (
                            <InfoRow
                                label="Website"
                                icon={
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={1.8}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 21a9 9 0 100-18 9 9 0 000 18zM3.6 9h16.8M3.6 15h16.8M12 3a14.5 14.5 0 010 18M12 3a14.5 14.5 0 000 18"
                                        />
                                    </svg>
                                }
                            >
                                <a
                                    href={websiteHref}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {websiteLabel}
                                </a>
                            </InfoRow>
                        )}

                        <div className="mt-8">
                            <DSLinkButton
                                href={directionsHref}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant={DSButtonVariant.black}
                                fullWidth
                                leftIcon={
                                    <svg
                                        className="w-5 h-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M3 11l18-8-8 18-2-8-8-2z"
                                        />
                                    </svg>
                                }
                            >
                                {directionsLabel}
                            </DSLinkButton>
                        </div>
                    </div>
                </DSMotion>

                {(location.mapEmbedUrl || location.mapImageSrc) && (
                    <DSMotion variant="fade-up" className="order-1 md:order-2">
                        <div className="relative w-full rounded-2xl overflow-hidden border border-gray-200 aspect-4/3 md:aspect-auto md:h-full min-h-90">
                            {location.mapEmbedUrl ? (
                                <iframe
                                    src={location.mapEmbedUrl}
                                    title={`Map showing the location of ${name}`}
                                    className="absolute inset-0 w-full h-full"
                                    style={{ border: 0 }}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            ) : (
                                <>
                                    <img
                                        src={location.mapImageSrc}
                                        alt={
                                            location.mapImageAlt ||
                                            `Map showing the location of ${name}`
                                        }
                                        className="absolute inset-0 w-full h-full object-cover"
                                    />
                                    {(mapPinLabel ?? name) && (
                                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[calc(100%+8px)] flex flex-col items-center">
                                            <div className="rounded-xl px-4 py-2 shadow-lg ds-bg-black">
                                                <DSText
                                                    as="p"
                                                    variant={
                                                        DSTextVariant.bodySmall
                                                    }
                                                    color={DSTextColor.white}
                                                    weight={
                                                        DSTextWeight.semiBold
                                                    }
                                                >
                                                    {mapPinLabel ?? name}
                                                </DSText>
                                                {mapPinSubLabel && (
                                                    <DSText
                                                        as="p"
                                                        variant={
                                                            DSTextVariant.footnote
                                                        }
                                                        color={
                                                            DSTextColor.white
                                                        }
                                                        className="uppercase tracking-wide"
                                                    >
                                                        {mapPinSubLabel}
                                                    </DSText>
                                                )}
                                            </div>
                                            <svg
                                                className="w-6 h-6 -mt-px"
                                                style={{
                                                    color: "var(--background-black)",
                                                }}
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path d="M12 2C8.134 2 5 5.134 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.866-3.134-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
                                            </svg>
                                        </div>
                                    )}
                                </>
                            )}
                        </div>
                    </DSMotion>
                )}
            </div>
        </div>
    );
}
