# Professional Portfolio

Dean Shabi's portfolio at https://deanshabi.com. Typed content in `content/` drives the home page and the case studies under `/work`.

## Project Structure

```
/
├── app/              # Next.js App Router pages (home, /work/[slug], /resume, legacy /projects/*)
├── components/       # Reusable React components
├── content/          # Typed content registry (types.ts, work.ts, site.ts)
├── lib/              # Helpers (case study lookup, chart axes and paths)
├── public/           # Static assets (images, fonts, etc.)
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
- Five case studies with time series charts, pointer and keyboard readouts, and expandable data tables
- Resume page
- Sitemap and structured metadata for SEO

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

- Edit copy in `content/site.ts`, case studies in `content/work.ts`, and time series in `content/charts.ts`.
- Tokens and fonts live in `app/globals.css`, `tailwind.config.js` and `app/layout.tsx`.

## License

This project is licensed under the MIT License
