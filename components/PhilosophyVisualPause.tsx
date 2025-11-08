'use client';

import { useRef } from 'react';
import Image from 'next/image';
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from 'framer-motion';

interface PhilosophyVisualPauseProps {
  imageSrc?: string;
  imageAlt?: string;
}

export default function PhilosophyVisualPause({
  imageSrc = '/assets/images/philosophy-visual-pause.webp',
  imageAlt = 'Tone interior - Atmospheric texture',
}: PhilosophyVisualPauseProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: false,
    margin: '-20% 0px',
  });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.05]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[60vh] md:h-[80vh] xl:h-screen overflow-hidden bg-black"
    >
      <motion.div
        className="absolute inset-0"
        style={{ scale }}
      >
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
      </motion.div>
    </section>
  );
}

