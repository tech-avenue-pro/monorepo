import React from "react";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
} from "@repo/ui/design-systems/DSText";
import { DSMotion } from "@repo/ui/design-systems/DSMotion";

export default function Excellence() {
    return (
        <div>
            <div className="grid md:grid-cols-2 gap-8 items-start mb-10">
                <DSMotion variant="fade-up">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-8 h-px bg-[var(--primary)]" />
                        <DSText
                            as="p"
                            variant={DSTextVariant.caption}
                            color={DSTextColor.senary}
                            weight={DSTextWeight.semiBold}
                            className="uppercase tracking-widest"
                        >
                            The Dine Excellence
                        </DSText>
                    </div>
                    <DSText
                        as="h2"
                        variant={DSTextVariant.largestTitle}
                        color={DSTextColor.white}
                        weight={DSTextWeight.semiBold}
                        className="leading-tight"
                        style={{ fontFamily: "var(--font-serif)" }}
                    >
                        A Timeless Flame
                        <br />
                        for the Soul
                    </DSText>
                </DSMotion>

                <DSMotion variant="fade-up" delay={0.2}>
                    <DSText
                        as="p"
                        variant={DSTextVariant.body}
                        color={DSTextColor.whiteVariant1}
                        className="md:pt-16"
                    >
                        We began with a single clay tandoor — a promise to
                        marinate patiently, cook over real fire, and never rush
                        what heat is meant to teach. Years later, that promise
                        hasn&apos;t changed.
                    </DSText>
                </DSMotion>
            </div>

            <DSMotion variant="blur-in" duration={1}>
                <div className="rounded-2xl overflow-hidden aspect-[16/8]">
                    <img
                        src="/images/hero.png"
                        alt="Tandoori style chicken tossed with peppers and served with rice"
                        className="w-full h-full object-cover"
                    />
                </div>
            </DSMotion>
        </div>
    );
}
