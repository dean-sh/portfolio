'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="section bg-light">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary">About Me</h2>
          <div className="mt-3 h-1 w-20 bg-accent mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] rounded-lg overflow-hidden"
          >
            <Image 
              src="/images/profile.png" 
              alt="Dean Shabi" 
              fill 
              className="object-cover rounded-lg"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-primary mb-4">
              Founder of <a href="https://www.bloome.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 transition-colors">Bloome AI</a> & Senior Data Scientist
            </h3>
            <p className="text-secondary mb-6">
              I'm currently building <a href="https://www.bloome.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">Bloome AI</a>, 
              the first AI agent that finds jobs, researches companies, and applies for you. With 6+ years of expertise 
              in building impactful ML solutions, I'm passionate about creating AI systems that transform how people 
              navigate their careers.
            </p>
            <p className="text-secondary mb-6">
              Beyond Bloome, I've specialized in the energy technology sector, developing time series forecasting models, 
              anomaly detection systems, and AI-powered applications that optimize energy usage. I thrive in 
              fast-paced startup environments where I can leverage cutting-edge technologies to solve real-world problems.
            </p>
            <div className="flex flex-wrap gap-6 sm:gap-8 mb-8">
              <div className="text-center sm:text-left">
                <span className="block text-3xl font-bold text-accent">1</span>
                <span className="text-secondary text-sm">AI Startup Founded</span>
              </div>
              <div className="text-center sm:text-left">
                <span className="block text-3xl font-bold text-accent">6+</span>
                <span className="text-secondary text-sm">Years Experience</span>
              </div>
              <div className="text-center sm:text-left">
                <span className="block text-3xl font-bold text-accent">15+</span>
                <span className="text-secondary text-sm">ML Projects</span>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link 
                href="/resume" 
                className="btn btn-primary inline-flex items-center"
              >
                <span>View Full Resume</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 