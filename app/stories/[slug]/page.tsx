import type { Metadata } from 'next';
import Header from '@/components/Header';
import StoryHero from '@/components/StoryHero';
import StoryContent, { StoryBlockquote } from '@/components/StoryContent';
import StoryShareBar from '@/components/StoryShareBar';
import StoryRelated from '@/components/StoryRelated';
import Footer from '@/components/Footer';
import { getAllStorySlugs } from '@/lib/stories-data';

const stories: Record<string, any> = {
  'tracing-pink-bourbon-huila': {
    category: 'origin',
    author: 'Tone Editorial',
    date: 'March 15, 2024',
    title: 'Tracing the Pink Bourbon of Huila',
    readTime: '5 min read',
    leadParagraph:
      'In the high-altitude farms of Huila, Colombia, a rare varietal tells a story of tradition, terroir, and the meticulous craft of coffee cultivation.',
    heroImageSrc: '/assets/images/story-huila-pink-bourbon.webp',
    heroImageAlt: 'Coffee farmer in Huila, Colombia',
    content: (
      <div>
        <p>
          The journey of Pink Bourbon begins at elevation. At 1,800 meters above sea level, in the
          mountainous regions of Huila, Colombia, coffee plants thrive in a unique microclimate that
          shapes every bean.
        </p>
        <p>
          This varietal, a natural mutation of Red and Yellow Bourbon, produces cherries with a
          distinctive pink hue. The farmers who cultivate Pink Bourbon understand that this is not
          merely a crop - it is a legacy.
        </p>
        <StoryBlockquote source="María González, Third-Generation Coffee Farmer">
          "Every harvest, we honor the methods passed down from our grandparents. Pink Bourbon
          requires patience, but the reward is a cup that speaks of our land."
        </StoryBlockquote>
        <p>
          The processing method is equally critical. Most Pink Bourbon from Huila undergoes washed
          processing, which highlights the bean's inherent brightness and floral notes. The result
          is a cup that balances citrus acidity with a delicate, tea-like body.
        </p>
        <p>
          When we source Pink Bourbon, we're not just buying coffee. We're investing in a
          relationship with farmers who share our commitment to quality and sustainability. Each
          batch tells the story of a specific farm, a specific harvest, a specific moment in time.
        </p>
      </div>
    ),
    pullQuotes: [
      'Every harvest, we honor the methods passed down from our grandparents.',
      'Pink Bourbon requires patience, but the reward is a cup that speaks of our land.',
    ],
    images: [
      {
        src: '/assets/images/story-huila-farm.webp',
        alt: 'Coffee farm in Huila, Colombia',
        isFullWidth: true,
      },
    ],
    relatedStories: [
      {
        slug: 'ethiopian-yirgacheffe',
        title: 'Ethiopian Yirgacheffe: The Birthplace of Coffee',
        category: 'origin',
        imageSrc: '/assets/images/story-yirgacheffe.webp',
        imageAlt: 'Coffee plants in Yirgacheffe, Ethiopia',
      },
      {
        slug: 'nordic-approach-craft',
        title: 'Nordic Approach: A Philosophy of Precision',
        category: 'roaster',
        imageSrc: '/assets/images/story-nordic-approach.webp',
        imageAlt: 'Nordic Approach roastery',
      },
    ],
  },
  'nordic-approach-craft': {
    category: 'roaster',
    author: 'Tone Editorial',
    date: 'February 28, 2024',
    title: 'Nordic Approach: A Philosophy of Precision',
    readTime: '6 min read',
    leadParagraph:
      'In the world of specialty coffee, Nordic Approach represents a commitment to transparency, traceability, and the belief that exceptional coffee begins with exceptional sourcing.',
    heroImageSrc: '/assets/images/story-nordic-approach.webp',
    heroImageAlt: 'Nordic Approach roastery',
    content: (
      <div>
        <p>
          Nordic Approach was founded on a simple principle: coffee should be sourced with the same
          rigor and respect as fine wine. Based in Oslo, Norway, this green coffee importer has
          built relationships with farmers across Central and South America, Africa, and Asia.
        </p>
        <p>
          What sets Nordic Approach apart is their meticulous approach to quality control. Every
          lot is cupped multiple times, ensuring consistency and excellence. They work directly with
          farmers, eliminating intermediaries and ensuring fair compensation.
        </p>
        <StoryBlockquote source="Morten Wennersgaard, Founder of Nordic Approach">
          "We believe that coffee is a collaboration. It's not about us versus the farmer - it's about
          us working together to produce something extraordinary."
        </StoryBlockquote>
        <p>
          The result is a portfolio of coffees that showcase terroir, varietal character, and
          processing innovation. When we select a coffee from Nordic Approach, we know we're
          serving our customers something that has been curated with care and expertise.
        </p>
      </div>
    ),
    pullQuotes: [
      "We believe that coffee is a collaboration. It's not about us versus the farmer - it's about us working together to produce something extraordinary.",
    ],
    images: [],
    relatedStories: [
      {
        slug: 'tracing-pink-bourbon-huila',
        title: 'Tracing the Pink Bourbon of Huila',
        category: 'origin',
        imageSrc: '/assets/images/story-huila-pink-bourbon.webp',
        imageAlt: 'Coffee farmer in Huila, Colombia',
      },
      {
        slug: 'gardelli-italian-tradition',
        title: 'Gardelli: Italian Tradition Meets Innovation',
        category: 'roaster',
        imageSrc: '/assets/images/story-gardelli.webp',
        imageAlt: 'Gardelli roastery in Italy',
      },
    ],
  },
  'perfect-v60-technique': {
    category: 'brew',
    author: 'Tone Editorial',
    date: 'April 10, 2024',
    title: 'The Art of the Perfect V60',
    readTime: '4 min read',
    leadParagraph:
      'The V60 pour-over method is deceptively simple. Yet, mastering it requires understanding the delicate balance between water, time, and technique.',
    heroImageSrc: '/assets/images/story-v60-technique.webp',
    heroImageAlt: 'V60 pour-over technique',
    content: (
      <div>
        <p>
          The Hario V60 has become synonymous with precision brewing. Its spiral ribs and large
          single hole create a unique flow pattern that allows for nuanced extraction. But the
          equipment is only part of the equation.
        </p>
        <p>
          The key to a perfect V60 lies in the bloom. The initial pour should saturate all the
          grounds evenly, allowing carbon dioxide to escape. This "bloom" period typically lasts 30
          to 45 seconds, depending on the coffee's freshness.
        </p>
        <StoryBlockquote source="James Hoffmann, World Barista Champion">
          "The V60 rewards consistency. Every pour should be intentional, every gram measured, every
          second counted."
        </StoryBlockquote>
        <p>
          After the bloom, the main pour should be steady and controlled. Many baristas use a
          circular motion, starting from the center and spiraling outward. The goal is to maintain
          an even water level and prevent channeling.
        </p>
        <p>
          Total brew time should typically fall between 2:30 and 3:30 minutes, depending on your
          grind size and coffee quantity. The result should be a clean, bright cup that showcases
          the coffee's inherent flavors.
        </p>
      </div>
    ),
    pullQuotes: [
      'The V60 rewards consistency. Every pour should be intentional, every gram measured, every second counted.',
    ],
    images: [],
    relatedStories: [
      {
        slug: 'espresso-extraction-science',
        title: 'The Science of Espresso Extraction',
        category: 'brew',
        imageSrc: '/assets/images/story-espresso-science.webp',
        imageAlt: 'Espresso extraction process',
      },
      {
        slug: 'tracing-pink-bourbon-huila',
        title: 'Tracing the Pink Bourbon of Huila',
        category: 'origin',
        imageSrc: '/assets/images/story-huila-pink-bourbon.webp',
        imageAlt: 'Coffee farmer in Huila, Colombia',
      },
    ],
  },
  'ethiopian-yirgacheffe': {
    category: 'origin',
    author: 'Tone Editorial',
    date: 'January 22, 2024',
    title: 'Ethiopian Yirgacheffe: The Birthplace of Coffee',
    readTime: '7 min read',
    leadParagraph:
      "In the birthplace of coffee, the Yirgacheffe region produces some of the world's most distinctive and sought-after beans, celebrated for their floral, tea-like character.",
    heroImageSrc: '/assets/images/story-yirgacheffe.webp',
    heroImageAlt: 'Coffee plants in Yirgacheffe, Ethiopia',
    content: (
      <div>
        <p>
          Ethiopia is where it all began. According to legend, a goatherd named Kaldi discovered
          coffee when he noticed his goats becoming unusually energetic after eating the red berries
          from a certain tree. Today, Ethiopia remains one of the world's most important coffee
          origins.
        </p>
        <p>
          Yirgacheffe, a small region in the Sidamo zone, produces coffees that are unlike any
          other. The region's high altitude, consistent rainfall, and fertile soil create ideal
          conditions for coffee cultivation. Most Yirgacheffe coffees are heirloom varietals,
          passed down through generations.
        </p>
        <StoryBlockquote source="Alemayehu Bekele, Yirgacheffe Coffee Farmer">
          "Our coffee has been grown here for centuries. We know each tree, each season, each
          harvest. This is not just agriculture - it is our heritage."
        </StoryBlockquote>
        <p>
          The processing method in Yirgacheffe is typically washed, which produces a clean, bright
          cup with pronounced floral and citrus notes. The result is a coffee that is delicate yet
          complex, with a tea-like body that makes it perfect for filter brewing.
        </p>
        <p>
          When we serve Yirgacheffe at Tone, we're honoring the tradition and craftsmanship
          that has been refined over centuries. Each cup tells the story of a region that gave the
          world coffee.
        </p>
      </div>
    ),
    pullQuotes: [
      'Our coffee has been grown here for centuries. We know each tree, each season, each harvest. This is not just agriculture - it is our heritage.',
    ],
    images: [
      {
        src: '/assets/images/story-yirgacheffe-farm.webp',
        alt: 'Coffee processing in Yirgacheffe',
        isFullWidth: true,
      },
    ],
    relatedStories: [
      {
        slug: 'tracing-pink-bourbon-huila',
        title: 'Tracing the Pink Bourbon of Huila',
        category: 'origin',
        imageSrc: '/assets/images/story-huila-pink-bourbon.webp',
        imageAlt: 'Coffee farmer in Huila, Colombia',
      },
      {
        slug: 'perfect-v60-technique',
        title: 'The Art of the Perfect V60',
        category: 'brew',
        imageSrc: '/assets/images/story-v60-technique.webp',
        imageAlt: 'V60 pour-over technique',
      },
    ],
  },
  'gardelli-italian-tradition': {
    category: 'roaster',
    author: 'Tone Editorial',
    date: 'March 5, 2024',
    title: 'Gardelli: Italian Tradition Meets Innovation',
    readTime: '5 min read',
    leadParagraph:
      'Rubens Gardelli represents a new generation of Italian roasters, blending centuries-old tradition with cutting-edge techniques to produce coffees of exceptional quality.',
    heroImageSrc: '/assets/images/story-gardelli.webp',
    heroImageAlt: 'Gardelli roastery in Italy',
    content: (
      <div>
        <p>
          Italy has a long and storied relationship with coffee. From the invention of espresso to
          the creation of iconic drinks like the cappuccino, Italian coffee culture has influenced
          the world. Rubens Gardelli, a three-time Italian Barista Champion, continues this
          tradition while pushing boundaries.
        </p>
        <p>
          Gardelli's approach combines traditional Italian roasting techniques with modern
          specialty coffee practices. The result is a portfolio of coffees that are both
          approachable and sophisticated, honoring Italian coffee culture while celebrating origin
          character.
        </p>
        <StoryBlockquote source="Rubens Gardelli">
          "In Italy, coffee is ritual. But ritual doesn't mean stagnation. We honor tradition by
          continuously improving, by never accepting 'good enough.'"
        </StoryBlockquote>
        <p>
          What sets Gardelli apart is their commitment to light roasting, which allows the coffee's
          origin characteristics to shine. This approach, combined with their meticulous cupping
          process, results in coffees that are clean, complex, and memorable.
        </p>
      </div>
    ),
    pullQuotes: [
      "In Italy, coffee is ritual. But ritual doesn't mean stagnation. We honor tradition by continuously improving, by never accepting 'good enough.'",
    ],
    images: [],
    relatedStories: [
      {
        slug: 'nordic-approach-craft',
        title: 'Nordic Approach: A Philosophy of Precision',
        category: 'roaster',
        imageSrc: '/assets/images/story-nordic-approach.webp',
        imageAlt: 'Nordic Approach roastery',
      },
      {
        slug: 'espresso-extraction-science',
        title: 'The Science of Espresso Extraction',
        category: 'brew',
        imageSrc: '/assets/images/story-espresso-science.webp',
        imageAlt: 'Espresso extraction process',
      },
    ],
  },
  'espresso-extraction-science': {
    category: 'brew',
    author: 'Tone Editorial',
    date: 'April 18, 2024',
    title: 'The Science of Espresso Extraction',
    readTime: '6 min read',
    leadParagraph:
      'Espresso is not just coffee - it is a complex chemical extraction process that, when mastered, produces a beverage of unparalleled depth and intensity.',
    heroImageSrc: '/assets/images/story-espresso-science.webp',
    heroImageAlt: 'Espresso extraction process',
    content: (
      <div>
        <p>
          Espresso extraction is a delicate balance of pressure, temperature, time, and grind size.
          Get it right, and you'll produce a shot that is rich, balanced, and full of flavor. Get
          it wrong, and you'll end up with something bitter, sour, or hollow.
        </p>
        <p>
          The ideal extraction time for espresso is typically between 25 and 30 seconds. This
          allows enough time for the water to extract the desirable compounds - sugars, acids, and
          aromatic oils - without over-extracting the bitter compounds.
        </p>
        <StoryBlockquote source="Scott Rao, Coffee Consultant and Author">
          "Espresso is about finding the sweet spot. Too fast, and you get sour. Too slow, and you
          get bitter. The goal is to hit that perfect window where everything comes together."
        </StoryBlockquote>
        <p>
          Temperature is equally critical. Most espresso is extracted at between 90°C and 96°C
          (194°F to 205°F). This range allows for optimal extraction without burning the coffee.
        </p>
        <p>
          At Tone, we use state-of-the-art equipment and rigorous training to ensure every
          shot meets our standards. But we also understand that espresso is both science and art - a
          balance of technical precision and sensory intuition.
        </p>
      </div>
    ),
    pullQuotes: [
      'Espresso is about finding the sweet spot. Too fast, and you get sour. Too slow, and you get bitter. The goal is to hit that perfect window where everything comes together.',
    ],
    images: [],
    relatedStories: [
      {
        slug: 'perfect-v60-technique',
        title: 'The Art of the Perfect V60',
        category: 'brew',
        imageSrc: '/assets/images/story-v60-technique.webp',
        imageAlt: 'V60 pour-over technique',
      },
      {
        slug: 'gardelli-italian-tradition',
        title: 'Gardelli: Italian Tradition Meets Innovation',
        category: 'roaster',
        imageSrc: '/assets/images/story-gardelli.webp',
        imageAlt: 'Gardelli roastery in Italy',
      },
    ],
  },
};

