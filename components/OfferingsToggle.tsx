'use client';

import { useState } from 'react';

export type CollectionType = 'coffee' | 'bakery';

interface OfferingsToggleProps {
  activeCollection: CollectionType;
  onCollectionChange: (collection: CollectionType) => void;
}

export default function OfferingsToggle({
  activeCollection,
  onCollectionChange,
}: OfferingsToggleProps) {
  return (
    <section className="py-8 md:py-12 px-6 md:px-8 xl:px-12 bg-primary-background">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center justify-center gap-8 md:gap-12">
          <button
            onClick={() => onCollectionChange('coffee')}
            className={`relative text-lg md:text-xl xl:text-2xl font-sans transition-opacity duration-300 ${
              activeCollection === 'coffee'
                ? 'font-medium opacity-100'
                : 'font-normal opacity-60 hover:opacity-80'
            }`}
          >
            Specialty Coffee
            {activeCollection === 'coffee' && (
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary-accent" />
            )}
          </button>

          <span className="text-foreground/20">|</span>

          <button
            onClick={() => onCollectionChange('bakery')}
            className={`relative text-lg md:text-xl xl:text-2xl font-sans transition-opacity duration-300 ${
              activeCollection === 'bakery'
                ? 'font-medium opacity-100'
                : 'font-normal opacity-60 hover:opacity-80'
            }`}
          >
            Bakery & Bites
            {activeCollection === 'bakery' && (
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-primary-accent" />
            )}
          </button>
        </nav>
      </div>
    </section>
  );
}

