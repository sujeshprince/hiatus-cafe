import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope, Tiro_Devanagari_Hindi } from "next/font/google";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const tiroDevanagari = Tiro_Devanagari_Hindi({
  weight: "400",
  subsets: ["devanagari", "latin"],
  variable: "--font-hindi",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Hiatus Cafe — A Little Pause in a Busy World",
    template: "%s · Hiatus Cafe",
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "Hiatus Cafe",
    "Hiatus Cafe Gorakhpur",
    "cafe in Gorakhpur",
    "Daudpur cafe",
    "coffee shop Gorakhpur",
    "café Gorakhpur",
    "हिट्स कैफे",
  ],
  authors: [{ name: "Hiatus Cafe" }],
  creator: "Hiatus Cafe",
  publisher: "Hiatus Cafe",
  category: "restaurant",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    siteName: siteConfig.name,
    title: "Hiatus Cafe — A Little Pause in a Busy World",
    description: siteConfig.description,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hiatus Cafe — coffee, conversations and a little pause in Gorakhpur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hiatus Cafe — A Little Pause in a Busy World",
    description: siteConfig.description,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icon.svg",
  },
  formatDetection: {
    telephone: true,
    address: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1a100b",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${fraunces.variable} ${manrope.variable} ${tiroDevanagari.variable}`}
    >
      <body className="font-sans">
        <a
          href="#main"
          className="fixed left-4 top-4 z-[200] -translate-y-24 rounded-full bg-cream px-5 py-3 text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-espresso shadow-lg transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <ScrollProgress />
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <MobileActionBar />
        <div aria-hidden="true" className="grain-overlay" />
      </body>
    </html>
  );
}
