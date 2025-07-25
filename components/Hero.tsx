'use client';

import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import PopupLink from './PopupLink';
import { useEffect, useState, useRef, FormEvent, useCallback, MouseEvent } from 'react';
import { SpotlightCard } from './SpotlightCard';
import ClientEmoji from './ClientEmoji';
import R3fBackground from './R3fBackground';
import { useIsInViewport } from '../hooks/useIsInViewport';

// Import new components
import EnergyBackground from './EnergyBackground';
import EnergyDashboard from './EnergyDashboard';

// Declare VANTA globally or import if types are available
declare global {
  interface Window { 
    VANTA: any; 
  }
}

// Updated Suggested Prompts
const suggestedPrompts = [
  "What are Dean's main skills?",
  "Summarize Dean's forecasting experience.",
  "Tell me about the portfolio optimization work.",
  "What MLOps tools has Dean used?"
];

const RAG_CACHE_KEY = 'ragResponseCache';

// Blinking Cursor Component
const BlinkingCursor = () => (
  <span className="inline-block w-1 h-4 ml-1 bg-gray-800 animate-pulse"></span>
);

export default function Hero() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [greeting, setGreeting] = useState("Hello, I'm");
  
  // --- RAG State ---
  const [ragQuery, setRagQuery] = useState('');
  const [isRagLoading, setIsRagLoading] = useState(false);
  const [ragError, setRagError] = useState<string | null>(null);
  // Track conversation history with message type
  type Message = {
    role: 'user' | 'assistant';
    content: string;
    timestamp: number;
  };
  const [conversationHistory, setConversationHistory] = useState<Message[]>([]);
  // --- End RAG State ---
  // --- Add Cache State ---
  const [responseCache, setResponseCache] = useState<Map<string, string>>(() => {
      if (typeof window !== 'undefined') { // Check if window exists (client-side)
        try {
          const cachedData = localStorage.getItem(RAG_CACHE_KEY);
          if (cachedData) {
            // Deserialize: JSON string -> Array -> Map
            return new Map(JSON.parse(cachedData));
          }
        } catch (error) {
          console.error("Error reading RAG cache from localStorage:", error);
        }
      }
      return new Map(); // Return empty map if no cache or error
  });
  // --- End Cache State ---

  const ragContainerRef = useRef<HTMLDivElement>(null); // Ref for the RAG container
  const chatAreaRef = useRef<HTMLDivElement>(null); // Ref for the scrollable chat area

  const sectionRef = useRef<HTMLElement>(null);
  const isInViewport = useIsInViewport(sectionRef);

  // Determine initial theme based on common dark mode patterns
  /*
  useEffect(() => {
    // Check on mount if dark mode is active
    setIsDarkMode(document.documentElement.classList.contains('dark'));
    // Optional: Add MutationObserver to watch for class changes if theme can toggle dynamically
    // without page reload. For now, simple mount check.
  }, []);
  */

  // Effect for resize handling and fade-in animation
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    controls.start({ opacity: 1, transition: { duration: 0.8 } });

    // Cleanup listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [controls]);

  // Keep checking prefersReducedMotion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    console.log('Effect Run - Prefers Reduced Motion:', mediaQuery.matches);

    // Get time-based greeting
    const getTimeBasedGreeting = () => {
      const hour = new Date().getHours();
      if (hour >= 5 && hour < 12) return "Good morning, I'm";
      if (hour >= 12 && hour < 18) return "Good afternoon, I'm";
      return "Good evening, I'm";
    };
    
    // Set greeting based on time of day
    const storedGreeting = localStorage.getItem('greeting');
    const storedTimestamp = localStorage.getItem('greetingTimestamp');
    
    if (storedGreeting && storedTimestamp) {
      const now = new Date().getTime();
      // If stored greeting is less than 8 hours old, use it
      if (now - parseInt(storedTimestamp) < 8 * 60 * 60 * 1000) {
        setGreeting(storedGreeting);
      } else {
        const newGreeting = getTimeBasedGreeting();
        setGreeting(newGreeting);
        localStorage.setItem('greeting', newGreeting);
        localStorage.setItem('greetingTimestamp', now.toString());
      }
    } else {
      const newGreeting = getTimeBasedGreeting();
      setGreeting(newGreeting);
      localStorage.setItem('greeting', newGreeting);
      localStorage.setItem('greetingTimestamp', new Date().getTime().toString());
    }
  }, []);

  // --- Effect to save cache to localStorage when it changes ---
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        // Serialize: Map -> Array -> JSON string
        const serializedCache = JSON.stringify([...responseCache]);
        localStorage.setItem(RAG_CACHE_KEY, serializedCache);
        console.log("RAG cache saved to localStorage.");
      } catch (error) {
        console.error("Error saving RAG cache to localStorage:", error);
      }
    }
  }, [responseCache]); // Run whenever responseCache changes
  // --- End localStorage save effect ---

  // --- Effect to scroll chat to latest user message, positioning it at the top --- 
  useEffect(() => {
    const chatArea = chatAreaRef.current;
    if (!chatArea || conversationHistory.length === 0) return;
    
    // Small timeout to ensure DOM is updated
    setTimeout(() => {
      const currentChatArea = chatAreaRef.current;
      if (!currentChatArea) return;
      
      // Get all message elements in the chat area
      const messages = currentChatArea.querySelectorAll('[id^="message-"]');
      
      if (messages.length === 0) return;
      
      // Convert NodeList to Array for easier processing
      const messagesArray = Array.from(messages);
      
      // Find the latest user message (starting from the end)
      for (let i = messagesArray.length - 1; i >= 0; i--) {
        const messageEl = messagesArray[i];
        if (messageEl.getAttribute('data-role') === 'user') {
          // Get the position of the message relative to the chat container
          const containerTop = currentChatArea.getBoundingClientRect().top;
          const messageTop = messageEl.getBoundingClientRect().top;
          const offsetTop = messageTop - containerTop + currentChatArea.scrollTop;
          
          // Scroll the chat container (not the page) to show the message at the top
          currentChatArea.scrollTop = offsetTop - 10; // 10px padding from top
          return;
        }
      }
      
      // Fallback: if no user message found, scroll to bottom of chat
      currentChatArea.scrollTop = currentChatArea.scrollHeight;
    }, 100); // Small delay to ensure DOM updates are complete
  }, [conversationHistory]); // Trigger when conversation history changes
  // --- End scroll effect ---

  // --- RAG Fetch Logic (Multi-turn) ---
  const fetchRagResponse = useCallback(async (query: string) => {
    if (!query || isRagLoading) return;

    // Clear previous error and set loading
    setRagError(null);
    setIsRagLoading(true);

    // Add user message to history immediately
    const userMessage: Message = {
      role: 'user',
      content: query,
      timestamp: Date.now()
    };
    setConversationHistory(prev => [...prev, userMessage]);
    
    // Reset input field after sending
    setRagQuery('');

    // Check if response is cached - only use cache for suggested prompts
    if (responseCache.has(query)) {
      console.log("Using cached response for:", query);
      const cachedAnswer = responseCache.get(query)!;
      
      // Add assistant response to history
      const assistantMessage: Message = {
        role: 'assistant',
        content: cachedAnswer,
        timestamp: Date.now()
      };
      setConversationHistory(prev => [...prev, assistantMessage]);
      setIsRagLoading(false);
      return;
    }

    // If not cached, fetch from API
    try {
      // Only send the last 5 messages to keep context manageable
      const recentHistory = conversationHistory.slice(-5);
      
      const response = await fetch('/api/rag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          query,
          conversationHistory: recentHistory 
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ detail: 'Error fetching response' }));
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const answer = data.answer || 'No relevant information found.';
      
      // Add assistant response to history
      const assistantMessage: Message = {
        role: 'assistant',
        content: answer,
        timestamp: Date.now()
      };
      setConversationHistory(prev => [...prev, assistantMessage]);
      
      // Update cache ONLY for suggested prompts
      const isSuggestedPrompt = suggestedPrompts.includes(query);
      if (isSuggestedPrompt) {
        console.log("Caching response for suggested prompt:", query);
        setResponseCache(prevCache => new Map(prevCache).set(query, answer));
      }

    } catch (err) {
      console.error('RAG API call failed:', err);
      setRagError(err instanceof Error ? err.message : 'An unknown error occurred');
      
      // Add error message to conversation
      const errorMessage: Message = {
        role: 'assistant',
        content: `Error: ${err instanceof Error ? err.message : 'An unknown error occurred'}`,
        timestamp: Date.now()
      };
      setConversationHistory(prev => [...prev, errorMessage]);
    } finally {
      setIsRagLoading(false);
    }
  }, [isRagLoading, responseCache, suggestedPrompts]);
  // --- End RAG Fetch Logic ---

  // --- RAG Handlers ---
  const handleRagSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const trimmedQuery = ragQuery.trim();
    if (trimmedQuery) {
      fetchRagResponse(trimmedQuery);
    }
  };

  const handleSuggestionClick = (prompt: string) => {
    // When a suggestion is clicked, it's explicitly a suggested prompt
    // so we'll fetch the response (which will be cached)
    setRagQuery(prompt);
    fetchRagResponse(prompt);
  };
  
  const clearConversation = () => {
    setConversationHistory([]);
  };
  // --- End RAG Handlers ---

  // --- Spotlight Effect Handler ---
  useEffect(() => {
    const container = ragContainerRef.current;
    if (!container) return;

    const handleMouseMove = (e: globalThis.MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      // Add console log for debugging
      console.log(`Spotlight Move: x=${x.toFixed(0)}, y=${y.toFixed(0)}`); 
      
      // Apply the spotlight position values directly
      container.style.setProperty('--spotlight-x', `${x}px`);
      container.style.setProperty('--spotlight-y', `${y}px`);
      
      // Force a repaint to ensure the effect is visible (can help with some browsers)
      container.classList.remove('force-repaint');
      void container.offsetWidth; // Trigger reflow
      container.classList.add('force-repaint');
    };

    // Add listener when component mounts
    container.addEventListener('mousemove', handleMouseMove);

    // Initial position at center
    const width = container.offsetWidth;
    const height = container.offsetHeight;
    container.style.setProperty('--spotlight-x', `${width/2}px`);
    container.style.setProperty('--spotlight-y', `${height/2}px`);

    // Cleanup listener when component unmounts
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Empty dependency array ensures this runs only once on mount/unmount
  // --- End Spotlight Effect Handler ---

  return (
    <section 
      ref={sectionRef}
      className="min-h-screen relative overflow-hidden flex flex-col"
    >
      {/* Advanced Energy Background */}
      <EnergyBackground />
      
      {/* Professional gradient overlay */}
      <div className="absolute inset-0 bg-professional-gradient opacity-60" />
      
      {/* Main Hero Content - Centered Single Column */}
      <div className="flex-1 flex flex-col items-center justify-center relative z-10 py-16">
        <div className="container max-w-6xl">
          
          {/* Hero Text Content - Centered */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Professional Greeting */}
            <motion.div 
              className="mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-block px-6 py-3 rounded-full bg-energy-600/10 border border-energy-600/20 text-energy-400 text-sm font-medium">
                {greeting}
              </span>
            </motion.div>
            
            {/* Main Headline */}
            <motion.h1 
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="text-white">Dean Shabi</span>
              <br />
              <span className="text-gradient-energy">
                Renewable Energy AI Expert
              </span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl text-dark-200 font-medium mb-12 leading-relaxed max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              6+ years developing AI-powered forecasting systems that optimize renewable energy trading and grid operations
            </motion.p>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Link href="/#works" className="btn btn-primary group text-lg px-8 py-4">
                <span>Explore My Work</span>
                <svg className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              
              <PopupLink 
                href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ180wRsTGwCpyUCMXBilTrYOOt8c7MKblFpoLqgE-Nq0lBwL9kJm-DwuAicPu34U9__ST970IiL?gv=true"
                className="btn btn-glass group text-lg px-8 py-4"
              >
                <span>Schedule Consultation</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </PopupLink>
            </motion.div>
          </motion.div>

          {/* Energy Dashboard - Full Width Below */}
          <motion.div 
            className="w-full max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <EnergyDashboard />
          </motion.div>
          
        </div>
      </div>
      
    </section>
  );
} 
