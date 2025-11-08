'use client';

import { useState, useEffect } from 'react';
import {
  motion,
} from 'framer-motion';

export default function StoriesHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
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
    <section className="py-[15vh] md:py-[20vh] xl:py-[25vh] px-6 md:px-8 xl:px-12 bg-primary-background">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          className="text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl font-gt font-medium tracking-tight mb-6 md:mb-8"
          variants={blockVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          Stories.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl xl:text-2xl font-tiempos italic text-foreground/80 max-w-2xl mx-auto"
          style={{ fontFamily: 'var(--font-tiempos-text)' }}
          variants={blockVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          The origins, the makers, and the methodology behind the ritual.
        </motion.p>
      </div>
    </section>
  );
}

