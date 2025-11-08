import type { Metadata } from 'next';
import Header from '@/components/Header';
import StoriesHero from '@/components/StoriesHero';
import StoriesGrid from '@/components/StoriesGrid';
import StoriesCTA from '@/components/StoriesCTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Journal | Origin Stories & Brew Guides",
  description: "An archive of long-form articles covering coffee origins, roaster spotlights, and detailed brewing methods.",
  alternates: {
    canonical: "/stories",
  },
  openGraph: {
    title: "Journal | Origin Stories & Brew Guides",
    description: "An archive of long-form articles covering coffee origins, roaster spotlights, and detailed brewing methods.",
    url: "/stories",
    type: "website",
    images: [
      {
        url: "/assets/images/story-huila-pink-bourbon.webp",
        width: 1200,
        height: 630,
        alt: "Coffee stories archive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Journal | Origin Stories & Brew Guides",
    description: "An archive of long-form articles covering coffee origins, roaster spotlights, and detailed brewing methods.",
    images: ["/assets/images/story-huila-pink-bourbon.webp"],
  },
};

export default function StoriesPage() {
  return (
    <>
      <Header isHomepage={false} />
      <main>
        <StoriesHero />
        <StoriesGrid />
        <StoriesCTA />
      </main>
      <Footer />
    </>
  );
}



