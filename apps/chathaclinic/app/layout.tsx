import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import "@repo/styles/design-systems.css";
import "@repo/styles/animations.css";
import "@repo/styles/navigation.css";
import "@repo/styles/backgrounds.css";
import "./theme.css";

const poppins = Poppins({
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
    title: "Chatha Children Clinic — Dr. Nadeem Chatha",
    description:
        "Experienced pediatrician Dr. Nadeem Chatha providing compassionate care for children in Lahore. Specializing in infectious diseases, allergies, and digestive conditions.",
    openGraph: {
        title: "Chatha Children Clinic — Dr. Nadeem Chatha",
        description:
            "Experienced pediatrician providing compassionate care for children in Lahore.",
        url: "https://chathaclinic.com",
        siteName: "Chatha Children Clinic",
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
                className={`${poppins.variable} ${inter.variable} antialiased ds-bg-default`}
            >
                {children}
            </body>
        </html>
    );
}
