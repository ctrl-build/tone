'use client';

import { useEffect, useState } from 'react';

export default function ScrollHint({ isMobile = false }: { isMobile?: boolean }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible((prev) => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`absolute bottom-8 left-0 right-0 text-center ${isMobile ? '' : ''}`}
    >
      <p
        className={`text-sm tracking-wider uppercase transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-30'
        } ${isMobile ? 'text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]' : 'text-foreground/60'}`}
        style={{ fontFamily: 'var(--font-inter)' }}
      >
        Scroll
      </p>
    </div>
  );
}



