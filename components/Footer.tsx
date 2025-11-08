'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  motion,
  useInView,
} from 'framer-motion';

export default function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [footerVisible, setFooterVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const isStoryPage = pathname?.startsWith('/stories/') && pathname !== '/stories';

  useEffect(() => {
    if (!isStoryPage) {
      setFooterVisible(true);
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const distanceFromBottom = documentHeight - (scrollPosition + windowHeight);
      
      if (scrollPosition < lastScrollYRef.current || distanceFromBottom < 200) {
        setFooterVisible(true);
      } else if (scrollPosition > lastScrollYRef.current && distanceFromBottom > 200) {
        setFooterVisible(false);
      }
      
      lastScrollYRef.current = scrollPosition;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isStoryPage]);

  const isInView = useInView(footerRef, {
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
    <footer
      ref={footerRef}
      className={`bg-primary-background border-t border-[#EAEAEA] transition-all duration-300 ${
        isStoryPage
          ? footerVisible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-full opacity-0'
          : ''
      }`}
    >
      <motion.div
        className="w-full h-px bg-[#EAEAEA]"
        variants={blockVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      />

      <motion.div
        className="py-12 md:py-16 xl:py-20 px-6 md:px-8 xl:px-12"
        variants={blockVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-12 xl:gap-16 mb-12 md:mb-16">
            <div>
              <Link href="/" className="inline-block mb-4">
                <Image
                  src="/assets/images/typography-logo.png"
                  alt="Tone"
                  width={100}
                  height={27}
                  className="h-6 w-auto"
                />
              </Link>
            </div>

            <div>
              <div className="text-xs tracking-[0.1em] uppercase mb-4 font-sans">
                SITEMAP
              </div>
              <nav className="flex flex-col gap-2">
                <Link
                  href="/philosophy"
                  className="text-sm font-sans text-foreground hover:opacity-70 transition-opacity duration-200"
                >
                  Philosophy
                </Link>
                <Link
                  href="/offerings"
                  className="text-sm font-sans text-foreground hover:opacity-70 transition-opacity duration-200"
                >
                  Offerings
                </Link>
                <Link
                  href="/stories"
                  className="text-sm font-sans text-foreground hover:opacity-70 transition-opacity duration-200"
                >
                  Stories
                </Link>
                <Link
                  href="/visit"
                  className="text-sm font-sans text-foreground hover:opacity-70 transition-opacity duration-200"
                >
                  Visit
                </Link>
              </nav>
            </div>

            <div>
              <div className="text-xs tracking-[0.1em] uppercase mb-4 font-sans">
                CONNECT
              </div>
              <nav className="flex flex-col gap-2">
                <Link
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-sans text-foreground hover:opacity-70 transition-opacity duration-200"
                >
                  Instagram
                </Link>
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-sans text-foreground hover:opacity-70 transition-opacity duration-200"
                >
                  Facebook
                </Link>
                <Link
                  href="/contact"
                  className="text-sm font-sans text-foreground hover:opacity-70 transition-opacity duration-200"
                >
                  Contact
                </Link>
              </nav>
            </div>

            <div>
              <div className="text-xs tracking-[0.1em] uppercase mb-4 font-sans">
                INFO
              </div>
              <nav className="flex flex-col gap-2">
                <Link
                  href="/press-kit"
                  className="text-sm font-sans text-foreground hover:opacity-70 transition-opacity duration-200"
                >
                  Press Kit
                </Link>
                <Link
                  href="/careers"
                  className="text-sm font-sans text-foreground hover:opacity-70 transition-opacity duration-200"
                >
                  Careers
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="border-t border-[#EAEAEA] py-6 px-6 md:px-8 xl:px-12"
        variants={blockVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 text-sm text-foreground/70 font-sans">
            <div>
              © 2025 Tone, Casa Albă, Craiova
            </div>
            <div>
              <Link
                href="/privacy"
                className="hover:opacity-70 transition-opacity duration-200"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
}

