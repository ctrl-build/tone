'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import OfferingsToggle, { CollectionType } from './OfferingsToggle';

interface CoffeeItem {
  title: string;
  description: string;
  notes?: string;
  price: string;
}

interface CoffeeCategory {
  heading: string;
  items: CoffeeItem[];
}

const coffeeCategories: CoffeeCategory[] = [
  {
    heading: 'Espresso Based',
    items: [
      {
        title: 'Espresso',
        description: 'Our house blend, balanced and rich.',
        notes: 'Tasting Notes: Chocolate, hazelnut, caramel.',
        price: '12 RON',
      },
      {
        title: 'Cappuccino',
        description: 'Double espresso with textured milk.',
        price: '16 RON',
      },
      {
        title: 'Flat White',
        description: 'Double espresso with velvety microfoam.',
        price: '16 RON',
      },
      {
        title: 'Cortado',
        description: 'Equal parts espresso and warm milk.',
        price: '14 RON',
      },
    ],
  },
  {
    heading: 'Filter & Brew',
    items: [
      {
        title: 'V60',
        description: 'Choice of seasonal single-origin beans.',
        notes: 'Tasting Notes: Ask our barista for today\'s selection.',
        price: '18 RON',
      },
      {
        title: 'Chemex',
        description: 'Clean, bright filter coffee, served for two.',
        price: '32 RON',
      },
      {
        title: 'Aeropress',
        description: 'Full-bodied, concentrated brew.',
        notes: 'Tasting Notes: Ask our barista for today\'s selection.',
        price: '16 RON',
      },
      {
        title: 'Cold Brew',
        description: 'Slow-steeped overnight, served over ice.',
        price: '18 RON',
      },
    ],
  },
];

interface BakeryItem {
  title: string;
  price: string;
  imageSrc: string;
  imageAlt: string;
}

const bakeryItems: BakeryItem[] = [
  {
    title: 'Almond Croissant',
    price: '14 RON',
    imageSrc: '/assets/images/bakery-almond-croissant.webp',
    imageAlt: 'Almond Croissant',
  },
  {
    title: 'Pain au Chocolat',
    price: '12 RON',
    imageSrc: '/assets/images/bakery-pain-au-chocolat.webp',
    imageAlt: 'Pain au Chocolat',
  },
  {
    title: 'Danish Pastry',
    price: '13 RON',
    imageSrc: '/assets/images/bakery-danish.webp',
    imageAlt: 'Danish Pastry',
  },
  {
    title: 'Sourdough Toast',
    price: '15 RON',
    imageSrc: '/assets/images/bakery-sourdough.webp',
    imageAlt: 'Sourdough Toast',
  },
  {
    title: 'Chocolate Chip Cookie',
    price: '10 RON',
    imageSrc: '/assets/images/bakery-cookie.webp',
    imageAlt: 'Chocolate Chip Cookie',
  },
  {
    title: 'Lemon Tart',
    price: '16 RON',
    imageSrc: '/assets/images/bakery-lemon-tart.webp',
    imageAlt: 'Lemon Tart',
  },
];

const gridVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1] as const,
      },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: [0.4, 0, 1, 1] as const,
    },
  },
};

function CoffeeGrid() {
  return (
    <motion.div
      key="coffee"
      variants={gridVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="space-y-16 md:space-y-20"
    >
      {coffeeCategories.map((category, categoryIndex) => (
        <div key={categoryIndex} className="space-y-8 md:space-y-10">
          <h2 className="text-2xl md:text-3xl xl:text-4xl font-gt font-medium">
            {category.heading}
          </h2>

          <div className="space-y-6 md:space-y-8">
            {category.items.map((item, itemIndex) => (
              <div
                key={itemIndex}
                className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4"
              >
                <div className="flex-1 space-y-2">
                  <h3
                    className="text-xl md:text-2xl font-tiempos"
                    style={{ fontFamily: 'var(--font-tiempos-text)' }}
                  >
                    {item.title}
                  </h3>

                  <p className="text-base md:text-lg font-sans text-foreground/80">
                    {item.description}
                  </p>

                  {item.notes && (
                    <p
                      className="text-sm md:text-base font-sans italic text-foreground/60"
                      style={{ fontStyle: 'italic' }}
                    >
                      {item.notes}
                    </p>
                  )}
                </div>

                <div className="flex-shrink-0 md:self-start">
                  <p className="text-base md:text-lg font-sans md:text-right whitespace-nowrap">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </motion.div>
  );
}

function BakeryGrid() {
  return (
    <motion.div
      key="bakery"
      variants={gridVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8 xl:gap-12"
    >
      {bakeryItems.map((item, index) => (
        <motion.div
          key={index}
          className="group cursor-pointer"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.2 }}
        >
          <div className="relative w-full aspect-square mb-4 overflow-hidden">
            <motion.div
              className="absolute inset-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            >
              <Image
                src={item.imageSrc}
                alt={item.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </motion.div>
          </div>

          <div className="flex flex-col items-center space-y-1 text-center transition-opacity duration-300 group-hover:opacity-100 opacity-80">
            <h3
              className="text-xl md:text-2xl font-tiempos"
              style={{ fontFamily: 'var(--font-tiempos-text)' }}
            >
              {item.title}
            </h3>

            <p className="text-base md:text-lg font-sans text-foreground/80">
              {item.price}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default function OfferingsGrid() {
  const [activeCollection, setActiveCollection] = useState<CollectionType>('coffee');

  return (
    <section className="py-8 md:py-12 px-6 md:px-8 xl:px-12 bg-primary-background">
      <div className="max-w-7xl mx-auto">
        <OfferingsToggle
          activeCollection={activeCollection}
          onCollectionChange={setActiveCollection}
        />

        <div className="mt-12 md:mt-16 min-h-[400px]">
          <AnimatePresence mode="wait">
            {activeCollection === 'coffee' ? <CoffeeGrid /> : <BakeryGrid />}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

