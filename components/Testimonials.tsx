'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const AUTO_ROTATE_DELAY = 8000;

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const testimonials = [
    {
      name: "Imogen",
      role: "Product Manager, tem.",
      image: "https://randomuser.me/api/portraits/women/32.jpg",
      text: "Dean's work has been consistently impressive — his ability to structure complex information at the right level of depth, focus on insights over raw metrics, and adapt quickly to feedback really stood out. His first project was managed with care and clarity, and I always felt well informed throughout. He's shown great initiative by improving his approach between updates and being open to more efficient async workflows. All in all, he's doing brilliantly — I've been consistently impressed with his execution and thoughtfulness."
    },
    {
      name: "Ross",
      role: "Head of Data, tem.",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
      text: "Dean has a real talent for clarity — the way he presents information makes even complex, data-heavy content easy to follow. It's clear he puts in the effort to make things digestible for people without a statistical background, which is incredibly valuable in cross-functional teams. His communication style is clear, inclusive, and well considered."
    },
    {
      name: "Irene Di Martino, PhD",
      role: "CEO at AmpX",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      text: "Dean has been a super member of our team, consistently impressing me with every interaction. His smart and thoughtful approach to complex problems set him apart. His intelligence combined with his collaborative spirit makes him an exceptional asset to any organization. I have no doubt he will go far in his career — he's proven it time and again."
    },
    {
      name: "Jan Bím, PhD",
      role: "AI Department Lead, Datamole",
      image: "https://randomuser.me/api/portraits/men/14.jpg",
      text: "I can always rely on Dean to go the extra mile. He consistently delivers more than expected, often studying new techniques to enhance his work. His ability to quickly transform from a developer to a data scientist through self-learning is remarkable. What truly sets Dean apart is his talent for explaining complex concepts to colleagues — his survey of time series methods became our team's foundational reference for all related projects."
    }
  ];

  const resetInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      handleNext(false);
    }, AUTO_ROTATE_DELAY);
  };

  const handleNext = (reset = true) => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    if (reset) {
      resetInterval();
    }
  };

  const handlePrevious = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    resetInterval();
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    resetInterval();
  };

  useEffect(() => {
    resetInterval();
    
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [testimonials.length]);

  return (
    <section className="py-24 overflow-hidden section-dark">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">Client Success Stories</h2>
          <div className="mt-3 h-1 w-20 bg-energy-600 mx-auto"></div>
        </motion.div>
        
        <div className="relative max-w-5xl mx-auto overflow-visible">
          {/* Removed Decorative elements */}
          
          {/* Left arrow navigation */}
          <button 
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-8 md:-translate-x-16 w-12 h-12 rounded-full glass-card-readable border border-dark-700/50 flex items-center justify-center hover:border-energy-600/40 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          {/* Right arrow navigation */}
          <button
            onClick={() => handleNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-8 md:translate-x-16 w-12 h-12 rounded-full glass-card-readable border border-dark-700/50 flex items-center justify-center hover:border-energy-600/40 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Testimonial card */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={currentTestimonial}
              className="relative glass-card-readable rounded-lg shadow-professional border border-dark-700/50 p-8 md:p-10"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid md:grid-cols-5 gap-8 items-center">
                {/* Image and info */}
                <div className="md:col-span-2">
                  <div className="text-center md:text-left">
                    <div className="inline-block rounded-full overflow-hidden mb-6 shadow-md">
                      <img 
                        src={testimonials[currentTestimonial].image} 
                        alt={testimonials[currentTestimonial].name} 
                        className="w-32 h-32 object-cover"
                      />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold text-white">{testimonials[currentTestimonial].name}</h3>
                      <p className="text-dark-200 mt-1">{testimonials[currentTestimonial].role}</p>
                    </div>
                  </div>
                </div>
                
                {/* Testimonial text */}
                <div className="md:col-span-3">
                  <p className="text-lg md:text-xl text-dark-100 italic leading-relaxed">
                    {testimonials[currentTestimonial].text}
                  </p>
                </div>
              </div>
              
              {/* Navigation dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      currentTestimonial === index
                        ? 'bg-energy-400 scale-125'
                        : 'bg-dark-600 hover:bg-dark-500'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
} 