import type { Testimonial } from './types';

export const HERO = {
  name: 'Dean Shabi',
  title: 'Engineering lead. I build machine learning systems that run in production.',
  lede: 'Stealth startup, aerospace and defence · Founder, Otty · Ex Renewcast, tem., AmpX · Prague',
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Jan Bim, PhD',
    role: 'AI Department Lead, Datamole',
    quote:
      "I can always rely on Dean to go the extra mile. His ability to quickly transform from a developer to a data scientist through self-learning is remarkable. His survey of time series methods became our team's foundational reference.",
  },
  {
    name: 'Irene Di Martino, PhD',
    role: 'CEO, AmpX',
    quote:
      'Dean has been a super member of our team. His smart and thoughtful approach to complex problems set him apart. His intelligence combined with his collaborative spirit makes him an exceptional asset.',
  },
  {
    name: 'Ross',
    role: 'Head of Data, tem.',
    quote:
      'Dean has a real talent for clarity. The way he presents information makes even complex, data-heavy content easy to follow. His communication style is clear, inclusive, and well considered.',
  },
  {
    name: 'Imogen',
    role: 'Product Manager, tem.',
    quote:
      "Dean's work has been consistently impressive. His ability to structure complex information at the right level of depth, focus on insights over raw metrics, and adapt quickly to feedback really stood out.",
  },
];

export const QUOTE = TESTIMONIALS[2];

export const LINKS = {
  email: 'deanshabi@gmail.com',
  linkedin: 'https://www.linkedin.com/in/dean-shabi/',
  github: 'https://github.com/dean-sh',
  cal: 'https://cal.com/deanshabi/30min',
};
