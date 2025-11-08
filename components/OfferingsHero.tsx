'use client';

import { useState, useEffect } from 'react';
import {
  motion,
} from 'framer-motion';

export default function OfferingsHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);
  const word = 'Offerings.';
  const letters = word.split('');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    },
  };

  return (
    <section
      className="py-[15vh] md:py-[20vh] xl:py-[25vh] px-6 md:px-8 xl:px-12 bg-primary-background"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h1
          className="text-6xl md:text-7xl xl:text-8xl 2xl:text-9xl font-gt font-medium tracking-tight"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="inline-block"
            >
              {letter === ' ' ? '\u00A0' : letter}
            </motion.span>
          ))}
        </motion.h1>
      </div>
    </section>
  );
}

