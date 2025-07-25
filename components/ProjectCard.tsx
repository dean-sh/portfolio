'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  link?: string;
  index: number;
}

export default function ProjectCard({ title, description, tags, image, link, index }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false);
  
  // Create background color based on title (pseudo-random)
  const getColorFromTitle = (title: string) => {
    // Use theme colors for consistency
    const themeGradients = [
      'from-accent/20 to-accent/5', // Blueish
      'from-purple-600/20 to-purple-600/5', // Purple
      'from-emerald-500/20 to-emerald-500/5', // Green - Assuming emerald is available or add it
      'from-orange-500/20 to-orange-500/5', // Orange - Assuming orange is available or add it
      'from-teal-500/20 to-teal-500/5',     // Teal - Assuming teal is available or add it
      'from-rose-500/20 to-rose-500/5',     // Rose - Assuming rose is available or add it
      'from-cyan-500/20 to-cyan-500/5',     // Cyan - Assuming cyan is available or add it
      'from-amber-500/20 to-amber-500/5',   // Amber - Assuming amber is available or add it
      'from-indigo-500/20 to-indigo-500/5', // Indigo - Assuming indigo is available or add it
      'from-secondary/20 to-secondary/5' // Grayish/secondary as fallback
    ];
    
    // Sum of character codes to create deterministic but varied colors
    const sum = title.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return themeGradients[sum % themeGradients.length];
  };

  const getEmoji = (title: string) => {
    if (title.includes('AI')) return '🤖';
    if (title.includes('Energy')) return '⚡';
    if (title.includes('Wind')) return '💨';
    if (title.includes('MLOps')) return '⚙️';
    if (title.includes('Robot')) return '🦾';
    if (title.includes('Streamlit')) return '📊';
    if (title.includes('Fruit')) return '🍎';
    if (title.includes('Stock')) return '📈';
    return '✨'; // Default
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.5, 
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.03, 
        y: -5,
        boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.1), 0 6px 12px -6px rgba(0, 0, 0, 0.08)",
        transition: { duration: 0.2, ease: "easeOut" } 
      }}
      className="glass-card-readable overflow-hidden group flex flex-col rounded-xl border border-dark-700/60 hover:border-energy-600/40 shadow-professional hover:shadow-professional-lg"
    >
      <div className="relative aspect-video w-full overflow-hidden">
        {/* Placeholder or image */}
        {image && !imageError ? (
          <Image 
            src={image} 
            alt={title} 
            fill 
            className="object-cover"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className={`absolute inset-0 bg-gradient-to-br ${getColorFromTitle(title)} flex flex-col items-center justify-center`}>
            <span className="text-white font-medium text-lg opacity-80">{title}</span>
            <div className="mt-2 text-4xl">
              {getEmoji(title)}
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6 relative flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-white mb-2 relative">{title}</h3>
        <p className="text-dark-200 mb-4 text-sm relative flex-grow">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-5 relative">
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="text-xs font-medium px-2 py-0.5 rounded bg-dark-700 text-dark-200 border border-dark-600 transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {link && link !== '#' && (
          <div className="relative mt-auto">
            <Link 
              href={link} 
              className="inline-flex items-center text-energy-400 font-medium group"
            >
              <span className="mr-1">View Project</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 transform transition-transform" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M14 5l7 7m0 0l-7 7m7-7H3" 
                />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </motion.div>
  );
} 