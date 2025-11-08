'use client';

import Image from 'next/image';

export default function VisitHero() {
  return (
    <section className="relative w-full h-[60vh] md:h-[70vh] xl:h-[80vh] overflow-hidden">
      <Image
        src="/assets/images/philosophy-space-1.webp"
        alt="Casa Albă exterior - Tone coffee café"
        fill
        className="object-cover"
        sizes="100vw"
        priority
      />
      <div className="absolute inset-0 bg-black/30" />
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <h1
          className="text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl font-medium text-white tracking-tight"
          style={{ fontFamily: 'var(--font-gt-america-extended)' }}
        >
          Visit.
        </h1>
      </div>
    </section>
  );
}

