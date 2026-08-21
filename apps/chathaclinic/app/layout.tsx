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
                <Script id="meta-pixel" strategy="afterInteractive">
                    {`
                        !function(f,b,e,v,n,t,s)
                        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                        n.queue=[];t=b.createElement(e);t.async=!0;
                        t.src=v;s=b.getElementsByTagName(e)[0];
                        s.parentNode.insertBefore(t,s)}(window, document,'script',
                        'https://connect.facebook.net/en_US/fbevents.js');
                        fbq('init', '908020751610622');
                        fbq('track', 'PageView');
                    `}
                </Script>
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: "none" }}
                        src="https://www.facebook.com/tr?id=908020751610622&ev=PageView&noscript=1"
                        alt=""
                    />
                </noscript>
                {children}
            </body>
        </html>
    );
}
