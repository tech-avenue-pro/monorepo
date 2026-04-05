import React from "react";
import { DSMotion } from "../../DSMotion";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
    FontStyle,
} from "../../DSText";
import { StatsContent } from "./stats-content";
import { Odometer } from "../../Odometer";

export default function StatsView(stats: StatsContent) {
    return (
        <React.Fragment>
            <div className="max-w-2xl">
                <DSMotion variant="slide-right" delay={0.3} duration={0.5}>
                    <DSText
                        as="h2"
                        variant={DSTextVariant.largeTitle}
                        weight={DSTextWeight.bold}
                        color={DSTextColor.primary}
                        fontStyle={FontStyle.Heading}
                        className=""
                    >
                        {stats.title}
                    </DSText>
                </DSMotion>

                <DSMotion variant="slide-left" delay={0.3} duration={0.5}>
                    <DSText
                        as="p"
                        variant={DSTextVariant.body}
                        weight={DSTextWeight.light}
                        color={DSTextColor.tertiary}
                        fontStyle={FontStyle.Body}
                        className="mt-6"
                    >
                        {stats.description}
                    </DSText>
                </DSMotion>
            </div>
            <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-gray-900 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4 dark:text-white">
                {stats.items.map((stat) => (
                    <div
                        key={stat.number}
                        className="flex flex-col gap-y-3 border-l border-gray-900/15 pl-6 dark:border-white/10"
                    >
                        <dt className="text-sm/6">{stat.description}</dt>
                        <dd className="order-first text-3xl font-semibold tracking-tight">
                            <DSText
                                as="span"
                                variant={DSTextVariant.largerTitle}
                                color={DSTextColor.tintTheme}
                                weight={DSTextWeight.bold}
                                fontStyle={FontStyle.Heading}
                                className="number-scramble"
                            >
                                <Odometer
                                    value={parseFloat(stat.number)}
                                    className=""
                                />
                                {stat.number.slice(-1)}
                            </DSText>
                        </dd>
                    </div>
                ))}
            </dl>
        </React.Fragment>
    );
}
