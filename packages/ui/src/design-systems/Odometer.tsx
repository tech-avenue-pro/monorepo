"use client";

import React from "react";
import {
    animate,
    useMotionValue,
    useMotionValueEvent,
    useReducedMotion,
    useInView,
} from "framer-motion";

type OdometerProps = {
    value: number;
    duration?: number;
    className?: string;
    once?: boolean;
};

export function Odometer({
    value,
    duration = 1.2,
    className,
    once = true,
}: OdometerProps) {
    const shouldReduceMotion = useReducedMotion();
    const motionValue = useMotionValue(0);
    const [display, setDisplay] = React.useState(() =>
        Math.round(value).toLocaleString()
    );
    const ref = React.useRef<HTMLSpanElement | null>(null);
    const isInView = useInView(ref, { once });

    useMotionValueEvent(motionValue, "change", (latest) => {
        setDisplay(Math.round(latest).toLocaleString());
    });

    React.useEffect(() => {
        if (!isInView) return;
        if (shouldReduceMotion) {
            motionValue.set(value);
            return;
        }
        const controls = animate(motionValue, value, {
            duration,
            ease: "easeOut",
        });
        return controls.stop;
    }, [value, duration, motionValue, shouldReduceMotion, isInView]);

    return (
        <span ref={ref} className={className}>
            {display}
        </span>
    );
}
