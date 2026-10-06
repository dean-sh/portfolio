# AGENTS.md

This file provides guidance to Codex when working with code in this repository.

## Development commands

```bash
npm run dev     # Development server at http://localhost:3000
npm run build   # Production build
npm run start   # Serve the production build
npm run lint    # ESLint via next lint
```

There is no test suite. Type-check with `npx tsc --noEmit`.

## Architecture

Next.js 14 App Router, TypeScript strict, Tailwind 3.

- `content/` is the typed content registry. `types.ts` holds the shapes. `work.ts` exports `WORK` (case studies) and `EARLIER` (older projects). `site.ts` exports `HERO`, `TESTIMONIALS`, `QUOTE` and `LINKS`.
- The home page is `app/page.tsx`. Keep the approved Plain layout: a short introduction, the work index, earlier work, one quote and contact links.
- Case studies live at `app/work/[slug]` and are generated from `WORK`. `lib/work.ts` resolves the index and the previous and next study.
- `components/Pipeline.tsx` renders a case study's `pipeline.stages`.
- `content/charts.ts` holds the five time series. `lib/chart.ts` formats axes and builds SVG paths; `components/Chart.tsx` renders the figure and data table. `ChartHover.tsx` adds pointer, touch and keyboard readouts. Keep shared constants outside client components.
- Charts name their source and label simulations. Do not invent measured results. Keep mobile readouts within the plot and preserve the expandable data table.
- Legacy pages under `app/projects/*` wrap `components/ProjectDetails.tsx` and are linked from `EARLIER`.
- `app/sitemap.ts` lists home, resume and every case study. `next.config.js` redirects `/projects/renewcast-solar-forecasting` to `/work/physics-first-solar`.
- `app/resume/page.tsx` holds its own experience, education and skills data.

## Design system

- Tokens live in `app/globals.css` as HSL CSS variables, mapped to Tailwind colours in `tailwind.config.js`. Light and dark themes switch on the `dark` class.
- Fonts: Instrument Serif via `next/font/google` (`font-serif`, weight 400 only), Geist Sans and Geist Mono via the `geist` package (`font-sans`, `font-mono`).
- One accent, `signal`, for data marks only: metric ticks, pipeline highlights, link hover underlines. Never for text blocks, buttons or backgrounds.
- Hairlines, not cards. Separate items with `divide-y divide-border` or `.hairline`. No shadows, gradients or rounded boxes.
- Type scale: `text-display-xl`, `text-display-lg`, `text-display-md`, `text-display-sm`. Layout helpers: `.container`, `.prose-col`, `.measure`, `.label`, `.link`, `.hairline`.
- Shared components: `Section` and `SectionLabel` in `components/Section.tsx`, `Arrow` in `components/Arrow.tsx` (the only icon). `components/Nav.tsx` renders the navigation and theme button.

## Conventions

- Content is never hardcoded in components. Visible copy comes from `content/`; only UI chrome (nav labels, section labels) lives in components.
- No long dash in copy or comments. Use a middot or a slash as a separator.
- Headings are sentence case. Numbers are mono with `tabular-nums`.
- Server components by default. `'use client'` only where state is needed.
- The theme toggle and its no-flash script live in `app/layout.tsx` (inline script that sets the `dark` class before paint) and `components/Nav.tsx` (toggles the class, `data-theme` and `localStorage.theme`). Keep the two in sync.
