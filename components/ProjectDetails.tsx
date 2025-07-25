'use client';

import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowLeft, FaIndustry, FaUser, FaLink, FaGithub } from 'react-icons/fa';

interface ProjectDetailsProps {
  title: string;
  subtitle: string;
  image: string;
  industry?: string;
  client?: string;
  tags?: string[];
  liveUrl?: string;
  githubUrl?: string;
  children: ReactNode;
}

export function ProjectDetails({ 
  title, 
  subtitle, 
  image, 
  industry, 
  client, 
  tags = [], 
  liveUrl,
  githubUrl,
  children 
}: ProjectDetailsProps) {
  return (
    <div className="pt-28 pb-16 bg-gradient-to-b from-primary to-dark-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back button */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link href="/#works" className="inline-flex items-center text-energy-400 hover:text-energy-300 transition-colors">
            <FaArrowLeft className="mr-2" />
            <span>Back to projects</span>
          </Link>
        </motion.div>
        
        {/* Hero section */}
        <div className="relative mb-16">
          <motion.div 
            className="rounded-2xl overflow-hidden shadow-2xl relative aspect-video mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={image}
              alt={title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-4 md:p-6 lg:p-10 w-full">
                <motion.h1 
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 md:mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {title}
                </motion.h1>
                
                <motion.p 
                  className="text-base sm:text-lg md:text-xl text-white/90 mb-4 md:mb-6 max-w-3xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {subtitle}
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Sidebar with project metadata */}
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass-card-readable rounded-xl shadow-professional p-6 sticky top-24 border border-dark-700/50">
              <h2 className="text-xl font-bold mb-6 text-white border-b border-dark-700 pb-3">Project Details</h2>
              
              {/* Project metadata */}
              <div className="space-y-4 mb-8">
                {industry && (
                  <div className="flex items-center">
                    <FaIndustry className="text-energy-400 mr-3" />
                    <div>
                      <h3 className="text-sm uppercase font-medium text-dark-300">Industry</h3>
                      <p className="text-white font-medium">{industry}</p>
                    </div>
                  </div>
                )}
                
                {client && (
                  <div className="flex items-center">
                    <FaUser className="text-energy-400 mr-3" />
                    <div>
                      <h3 className="text-sm uppercase font-medium text-dark-300">Client</h3>
                      <p className="text-white font-medium">{client}</p>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Links */}
              <div className="space-y-3 mb-8">
                {liveUrl && (
                  <a 
                    href={liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-energy-400 hover:text-energy-300 transition-colors"
                  >
                    <FaLink className="mr-2" />
                    <span>View Live Project</span>
                  </a>
                )}
                
                {githubUrl && (
                  <a 
                    href={githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center text-energy-400 hover:text-energy-300 transition-colors"
                  >
                    <FaGithub className="mr-2" />
                    <span>View Source Code</span>
                  </a>
                )}
              </div>
              
              {/* Tags */}
              <div>
                <h3 className="text-sm uppercase font-medium text-dark-300 mb-3">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className="px-3 py-1 rounded-full text-sm font-medium bg-energy-600/10 text-energy-400 border border-energy-600/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Project content */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="glass-card-readable rounded-xl shadow-professional p-6 md:p-8 border border-dark-700/50">
              {children}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 