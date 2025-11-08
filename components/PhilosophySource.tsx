'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from 'framer-motion';

interface SourceBlock {
  imageSrc: string;
  imageAlt: string;
  text: string;
  imagePosition: 'left' | 'right';
}

interface PhilosophySourceProps {
  blocks?: SourceBlock[];
}

const defaultBlocks: SourceBlock[] = [
  {
    imageSrc: '/assets/images/philosophy-source-1.webp',
    imageAlt: 'Green coffee beans - Single origin',
    text: 'Our philosophy is clarity. This principle guides everything. Our menu is curated and concise. We don\'t have a dozen options; we have the right ones, perfected. Our baristas are not just technicians; they are guides, fluent in the story of every bean.',
    imagePosition: 'right',
  },
  {
    imageSrc: '/assets/images/philosophy-source-2.webp',
    imageAlt: 'Roaster bag - Craft relationships',
    text: 'When the visual palate is cleansed, your other senses awaken. The aroma of the single-origin bean being ground becomes sharper. The subtle, acidic brightness of a pour-over becomes the most vibrant "color" in the room. Your cup is presented without fanfare, a perfect execution of a simple, beautiful craft.',
    imagePosition: 'left',
  },
];

export default function PhilosophySource({
  blocks = defaultBlocks,
}: PhilosophySourceProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: '-100px 0px',
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

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

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 xl:py-32 px-6 md:px-8 xl:px-12 bg-primary-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <div className="text-xs tracking-[0.1em] uppercase mb-4 font-sans">
            CHAPTER II: THE SOURCE
          </div>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-gt mb-8">
            Crafted by Hand, Sourced with Intent.
          </h2>
        </div>

        <motion.div
          className="space-y-16 md:space-y-24"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {blocks.map((block, index) => (
            <SourceBlock
              key={index}
              block={block}
              variants={blockVariants}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function SourceBlock({
  block,
  variants,
  index,
}: {
  block: SourceBlock;
  variants: any;
  index: number;
}) {
  const blockRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const isInView = useInView(blockRef, {
    once: false,
    margin: '-10% 0px',
  });

  useEffect(() => {
    const checkViewport = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  const { scrollYProgress } = useScroll({
    target: blockRef,
    offset: ['start end', 'end start'],
  });

  const imageParallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);
  const textParallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '10%']);

  const isImageLeft = block.imagePosition === 'left';

  return (
    <motion.div
      ref={blockRef}
      className="grid grid-cols-1 md:grid-cols-2 gap-8 xl:gap-12 items-center"
      variants={variants}
    >
      <motion.div
        className={`relative w-full h-[400px] md:h-[500px] xl:h-[600px] ${
          isImageLeft ? 'md:order-1' : 'md:order-2'
        }`}
        style={{
          y: isInView && isDesktop ? imageParallaxY : 0,
          willChange: isDesktop ? 'transform' : 'auto',
        }}
      >
        <Image
          src={block.imageSrc}
          alt={block.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </motion.div>

      <motion.div
        className={`text-base md:text-lg leading-relaxed font-sans text-foreground text-left ${
          isImageLeft ? 'md:order-2 md:text-right' : 'md:order-1'
        }`}
        style={{
          y: isInView && isDesktop ? textParallaxY : 0,
          willChange: isDesktop ? 'transform' : 'auto',
        }}
      >
        {block.text}
      </motion.div>
    </motion.div>
  );
}

