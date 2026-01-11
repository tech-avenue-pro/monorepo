"use client";

import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

export type DSMotionVariant =
    | "fade-up"
    | "blur-in"
    | "fade-in"
    | "scale-in"
    | "slide-right"
    | "slide-left";

export interface DSMotionProps {
    children: React.ReactNode;
    className?: string;
    as?: React.ElementType;
    variant?: DSMotionVariant;
    delay?: number;
    duration?: number;
    viewportAmount?: number;
    once?: boolean;
    style?: React.CSSProperties;
    /**
     * "self": The element triggers its animation when it enters the viewport.
     * "parent": The element waits for a parent (like DSStagger) to trigger it.
     */
    trigger?: "self" | "parent";
}

const variants: Record<DSMotionVariant, Variants> = {
    "fade-up": {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0 },
    },
    "blur-in": {
        hidden: { opacity: 0, filter: "blur(10px)", scale: 0.98 },
        visible: { opacity: 1, filter: "blur(0px)", scale: 1 },
    },
    "fade-in": {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
    "scale-in": {
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
    },
    "slide-right": {
        hidden: { opacity: 0, x: -24 },
        visible: { opacity: 1, x: 0 },
    },
    "slide-left": {
        hidden: { opacity: 0, x: 24 },
        visible: { opacity: 1, x: 0 },
    },
};

export function DSMotion({
    children,
    className,
    as = "div",
    variant = "fade-up",
    delay = 0,
    duration = 0.6,
    viewportAmount = 0.3,
    once = true,
    style,
    trigger = "self",
}: DSMotionProps) {
    const shouldReduceMotion = useReducedMotion();
    const hasIntersectionObserver =
        typeof window !== "undefined" && "IntersectionObserver" in window;
    const shouldAnimate = !shouldReduceMotion && hasIntersectionObserver;

    if (!shouldAnimate) {
        const Tag = as as any;
        return (
            <Tag className={className} style={style}>
                {children}
            </Tag>
        );
    }

    const Component = (motion as any).create
        ? (motion as any).create(as)
        : (motion as any)(as);
    const selectedVariant = variants[variant];
    const isSelfTriggered = trigger === "self";

    return (
        <Component
            className={className}
            style={style}
            initial="hidden"
            whileInView={isSelfTriggered ? "visible" : undefined}
            viewport={
                isSelfTriggered ? { once, amount: viewportAmount } : undefined
            }
            transition={{
                duration,
                delay,
                ease: [0.215, 0.61, 0.355, 1], // Smooth cubic-bezier
            }}
            variants={selectedVariant}
        >
            {children}
        </Component>
    );
}

export interface DSStaggerProps {
    children: React.ReactNode;
    className?: string;
    as?: React.ElementType;
    delay?: number;
    staggerDelay?: number;
    viewportAmount?: number;
    once?: boolean;
}

export function DSStagger({
    children,
    className,
    as = "div",
    delay = 0,
    staggerDelay = 0.1,
    viewportAmount = 0.3,
    once = true,
}: DSStaggerProps) {
    const shouldReduceMotion = useReducedMotion();
    const hasIntersectionObserver =
        typeof window !== "undefined" && "IntersectionObserver" in window;
    const shouldAnimate = !shouldReduceMotion && hasIntersectionObserver;

    if (!shouldAnimate) {
        const Tag = as as any;
        return <Tag className={className}>{children}</Tag>;
    }

    const Component = (motion as any).create
        ? (motion as any).create(as)
        : (motion as any)(as);

    return (
        <Component
            className={className}
            initial="hidden"
            whileInView="visible"
            viewport={{ once, amount: viewportAmount }}
            transition={{
                staggerChildren: staggerDelay,
                delayChildren: delay,
            }}
        >
            {children}
        </Component>
    );
}
