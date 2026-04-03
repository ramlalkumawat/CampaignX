import type { MetadataRoute } from 'next';

import { siteUrl } from '@/components/site-config';

const routes = [
  { path: '', changeFrequency: 'weekly' as const, priority: 1 },
  { path: '/about', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/team', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/services', changeFrequency: 'monthly' as const, priority: 0.8 },
  { path: '/case-studies', changeFrequency: 'monthly' as const, priority: 0.7 },
  { path: '/contact', changeFrequency: 'monthly' as const, priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route.path}`,
    lastModified,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}
