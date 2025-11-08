'use client';

import { useRef } from 'react';
import Link from 'next/link';
import {
  motion,
  useInView,
} from 'framer-motion';

export default function VisitCTA() {
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
          Visit Us.
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 xl:gap-16 mb-12 md:mb-16 text-center"
          variants={blockVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <div>
            <div className="text-xs tracking-[0.1em] uppercase mb-3 font-sans">
              LOCATION
            </div>
            <div className="text-lg md:text-xl font-sans">
              Casa Albă, Craiova, România
            </div>
          </div>

          <div className="md:mt-0 mt-8">
            <div className="text-xs tracking-[0.1em] uppercase mb-3 font-sans">
              OPENING HOURS
            </div>
            <div className="text-lg md:text-xl font-sans space-y-1">
              <div>Mon – Fri, 08:00 – 18:00</div>
              <div>Sat – Sun, 09:00 – 17:00</div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center"
          variants={blockVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          <Link
            href="/visit"
            className="group relative inline-block px-8 py-3 md:px-10 md:py-4 border-2 border-[#242424] bg-transparent transition-all duration-300 ease-out overflow-hidden"
          >
            <span className="relative z-10 text-sm md:text-base tracking-[0.08em] uppercase font-sans text-[#242424] group-hover:text-[#F9F8F7] transition-colors duration-300">
              Get Directions & Contact
            </span>
            <span className="absolute inset-0 bg-[#242424] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out origin-left"></span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

