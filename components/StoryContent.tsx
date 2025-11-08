'use client';

import Image from 'next/image';
import { ReactNode } from 'react';

interface StoryContentProps {
  content: ReactNode;
  pullQuotes?: string[];
  images?: Array<{ src: string; alt: string; isFullWidth?: boolean }>;
}

export default function StoryContent({
  content,
  pullQuotes = [],
  images = [],
}: StoryContentProps) {
  const inlineImages = images.filter((img) => !img.isFullWidth);
  const fullWidthImages = images.filter((img) => img.isFullWidth);

  return (
    <section className="py-12 md:py-16 xl:py-20 bg-primary-background">
      <div className="max-w-[700px] mx-auto px-[5%] md:px-8 xl:px-12">
        <article
          className="prose prose-lg max-w-none"
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '1.125rem',
            lineHeight: '1.7',
            color: '#242424',
          }}
        >
          <div className="space-y-6">
            {content}
          </div>
        </article>

        {inlineImages.map((image, index) => (
          <div
            key={`inline-${index}`}
            className="my-12 md:my-16 w-full"
          >
            <div className="relative w-full h-[400px] md:h-[500px] xl:h-[600px]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 700px"
              />
            </div>
          </div>
        ))}
      </div>

      {fullWidthImages.map((image, index) => (
        <div
          key={`fullwidth-${index}`}
          className="my-16 md:my-20 w-full"
        >
          <div className="relative w-full h-[400px] md:h-[500px] xl:h-[600px]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      ))}

      {pullQuotes.map((quote, index) => (
        <div
          key={index}
          className="my-16 md:my-20 w-full px-[5%] md:px-8 xl:px-12"
        >
          <blockquote
            className="text-3xl md:text-4xl xl:text-5xl font-tiempos italic text-center text-foreground/90 py-12 md:py-16 max-w-7xl mx-auto"
            style={{ fontFamily: 'var(--font-tiempos-text)' }}
          >
            "{quote}"
          </blockquote>
        </div>
      ))}
    </section>
  );
}

export function StoryBlockquote({ children, source }: { children: ReactNode; source?: string }) {
  return (
    <blockquote className="border-l-4 border-primary-accent pl-6 md:pl-8 my-8 md:my-10">
      <p className="text-lg md:text-xl font-tiempos italic text-foreground/80 mb-2" style={{ fontFamily: 'var(--font-tiempos-text)' }}>
        {children}
      </p>
      {source && (
        <cite className="text-sm text-foreground/60 font-sans not-italic">
          — {source}
        </cite>
      )}
    </blockquote>
  );
}

