'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function HomepageLogotype() {
  return (
    <div className="absolute top-6 left-6 md:top-8 md:left-8 z-10">
      <Link href="/" className="flex items-center">
        <Image
          src="/assets/images/typography-logo.png"
          alt="Tone"
          width={140}
          height={38}
          className="h-7 md:h-9 w-auto brightness-0 invert drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
          priority
        />
      </Link>
    </div>
  );
}

