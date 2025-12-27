import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import GoogleAnalytics from "../components/GoogleAnalytics";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? "G-8WMDW9B503";
const CLARITY_PROJECT_ID = process.env.NEXT_PUBLIC_CLARITY_ID ?? "uryp09hv7f";

export const metadata: Metadata = {
  metadataBase: new URL("https://jujutsuzero.app"),
  title: "Jujutsu Zero Codes (Dec 2025) - Wiki, Guides & Tier List",
  description: "Get the latest Jujutsu Zero codes for free spins, resets, and cash. Complete Wiki guide for Cursed Techniques, Clan Tier List, and game updates.",
  keywords: ["Jujutsu Zero Codes", "Jujutsu Zero Roblox", "Jujutsu Zero Wiki", "Jujutsu Zero Tier List", "Jujutsu Zero Guides"],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jujutsu Zero Codes (Dec 2025) - Wiki, Guides & Tier List",
    description: "Get the latest Jujutsu Zero codes for free spins, resets, and cash. Complete Wiki guide for Cursed Techniques, Clan Tier List, and game updates.",
    url: "/",
    siteName: "Jujutsu Zero Codes",
    type: "website",
    images: [
      {
        url: "/redeem-guide.png",
        width: 1024,
        height: 574,
        alt: "How to redeem Jujutsu Zero codes",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jujutsu Zero Codes (Dec 2025) - Wiki, Guides & Tier List",
    description: "Get the latest Jujutsu Zero codes for free spins, resets, and cash. Complete Wiki guide for Cursed Techniques, Clan Tier List, and game updates.",
    images: ["/redeem-guide.png"],
  },
  icons: {
    icon: '/favicon.ico', // Assuming default favicon exists or will be replaced
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        {GA_MEASUREMENT_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-gtag" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
            <Suspense fallback={null}>
              <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
            </Suspense>
          </>
        ) : null}

        {CLARITY_PROJECT_ID ? (
          <Script id="ms-clarity" strategy="afterInteractive">
            {`
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
            `}
          </Script>
        ) : null}

        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
