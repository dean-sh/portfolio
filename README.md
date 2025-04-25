# Dean Shabi - Professional Portfolio

A modern, responsive portfolio website showcasing Dean Shabi's work as a Senior Data Scientist.

## Project Structure

```
/
├── app/              # Next.js App Router pages and API routes
├── components/       # Reusable React components
├── lib/              # Utility functions, helper modules
├── public/           # Static assets (images, fonts, etc.)
├── scripts/          # Helper scripts (e.g., preprocessing)
├── styles/           # Global styles and Tailwind base
├── .env.local.example # Example environment variables file
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
- **Animation:** [Framer Motion](https://www.framer.com/motion/)
- **Vector Database:** [Upstash Vector](https://upstash.com/vector) (for RAG functionality)
- **AI/LLM:** [LangChain](https://js.langchain.com/) & [OpenAI API](https://openai.com/api/) (for RAG functionality)
- **Email:** [EmailJS](https://www.emailjs.com/) / [Formspree](https://formspree.io/) (Check components for implementation)
- **Linting/Formatting:** Configured via Next.js defaults (ESLint)

## Features

- Modern and clean design
- Fully responsive
- Smooth animations
- Project showcase with filtering
- Contact form
- SEO optimized

## Chat with Portfolio (RAG)

This portfolio includes an experimental Retrieval-Augmented Generation (RAG) feature that allows users to ask questions about Dean Shabi's experience and projects.

- **Functionality:** Users can interact with a chatbot interface to query information contained within the portfolio's data sources (e.g., resume PDF, project descriptions).
- **Technology:** It utilizes [LangChain.js](https://js.langchain.com/) to orchestrate the process, [OpenAI](https://openai.com/api/) for language model processing, and [Upstash Vector](https://upstash.com/vector) as the vector store for efficient information retrieval.
- **Setup:**
  - The data preprocessing (embedding generation) is handled by `scripts/preprocess.mjs`, which needs to be run (e.g., `node scripts/preprocess.mjs`) after setting up the environment variables.
  - The chat interaction logic is served via the API route `/api/rag`.
  - This feature heavily relies on the `OPENAI_API_KEY`, `UPSTASH_VECTOR_REST_URL`, and `UPSTASH_VECTOR_REST_TOKEN` environment variables being correctly configured in `.env.local`.

## Getting Started

### Prerequisites

- Node.js (Version specified in `.nvmrc` if present, otherwise >= 18.x recommended)
- npm or yarn
- Git

### Environment Variables

This project requires certain environment variables to be set for full functionality, especially for the RAG API and potentially contact forms.

1.  Copy the example environment file:
    ```bash
    cp .env.local.example .env.local
    ```
2.  Fill in the required values in `.env.local`:

    - `OPENAI_API_KEY`: Your API key from OpenAI.
    - `UPSTASH_VECTOR_REST_URL`: Your Upstash Vector database REST URL.
    - `UPSTASH_VECTOR_REST_TOKEN`: Your Upstash Vector database REST token.

    **Note:** `.env.local` is included in `.gitignore` and should _not_ be committed to version control.

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

After building, you can deploy the `out` directory to any static hosting service like Vercel, Netlify, GitHub Pages, etc.

## Customization

- Update personal information, project details, and content primarily within the `app/` and `components/` directories.
- Configure vector data processing in `scripts/preprocess.mjs` and RAG logic in `app/api/rag/route.js`.
- Add your images to the `public/images` directory.
- Modify colors and theme in `tailwind.config.js` and `styles/globals.css`.

## License

This project is licensed under the MIT License
