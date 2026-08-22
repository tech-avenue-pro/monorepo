import type { Metadata } from "next";
import { Baloo_2, Inter } from "next/font/google";
import "./globals.css";
import "@repo/styles/design-systems.css";
import "@repo/styles/animations.css";
import "@repo/styles/navigation.css";
import "@repo/styles/backgrounds.css";
import "./theme.css";

const baloo2 = Baloo_2({
    variable: "--font-heading",
    subsets: ["latin"],
    weight: ["500", "600", "700", "800"],
});

const inter = Inter({
    variable: "--font-body",
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Dine — Tandoori & Curry House",
    description:
        "Bold flavours, cooked over fire. Authentic tandoori, rich curries and fragrant biryani, made fresh every day.",
    openGraph: {
        title: "Dine — Tandoori & Curry House",
        description:
            "Bold flavours, cooked over fire. Authentic tandoori, rich curries and fragrant biryani, made fresh every day.",
        siteName: "Dine",
        type: "website",
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
                className={`${baloo2.variable} ${inter.variable} antialiased ds-bg-default`}
            >
                {children}
            </body>
        </html>
    );
}
