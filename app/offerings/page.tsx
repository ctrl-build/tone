import type { Metadata } from 'next';
import Header from '@/components/Header';
import OfferingsHero from '@/components/OfferingsHero';
import OfferingsGrid from '@/components/OfferingsGrid';
import OfferingsInterlude from '@/components/OfferingsInterlude';
import OfferingsCTA from '@/components/OfferingsCTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Menu | Specialty Coffee & Bakery Collection",
  description: "View our curated collection of seasonal single-origin beans, espresso offerings, and artisan bakery items.",
  alternates: {
    canonical: "/offerings",
  },
  openGraph: {
    title: "Menu | Specialty Coffee & Bakery Collection",
    description: "View our curated collection of seasonal single-origin beans, espresso offerings, and artisan bakery items.",
    url: "/offerings",
    images: [
      {
        url: "/assets/images/offerings-teaser.webp",
        width: 1200,
        height: 630,
        alt: "Tone coffee - Macro texture of espresso crema",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Menu | Specialty Coffee & Bakery Collection",
    description: "View our curated collection of seasonal single-origin beans, espresso offerings, and artisan bakery items.",
    images: ["/assets/images/offerings-teaser.webp"],
  },
};

export default function OfferingsPage() {
  return (
    <>
      <Header isHomepage={false} />
      <main>
        <OfferingsHero />
        <OfferingsGrid />
        <OfferingsInterlude />
        <OfferingsCTA />
      </main>
      <Footer />
    </>
  );
}



