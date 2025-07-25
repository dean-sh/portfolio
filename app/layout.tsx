import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import VantaScripts from '@/components/VantaScripts';
import { Analytics } from "@vercel/analytics/react";
import PageTransitionWrapper from '@/components/PageTransitionWrapper';

const outfit = Outfit({ 
  subsets: ['latin'], 
  variable: '--font-outfit', 
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800']
});

export const metadata: Metadata = {
  title: 'Dean Shabi | AI Founder & Senior Data Scientist',
  description: 'AI Founder of Bloome AI. Senior Data Scientist building high-impact ML products for UK/EU energy markets. Expertise in forecasting, pricing engines, and renewable energy algorithms.',
  keywords: ['Data Scientist', 'AI', 'Machine Learning', 'Energy Tech', 'Forecasting', 'Portfolio', 'Dean Shabi', 'Bloome AI', 'Renewable Energy'],
  authors: [{ name: 'Dean Shabi' }],
  creator: 'Dean Shabi',
  metadataBase: new URL('https://deanshabi.com'),
  openGraph: {
    title: 'Dean Shabi | AI Founder & Senior Data Scientist',
    description: 'AI Founder of Bloome AI. Senior Data Scientist building high-impact ML products for UK/EU energy markets.',
    url: 'https://deanshabi.com',
    siteName: 'Dean Shabi Portfolio',
    images: [
      {
        url: '/images/bloome.png',
        width: 1200,
        height: 630,
        alt: 'Dean Shabi - AI Founder & Senior Data Scientist',
      }
    ],
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dean Shabi | AI Founder & Senior Data Scientist',
    description: 'AI Founder of Bloome AI. Senior Data Scientist building high-impact ML products for UK/EU energy markets.',
    images: ['/images/bloome.png'],
    creator: '@deanshabi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth overflow-x-hidden">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://deanshabi.com" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        
        {/* Google Calendar Scheduling */}
        <link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet" />
        <script src="https://calendar.google.com/calendar/scheduling-button-script.js" async></script>
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Dean Shabi",
              "jobTitle": "AI Founder & Senior Data Scientist",
              "description": "AI Founder of Bloome AI. Senior Data Scientist building high-impact ML products for UK/EU energy markets.",
              "url": "https://deanshabi.com",
              "image": "https://deanshabi.com/images/profile.png",
              "sameAs": [
                "https://linkedin.com/in/dean-shabi",
                "https://github.com/dean-sh"
              ],
              "knowsAbout": [
                "Artificial Intelligence",
                "Machine Learning",
                "Data Science",
                "Energy Technology",
                "Renewable Energy",
                "Forecasting",
                "Python",
                "Energy Markets"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "Bloome AI",
                "description": "AI-powered job application automation platform"
              }
            })
          }}
        />
      </head>
      <body className={`${outfit.variable} font-sans bg-bg-light text-primary antialiased overflow-x-hidden`}>
        <Navbar />
        <PageTransitionWrapper>
          {children}
        </PageTransitionWrapper>
        <Footer />

        <VantaScripts />
        <Analytics />
      </body>
    </html>
  );
} 