interface StoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params;
  const story = slug ? stories[slug] : null;

  if (!story) {
    return (
      <>
        <Header isHomepage={false} />
        <main className="pt-20 md:pt-24 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-gt mb-4">Story Not Found</h1>
            <p className="text-foreground/60 mb-8">
              The story you're looking for doesn't exist.
            </p>
            <a href="/stories" className="text-primary-accent hover:underline">
              ← Back to Stories
            </a>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tone.coffee';
  const storyUrl = `${siteUrl}/stories/${slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": story.title,
    "image": `${siteUrl}${story.heroImageSrc}`,
    "datePublished": story.date,
    "author": {
      "@type": "Organization",
      "name": story.author
    },
    "publisher": {
      "@type": "Organization",
      "name": "Tone",
      "logo": {
        "@type": "ImageObject",
        "url": `${siteUrl}/assets/images/typography-logo.png`
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": storyUrl
    },
    "description": typeof story.leadParagraph === 'string' ? story.leadParagraph : story.leadParagraph
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Header isHomepage={false} />
      <main>
        <StoryShareBar />
        <StoryHero
          category={story.category}
          author={story.author}
          date={story.date}
          title={story.title}
          readTime={story.readTime}
          leadParagraph={story.leadParagraph}
          heroImageSrc={story.heroImageSrc}
          heroImageAlt={story.heroImageAlt}
        />

        <StoryContent
          content={story.content}
          pullQuotes={story.pullQuotes}
          images={story.images}
        />

        <StoryRelated relatedStories={story.relatedStories} />
      </main>

      <Footer />
    </>
  );
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const resolved = await params;
  const slug = resolved.slug;
  const story = stories[slug];

  if (!story) {
    return {
      title: "Story Not Found | Tone",
      description: "The story you're looking for doesn't exist.",
    };
  }

  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tone.coffee';
  const storyUrl = `${siteUrl}/stories/${slug}`;
  const leadParagraphText = typeof story.leadParagraph === 'string' ? story.leadParagraph : story.leadParagraph;

  return {
    title: `${story.title} | Tone Journal`,
    description: leadParagraphText,
    alternates: {
      canonical: `/stories/${slug}`,
    },
    openGraph: {
      title: `${story.title} | Tone Journal`,
      description: leadParagraphText,
      url: `/stories/${slug}`,
      type: "article",
      publishedTime: story.date,
      authors: [story.author],
      images: [
        {
          url: story.heroImageSrc,
          width: 1200,
          height: 630,
          alt: story.heroImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${story.title} | Tone Journal`,
      description: leadParagraphText,
      images: [story.heroImageSrc],
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(stories).map((slug) => ({
    slug: slug,
  }));
}

