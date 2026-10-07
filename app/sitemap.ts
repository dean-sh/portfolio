import type { MetadataRoute } from 'next';
import { LINKS } from '@/content/site';
import { ALL_CASE_STUDIES } from '@/lib/work';

// No lastModified. The build time is not when a page last changed, and a false date is worse than none.
// Next 14.2's MetadataRoute.Sitemap has no images field, so image entries wait for an upgrade.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${LINKS.site}/`, changeFrequency: 'monthly', priority: 1 },
    ...ALL_CASE_STUDIES.map((study) => ({
      url: `${LINKS.site}/work/${study.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    { url: `${LINKS.site}/resume`, changeFrequency: 'monthly', priority: 0.5 },
  ];
}
