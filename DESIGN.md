# Design System: Dean Shabi, portfolio

## 1. Visual theme and atmosphere

A calm, engineering-grade editorial site. It reads like a well-made technical report that happens to be beautiful. Every number is real and every chart plots data from production systems, so the design gets out of the way of the evidence.

- **Creativity 9.** The hero sets type with inline visuals, a portrait and a live chart sitting between the words.
- **Variance 7, offset and asymmetric.** Split hero with a photograph, then a lead case study, an offset pair and a closing pair. No two consecutive case studies share a layout. Nothing is centred.
- **Motion 5, fluid CSS.** Sections rise into place as they enter the viewport, with a spring-like ease. One perpetual micro-interaction, a soft pulse on today's GitHub cell. Nothing moves while someone is reading.
- **Density 4, daily-app balanced.** Generous whitespace, but every block carries data.

## 2. Color palette and roles

One neutral family (zinc) in both themes, one accent (GitHub green). No warm and cool greys mixed.

Light theme:

- **Canvas Zinc** (#FAFAFA). Page background.
- **Pure Surface** (#FFFFFF). Raised panels: the Now strip, the heatmap, charts, case study cards and the metrics band.
- **Charcoal Ink** (#18181B). Primary text and headlines.
- **Muted Steel** (#71717A). Secondary text, metadata, captions.
- **Whisper Border** (#E4E4E7). 1px structural lines and panel borders.
- **Commit Green** (#1A7F37). The single accent. Index numbers, key metrics, focus series in charts, the primary button, hover states.
- **Chart Context Grey** (#C4C4CC). Baselines and comparison series in charts. Always paired with a direct label or a legend.

Dark theme:

- **Canvas Zinc** (#0C0C0E), **Pure Surface** (#18181B), **Charcoal Ink** (#FAFAFA), **Muted Steel** (#A1A1AA), **Whisper Border** (#2C2C31).
- **Commit Green** (#3FB950) for text, (#2EA043) for chart lines.
- **Chart Context Grey** (#71717A).

The GitHub heatmap uses GitHub's own greens per theme (#9BE9A8, #40C463, #30A14E, #216E39 light; #0E4429, #006D32, #26A641, #39D353 dark) on a zinc empty cell.

## 3. Typography rules

- **Display:** Instrument Serif, regular weight, tracking -0.01em. Used for headlines, case study titles and the testimonial. Scaled with `clamp()`. Hierarchy comes from size steps and ink colour, never bold.
- **Body:** Geist Sans, 16-17px, line height 1.65, max 65 characters per line, Muted Steel for supporting text.
- **Mono:** Geist Mono for numbers only: metrics, chart values and axis ticks, index numbers. Labels, dates, captions and navigation use the sans at 12-13px, sentence case, no letterspaced uppercase.
- **Banned:** Inter, generic serifs (Times New Roman, Georgia, Garamond), bold serif display, gradient text.

## 4. Hero

- Asymmetric split. Left: the headline, with the portrait and a live chart chip set inline at type height, then the primary call to action and one quiet text link to the work. Right: the hero photograph, captioned with a link to the case study it belongs to, its key number and what that number measures.
- Under the hero, a full-width "Now" panel lists current roles, the first with a soft pulsing status dot. The GitHub heatmap follows it.
- No scroll prompts, no bouncing arrows.
- On phones the split collapses to one column. The inline visuals stay inline at type height and never overlap text.

## 5. Component stylings

- **Buttons.** Commit Green fill, white text, gently rounded (0.5rem). Hover darkens the green (`signal-hover`) so white text stays above 4.5:1. Pressed state moves down 1px. No glow.
- **Panels.** Pure Surface, Whisper Border, rounded 1rem, a soft shadow tinted to the ink colour. Panels only where elevation means something: the Now strip, the heatmap, charts, the case study cards and the metrics band on case study pages. The metrics band is only as wide as its metrics, with hairlines between them. Everything else is separated by border-top lines and space.
- **Case study cards.** Each pairs a photograph with the title, the hook, the key metric in large green mono and a captioned mini chart from that study's real data, and ends in "Read the case study". The lead card splits photo and copy side by side. The others stack photo over copy, with the photo inset in some and full-bleed in others.
- **Photography.** One photograph per case study at `public/images/work/<slug>.jpg`, plus `public/images/hero.jpg`. Generated illustrations in a natural green palette that sits with Commit Green. Card photos are decorative, so `alt=""`. The hero and the full-width photo on each case study page carry short, literal alt text. Never reuse a photograph for a second subject. Rendered through `components/Photo.tsx`: rounded 1rem, a hairline inner ring, and a slow 3% zoom on hover.
- **Charts.** 2px lines, 4px rounded bar ends, hairline grids, direct labels, a data table on every line chart, and no dual axes. A bar's label uses the same measure as its length. On phones the line chart readout sits above the plot, never over it.

## 6. Layout principles

- Content width 72rem with 1.5-2rem gutters. Reading columns capped at 65ch inside it.
- CSS grid on a 12-column frame. The hero splits 7/5. The lead case study splits 7/5, the next pair 7/5 with the second offset down, the last pair 6/6.
- Case study pages run header, summary beside role and stack, metrics band, full-width photograph, then the numbered sections beside a sticky table of contents, then a "Next case study" card with its photograph and the contact block.
- Vertical rhythm through `clamp(4rem, 9vw, 7rem)` section gaps.
- Below 768px every multi-column layout collapses to one column. No horizontal scroll at any width from 320px.
- Touch targets at least 44px.

## 7. Motion and interaction

- Sections and tiles rise 14px and fade in as they enter the viewport. 700ms, `cubic-bezier(0.16, 1, 0.3, 1)`, staggered 70ms per item.
- Hover states use the same curve over 250ms.
- One perpetual loop: today's cell in the GitHub heatmap pulses softly.
- Animate only `transform` and `opacity`. Everything honours `prefers-reduced-motion`.
- Content is visible without JavaScript. What is on screen at load (the hero, the case study header, the resume intro) enters with a CSS-only rise. The scroll reveal only arms once the page script has run, and only for content below the fold.

## 8. Anti-patterns (banned)

- No emojis.
- No Inter, no generic serifs.
- No pure black.
- No neon or outer glows, no gradient text.
- No centred hero.
- No three equal cards in a row.
- No invented numbers. Every metric and chart traces to a repository, a production snapshot or a figure Dean supplied. Illustrative charts say so in their caption.
- No "BY THE NUMBERS" sections of filler stats.
- No `LABEL // YEAR` styling.
- No copy clichés (elevate, seamless, unleash, next-gen).
- No scroll prompts or bouncing chevrons.
- No custom cursors.
- No overlapping elements.
