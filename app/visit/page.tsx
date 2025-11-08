import type { Metadata } from 'next';
import Header from '@/components/Header';
import VisitHero from '@/components/VisitHero';
import VisitLocation from '@/components/VisitLocation';
import VisitHoursContact from '@/components/VisitHoursContact';
import VisitFinalCTA from '@/components/VisitFinalCTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Visit Us | Location & Opening Hours (Craiova)",
  description: "Find the location, hours, and contact details for Tone Coffee Shop in the historic Casa Albă building, Craiova, Romania.",
  alternates: {
    canonical: "/visit",
  },
  openGraph: {
    title: "Visit Us | Location & Opening Hours (Craiova)",
    description: "Find the location, hours, and contact details for Tone Coffee Shop in the historic Casa Albă building, Craiova, Romania.",
    url: "/visit",
    images: [
      {
        url: "/assets/images/philosophy-space-1.webp",
        width: 1200,
        height: 630,
        alt: "Casa Albă exterior - Tone coffee café",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Visit Us | Location & Opening Hours (Craiova)",
    description: "Find the location, hours, and contact details for Tone Coffee Shop in the historic Casa Albă building, Craiova, Romania.",
    images: ["/assets/images/philosophy-space-1.webp"],
  },
};

export default function VisitPage() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tone.coffee';

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tone",
    "image": `${siteUrl}/assets/images/typography-logo.png`,
    "@id": `${siteUrl}/visit`,
    "url": `${siteUrl}/visit`,
    "telephone": "+40712345678",
    "email": "hello@tone.coffee",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Strada Mihai Viteazul 10",
      "addressLocality": "Craiova",
      "addressRegion": "Dolj",
      "postalCode": "200003",
      "addressCountry": "RO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.3196,
      "longitude": 23.7978
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "$$"
  };

  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "CafeOrCoffeeShop",
    "name": "Tone",
    "image": `${siteUrl}/assets/images/philosophy-space-1.webp`,
    "@id": `${siteUrl}/visit#restaurant`,
    "url": `${siteUrl}/visit`,
    "telephone": "+40712345678",
    "email": "hello@tone.coffee",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Strada Mihai Viteazul 10",
      "addressLocality": "Craiova",
      "addressRegion": "Dolj",
      "postalCode": "200003",
      "addressCountry": "RO"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 44.3196,
      "longitude": 23.7978
    },
    "servesCuisine": "Coffee",
    "priceRange": "$$"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantSchema) }}
      />
      <Header isHomepage={false} />
      <main>
        <VisitHero />
        <VisitLocation />
        <VisitHoursContact />
        <VisitFinalCTA />
      </main>
      <Footer />
    </>
  );
}



