# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Development
npm run dev          # Start development server at http://localhost:3000
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# No test command configured - tests should be added if needed
```

## Architecture Overview

This is a **Next.js 14 portfolio website** with App Router using **TypeScript**. The site showcases Dean Shabi's professional work and includes an AI-powered RAG (Retrieval-Augmented Generation) chatbot feature.

### Key Architectural Features

**Single-Page Portfolio Structure**: The main homepage (`app/page.tsx`) is composed of section-based components:
- `Hero` - Landing section with animated text and RAG chatbot interface
- `About` - About section  
- `Works` - Project portfolio grid
- `Skills` - Technical skills showcase
- `Testimonials` - Client testimonials
- `Contact` - Contact form

**RAG Chatbot System**: The Hero component includes a sophisticated chat interface that allows users to ask questions about Dean's experience:
- Uses LangChain.js for RAG orchestration
- OpenAI GPT-4o-mini for language model processing  
- Upstash Vector for vector database storage
- Multi-turn conversation support with context management
- WhatsApp-style chat UI with real-time messaging

**Component Patterns**: Uses consistent patterns throughout:
- Framer Motion for animations (`initial`, `whileInView`, `viewport={{ once: true }}`)
- Dynamic imports for 3D components to prevent SSR issues
- Client components marked with `'use client'` directive
- TypeScript interfaces for type safety

### Tech Stack

**Core Framework**:
- Next.js 14 with App Router and TypeScript 5.8.3
- React 18 with Framer Motion for animations
- Tailwind CSS with custom configuration and Outfit font

**AI/RAG System**:
- LangChain.js (`@langchain/core`, `@langchain/openai`) for RAG pipeline
- OpenAI API for embeddings and chat completion
- Upstash Vector (`@upstash/vector`) for vector database
- Custom conversation management with caching

**Visual Effects**:
- React Three Fiber (`@react-three/fiber`, `@react-three/drei`) for 3D backgrounds
- TSParticles (`@tsparticles/react`, `@tsparticles/slim`) for particle effects
- Three.js for WebGL rendering

**Forms & Analytics**:
- Formspree (`@formspree/react`) for contact form handling
- Vercel Analytics for usage tracking
- Custom emoji picker integration

## Project Structure

```
app/
├── layout.tsx              # Root layout with metadata, Navbar, Footer
├── page.tsx               # Main homepage (Hero + About + Works + Skills + Contact)
├── resume/page.tsx        # Dedicated resume page
├── globals.css           # Global styles and Tailwind configuration
├── not-found.tsx         # 404 page
└── api/
    └── rag/route.js      # RAG chatbot API endpoint (POST)

components/
├── Hero.tsx              # Landing section with RAG chat interface
├── About.tsx, Skills.tsx, Works.tsx, Contact.tsx, Testimonials.tsx
├── AIFeatures.tsx        # AI capabilities showcase (separate from Hero chat)
├── ProjectCard.tsx       # Individual project display component
├── SpotlightCard.tsx     # Interactive spotlight effect wrapper
├── R3fBackground.tsx     # React Three Fiber 3D background
├── ParticleBackground.tsx # TSParticles background component
├── PopupLink.tsx         # External link popup handler
├── ClientEmoji.tsx       # Client-side emoji rendering
└── ui/                   # UI utility components

public/
├── images/               # Project screenshots and assets
├── dean-shabi-cv.pdf    # Resume PDF file
└── projects_summary.pdf  # Project documentation for RAG system
```

## Environment Variables

Required for full functionality (especially RAG features):

```bash
OPENAI_API_KEY=           # OpenAI API key for RAG chatbot
UPSTASH_VECTOR_REST_URL=  # Upstash Vector database URL
UPSTASH_VECTOR_REST_TOKEN=# Upstash Vector database token
```

Copy `.env.local.example` to `.env.local` and fill in values (if example file exists).

## RAG System Details

The portfolio includes a sophisticated conversational AI system integrated into the Hero component:

**Data Pipeline**:
1. PDF documents (resume, project summaries) processed into vector embeddings
2. Embeddings stored in Upstash Vector database with similarity search
3. Query processing with context retrieval and response generation
4. Multi-turn conversation support with conversation history

**API Endpoint**: `/app/api/rag/route.js`
- Handles POST requests with `{ query, conversationHistory }`
- Implements intelligent context search with score thresholds
- Two-stage response generation for complex queries
- Comprehensive error handling and logging

**UI Integration**: 
- WhatsApp-style chat interface in Hero component
- Real-time message streaming and conversation management
- Suggested prompts for common queries
- Response caching for suggested prompts
- Mobile-optimized chat experience

## Styling & Design Patterns

**Tailwind Configuration**: Custom theme extends with:
- Custom color palette (primary: #0f172a, accent: #3b82f6)
- Extended screens for responsive breakpoints (`xs: 480px`)
- Custom gradient animations and backdrop blur utilities
- Outfit font family integration

**Animation Patterns**: Consistent Framer Motion usage:
- `initial={{ opacity: 0, y: 50 }}` for fade-up animations
- `whileInView` with `viewport={{ once: true }}` for scroll triggers
- Custom gradient text animations and spotlight effects
- Dynamic imports for performance optimization

**Component Architecture**:
- Section-based layout with semantic HTML
- Client/server component separation
- TypeScript interfaces for props and state management
- Custom hooks for viewport detection and window resizing

## Development Notes

**Build Configuration**: Standard Next.js with:
- TypeScript strict mode enabled
- Path aliases (`@/*` maps to project root)
- Image optimization configured for placeholder domains
- No static export configuration (regular Next.js deployment)

**Performance Optimizations**:
- Dynamic imports for 3D components (`ssr: false`)
- Lazy loading for heavy visual effects
- Response caching for RAG suggested prompts
- Viewport-based animation triggering

**Mobile Experience**: Mobile-first responsive design with:
- Touch-optimized interactions
- Responsive typography scaling
- Mobile-specific chat interface optimizations
- Proper viewport meta configuration