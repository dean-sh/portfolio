'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import PopupLink from './PopupLink';
import GoogleCalendarWidget from './GoogleCalendarWidget';
import { useForm, ValidationError } from '@formspree/react';

// Formspree form ID
const FORM_ID = "myzwyaov";

export default function Contact() {
  const [state, handleSubmit] = useForm(FORM_ID);
  
  return (
    <section id="contact" className="section bg-gradient-to-br from-accent/5 via-primary/5 to-transparent">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Contact Me</h2>
          <div className="mt-3 h-1 w-20 bg-energy-600 mx-auto"></div>
          <p className="mt-6 text-dark-200 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how I can help bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold text-white mb-6">Get in Touch</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-energy-600/10 flex items-center justify-center text-energy-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-white">Email</h4>
                  <a href="mailto:deanshabi@gmail.com" className="text-energy-400 hover:underline">deanshabi@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-energy-600/10 flex items-center justify-center text-energy-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-white">Location</h4>
                  <p className="text-dark-200">Prague, Czech Republic</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-energy-600/10 flex items-center justify-center text-energy-400">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-medium text-white">Social Profiles</h4>
                  <div className="flex space-x-4 mt-2">
                    <a href="https://www.linkedin.com/in/dean-shabi/" className="text-dark-200 hover:text-energy-400" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="https://github.com/dean-sh/" className="text-dark-200 hover:text-energy-400" target="_blank" rel="noopener noreferrer">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.30.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Google Calendar Widget */}
              <div className="mt-8 p-6 glass-card-readable rounded-lg border border-dark-700/50">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-energy-600/10 flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-energy-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-white">Schedule a Consultation</h4>
                  </div>
                  <p className="text-sm text-dark-200 mb-6">
                    Book a <strong className="text-white">30-minute consultation</strong> to discuss your energy AI project needs and explore how we can work together.
                  </p>
                </div>
                <GoogleCalendarWidget />
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {state.succeeded ? (
              <div className="glass-card-readable p-8 rounded-lg shadow-professional border border-dark-700 text-center py-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-energy-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="mt-4 text-xl font-medium text-white">Message Sent!</h3>
                <p className="mt-2 text-dark-200">Thank you for reaching out. I'll get back to you soon.</p>
              </div>
            ) : (
              <form 
                onSubmit={handleSubmit}
                className="glass-card-readable p-8 rounded-lg shadow-professional border border-dark-700"
              >
                <div className="mb-6">
                  <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    className="w-full px-4 py-3 bg-dark-800 text-white border border-dark-600 rounded-md focus:outline-none focus:ring-2 focus:ring-energy-600 focus:border-transparent placeholder-dark-400"
                    placeholder="Your Name"
                  />
                  <ValidationError prefix="Name" field="name" errors={state.errors} className="mt-1 text-sm text-red-600" />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="email" className="block text-sm font-medium text-white mb-2">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required
                    className="w-full px-4 py-3 bg-dark-800 text-white border border-dark-600 rounded-md focus:outline-none focus:ring-2 focus:ring-energy-600 focus:border-transparent placeholder-dark-400"
                    placeholder="alex@energytech.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="mt-1 text-sm text-red-600" />
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Your Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-800 text-white border border-dark-600 rounded-md focus:outline-none focus:ring-2 focus:ring-energy-600 focus:border-transparent placeholder-dark-400"
                    placeholder="Tell me about your project..."
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="mt-1 text-sm text-red-600" />
                </div>
                
                <ValidationError errors={state.errors} className="mb-4 p-3 bg-red-900/20 text-red-400 rounded-md text-sm border border-red-800" />
                
                <button 
                  type="submit" 
                  disabled={state.submitting}
                  className="w-full btn btn-primary flex justify-center"
                >
                  {state.submitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 