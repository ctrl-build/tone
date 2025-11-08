import type { Metadata } from 'next';
import Header from '@/components/Header';
import PhilosophyHero from '@/components/PhilosophyHero';
import PhilosophyThesis from '@/components/PhilosophyThesis';
import PhilosophySpace from '@/components/PhilosophySpace';
import PhilosophyVisualPause from '@/components/PhilosophyVisualPause';
import PhilosophySource from '@/components/PhilosophySource';
import PhilosophyRoasters from '@/components/PhilosophyRoasters';
import PhilosophyCTA from '@/components/PhilosophyCTA';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Philosophy | Considered Coffee, Crafted Space",
  description: "Our manifesto on deliberate indulgence. The architecture, the materials, and the source behind the Tone ritual.",
  alternates: {
    canonical: "/philosophy",
  },
  openGraph: {
    title: "Philosophy | Considered Coffee, Crafted Space",
    description: "Our manifesto on deliberate indulgence. The architecture, the materials, and the source behind the Tone ritual.",
    url: "/philosophy",
    images: [
      {
        url: "/assets/images/philosophy-space-1.webp",
        width: 1200,
        height: 630,
        alt: "Tone interior - Casa Albă architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Philosophy | Considered Coffee, Crafted Space",
    description: "Our manifesto on deliberate indulgence. The architecture, the materials, and the source behind the Tone ritual.",
    images: ["/assets/images/philosophy-space-1.webp"],
  },
};

export default function PhilosophyPage() {
  return (
    <>
      <Header isHomepage={false} />
      <main>
        <PhilosophyHero />
        <PhilosophyThesis />
        <PhilosophySpace />
        <PhilosophyVisualPause />
        <PhilosophySource />
        <PhilosophyRoasters />
        <PhilosophyCTA />
      </main>
      <Footer />
    </>
  );
}
