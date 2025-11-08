'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Philosophy', href: '/philosophy' },
  { name: 'Offerings', href: '/offerings' },
  { name: 'Stories', href: '/stories' },
  { name: 'Visit', href: '/visit' },
];

export default function Header({ isHomepage = false }: { isHomepage?: boolean }) {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(!isHomepage);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);
  const lastScrollYRef = useRef(0);
  const isStoryPage = pathname?.startsWith('/stories/') && pathname !== '/stories';

  useEffect(() => {
    const checkViewport = () => {
      setIsDesktop(window.innerWidth >= 1200);
    };
    
    checkViewport();
    window.addEventListener('resize', checkViewport);
    return () => window.removeEventListener('resize', checkViewport);
  }, []);

  useEffect(() => {
    if (!isHomepage && !isStoryPage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      if (isStoryPage) {
        if (scrollPosition > lastScrollYRef.current && scrollPosition > 100) {
          setHeaderVisible(false);
        } else if (scrollPosition < lastScrollYRef.current) {
          setHeaderVisible(true);
        }
        lastScrollYRef.current = scrollPosition;
        setIsScrolled(scrollPosition > 100);
      } else if (isHomepage) {
        const heroHeight = window.innerHeight;
        setIsScrolled(scrollPosition > heroHeight);
      }
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomepage, isStoryPage]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  if (isHomepage && !isScrolled && isDesktop) {
    return null;
  }

  const isTransparent = isHomepage && !isScrolled && !isDesktop;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isStoryPage
            ? headerVisible
              ? 'translate-y-0 opacity-100'
              : '-translate-y-full opacity-0'
            : isScrolled || !isHomepage || !isDesktop
            ? 'opacity-100'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className={`${isTransparent ? 'header-transparent' : 'frosted-glass'} border-b ${isTransparent ? 'border-transparent' : 'border-black/5'}`}>
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="flex items-center justify-between h-14 md:h-16">
              <Link href="/" className="flex items-center">
                <Image
                  src="/assets/images/typography-logo.png"
                  alt="Tone"
                  width={120}
                  height={32}
                  className={`h-6 md:h-8 w-auto ${
                    isTransparent ? 'drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)] brightness-0 invert' : ''
                  }`}
                  priority
                />
              </Link>

              <nav className="hidden xl:flex items-center gap-8">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`nav-link ${isActive ? 'active' : ''} text-sm tracking-[0.08em] uppercase`}
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </nav>

              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="xl:hidden flex flex-col gap-1.5 w-6 h-6 items-center justify-center"
                aria-label="Open menu"
              >
                <span className={`w-5 h-px transition-all ${
                  isTransparent ? 'bg-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]' : 'bg-foreground'
                }`} />
                <span className={`w-5 h-px transition-all ${
                  isTransparent ? 'bg-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]' : 'bg-foreground'
                }`} />
                <span className={`w-5 h-px transition-all ${
                  isTransparent ? 'bg-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]' : 'bg-foreground'
                }`} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-50 bg-[#F9F8F7] xl:hidden ${
          isMobileMenuOpen ? 'menu-overlay-wipe pointer-events-auto' : 'opacity-0 pointer-events-none translate-y-full'
        }`}
        style={{
          transition: isMobileMenuOpen ? 'none' : 'opacity 0.3s ease, transform 0.3s ease',
        }}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-end p-6">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-8 h-8 flex items-center justify-center"
              aria-label="Close menu"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className="flex-1 flex flex-col items-center justify-center gap-8">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-3xl md:text-4xl font-medium tracking-tight ${
                    isActive ? 'text-[#A17D5F]' : 'text-foreground'
                  }`}
                  style={{ fontFamily: 'var(--font-gt-america-extended)', fontWeight: 500 }}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </>
  );
}

