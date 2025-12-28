import React from "react";

export function FinalCTA() {
    return (
        <div className="mx-auto">
            <div className="rounded-3xl border border-neutral-200 bg-neutral-900 p-8 text-white shadow-sm md:p-12">
                <div className="grid gap-8 md:grid-cols-2 md:items-center">
                    <div>
                        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                            Ready to grow with Tech Avenue Pro?
                        </h2>
                        <p className="mt-3 max-w-xl text-sm leading-6 text-white/80 md:text-base">
                            Get a premium website, stronger social presence, and
                            smarter booking/queue tools — built for your
                            business.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
                        <a
                            href="#contact"
                            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-medium text-neutral-900 hover:bg-white/90"
                        >
                            Book a Free Consultation
                        </a>
                        <a
                            href="#services"
                            className="inline-flex items-center justify-center rounded-xl border border-white/25 bg-transparent px-6 py-3 text-sm font-medium text-white hover:bg-white/10"
                        >
                            See Services
                        </a>
                    </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/70">
                    <span>✅ Websites</span>
                    <span>✅ Social & Digital Marketing</span>
                    <span>✅ Online Booking</span>
                    <span>✅ Live Queue</span>
                </div>
            </div>
        </div>
    );
}
