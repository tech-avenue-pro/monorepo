"use client";

import React from "react";
import {
    DSText,
    DSTextColor,
    DSTextVariant,
    DSTextWeight,
} from "@repo/ui/design-systems/DSText";
import { DSMotion, DSStagger } from "@repo/ui/design-systems/DSMotion";

interface Course {
    subject: string;
    level: string;
    instructor: string;
    schedule: string;
    badge?: string;
}

const courses: Course[] = [
    {
        subject: "Biology",
        level: "Class 9",
        instructor: "Shanza Rehman",
        schedule: "Tue & Thu, 5:00 PM",
        badge: "Matric",
    },
    {
        subject: "Biology",
        level: "Class 10",
        instructor: "Shanza Rehman",
        schedule: "Mon & Wed, 5:00 PM",
        badge: "Matric",
    },
    {
        subject: "Chemistry",
        level: "Class 9",
        instructor: "Ghadia Rehman",
        schedule: "Mon & Wed, 6:00 PM",
        badge: "Matric",
    },
    {
        subject: "Chemistry",
        level: "Class 10",
        instructor: "Ghadia Rehman",
        schedule: "Tue & Thu, 6:00 PM",
        badge: "Matric",
    },
    {
        subject: "Physics",
        level: "O Levels",
        instructor: "Naseer Ahmed",
        schedule: "Mon & Wed, 7:00 PM",
        badge: "O Levels",
    },
    {
        subject: "Mathematics",
        level: "Class 9",
        instructor: "Irass",
        schedule: "Tue & Thu, 4:00 PM",
        badge: "Matric",
    },
    {
        subject: "Mathematics",
        level: "Class 10",
        instructor: "Irass",
        schedule: "Mon & Wed, 4:00 PM",
        badge: "Matric",
    },
    {
        subject: "Mathematics",
        level: "O Levels",
        instructor: "Irass",
        schedule: "Fri & Sat, 4:00 PM",
        badge: "O Levels",
    },
    {
        subject: "Mathematics",
        level: "1st Year",
        instructor: "Naseer Ahmed",
        schedule: "Tue & Thu, 8:00 PM",
        badge: "Inter",
    },
    {
        subject: "Mathematics",
        level: "2nd Year",
        instructor: "Naseer Ahmed",
        schedule: "Mon & Wed, 8:00 PM",
        badge: "Inter",
    },
    {
        subject: "Mathematics",
        level: "A Levels",
        instructor: "Naseer Ahmed",
        schedule: "Sat & Sun, 5:00 PM",
        badge: "A Levels",
    },
    {
        subject: "Business Studies",
        level: "A Levels",
        instructor: "Hiba Shahnawaz",
        schedule: "Tue & Thu, 7:00 PM",
        badge: "A Levels",
    },
    {
        subject: "Commerce",
        level: "A Levels",
        instructor: "Hiba Shahnawaz",
        schedule: "Mon & Wed, 9:00 PM",
        badge: "A Levels",
    },
    {
        subject: "Economics",
        level: "A Levels",
        instructor: "Shameela Nadeem",
        schedule: "Fri & Sat, 6:00 PM",
        badge: "A Levels",
    },
    {
        subject: "English Literature",
        level: "O Levels",
        instructor: "Shameela Nadeem",
        schedule: "Tue & Thu, 9:00 PM",
        badge: "O Levels",
    },
    {
        subject: "English Literature",
        level: "A Levels",
        instructor: "Shameela Nadeem",
        schedule: "Mon & Wed, 11:00 PM",
        badge: "A Levels",
    },
];

const badgeColors: Record<string, string> = {
    Matric: "bg-blue-100 text-blue-800",
    "O Levels": "bg-emerald-100 text-emerald-800",
    Inter: "bg-purple-100 text-purple-800",
    "A Levels": "bg-amber-100 text-amber-800",
};

function CourseCard({ subject, level, instructor, schedule, badge }: Course) {
    return (
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col gap-3">
            {badge ? (
                <span
                    className={`self-start text-xs font-semibold px-2.5 py-1 rounded-full ${badgeColors[badge] ?? "bg-gray-100 text-gray-700"}`}
                >
                    {badge}
                </span>
            ) : null}
            <DSText
                as="h3"
                variant={DSTextVariant.title2}
                color={DSTextColor.primary}
                weight={DSTextWeight.bold}
            >
                {subject}
            </DSText>
            <DSText
                as="p"
                variant={DSTextVariant.headline2}
                color={DSTextColor.secondary}
                weight={DSTextWeight.semiBold}
            >
                {level}
            </DSText>
            <div className="mt-auto pt-3 border-t border-gray-100 flex flex-col gap-1">
                <DSText
                    as="p"
                    variant={DSTextVariant.caption}
                    color={DSTextColor.tertiary}
                >
                    👤 {instructor}
                </DSText>
                <DSText
                    as="p"
                    variant={DSTextVariant.caption}
                    color={DSTextColor.tertiary}
                >
                    🕐 {schedule}
                </DSText>
            </div>
        </div>
    );
}

export default function CoursesSection() {
    return (
        <section className="mx-auto max-w-7xl px-4">
            <DSMotion variant="fade-up" className="text-center mb-12">
                <DSText
                    as="p"
                    variant={DSTextVariant.caption}
                    color={DSTextColor.senary}
                    weight={DSTextWeight.semiBold}
                    className="uppercase tracking-widest mb-3"
                >
                    Available Now
                </DSText>
                <DSText
                    as="h2"
                    variant={DSTextVariant.largeTitle}
                    color={DSTextColor.primary}
                    weight={DSTextWeight.bold}
                    className="mb-4"
                >
                    Featured Courses
                </DSText>
                <DSText
                    as="p"
                    variant={DSTextVariant.bodyLarge}
                    color={DSTextColor.tertiary}
                    className="max-w-2xl mx-auto"
                >
                    Expert-led online classes for Matric, O Levels, Inter, and
                    A Level students — taught via Google Meet on a flexible
                    weekly schedule.
                </DSText>
            </DSMotion>

            <DSStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {courses.map((course, i) => (
                    <DSMotion key={i} variant="fade-up" delay={0.05 * i}>
                        <CourseCard {...course} />
                    </DSMotion>
                ))}
            </DSStagger>
        </section>
    );
}
