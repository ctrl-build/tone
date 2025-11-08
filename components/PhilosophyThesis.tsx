'use client';

import { useEffect, useRef, useState } from 'react';

export default function PhilosophyThesis() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  const lines = [
    "Tone is an antidote to the 'more' culture. A quiet rebellion against sensory overload.",
    "We designed a space that inspires focus, stillness, and intention.",
    "At Tone, the noise of the street fades. Your mind settles. The coffee you're drinking",
    "is, perhaps for the first time, the only thing you are focused on.",
  ];

  return (
    <section
      ref={sectionRef}
      className="py-[12vh] md:py-[15vh] xl:py-[20vh] px-[5%] md:px-0"
      style={{
        fontFamily: 'var(--font-tiempos-text)',
      }}
    >
      <div className="max-w-[80%] md:max-w-[80%] xl:max-w-[700px] mx-auto">
        <div className="text-[#242424] text-[1.25rem] md:text-[1.6rem] xl:text-[1.8rem] leading-[1.65] md:leading-[1.7] text-center">
          {lines.map((line, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ease-out ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-5'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms',
              }}
            >
              {line}
              {index < lines.length - 1 && <br />}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

