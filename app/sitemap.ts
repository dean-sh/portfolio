import type { MetadataRoute } from 'next';
import { LINKS } from '@/content/site';
import { ALL_CASE_STUDIES } from '@/lib/work';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${LINKS.site}/`, lastModified, changeFrequency: 'monthly', priority: 1 },
    ...ALL_CASE_STUDIES.map((study) => ({
      url: `${LINKS.site}/work/${study.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${LINKS.site}/resume`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
  ];
}
