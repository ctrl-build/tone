'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface RelatedStory {
  slug: string;
  title: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
}

interface StoryRelatedProps {
  relatedStories: RelatedStory[];
}

export default function StoryRelated({ relatedStories }: StoryRelatedProps) {
  if (relatedStories.length === 0) return null;

  const categoryLabels: Record<string, string> = {
    origin: 'ORIGIN',
    roaster: 'ROASTER',
    brew: 'BREW GUIDE',
  };

  return (
    <section className="py-16 md:py-20 xl:py-24 px-6 md:px-8 xl:px-12 bg-primary-background border-t border-foreground/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-gt mb-12 md:mb-16">
          Keep Reading:
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {relatedStories.map((story) => (
            <Link
              key={story.slug}
              href={`/stories/${story.slug}`}
              className="group"
            >
              <div className="space-y-4">
                <div className="relative w-full h-[300px] md:h-[400px] overflow-hidden">
                  <motion.div
                    className="absolute inset-0"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={story.imageSrc}
                      alt={story.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </motion.div>
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-xs tracking-[0.1em] uppercase font-sans text-foreground/60 bg-white/90 px-3 py-1">
                      {categoryLabels[story.category] || story.category}
                    </span>
                  </div>
                </div>

                <h3
                  className="text-2xl md:text-3xl font-tiempos group-hover:text-primary-accent transition-colors duration-300"
                  style={{ fontFamily: 'var(--font-tiempos-text)' }}
                >
                  {story.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

