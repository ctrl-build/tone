import type { Metadata } from "next";
import "./globals.css";
import { gtAmericaExtended, inter, tiemposText } from "@/lib/fonts";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://tone.coffee'),
  title: {
    default: "Tone Coffee Shop | Specialty Coffee & Design in Craiova",
    template: "%s | Tone"
  },
  description: "A sensory reset. Architectural design meets single-origin specialty coffee in Casa Albă, Craiova. Find your signal, reconnect with your thoughts.",
  keywords: ["specialty coffee", "Craiova", "coffee shop", "single origin", "artisan coffee", "Casa Albă", "Romania"],
  authors: [{ name: "Tone" }],
  creator: "Tone",
  publisher: "Tone",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Tone",
    title: "Tone Coffee Shop | Specialty Coffee & Design in Craiova",
    description: "A sensory reset. Architectural design meets single-origin specialty coffee in Casa Albă, Craiova.",
    images: [
      {
        url: "/assets/images/hero-fallback.webp",
        width: 1200,
        height: 630,
        alt: "Tone Coffee Shop interior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tone Coffee Shop | Specialty Coffee & Design in Craiova",
    description: "A sensory reset. Architectural design meets single-origin specialty coffee in Casa Albă, Craiova.",
    images: ["/assets/images/hero-fallback.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${gtAmericaExtended.variable} ${inter.variable} ${tiemposText.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
