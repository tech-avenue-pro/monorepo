import React from "react";
import { DSMotion } from "../../../DSMotion";
import { DSText, DSTextColor, DSTextVariant, FontStyle } from "../../../DSText";
import { PullQuoteContent } from "./pull-quote-content";

export type { PullQuoteContent };

export default function PullQuote({ quote, attribution }: PullQuoteContent) {
    return (
        <DSMotion variant="fade-up" className="mx-auto max-w-3xl text-center">
            <svg
                viewBox="0 0 24 24"
                fill="var(--primary)"
                className="w-10 h-10 mx-auto mb-6 opacity-70"
                aria-hidden="true"
            >
                <path d="M7 6c-2.8 0-5 2.2-5 5 0 2.5 1.9 4.5 4.3 4.9C6 18.4 4.6 19.7 3 20.4l.6 1.5c3.6-1.3 6.4-4.3 6.4-8.9V11c0-2.8-1.3-5-3-5Zm11 0c-2.8 0-5 2.2-5 5 0 2.5 1.9 4.5 4.3 4.9-.3 2.5-1.7 3.8-3.3 4.5l.6 1.5c3.6-1.3 6.4-4.3 6.4-8.9V11c0-2.8-1.3-5-3-5Z" />
            </svg>
            <DSText
                as="p"
                variant={DSTextVariant.headline2}
                color={DSTextColor.primary}
                fontStyle={FontStyle.Heading}
                className="italic mb-6"
            >
                {quote}
            </DSText>
            <DSText
                as="p"
                variant={DSTextVariant.body}
                color={DSTextColor.secondary}
            >
                — {attribution}
            </DSText>
        </DSMotion>
    );
}
