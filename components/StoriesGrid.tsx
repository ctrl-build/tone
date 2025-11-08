'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import StoriesFilter, { StoryFilter } from './StoriesFilter';

interface Story {
  id: string;
  slug: string;
  category: 'origin' | 'roaster' | 'brew';
  title: string;
  imageSrc: string;
  imageAlt: string;
  readTime: string;
}

const allStories: Story[] = [
  {
    id: '1',
    slug: 'tracing-pink-bourbon-huila',
    category: 'origin',
    title: 'Tracing the Pink Bourbon of Huila',
    imageSrc: '/assets/images/story-huila-pink-bourbon.webp',
    imageAlt: 'Coffee farmer in Huila, Colombia',
    readTime: '5 min read',
  },
  {
    id: '2',
    slug: 'nordic-approach-craft',
    category: 'roaster',
    title: 'Nordic Approach: A Philosophy of Precision',
    imageSrc: '/assets/images/story-nordic-approach.webp',
    imageAlt: 'Nordic Approach roastery',
    readTime: '6 min read',
  },
  {
    id: '3',
    slug: 'perfect-v60-technique',
    category: 'brew',
    title: 'The Art of the Perfect V60',
    imageSrc: '/assets/images/story-v60-technique.webp',
    imageAlt: 'V60 pour-over technique',
    readTime: '4 min read',
  },
  {
    id: '4',
    slug: 'ethiopian-yirgacheffe',
    category: 'origin',
    title: 'Ethiopian Yirgacheffe: The Birthplace of Coffee',
    imageSrc: '/assets/images/story-yirgacheffe.webp',
    imageAlt: 'Coffee plants in Yirgacheffe, Ethiopia',
    readTime: '7 min read',
  },
  {
    id: '5',
    slug: 'gardelli-italian-tradition',
    category: 'roaster',
    title: 'Gardelli: Italian Tradition Meets Innovation',
    imageSrc: '/assets/images/story-gardelli.webp',
    imageAlt: 'Gardelli roastery in Italy',
    readTime: '5 min read',
  },
  {
    id: '6',
    slug: 'espresso-extraction-science',
    category: 'brew',
    title: 'The Science of Espresso Extraction',
    imageSrc: '/assets/images/story-espresso-science.webp',
    imageAlt: 'Espresso extraction process',
    readTime: '6 min read',
  },
];

function filterStories(stories: Story[], filter: StoryFilter): Story[] {
  if (filter === 'all') return stories;
  return stories.filter((story) => story.category === filter);
}

function StoryCard({ story, index }: { story: Story; index: number }) {
  const categoryLabels: Record<string, string> = {
    origin: 'ORIGIN',
    roaster: 'ROASTER',
    brew: 'BREW GUIDE',
  };
  const isEven = index % 2 === 0;
  const desktopAlignment = isEven ? 'xl:text-left' : 'xl:text-right';

  return (
    <Link href={`/stories/${story.slug}`}>
      <motion.div
        className="group cursor-pointer bg-white overflow-hidden transition-shadow duration-300 hover:shadow-lg"
        whileHover={{ y: -3 }}
        transition={{ duration: 0.2 }}
      >
        <div className="relative w-full h-[400px] md:h-[500px] xl:h-[600px] overflow-hidden">
          <div className={`absolute top-4 z-10 ${isEven ? 'left-4' : 'xl:left-auto xl:right-4 left-4'}`}>
            <span className="text-xs tracking-[0.1em] uppercase font-sans text-foreground/60 bg-white/90 px-3 py-1">
              {categoryLabels[story.category]}
            </span>
          </div>

          <motion.div
            className="absolute inset-0"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] as const }}
          >
            <Image
              src={story.imageSrc}
              alt={story.imageAlt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />
          </motion.div>
        </div>

        <div className={`p-6 md:p-8 ${desktopAlignment}`}>
          <h3
            className="text-2xl md:text-3xl font-tiempos mb-3 group-hover:text-primary-accent transition-colors duration-300"
            style={{ fontFamily: 'var(--font-tiempos-text)' }}
          >
            {story.title}
          </h3>

          <p className="text-sm text-foreground/60 font-sans">
            {story.readTime}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}

export default function StoriesGrid() {
  const [activeFilter, setActiveFilter] = useState<StoryFilter>('all');
  const filteredStories = filterStories(allStories, activeFilter);
  const cardVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: [0.4, 0, 1, 1] as const,
      },
    },
  };

  return (
    <section className="py-8 md:py-12 px-6 md:px-8 xl:px-12 bg-primary-background">
      <div className="max-w-7xl mx-auto">
        <StoriesFilter
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
        />

        <div className="mt-12 md:mt-16">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 xl:gap-12"
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                  },
                },
                exit: {
                  opacity: 0,
                  transition: {
                    staggerChildren: 0.05,
                    staggerDirection: -1,
                  },
                },
              }}
            >
              {filteredStories.map((story, index) => (
                <motion.div
                  key={story.id}
                  variants={cardVariants}
                >
                  <StoryCard story={story} index={index} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

