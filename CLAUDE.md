# CLAUDE.md

This file provides guidance to Claude Code when working with code in this repository.

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
- The remaining legacy pages under `app/projects/*` wrap `components/ProjectDetails.tsx` and are not linked from the site.
- `app/sitemap.ts` lists home, resume and every case study. `next.config.js` redirects old `/projects/*` and retired `/work/*` URLs to their current case studies.
- `content/resume.ts` holds the resume summary, locations, experience, education and skills. `app/resume/page.tsx` and the resume PDF both render it.

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

## GitHub contributions

The home page shows the GitHub contribution heatmap under the hero. `lib/github.ts` fetches the public calendar at `github.com/users/<user>/contributions` (no token) with `revalidate: 86400`, so the page regenerates at most once a day. A failed refresh throws, which makes Next keep serving the last good page. A failed fetch during `next build` returns `null` and the section is left out. Colours come from the `--gh-0` to `--gh-4` tokens in `app/globals.css` (GitHub's greens, per theme). Levels are the user's own quartiles of active days.

Each work row on the home page draws a sparkline of its case study chart (`components/Sparkline.tsx`), reusing `lib/chart.ts`. A chart with `spark: 'cumulative'` is drawn as running totals.

## Earlier case studies

`content/work.ts` exports `WORK` (current) and `EARLIER` (older projects). Both are `CaseStudy` entries rendered by `app/work/[slug]/page.tsx`; prev/next stays within each list. The old `/projects/<slug>` URLs for the five migrated projects redirect permanently to `/work/<slug>` (`next.config.js`). Chart kinds live in `content/types.ts` (`line`, `funnel`, `judge`, `compare`, `equation`, `tail`), each with a full view in `components/Chart.tsx` and a mini view in `components/Sparkline.tsx`. The `tail` chart is an illustrative loss distribution, labelled as such. The remaining `app/projects/*` pages are unlinked legacy pages that still use `components/ProjectDetails.tsx`.

## Type and share image

`DESIGN.md` is the design system. Monospace is for numbers only. Small labels use the `.meta` (12px muted) and `.eyebrow` (12px medium) utilities in `app/globals.css`, never letterspaced uppercase mono. The global `h1, h2, h3` rule applies the serif, so sans headings must add `font-sans`. The share image `public/images/og-image.png` is rendered from a static template with a snapshot of the heatmap; regenerate it when the hero copy changes.

Every case study needs a photograph at `public/images/work/<slug>.jpg`. `workImage(slug)` in `lib/work.ts` builds the path, and `components/Photo.tsx` renders it. A missing file shows as a broken image rather than a build error, so add the photo in the same change as the study.

## Resume PDF

The resume PDF at `/dean-shabi-cv.pdf` is generated at build time from `content/resume.ts` by `app/dean-shabi-cv.pdf/route.ts` and `components/ResumeDocument.tsx`. The route is static, so `next build` renders it once per deploy with `@react-pdf/renderer` and the TTFs in `assets/fonts/`. Never commit a PDF by hand. After a content change, open the PDF and check that it still fits on two pages.
