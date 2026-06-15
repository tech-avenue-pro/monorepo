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
    weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
    variable: "--font-body",
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

const parisienne = Parisienne({
    variable: "--font-accent",
    subsets: ["latin"],
    weight: ["400"],
});

export const metadata: Metadata = {
    title: "Annie Ali — Life Coach for Women",
    description:
        "ICF Certified life coach Annie Ali helps thoughtful women cut through the noise, rebuild confidence, and design a life that feels honest from the inside out.",
    openGraph: {
        title: "Annie Ali — Life Coach for Women",
        description:
            "ICF Certified life coach helping women find clarity, confidence, and a life that feels truly their own.",
        url: "https://annieali.ca",
        siteName: "Annie Ali Coaching",
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
                className={`${playfair.variable} ${inter.variable} ${parisienne.variable} antialiased ds-bg-default`}
            >
                {children}
            </body>
        </html>
    );
}
