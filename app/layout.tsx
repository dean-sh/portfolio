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
  title: 'Dean Shabi | Senior Data Scientist',
  description: 'Senior Data Scientist specializing in high-impact ML products for energy-tech, including forecasting models, pricing engines, and supply matching algorithms for renewable energy.',
  keywords: ['Data Scientist', 'AI', 'Machine Learning', 'Energy Tech', 'Forecasting', 'Portfolio', 'Dean Shabi'],
  authors: [{ name: 'Dean Shabi' }],
  creator: 'Dean Shabi',
  metadataBase: new URL('https://www.deanshabi.com'),
  openGraph: {
    title: 'Dean Shabi | Senior Data Scientist',
    description: 'Senior Data Scientist specializing in high-impact ML products for energy-tech, including forecasting models, pricing engines, and supply matching algorithms for renewable energy.',
    images: ['/images/og-image.jpg'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dean Shabi | Senior Data Scientist',
    description: 'Senior Data Scientist specializing in high-impact ML products for energy-tech, including forecasting models, pricing engines, and supply matching algorithms for renewable energy.',
    images: ['/images/og-image.jpg'],
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
        <meta name="theme-color" content="#0f172a" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
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