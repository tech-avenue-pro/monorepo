import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import Script from "next/script";
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
    title: "Flavour Fusion — Catering, Reimagined",
    description:
        "Distinct flavours. Thoughtful presentation. Elevated catering experiences for small gatherings in Lahore.",
    openGraph: {
        title: "Flavour Fusion — Catering, Reimagined",
        description:
            "Distinct flavours. Thoughtful presentation. Elevated catering experiences for small gatherings.",
        url: "https://flavourfusion.org",
        siteName: "Flavour Fusion",
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
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=AW-18155770179"
                    strategy="afterInteractive"
                />
                <Script id="google-ads-config" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'AW-18155770179');
                    `}
                </Script>
            </body>
        </html>
    );
}
