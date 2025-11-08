'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Philosophy', href: '/philosophy' },
  { name: 'Offerings', href: '/offerings' },
  { name: 'Stories', href: '/stories' },
  { name: 'Visit', href: '/visit' },
];

export default function HomepageNavColumn() {
  const pathname = usePathname();

  return (
    <nav className="hidden xl:flex flex-col justify-center items-start gap-6 h-full px-8 lg:px-12">
      {navigation.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            className={`nav-link ${isActive ? 'active' : ''} text-sm tracking-[0.08em] uppercase font-normal`}
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
}

