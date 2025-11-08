'use client';

import { useState, useRef, useEffect } from 'react';
import {
  motion,
  useInView,
} from 'framer-motion';

interface PhilosophyHeroProps {
  videoSrc?: string;
  fallbackImageSrc?: string;
}

export default function PhilosophyHero({
  videoSrc = '/assets/videos/philosophy-hero-process.mp4',
  fallbackImageSrc = '/assets/images/philosophy-hero-fallback.webp',
}: PhilosophyHeroProps) {
  const [useFallback, setUseFallback] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, {
    once: true,
    margin: '-50% 0px',
  });

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleError = () => {
        setUseFallback(true);
      };
      
      const handleCanPlay = () => {
        setIsVideoLoaded(true);
      };

      video.addEventListener('error', handleError);
      video.addEventListener('canplay', handleCanPlay);
      video.load();

      return () => {
        video.removeEventListener('error', handleError);
        video.removeEventListener('canplay', handleCanPlay);
      };
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-black"
    >
      {useFallback || !videoSrc ? (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${fallbackImageSrc})`,
          }}
          role="img"
          aria-label="Tone - Coffee craft process"
        />
      ) : (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          preload="auto"
          poster={fallbackImageSrc}
        >
          <source src={videoSrc} type="video/mp4" />
          <img 
            src={fallbackImageSrc} 
            alt="Tone - Coffee craft process"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>
      )}

      <div className="absolute inset-0 flex items-center justify-center z-10">
        <motion.h1
          className="text-5xl md:text-6xl xl:text-7xl font-gt text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] text-center px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView && isVideoLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] as const, delay: 0.3 }}
        >
          Philosophy.
        </motion.h1>
      </div>
    </section>
  );
}

