export interface Story {
  id: string;
  slug: string;
  category: 'origin' | 'roaster' | 'brew';
  title: string;
  imageSrc: string;
  imageAlt: string;
  readTime: string;
}

export const storiesList: Story[] = [
  {
    id: '1',
    slug: 'tracing-pink-bourbon-huila',
    category: 'origin',
    title: 'Tracing the Pink Bourbon of Huila',
    imageSrc: '/assets/images/story-huila-pink-bourbon.webp',
    imageAlt: 'Coffee farmer in Huila, Colombia',
    readTime: '5 min read',
  },
  {
    id: '2',
    slug: 'nordic-approach-craft',
    category: 'roaster',
    title: 'Nordic Approach: A Philosophy of Precision',
    imageSrc: '/assets/images/story-nordic-approach.webp',
    imageAlt: 'Nordic Approach roastery',
    readTime: '6 min read',
  },
  {
    id: '3',
    slug: 'perfect-v60-technique',
    category: 'brew',
    title: 'The Art of the Perfect V60',
    imageSrc: '/assets/images/story-v60-technique.webp',
    imageAlt: 'V60 pour-over technique',
    readTime: '4 min read',
  },
  {
    id: '4',
    slug: 'ethiopian-yirgacheffe',
    category: 'origin',
    title: 'Ethiopian Yirgacheffe: The Birthplace of Coffee',
    imageSrc: '/assets/images/story-yirgacheffe.webp',
    imageAlt: 'Coffee plants in Yirgacheffe, Ethiopia',
    readTime: '7 min read',
  },
  {
    id: '5',
    slug: 'gardelli-italian-tradition',
    category: 'roaster',
    title: 'Gardelli: Italian Tradition Meets Innovation',
    imageSrc: '/assets/images/story-gardelli.webp',
    imageAlt: 'Gardelli roastery in Italy',
    readTime: '5 min read',
  },
  {
    id: '6',
    slug: 'espresso-extraction-science',
    category: 'brew',
    title: 'The Science of Espresso Extraction',
    imageSrc: '/assets/images/story-espresso-science.webp',
    imageAlt: 'Espresso extraction process',
    readTime: '6 min read',
  },
];

export function getStoryBySlug(slug: string): Story | undefined {
  return storiesList.find(story => story.slug === slug);
}

export function getAllStorySlugs(): string[] {
  return storiesList.map(story => story.slug);
}

