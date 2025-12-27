import { ServiceCard } from "@repo/ui/design-systems/components/ServiceCard";
import { DSText, DSTextVariant } from "@repo/ui/design-systems/DSText";
import React from "react";

export default function ServiceSection() {
    return (
        <section className="mx-auto">
            <div className="flex justify-between mb-16 items-start gap-16">
                <DSText
                    as="h2"
                    variant={DSTextVariant.largerTitle}
                    className="text-center mb-6 shrink-0"
                >
                    Our Services
                </DSText>
                <div className="flex flex-col items-start">
                    <DSText
                        as="h3"
                        variant={DSTextVariant.title3}
                        className="text-center mb-2"
                    >
                        Everything you need to grow online
                    </DSText>
                    <p className="">
                        You focus on running your business. We handle your
                        growth..
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
                <ServiceCard
                    image={
                        <img
                            src="/images/small/digital-growth/digital-growth.jpeg"
                            alt="Hero Image"
                            className=""
                        />
                    }
                    title="Digital Growth Management"
                    description="This is our core service. We act as your digital marketing partner, handling everything needed to grow your business online."
                    href="#marketing"
                />
                <ServiceCard
                    image={
                        <img
                            src="/images/small/premium-website/premium-website.jpeg"
                            alt="Hero Image"
                            className=""
                        />
                    }
                    title="Premium Business Website"
                    description="Modern, fast, mobile-first websites built to convert visitors into customers."
                    href="#websites"
                    badge="Popular"
                />
                <ServiceCard
                    image={
                        <img
                            src="/images/small/bookings/bookings.jpeg"
                            alt="Hero Image"
                            className=""
                        />
                    }
                    title="Online Booking Solutions"
                    description="Let customers book appointments 24/7 with confirmations, reminders, and easy scheduling."
                    href="#booking"
                />
                <ServiceCard
                    image={
                        <img
                            src="/images/small/live-queue/live-queue.jpeg"
                            alt="Hero Image"
                            className=""
                        />
                    }
                    title="Live Queue"
                    description="Reduce wait-time frustration with real-time queue updates and smoother customer flow."
                    href="#queue"
                    badge="New"
                />
                <ServiceCard
                    image={
                        <img
                            src="/images/small/social-media/social-media.jpeg"
                            alt="Hero Image"
                            className=""
                        />
                    }
                    title="Social Media Presence Management"
                    description="We manage your social media so your business stays active, professional, and engaging — without you worrying about what to post."
                    href="#social-media"
                />

                <ServiceCard
                    image={
                        <img
                            src="/images/small/google-visibility/google-visibility.jpeg"
                            alt="Hero Image"
                            className=""
                        />
                    }
                    title="Google Visibility and Local Search"
                    description="Most customers discover local businesses through Google. We make sure you show up and look professional when they do."
                    href="#branding"
                />

                <ServiceCard
                    title="Branding & Visual Design"
                    description="Logos and visuals that make your business look consistent, premium, and memorable."
                    href="#branding"
                />
            </div>
        </section>
    );
}
