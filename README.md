# Professional Portfolio

Dean Shabi's portfolio at https://deanshabi.com. Typed content in `content/` drives the home page and the case studies under `/work`.

## Project Structure

```
/
├── app/              # App Router pages (home, /work/[slug], /resume, 404), share images, icons, the resume PDF route
├── components/       # Reusable React components
├── content/          # Typed content registry (work, charts, site copy, resume)
├── lib/              # Helpers (case study lookup, chart axes and paths, metadata, share images, palette)
├── assets/fonts/     # TTFs for the resume PDF and the share images
├── public/           # Photos
├── next.config.js    # Next.js configuration
├── tailwind.config.js # Tailwind CSS configuration
├── package.json      # Project dependencies and scripts
└── README.md         # This file
```

## Tech Stack Details

This project leverages a modern web development stack:

- **Framework:** [Next.js](https://nextjs.org/) (v14+ with App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with PostCSS
- **Linting/Formatting:** Configured via Next.js defaults (ESLint)

## Features

- Typographic design with light and dark themes
- Fully responsive
- Ten case studies, each with a chart from its real data. Line charts have pointer, touch and keyboard readouts and an expandable data table
- A GitHub contribution heatmap that refreshes daily
- Resume page, plus a resume PDF generated from the same content at build time
- Share images and icons generated at build time, a sitemap, robots.txt and structured metadata

## Getting Started

### Prerequisites

- Node.js (Version specified in `.nvmrc` if present, otherwise >= 18.x recommended)
- npm or yarn
- Git

### Installation

1. Clone the repository (find the URL on the repository page):

   ```
   git clone <repository_url>
   ```

2. Install dependencies

   ```
   npm install
   # or
   yarn install
   ```

3. Run the development server

   ```
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

```
npm run build
# or
yarn build
```

## Deployment

The site deploys to Vercel as a standard Next.js app.

## Customization

- Edit copy in `content/site.ts`, case studies in `content/work.ts`, charts in `content/charts.ts` and the resume in `content/resume.ts`.
- Tokens and fonts live in `app/globals.css`, `tailwind.config.js` and `app/layout.tsx`. `DESIGN.md` describes the design system.

## License

This project is licensed under the MIT License
