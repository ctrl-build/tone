'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from 'framer-motion';

const textElements = [
  {
    type: 'eyebrow',
    content: 'THE SPACE',
    className: 'text-xs tracking-[0.1em] uppercase mb-4 font-sans',
  },
  {
    type: 'headline',
    content: 'An Intersection of Concrete and Light.',
    className: 'text-3xl md:text-4xl xl:text-5xl font-gt mb-6',
  },
  {
    type: 'body',
    content:
      'Walking into Tone is an act of recalibration. The aesthetic is a deliberate study in modern Brutalism and stark minimalism. We designed a space that inspires focus, stillness, and intention.',
    className: 'text-base md:text-lg leading-relaxed mb-8 font-sans',
  },
];

const textContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const textChildVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

interface PhilosophyTeaserProps {
  imageSrc?: string;
  imageAlt?: string;
}

export default function PhilosophyTeaser({
  imageSrc = '/assets/images/philosophy-teaser.webp',
  imageAlt = 'Tone interior - Concrete and Light',
}: PhilosophyTeaserProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: '-100px 0px',
  });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 xl:py-32 px-6 md:px-8 xl:px-12 bg-primary-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="hidden md:grid md:grid-cols-[50%_1fr_50%] xl:grid-cols-[40%_1fr_55%] gap-6 xl:gap-12 items-center">
          <motion.div
            className="flex flex-col"
            variants={textContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {textElements.map((element) => (
              <motion.div key={element.content} variants={textChildVariants}>
                <div className={element.className}>{element.content}</div>
              </motion.div>
            ))}

            <motion.div variants={textChildVariants}>
              <Link
                href="/philosophy"
                className="nav-link text-sm tracking-[0.08em] uppercase inline-block font-sans"
              >
                Explore our Philosophy
              </Link>
            </motion.div>
          </motion.div>

          <div className="hidden md:block" />

          <motion.div
            className="relative overflow-hidden"
            style={{
              y: parallaxY,
              willChange: 'transform',
            }}
          >
            <div className="relative w-full h-[400px] md:h-[500px] xl:h-[600px]">
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                className={`object-cover ${
                  isInView ? 'animate-mask-wipe' : ''
                }`}
                style={{
                  clipPath: isInView ? undefined : 'inset(0 100% 0 0)',
                }}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 55vw"
              />
            </div>
          </motion.div>
        </div>

        <div className="md:hidden">
          <div className="relative h-[300px] mb-8 overflow-hidden">
            <Image
              src={imageSrc}
              alt={imageAlt}
              fill
              className={`object-cover ${
                isInView ? 'animate-mask-wipe' : ''
              }`}
              style={{
                clipPath: isInView ? undefined : 'inset(0 100% 0 0)',
              }}
              sizes="100vw"
            />
          </div>

          <motion.div
            className="text-left"
            variants={textContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
          >
            {textElements.map((element) => (
              <motion.div key={element.content} variants={textChildVariants}>
                <div className={element.className}>{element.content}</div>
              </motion.div>
            ))}

            <motion.div variants={textChildVariants}>
              <Link
                href="/philosophy"
                className="nav-link text-sm tracking-[0.08em] uppercase inline-block font-sans"
              >
                Explore our Philosophy
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
