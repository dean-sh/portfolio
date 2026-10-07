import type { Graph } from 'schema-dts';
import type { CaseStudy } from '@/content/types';
import { BASE, EDUCATION, EXPERIENCE } from '@/content/resume';
import { HERO, LINKS, PERSON } from '@/content/site';

const absolute = (path: string) => new URL(path, LINKS.site).href;

// The layout describes the Person once on every page. Pages point at it by id instead of repeating it.
const PERSON_REF = { '@id': absolute('/#person') };

export const SITE_GRAPH: Graph = {
  '@context': 'https://schema.org',
  '@graph': [
    { '@type': 'WebSite', '@id': absolute('/#website'), name: HERO.name, url: absolute('/') },
    {
      '@type': 'Person',
      ...PERSON_REF,
      name: HERO.name,
      url: absolute('/'),
      image: absolute('/images/profile.png'),
      jobTitle: EXPERIENCE[0].role,
      description: PERSON.description,
      sameAs: [LINKS.linkedin, LINKS.github],
      address: { '@type': 'PostalAddress', addressLocality: BASE.city, addressCountry: BASE.countryCode },
      alumniOf: [...new Set(EDUCATION.map((degree) => degree.institution))].map((name) => ({
        '@type': 'CollegeOrUniversity',
        name,
      })),
      knowsAbout: PERSON.knowsAbout,
    },
  ],
};

export const RESUME_GRAPH: Graph = {
  '@context': 'https://schema.org',
  '@graph': [{ '@type': 'ProfilePage', url: absolute('/resume'), mainEntity: PERSON_REF }],
};

export function caseStudyGraph(study: CaseStudy): Graph {
  const url = absolute(`/work/${study.slug}`);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: study.seo.title,
        description: study.seo.description,
        image: absolute(`/work/${study.slug}/opengraph-image`),
        author: PERSON_REF,
        mainEntityOfPage: url,
        url,
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: absolute('/') },
          { '@type': 'ListItem', position: 2, name: 'Work', item: absolute('/#work') },
          { '@type': 'ListItem', position: 3, name: study.seo.title, item: url },
        ],
      },
    ],
  };
}

export function JsonLd({ data }: { data: Graph }) {
  // Escaping < keeps any copy containing "</script>" from closing the tag early.
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }} />;
}
