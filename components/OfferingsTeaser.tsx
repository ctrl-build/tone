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
    content: 'THE SOURCE',
    className: 'text-xs tracking-[0.1em] uppercase mb-4 font-sans',
  },
  {
    type: 'headline',
    content: 'From Single-Origin to Perfect Espresso.',
    className: 'text-3xl md:text-4xl xl:text-5xl font-gt mb-6',
  },
  {
    type: 'body',
    content:
      'We meticulously source our beans from Europe\'s top roasters. A rotating selection of seasonal single-origin filter and our house espresso, brewed with precision.',
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

interface OfferingsTeaserProps {
  imageSrc?: string;
  imageAlt?: string;
}

export default function OfferingsTeaser({
  imageSrc = '/assets/images/offerings-teaser.webp',
  imageAlt = 'Tone coffee - Macro texture of espresso crema',
}: OfferingsTeaserProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: '-100px 0px',
  });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const imageParallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%']);
  const textParallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 xl:py-32 px-6 md:px-8 xl:px-12 bg-primary-background overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="hidden md:block relative min-h-[600px] md:min-h-[700px] xl:min-h-[800px]">
          <motion.div
            className="absolute left-0 w-[45%] md:w-[45%] xl:w-[40%]"
            style={{
              y: imageParallaxY,
              willChange: 'transform',
            }}
          >
            <div className="relative w-full aspect-[3/4]">
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
                sizes="(max-width: 1200px) 45vw, 40vw"
              />
            </div>
          </motion.div>

          <motion.div
            className="absolute right-0 w-[50%] md:w-[50%] xl:w-[45%] top-[30%] md:top-[25%] xl:top-[30%]"
            style={{
              y: textParallaxY,
              willChange: 'transform',
            }}
          >
            <motion.div
              className="flex flex-col items-end text-right"
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
                  href="/offerings"
                  className="nav-link text-sm tracking-[0.08em] uppercase inline-block font-sans"
                >
                  View our Offerings
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <div className="md:hidden">
          <div className="relative w-full aspect-[3/4] mb-8 overflow-hidden">
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
                href="/offerings"
                className="nav-link text-sm tracking-[0.08em] uppercase inline-block font-sans"
              >
                View our Offerings
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

