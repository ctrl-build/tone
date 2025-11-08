import { MetadataRoute } from 'next';
import { getAllStorySlugs } from '@/lib/stories-data';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://tone.coffee';
  const baseUrl = siteUrl;

  const routes = [
    '',
    '/philosophy',
    '/offerings',
    '/visit',
    '/stories',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' as const : 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const storySlugs = getAllStorySlugs();
  const storyRoutes = storySlugs.map((slug) => ({
    url: `${baseUrl}/stories/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...storyRoutes];
}

