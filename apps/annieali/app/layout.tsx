import type { Metadata } from "next";
import { Playfair_Display, Inter, Parisienne } from "next/font/google";
import "./globals.css";
import "@repo/styles/design-systems.css";
import "@repo/styles/animations.css";
import "@repo/styles/navigation.css";
import "@repo/styles/backgrounds.css";
import "./theme.css";

const playfair = Playfair_Display({
    variable: "--font-heading",
    subsets: ["latin"],
    weight: ["400", "700"],
});

const inter = Inter({
    variable: "--font-body",
    weight: ["400", "700"],
    subsets: ["latin"],
});

const parisienne = Parisienne({
    variable: "--font-accent",
    subsets: ["latin"],
    weight: ["400"],
});

export const metadata: Metadata = {
    title: "Annie Ali | Life Coaching for Clarity, Confidence & Growth",

    description:
        "Personalized life coaching to help you gain clarity, build confidence, navigate life's transitions, and create meaningful, lasting change.",

    openGraph: {
        title: "Annie Ali | Life Coaching for Clarity, Confidence & Growth",

        description:
            "Gain clarity, build confidence, and create meaningful change through personalized life coaching with Annie Ali.",

        url: "https://annieali.ca",

        siteName: "Annie Ali Coaching",

        type: "website",

        images: [
            {
                url: "/images/hero-background.webp",
                width: 1200,
                height: 630,
                alt: "Annie Ali Coaching",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",
        title: "Annie Ali | Life Coaching for Clarity, Confidence & Growth",
        description:
            "Gain clarity, build confidence, and create meaningful change through personalized life coaching with Annie Ali.",
        images: ["/images/hero-background.webp"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${playfair.variable} ${inter.variable} ${parisienne.variable} antialiased ds-bg-default`}
            >
                {children}
            </body>
        </html>
    );
}
