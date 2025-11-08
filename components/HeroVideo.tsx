'use client';

import { useState, useRef, useEffect } from 'react';

interface HeroVideoProps {
  videoSrc?: string;
  fallbackImageSrc?: string;
  alt?: string;
}

export default function HeroVideo({ 
  videoSrc = '/assets/videos/hero-living-still-life.mp4',
  fallbackImageSrc = '/assets/images/hero-fallback.webp',
  alt = 'Tone interior - Living Still Life'
}: HeroVideoProps) {
  const [useFallback, setUseFallback] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1200);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

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

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setCursorPosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [isDesktop]);

  return (
    <div 
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden ${isDesktop ? 'hero-video-container' : ''}`}
    >
      {useFallback || !videoSrc ? (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${fallbackImageSrc})`,
          }}
          role="img"
          aria-label={alt}
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
            alt={alt}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </video>
      )}

      {!useFallback && isDesktop && (
        <>
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-300"
            style={{
              opacity: isHovering ? 1 : 0,
              background: `radial-gradient(circle 600px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.04) 25%, rgba(255,255,255,0) 50%)`,
              width: '100%',
              height: '100%',
              mixBlendMode: 'soft-light',
              willChange: 'background',
            }}
          />
          <div
            className="pointer-events-none absolute inset-0 transition-opacity duration-300"
            style={{
              opacity: isHovering ? 0.6 : 0,
              background: `radial-gradient(circle 300px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 20%, rgba(255,255,255,0) 40%)`,
              width: '100%',
              height: '100%',
              mixBlendMode: 'overlay',
              willChange: 'background',
            }}
          />
        </>
      )}
    </div>
  );
}

