"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export type ServiceCardMotionProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    y?: number;
    fade?: boolean;
    once?: boolean;
    amount?: number;
};

export function ServiceCardMotion({
    children,
    className,
    delay = 0,
    duration = 0.6,
    y = 12,
    fade = false,
    once = true,
    amount = 0.3,
}: ServiceCardMotionProps) {
    const reduceMotion = useReducedMotion();
    const canUseInView =
        typeof window !== "undefined" && "IntersectionObserver" in window;
    const shouldAnimate = !reduceMotion && canUseInView;
    const initial = shouldAnimate
        ? fade
            ? { opacity: 0, y }
            : { opacity: 1, y }
        : false;
    const whileInView = shouldAnimate ? { opacity: 1, y: 0 } : undefined;

    return (
        <motion.div
            className={className}
            initial={initial}
            whileInView={whileInView}
            viewport={shouldAnimate ? { once, amount } : undefined}
            transition={{
                duration: shouldAnimate ? duration : 0,
                delay: shouldAnimate ? delay : 0,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
    );
}
