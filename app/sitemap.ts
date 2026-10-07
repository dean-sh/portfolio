import type { MetadataRoute } from 'next';
import { ALL_CASE_STUDIES } from '@/lib/work';

const SITE_URL = 'https://deanshabi.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${SITE_URL}/`, lastModified, changeFrequency: 'monthly', priority: 1 },
    ...ALL_CASE_STUDIES.map((study) => ({
      url: `${SITE_URL}/work/${study.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${SITE_URL}/resume`, lastModified, changeFrequency: 'monthly', priority: 0.5 },
  ];
}
