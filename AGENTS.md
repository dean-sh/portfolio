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

- `content/` is the typed content registry. `types.ts` holds the shapes. `work.ts` exports `WORK` (the five selected case studies) and `EARLIER` (older projects). `charts.ts` holds one chart per study. `site.ts` exports `HERO`, `NOW`, `TESTIMONIALS`, `QUOTE`, `CONTACT_LINE` and `LINKS`. `resume.ts` holds the resume. `email.ts` holds the email address, which only the resume PDF may use.
- The home page is `app/page.tsx`. Top to bottom it runs the hero, the Now strip, the GitHub heatmap, the selected work cards, earlier work, one testimonial and the contact block. Keep the heatmap where it is, under the hero and the Now strip.
- Case studies live at `app/work/[slug]` and are generated from `WORK` and `EARLIER`. `lib/work.ts` resolves a study and the next one in the same list. Each page ends with the next case study and the contact block.
- Each home card shows its study's lead metric and a mini chart captioned with the chart's `sparkLabel`, and ends in "Read the case study". Card links take their accessible name from the title through `aria-labelledby` (`titleId` in `components/StudyRow.tsx`).
- `components/Contact.tsx` holds the contact block (full on home and case studies, `compact` on the resume) and `CallButton`, the green call to action. `components/StudyRow.tsx` is the thumbnail row for earlier work and the 404 page. `components/Toc.tsx` is the case study table of contents, which marks the current section with `aria-current`.
- `app/sitemap.ts` lists home, resume and every case study, and `app/robots.ts` allows everything and points at the sitemap. `next.config.js` holds the image settings (AVIF then WebP, 31-day cache), the security headers and the permanent redirects for old `/projects/*` URLs.

## Charts

- Chart kinds live in `content/types.ts` (`line`, `funnel`, `judge`, `compare`, `equation`, `tail`). Each has a full view in `components/Chart.tsx` and a mini view in `components/Sparkline.tsx`. Every chart needs a `sparkLabel`.
- `lib/chart.ts` formats axes, builds SVG paths and exports `MONTHS`, `VIEWBOX`, `TONE_COLOR` and `inDrawOrder`. Keep shared constants there, outside client components.
- `components/ChartHover.tsx` wraps a line chart's plot with pointer, touch and keyboard readouts. On phones the readout is docked above the plot and shows the last point until someone touches the chart. Wider screens get a tooltip beside the pointer.
- Charts name their source and label simulations. The `tail` chart is an illustrative loss distribution, labelled as such. Do not invent measured results. A bar's label must use the same measure as its length. Preserve the expandable data table on line charts.

## Metadata and share images

- The layout sets the title template, description, default openGraph and robots. Each page sets its own canonical. A page's `openGraph` replaces the layout's whole object, so pages spread `OPEN_GRAPH` from `lib/metadata.ts` into theirs. Twitter cards take their title, description and image from openGraph.
- Share images are generated at build time with `next/og` from the TTFs in `assets/fonts` (helpers in `lib/og.ts`). `app/opengraph-image.tsx` draws the name, the hero headline and the solar sparkline. `app/work/[slug]/opengraph-image.tsx` draws each study's photo, title, org, period and lead metric. `app/resume/opengraph-image.tsx` re-exports the home image, because the resume's openGraph would otherwise drop it. A copy change updates them on the next deploy.
- `app/icon.tsx` and `app/apple-icon.tsx` draw the mark in `lib/mark.tsx`. `app/favicon.ico` is the same mark at 16 and 32 px, saved from `/icon`. Regenerate it if the mark changes.
- `lib/palette.ts` holds the light-theme hexes for renderers that can't read CSS variables (the resume PDF, share images and icons). Keep it in sync with `app/globals.css`.

## Design system

- `DESIGN.md` is the design system. Tokens live in `app/globals.css` as HSL CSS variables, mapped to Tailwind colours in `tailwind.config.js`. Light is the default and the `dark` class switches themes.
- Fonts are set up in `app/fonts.ts`. Instrument Serif (`font-serif`, weight 400) and Geist Sans are preloaded. The italic serif is a separate instance that only the testimonial uses (`serifItalic.className`). Geist Mono (`font-mono`) loads from the geist package's file without a preload.
- One accent, `signal` (GitHub green). It marks data (metrics, index numbers, the focus series), the primary button and hover states. `signal-hover` is the darker button hover, which keeps white text above 4.5:1.
- `.panel` (surface, border, 1rem radius, soft shadow) is for the Now strip, the heatmap, charts, the work cards and the metrics band. Everything else is separated by hairlines and space.
- Utilities: `.container`, `.panel`, `.meta`, `.eyebrow`, `.link`, `.rise`. Small labels use `.meta` (12px muted) and `.eyebrow` (12px medium), never letterspaced uppercase mono. Monospace is for numbers only. The global `h1, h2, h3` rule applies the serif, so sans headings must add `font-sans`.
- `components/Arrow.tsx` is the only icon. `components/Nav.tsx` renders the navigation and the theme toggle.

