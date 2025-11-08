'use client';

import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from 'framer-motion';

interface PhilosophySpaceProps {
  images?: string[];
  imageAlt?: string;
}

export default function PhilosophySpace({
  images = [
    '/assets/images/philosophy-space-1.webp',
    '/assets/images/philosophy-space-2.webp',
    '/assets/images/philosophy-space-3.webp',
  ],
  imageAlt = 'Tone interior - Casa Albă architecture',
}: PhilosophySpaceProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textColumnRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const stickyActivationScroll = useRef<number | null>(null);
  const isInView = useInView(sectionRef, {
    once: false,
    margin: '-10% 0px',
  });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageParallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '-8%']);
  const textParallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '3%']);

  useEffect(() => {
    if (!isInView || !textColumnRef.current || !sectionRef.current) return;

    const updateImageIndex = () => {
      if (!textColumnRef.current || !sectionRef.current) return;
      
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const textRect = textColumnRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const stickyTop = 96;
      
      const sectionTop = sectionRect.top;
      const sectionBottom = sectionRect.bottom;
      
      if (sectionTop > windowHeight || sectionBottom < 0) {
        setCurrentImageIndex(0);
        return;
      }
      
      const stickyActive = sectionTop <= stickyTop;
      const currentScroll = window.scrollY;
      
      if (!stickyActive) {
        stickyActivationScroll.current = null;
        setCurrentImageIndex(0);
        return;
      }
      
      if (stickyActivationScroll.current === null) {
        stickyActivationScroll.current = currentScroll;
      }
      
      const scrollSinceActivation = currentScroll - stickyActivationScroll.current;
      const textHeight = textRect.height;
      const sectionHeight = sectionRect.height;
      const estimatedScrollDistance = Math.max(textHeight, sectionHeight - windowHeight + 200);
      const delayDistance = estimatedScrollDistance * 0.4;
      const scrollAfterDelay = Math.max(0, scrollSinceActivation - delayDistance);
      const scrollRangeForImages = estimatedScrollDistance * 0.6;
      
      if (scrollAfterDelay <= 0 || scrollRangeForImages <= 0) {
        setCurrentImageIndex(0);
        return;
      }
      
      const progress = Math.min(1, scrollAfterDelay / scrollRangeForImages);
      const imageIndex = Math.min(
        images.length - 1,
        Math.floor(progress * images.length)
      );
      
      setCurrentImageIndex(Math.max(0, imageIndex));
    };

    window.addEventListener('scroll', updateImageIndex, { passive: true });
    updateImageIndex();

    return () => window.removeEventListener('scroll', updateImageIndex);
  }, [isInView, images.length]);

  const textContent = [
    {
      paragraph: "Walking into Tone is an act of recalibration. The aesthetic is a deliberate study in modern Brutalism and stark minimalism. Your feet meet polished concrete floors, cool and grounding. The walls are vast, unapologetic slabs of raw, textured concrete, their imperfections celebrated as part of their character.",
    },
    {
      paragraph: "There is no clutter. No posters, no novelty mugs, no unnecessary distractions. The centerpiece is the brew bar—a single, monolithic block of dark, brushed steel, meticulously organized. Above it, suspended lighting casts purposeful, warm pools of light, illuminating the process like a stage.",
    },
    {
      paragraph: "It's a bold design, yet the effect is not cold. It is calm. It is grounding. The massive scale and raw materials provide a sense of permanence and quiet strength. The vast, tall windows don't just let in light; they frame the outside world, turning the city into a silent, moving piece of art.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 xl:py-32 px-6 md:px-8 xl:px-12 bg-primary-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <div className="text-xs tracking-[0.1em] uppercase mb-4 font-sans">
            CHAPTER I: THE SPACE
          </div>
          <h2 className="text-3xl md:text-4xl xl:text-5xl font-gt mb-8">
            Brutalism as Sanctuary.
          </h2>
        </div>

        <div className="hidden md:block relative">
          <div className="grid grid-cols-[60%_40%] gap-8 xl:gap-12">
            <motion.div 
              className="sticky top-24 self-start"
              style={{
                y: imageParallaxY,
                willChange: 'transform',
              }}
            >
              <div className="relative w-full h-[85vh] min-h-[600px]">
                {images.map((image, index) => (
                  <motion.div
                    key={index}
                    className="absolute inset-0"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: currentImageIndex === index ? 1 : 0,
                    }}
                    transition={{ duration: 0.6, ease: 'easeInOut' }}
                  >
                    <Image
                      src={image}
                      alt={`${imageAlt} ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="60vw"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              ref={textColumnRef} 
              className="space-y-8 py-8"
              style={{
                y: textParallaxY,
                willChange: 'transform',
              }}
            >
              {textContent.map((item, index) => (
                <div
                  key={index}
                  className="text-base md:text-lg leading-relaxed font-sans text-foreground"
                >
                  {item.paragraph}
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        <div className="md:hidden space-y-8">
          {textContent.map((item, index) => (
            <div key={index} className="space-y-6">
              <div className="relative w-full h-[300px]">
                <Image
                  src={images[index] || images[0]}
                  alt={`${imageAlt} ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="text-base leading-relaxed font-sans text-foreground">
                {item.paragraph}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

