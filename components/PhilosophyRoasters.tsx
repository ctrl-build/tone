'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  motion,
  useInView,
} from 'framer-motion';

interface Roaster {
  name: string;
  country: string;
  logo: string;
  storyLink?: string;
}

interface PhilosophyRoastersProps {
  roasters?: Roaster[];
}

const defaultRoasters: Roaster[] = [
  {
    name: 'Nordic Approach',
    country: 'Norway',
    logo: '/assets/images/roaster-nordic-approach.png',
    storyLink: '/stories/nordic-approach',
  },
  {
    name: 'The Barn',
    country: 'Germany',
    logo: '/assets/images/roaster-the-barn.png',
    storyLink: '/stories/the-barn',
  },
  {
    name: 'Gardelli',
    country: 'Italy',
    logo: '/assets/images/roaster-gardelli.png',
    storyLink: '/stories/gardelli',
  },
];

export default function PhilosophyRoasters({
  roasters = defaultRoasters,
}: PhilosophyRoastersProps) {
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
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
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
      ref={sectionRef}
      className="py-16 md:py-24 xl:py-32 px-6 md:px-8 xl:px-12 bg-primary-background"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-gt mb-12 md:mb-16 text-center md:text-left">
          Our Partners in Craft
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {roasters.map((roaster, index) => (
            <motion.div
              key={index}
              className="group"
              variants={itemVariants}
            >
              <Link
                href={roaster.storyLink || '/stories'}
                className="block p-6 md:p-8 border border-foreground/10 hover:border-foreground/30 bg-white/50 hover:bg-white/80 transition-all duration-300 opacity-90 hover:opacity-100"
              >
                <div className="relative h-16 md:h-20 mb-6">
                  <Image
                    src={roaster.logo}
                    alt={`${roaster.name} logo`}
                    fill
                    className="object-contain object-left opacity-70 group-hover:opacity-100 transition-opacity duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="mb-4">
                  <div className="text-lg md:text-xl font-gt mb-1">
                    {roaster.name}
                  </div>
                  <div className="text-sm text-foreground/60 font-sans">
                    {roaster.country}
                  </div>
                </div>

                <div className="text-sm font-sans text-foreground/70 group-hover:text-foreground transition-colors duration-300">
                  Read Story →
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

