import React from "react";

export default function Footer() {
    return (
        <footer>
            <div className="mx-auto">
                <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <p className="text-lg font-semibold tracking-tight">
                            Tech Avenue Pro
                        </p>
                        <p className="mt-2 text-sm text-neutral-400">
                            Building thoughtful digital products.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-4 text-sm">
                        <a
                            href="#"
                            className="text-neutral-300 transition hover:text-white"
                        >
                            About
                        </a>
                        <a
                            href="#"
                            className="text-neutral-300 transition hover:text-white"
                        >
                            Work
                        </a>
                        <a
                            href="#"
                            className="text-neutral-300 transition hover:text-white"
                        >
                            Contact
                        </a>
                        <a
                            href="#"
                            className="text-neutral-300 transition hover:text-white"
                        >
                            Privacy
                        </a>
                    </div>
                </div>

                <div className="mt-8 flex flex-col gap-4 border-t border-neutral-800 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
                    <p>
                        © {new Date().getFullYear()} Tech Avenue Pro. All rights
                        reserved.
                    </p>
                    <div className="flex gap-3">
                        <a href="#" className="hover:text-neutral-300">
                            Twitter
                        </a>
                        <a href="#" className="hover:text-neutral-300">
                            LinkedIn
                        </a>
                        <a href="#" className="hover:text-neutral-300">
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
