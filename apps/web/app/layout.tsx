import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import "@repo/styles/design-systems.css";
import "@repo/styles/animations.css";
import "@repo/styles/navigation.css";
import "@repo/styles/backgrounds.css";
import { getMarketConfig } from "./content/markets/config";

const market = getMarketConfig();

const archivo = Archivo({
    variable: "--font-heading",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
    variable: "--font-body",
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    metadataBase: new URL(market.siteUrl),
    title: "Tech Avenue Pro",
    description: "Your digital partner for innovative tech solutions.",
    openGraph: {
        title: "Tech Avenue Pro",
        description: "Your digital partner for innovative tech solutions.",
        url: market.siteUrl,
        locale: market.locale.replace("-", "_"),
        siteName: "Tech Avenue Pro",
        type: "website",
        images: [
            {
                url: "/images/hero-image/hero-image-lg@3x.jpg",
                alt: "Tech Avenue Pro",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang={market.locale}>
            <body
                className={`${archivo.variable} ${inter.variable} antialiased ds-bg-default`}
            >
                {children}
            </body>
        </html>
    );
}