## Motion

- Content on screen at load (the home hero and Now strip, the case study header and metrics band, the resume intro and experience) uses `.rise`, a CSS-only entrance, so it never waits for JavaScript.
- Content below the fold uses `data-reveal`. `components/RevealObserver.tsx` shows it on scroll once the inline script has added the `js` class. Never put `data-reveal` on anything visible at load. It held mobile LCP back by about 2 s and hid the h1 when scripts failed.
- Everything honours `prefers-reduced-motion`.

## Photos

Every case study needs a photograph at `public/images/work/<slug>.jpg`. `workImage(slug)` in `lib/work.ts` builds the path, and `components/Photo.tsx` renders it at quality 60 with an empty alt. A missing file shows as a broken image rather than a build error, so add the photo in the same change as the study. Give each `sizes` attribute the slot's real width, minus the page gutters, so phones don't download desktop images.

## Conventions

- Content is never hardcoded in components. Visible copy comes from `content/`. Only UI chrome (nav labels, section labels, button labels) lives in components.
- No long dash in copy or comments. Use a middot or a slash as a separator.
- Headings are sentence case. Numbers are mono with `tabular-nums`.
- Server components by default. `'use client'` only where state is needed.
- The theme toggle and its no-flash script live in `app/layout.tsx` (an inline script that sets the `dark` class before paint) and `components/Nav.tsx` (a "Dark" toggle button with `aria-pressed` that sets the class, `data-theme` and `localStorage.theme`). Keep the two in sync.

## GitHub contributions

The home page shows the GitHub contribution heatmap. `lib/github.ts` fetches the public calendar at `github.com/users/<user>/contributions` (no token) with `revalidate: 86400`, so the page regenerates at most once a day. A failed refresh throws, which makes Next keep serving the last good page. A failed fetch during `next build` returns `null` and the section is left out. Colours come from the `--gh-0` to `--gh-4` tokens in `app/globals.css` (GitHub's greens, per theme). Levels are the user's own quartiles of active days. Today's cell pulses with `.pulse-ring-tight`, which keeps the ring inside the 3 px gap between cells.

## Earlier case studies

`content/work.ts` exports `WORK` (current) and `EARLIER` (older projects). Both are `CaseStudy` entries rendered by `app/work/[slug]/page.tsx`, and the next case study stays within each list. The old `/projects/<slug>` URLs redirect permanently in `next.config.js`, to the matching case study, the closest one, the EV simulator repository or home.

## Resume PDF

The resume PDF at `/dean-shabi-cv.pdf` is generated at build time from `content/resume.ts` by `app/dean-shabi-cv.pdf/route.ts` and `components/ResumeDocument.tsx`. The route is static, so `next build` renders it once per deploy with `@react-pdf/renderer` and the TTFs in `assets/fonts/`. Never commit a PDF by hand. After a content change, open the PDF and check that it still fits on two pages.

The PDF is also tuned to parse cleanly in resume parsers (OpenResume, pdfminer, pdfplumber, pypdf, pdf.js and poppler). The single-column skills, the gutter offsets, the gaps around the role and company dot, the SemiBold role and company, the "Prague, CZ" header form of `BASE` and the footer draw order exist for that, and comments in `components/ResumeDocument.tsx` say why. `patches/@react-pdf+textkit+7.0.1.patch`, applied by `postinstall`, keeps text that starts with a digit in one PDF text run, so parsers read periods like "2026 to now" whole. When `@react-pdf/textkit` is upgraded, check whether the patch still applies or is still needed.

The email address appears on the PDF only, never on the website (not in HTML, JS bundles or JSON-LD). It lives in `content/email.ts`, which imports `server-only`, and only `components/ResumeDocument.tsx` imports it. Don't add it to `LINKS` or render it from any page.
