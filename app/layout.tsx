import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        <Navbar />
        <main className="flex-grow pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
