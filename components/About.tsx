'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function About() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const cardVariants = isMobile ? {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    transition: { duration: 0.5, ease: "easeOut" }
  } : {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true },
    whileHover: { 
      scale: 1.03, 
      y: -5,
      boxShadow: "0 10px 20px -5px rgba(0, 0, 0, 0.1), 0 6px 12px -6px rgba(0, 0, 0, 0.08)",
      transition: { duration: 0.2, ease: "easeOut" } 
    },
    transition: { duration: 0.2, ease: "easeOut" }
  };

  return (
    <section id="about" className="section section-dark">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Background & Expertise</h2>
          <div className="mt-3 h-1 w-20 bg-energy-600 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <div className="space-y-12">
              {/* Compelling Introduction */}
              <div className="text-center">
                <p className="text-xl text-dark-200 max-w-3xl mx-auto leading-relaxed">
                  <strong className="text-white">AI Engineer & Data Scientist</strong> with a background in <strong className="text-energy-400 font-bold">physics and electrical engineering</strong>, specializing in <strong className="text-energy-400 font-bold">UK/EU energy markets</strong> with <strong className="text-white">6+ years</strong> helping <strong className="text-energy-400 font-bold">early-stage, seed, and Series A startups</strong> build production AI systems for renewable energy trading and forecasting.
                </p>
              </div>

              {/* Strategic Cards Grid - Better desktop structure */}
              <div className="space-y-8">
                
                {/* Top Row: Two Wide Cards */}
                <div className="grid md:grid-cols-2 gap-8">
                  
                  {/* Energy Markets & Business Impact */}
                  <motion.div 
                    className="glass-card p-8 rounded-xl border border-dark-700/50 hover:border-energy-600/30 transition-all duration-300"
                    {...cardVariants}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-lg bg-energy-600/10 flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-energy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-2xl font-bold text-white">UK & EU Energy Markets</h4>
                    </div>
                    <p className="text-dark-200 mb-6 leading-relaxed text-lg">
                      Deep expertise in European energy regulations, trading frameworks, and market mechanisms. Specializing in renewable energy integration and grid optimization strategies.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 rounded-full bg-energy-600/10 text-energy-400 text-sm border border-energy-600/20">Ofgem Regulations</span>
                      <span className="px-3 py-1 rounded-full bg-energy-600/10 text-energy-400 text-sm border border-energy-600/20">REGOs</span>
                      <span className="px-3 py-1 rounded-full bg-energy-600/10 text-energy-400 text-sm border border-energy-600/20">Balancing Mechanism</span>
                      <span className="px-3 py-1 rounded-full bg-energy-600/10 text-energy-400 text-sm border border-energy-600/20">Trading Frameworks</span>
                    </div>
                  </motion.div>

                  {/* Proven Impact & Results */}
                  <motion.div 
                    className="glass-card p-8 rounded-xl border border-dark-700/50 hover:border-energy-600/30 transition-all duration-300"
                    {...cardVariants}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 rounded-lg bg-energy-600/10 flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-energy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                        </svg>
                      </div>
                      <h4 className="text-2xl font-bold text-white">Proven Results</h4>
                    </div>
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-energy-400 mb-1">+57%</div>
                        <div className="text-dark-200 text-sm">Wind Forecasting Accuracy</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-energy-400 mb-1">£50/MWh</div>
                        <div className="text-dark-200 text-sm">Supply Matching Savings</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-energy-400 mb-1">Millions £</div>
                        <div className="text-dark-200 text-sm">Revenue Impact</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-energy-400 mb-1">6+</div>
                        <div className="text-dark-200 text-sm">Years Production Systems</div>
                      </div>
                    </div>
                    <p className="text-dark-300 leading-relaxed">
                      Production systems deployed across European energy companies with quantified business results and measurable ROI.
                    </p>
                  </motion.div>
                </div>

                {/* Bottom Row: Full-width Technical Excellence */}
                <motion.div 
                  className="glass-card p-8 rounded-xl border border-dark-700/50 hover:border-energy-600/30 transition-all duration-300"
                  {...cardVariants}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-lg bg-energy-600/10 flex items-center justify-center mr-4">
                        <svg className="w-6 h-6 text-energy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                      <h4 className="text-2xl font-bold text-white">Technical Excellence</h4>
                    </div>
                    <Link 
                      href="/resume" 
                      className="btn btn-secondary inline-flex items-center"
                    >
                      <span>View Full Resume</span>
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                  <p className="text-dark-200 mb-6 leading-relaxed text-lg">
                    Advanced mathematical and AI techniques for energy systems optimization, forecasting, and trading algorithms.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
                    <span className="px-3 py-2 rounded-lg bg-energy-600/10 text-energy-400 text-sm border border-energy-600/20 text-center font-medium">Deep Learning</span>
                    <span className="px-3 py-2 rounded-lg bg-energy-600/10 text-energy-400 text-sm border border-energy-600/20 text-center font-medium">Physical Modeling</span>
                    <span className="px-3 py-2 rounded-lg bg-energy-600/10 text-energy-400 text-sm border border-energy-600/20 text-center font-medium">Linear Programming</span>
                    <span className="px-3 py-2 rounded-lg bg-energy-600/10 text-energy-400 text-sm border border-energy-600/20 text-center font-medium">Stochastic Optimization</span>
                    <span className="px-3 py-2 rounded-lg bg-energy-600/10 text-energy-400 text-sm border border-energy-600/20 text-center font-medium">Time Series Forecasting</span>
                    <span className="px-3 py-2 rounded-lg bg-energy-600/10 text-energy-400 text-sm border border-energy-600/20 text-center font-medium">Weather Modeling</span>
                    <span className="px-3 py-2 rounded-lg bg-energy-600/10 text-energy-400 text-sm border border-energy-600/20 text-center font-medium">Anomaly Detection</span>
                    <span className="px-3 py-2 rounded-lg bg-energy-600/10 text-energy-400 text-sm border border-energy-600/20 text-center font-medium">Risk Modeling</span>
                    <span className="px-3 py-2 rounded-lg bg-energy-600/10 text-energy-400 text-sm border border-energy-600/20 text-center font-medium">Grid Simulation</span>
                    <span className="px-3 py-2 rounded-lg bg-energy-600/10 text-energy-400 text-sm border border-energy-600/20 text-center font-medium">Monte Carlo Methods</span>
                    <span className="px-3 py-2 rounded-lg bg-energy-600/10 text-energy-400 text-sm border border-energy-600/20 text-center font-medium">Price Optimization</span>
                    <span className="px-3 py-2 rounded-lg bg-energy-600/10 text-energy-400 text-sm border border-energy-600/20 text-center font-medium">Load Balancing</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 