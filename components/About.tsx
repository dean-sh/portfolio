'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="section section-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">About Me</h2>
          <div className="mt-3 h-1 w-20 bg-energy-600 mx-auto"></div>
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
            <h3 className="text-2xl font-semibold text-white mb-4">
              Renewable Energy AI Expert & Entrepreneur
            </h3>
            <p className="text-dark-200 mb-6 leading-relaxed">
              I'm a renewable energy AI expert with over 6 years of experience developing cutting-edge forecasting systems 
              and optimization algorithms for the energy sector. My work focuses on transforming how energy companies 
              predict generation patterns, optimize trading strategies, and manage portfolio risk in volatile markets.
            </p>
            <p className="text-dark-200 mb-6 leading-relaxed">
              From wind and solar forecasting to battery degradation modeling, I've built AI systems that power core 
              business operations for energy-tech companies across Europe. My expertise spans the full spectrum of 
              energy AI applications—grid optimization, market price prediction, and renewable asset management.
            </p>
            
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