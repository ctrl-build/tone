'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import {
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';

interface StoryHeroProps {
  category: string;
  author: string;
  date: string;
  title: string;
  readTime: string;
  leadParagraph: string;
  heroImageSrc: string;
  heroImageAlt: string;
}

export default function StoryHero({
  category,
  author,
  date,
  title,
  readTime,
  leadParagraph,
  heroImageSrc,
  heroImageAlt,
}: StoryHeroProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const blockVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  const categoryLabels: Record<string, string> = {
    origin: 'ORIGIN',
    roaster: 'ROASTER SPOTLIGHT',
    brew: 'BREW GUIDE',
  };

  return (
    <section ref={sectionRef} className="relative w-full h-screen overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src={heroImageSrc}
          alt={heroImageAlt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </motion.div>

      <div className="relative z-10 h-full flex flex-col justify-end">
        <div className="max-w-7xl mx-auto w-full px-6 md:px-8 xl:px-12 pb-16 md:pb-24">
          <motion.div
            className="absolute top-8 left-6 md:left-8 xl:left-12"
            variants={blockVariants}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
          >
            <span className="text-xs tracking-[0.1em] uppercase font-sans text-white bg-white/20 backdrop-blur-sm px-4 py-2">
              {categoryLabels[category] || category}
            </span>
          </motion.div>

          <div className="max-w-4xl">
            <motion.div
              className="text-sm text-white/80 font-sans mb-4"
              variants={blockVariants}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
            >
              {author} • {date}
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl font-tiempos text-white mb-4 md:mb-6"
              style={{ fontFamily: 'var(--font-tiempos-text)' }}
              variants={blockVariants}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
            >
              {title}
            </motion.h1>

            <motion.p
              className="text-sm text-white/70 font-sans mb-8 md:mb-10"
              variants={blockVariants}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
            >
              {readTime}
            </motion.p>

            <motion.p
              className="text-xl md:text-2xl xl:text-3xl font-tiempos italic text-white/90 leading-relaxed max-w-3xl"
              style={{ fontFamily: 'var(--font-tiempos-text)' }}
              variants={blockVariants}
              initial="hidden"
              animate={isVisible ? 'visible' : 'hidden'}
            >
              {leadParagraph}
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}

