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
            <div className="space-y-16">
              {/* Clean Header */}
              <div className="text-center">
                <p className="text-xl text-dark-200 max-w-3xl mx-auto leading-relaxed">
                  AI engineer specializing in <strong className="text-energy-400">UK and European energy markets</strong>. 
                  <strong className="text-white">6+ years</strong> building production systems for renewable energy trading and forecasting.
                </p>
              </div>

              {/* Visual Cards Grid */}
              <div className="grid md:grid-cols-2 gap-10">
                
                {/* Market Expertise Card */}
                <motion.div 
                  className="glass-card p-8 rounded-xl border border-dark-700/50 hover:border-energy-600/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-lg bg-energy-600/10 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-energy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-white">UK & EU Energy Markets</h4>
                  </div>
                  <p className="text-dark-200 mb-4 leading-relaxed">
                    Deep expertise in European energy regulations and trading frameworks.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-energy-600/10 text-energy-400 text-sm border border-energy-600/20">Ofgem Regulations</span>
                    <span className="px-3 py-1 rounded-full bg-energy-600/10 text-energy-400 text-sm border border-energy-600/20">REGOs</span>
                    <span className="px-3 py-1 rounded-full bg-energy-600/10 text-energy-400 text-sm border border-energy-600/20">Balancing Mechanism</span>
                  </div>
                </motion.div>

                {/* Technical Expertise Card */}
                <motion.div 
                  className="glass-card p-8 rounded-xl border border-dark-700/50 hover:border-energy-600/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-lg bg-energy-600/10 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-energy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-white">AI & Forecasting</h4>
                  </div>
                  <p className="text-dark-200 mb-4 leading-relaxed">
                    Production ML systems for energy forecasting, trading, and grid optimization.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-energy-600/10 text-energy-400 text-sm border border-energy-600/20">Wind & Solar</span>
                    <span className="px-3 py-1 rounded-full bg-energy-600/10 text-energy-400 text-sm border border-energy-600/20">Price Prediction</span>
                    <span className="px-3 py-1 rounded-full bg-energy-600/10 text-energy-400 text-sm border border-energy-600/20">Risk Management</span>
                  </div>
                </motion.div>

                {/* Business Impact Card */}
                <motion.div 
                  className="glass-card p-8 rounded-xl border border-dark-700/50 hover:border-energy-600/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-lg bg-energy-600/10 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-energy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-white">Proven Results</h4>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-dark-200">Wind Forecasting Improvement</span>
                      <span className="text-energy-400 font-bold">57% Accuracy</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-dark-200">Supply Matching Savings</span>
                      <span className="text-energy-400 font-bold">£50/MWh</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-dark-200">Revenue Impact</span>
                      <span className="text-energy-400 font-bold">Millions £</span>
                    </div>
                  </div>
                </motion.div>

                {/* Experience Card */}
                <motion.div 
                  className="glass-card p-8 rounded-xl border border-dark-700/50 hover:border-energy-600/30 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-lg bg-energy-600/10 flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-energy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-bold text-white">Industry Experience</h4>
                  </div>
                  <p className="text-dark-200 mb-4 leading-relaxed">
                    Worked with energy-tech companies across Europe building mission-critical AI systems.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 rounded-full bg-energy-600/10 text-energy-400 text-sm border border-energy-600/20">Production Systems</span>
                    <span className="px-3 py-1 rounded-full bg-energy-600/10 text-energy-400 text-sm border border-energy-600/20">Live Trading</span>
                    <span className="px-3 py-1 rounded-full bg-energy-600/10 text-energy-400 text-sm border border-energy-600/20">Multi-million £ Impact</span>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-16 text-center"
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