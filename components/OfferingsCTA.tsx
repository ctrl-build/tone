'use client';

import { useRef } from 'react';
import Link from 'next/link';
import {
  motion,
  useInView,
} from 'framer-motion';

export default function OfferingsCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: '-100px 0px',
  });
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
      className="py-[15vh] px-6 md:px-8 xl:px-12 bg-primary-background"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl xl:text-6xl font-gt text-center mb-12 md:mb-16"
          variants={blockVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          Learn the Story.
        </motion.h2>

        <motion.div
          className="flex justify-center"
          variants={blockVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <Link
            href="/stories"
            className="group relative inline-block px-8 py-3 md:px-10 md:py-4 border-2 border-[#242424] bg-transparent transition-all duration-300 ease-out overflow-hidden"
          >
            <span className="relative z-10 text-sm md:text-base tracking-[0.08em] uppercase font-sans text-[#242424] group-hover:text-[#F9F8F7] transition-colors duration-300">
              Explore Our Sources
            </span>
            <span className="absolute inset-0 bg-[#242424] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

