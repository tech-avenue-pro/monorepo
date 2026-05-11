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
    weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
    variable: "--font-body",
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Old Ravians Academy — Online Tutoring & Classes",
    description:
        "High-quality online tutoring for O Levels, A Levels, and Matric students. Expert teachers in Science, Math, Commerce, and English. Based in Lahore.",
    openGraph: {
        title: "Old Ravians Academy — Online Tutoring & Classes",
        description:
            "High-quality online tutoring for O Levels, A Levels, and Matric students.",
        url: "https://www.oldravians.com",
        siteName: "Old Ravians Academy",
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
