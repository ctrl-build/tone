import type { Metadata } from 'next';
import Header from '@/components/Header';
import HomepageLogotype from '@/components/HomepageLogotype';
import HomepageNavColumn from '@/components/HomepageNavColumn';
import HeroVideo from '@/components/HeroVideo';
import HeroManifesto from '@/components/HeroManifesto';
import ScrollHint from '@/components/ScrollHint';
import IntroductoryText from '@/components/IntroductoryText';
import PhilosophyTeaser from '@/components/PhilosophyTeaser';
import OfferingsTeaser from '@/components/OfferingsTeaser';
import VisitCTA from '@/components/VisitCTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Tone Coffee Shop | Specialty Coffee & Design in Craiova",
  description: "Architectural design meets single-origin specialty coffee in Casa Albă, Craiova. Explore our craft, space, and offerings.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tone Coffee Shop | Specialty Coffee & Design in Craiova",
    description: "Architectural design meets single-origin specialty coffee in Casa Albă, Craiova. Explore our craft, space, and offerings.",
    url: "/",
    images: [
      {
        url: "/assets/images/hero-fallback.webp",
        width: 1200,
        height: 630,
        alt: "Tone Coffee Shop interior - Casa Albă",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tone Coffee Shop | Specialty Coffee & Design in Craiova",
    description: "Architectural design meets single-origin specialty coffee in Casa Albă, Craiova.",
    images: ["/assets/images/hero-fallback.webp"],
  },
};

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tone.coffee';

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Tone",
    "image": `${siteUrl}/assets/images/typography-logo.png`,
    "@id": siteUrl,
    "url": siteUrl,
    "telephone": "+40712345678",
    "email": "hello@tone.coffee",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Strada Mihai Viteazul 10",
      "addressLocality": "Craiova",
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
    "image": `${siteUrl}/assets/images/hero-fallback.webp`,
    "@id": `${siteUrl}#restaurant`,
    "url": siteUrl,
    "telephone": "+40712345678",
    "email": "hello@tone.coffee",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Strada Mihai Viteazul 10",
      "addressLocality": "Craiova",
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
      <Header isHomepage={true} />
      <main>
        <div className="min-h-screen flex flex-col xl:flex-row">
          <div className="w-full xl:w-[70%] h-screen relative overflow-hidden">
            <HeroVideo />
            <div className="hidden xl:block">
              <HomepageLogotype />
            </div>
            <div className="xl:hidden">
              <HeroManifesto isMobile={true} />
            </div>
            <div className="xl:hidden">
              <ScrollHint isMobile={true} />
            </div>
          </div>
          <div className="hidden xl:block w-[30%] h-screen bg-[#F9F8F7] relative">
            <HomepageNavColumn />
            <HeroManifesto isMobile={false} />
            <ScrollHint isMobile={false} />
          </div>
        </div>
        <IntroductoryText />
        <PhilosophyTeaser />
        <OfferingsTeaser />
        <VisitCTA />
      </main>
      <Footer />
    </>
  );
}
