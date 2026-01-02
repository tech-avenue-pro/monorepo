import {
    DSText,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
} from "@repo/ui/design-systems/DSText";
import React from "react";

export type FinalCTAFormProps = {
    form: React.ReactNode;
};
export interface FinalCTAFormContent {
    ctaTitle: string;
    ctaDescription: string;
}

type FinalCTAWithFormProps = FinalCTAFormProps & FinalCTAFormContent;

export default function FinalCTAWithForm({
    form,
    ctaTitle,
    ctaDescription,
}: FinalCTAWithFormProps) {
    return (
        <div id="contact" className="mx-auto">
            <div className="rounded-xl ds-border-glow ds-bg-default-variation1 px-5 py-12 md:p-12">
                <div className="grid gap-10 md:grid-cols-2 md:items-top">
                    <div>
                        <DSText
                            as="h2"
                            variant={DSTextVariant.largeTitle}
                            color={DSTextColor.primary}
                            weight={DSTextWeight.bold}
                            className=""
                        >
                            {ctaTitle}
                        </DSText>
                        <DSText
                            as="p"
                            variant={DSTextVariant.body}
                            color={DSTextColor.tertiary}
                            className="mt-6"
                        >
                            {ctaDescription}
                        </DSText>
                    </div>
                    {form}
                </div>
            </div>
        </div>
    );
}
