'use client';

import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import PopupLink from './PopupLink';
import { useEffect, useState, useRef, FormEvent, useCallback, MouseEvent } from 'react';
import { SpotlightCard } from './SpotlightCard';
import ClientEmoji from './ClientEmoji';
import R3fBackground from './R3fBackground';
import { useIsInViewport } from '../hooks/useIsInViewport';

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
      className="min-h-screen flex items-center pt-16 md:pt-24 pb-16 relative overflow-hidden"
    >
      {/* Particle background container */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Ensure container has position for canvas absolute fill */}
        {/* Replace with R3F background */} 
        {/* {!prefersReducedMotion && isInViewport && <R3fBackground />} */}
        {/* Force render for debugging */} 
        <R3fBackground />
      </div>
      
      {/* Subtle gradient overlay to enhance the particle effect */}
      {/* <div className="absolute inset-0 -z-5 bg-gradient-radial from-blue-50/40 via-transparent to-transparent"></div> */}
      
      <div className="container relative z-10">
        {/* Wrap existing content and RAG section in a container if needed for layout */}
        {/* For example, using grid or flex */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Existing Hero Content Column */}
          <motion.div 
            ref={containerRef}
            className="max-w-4xl relative"
            initial={{ opacity: 0 }}
            animate={controls}
          >
            {/* Inner div for the actual content */}
            <div className="relative z-10"> 
              <div className="mb-6"> 
                <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight leading-[1.1] mb-3">
                  <span 
                    className="block text-lg sm:text-xl md:text-2xl font-semibold mb-4 tracking-wide text-gray-600 uppercase" 
                  >
                    {greeting}
                  </span>
                  <motion.span 
                    className="relative inline-block cursor-pointer tracking-tight font-bold" 
                    whileHover={{ 
                      scale: 1.03,
                      textShadow: "0 0 12px rgba(130, 138, 230, 0.5)"
                    }}
                    style={{
                      background: "linear-gradient(90deg, #3b5998, #4f86c6, #9f67c8, #e57373, #64b5f6, #3b5998)",
                      backgroundSize: "400% 100%",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      color: "transparent",
                      display: "inline-block",
                      textShadow: "0 0 6px rgba(130, 138, 230, 0.3)"
                    }}
                    animate={{
                      backgroundPosition: ["0% center", "100% center", "0% center"],
                      scale: [1, 1.01, 1],
                      textShadow: [
                        "0 0 6px rgba(130, 138, 230, 0.3)",
                        "0 0 8px rgba(130, 138, 230, 0.4)",
                        "0 0 6px rgba(130, 138, 230, 0.3)"
                      ]
                    }}
                    transition={{ 
                      backgroundPosition: {
                        repeat: Infinity, 
                        duration: 12, 
                        ease: "linear"
                      },
                      scale: {
                        repeat: Infinity,
                        duration: 5,
                        ease: "easeInOut"
                      },
                      textShadow: {
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut"
                      }
                    }}
                  >
                    Dean Shabi
                  </motion.span>
                </h1>
              </div>
              
              <h2 
                className="text-3xl md:text-4xl text-gray-800 mt-6 mb-8 font-medium tracking-wide leading-snug"
              >
                Senior Data Scientist based in Prague
              </h2>
              
              <p 
                className="mt-8 mb-10 text-lg md:text-xl text-gray-700 max-w-2xl leading-relaxed tracking-wide font-medium"
              >
                6+ years experience building high-impact ML products in the energy-tech space, 
                within fast-moving startups and scaleups.
              </p>
              
              {/* Main button container */}
              <div 
                className="mt-12 flex flex-col items-start gap-4"
              >
                {/* Inner container for first two buttons */}
                <div className="flex flex-row flex-wrap gap-3 md:gap-5 items-center">
                  <Link href="/#works" className="btn btn-primary group">
                    <span>View My Work</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 ml-2 transform transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </Link>
                  
                  <PopupLink 
                    href="https://calendar.google.com/calendar/appointments/schedules/AcZssZ180wRsTGwCpyUCMXBilTrYOOt8c7MKblFpoLqgE-Nq0lBwL9kJm-DwuAicPu34U9__ST970IiL?gv=true"
                    className="btn btn-primary group"
                    icon={true}
                  >
                    <span className="inline-block">
                      Book a Call
                    </span>
                  </PopupLink>
                </div>

                {/* Inner container for last two buttons */}
                <div className="flex flex-row flex-wrap gap-3 md:gap-5 items-center">
                  <Link href="/resume" className="btn btn-secondary group btn-small">
                    <span>My Resume</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-1 transform transition-transform group-hover:translate-x-0.5"
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                  
                  <Link href="/#contact" className="btn btn-secondary group btn-small">
                    <span>Contact Me</span>
                  </Link>
                </div>
              </div>
            </div> 
          </motion.div>

          {/* --- RAG Interaction Column (with SpotlightCard) --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{opacity: 1, y: 0}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-1 mt-8 lg:mt-0"
          >
            <SpotlightCard
              from="#dbeafe"
              via="#818cf8"  
              size={350}
              className="relative w-full rounded-[--radius] p-0 shadow-xl [--radius:theme(borderRadius.lg)]"
            >
              {/* Background layer */}
              <div className="absolute inset-px rounded-[calc(var(--radius)-1px)] bg-white/90 backdrop-blur-sm"></div>
              
              {/* RAG Content */}
              <div className="relative z-10 p-2 xs:p-3 sm:p-4">
                <h3 className="text-sm xs:text-base font-semibold mb-1 xs:mb-2 text-gray-900">Chat with Dean's Digital Twin</h3>
                
                {/* WhatsApp-style chat container */}
                <div className="flex flex-col h-[400px] xs:h-[430px] sm:h-[450px] md:h-[480px] lg:h-[500px]">
                  {/* Chat messages area */}
                <div 
                  ref={chatAreaRef}
                  id="rag-response-area" 
                  aria-live="polite" 
                    className={`flex-grow ${conversationHistory.length > 0 ? 'overflow-y-auto' : 'overflow-hidden'} p-2 xs:p-3 border border-gray-200 rounded-t-md bg-gray-50/80 backdrop-blur-sm shadow-inner transition-colors duration-200 ease-in-out`}
                  >
                    {/* Conversation header with clear button */}
                    {conversationHistory.length > 0 && (
                      <div className="flex justify-between items-center mb-2 pb-1 border-b border-gray-200">
                        <h4 className="text-xs font-medium text-gray-500">Conversation</h4>
                        <button 
                          onClick={clearConversation}
                          className="text-xs text-gray-500 hover:text-red-500 transition-colors"
                        >
                          Clear chat
                        </button>
                      </div>
                    )}
                    
                  <AnimatePresence mode="wait">
                      {/* Initial Loading indicator - REMAINS INSIDE scrollable area */}
                      {isRagLoading && conversationHistory.length === 0 && (
                      <motion.div
                        key="loading"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex items-center justify-center text-gray-500 text-sm italic"
                      >
                        <svg className="animate-spin h-4 w-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Fetching relevant info...
                      </motion.div>
                    )}
                      
                      {/* Initial Error display - REMAINS INSIDE scrollable area */}
                      {ragError && conversationHistory.length === 0 && (
                        <motion.div
                        key="error"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                          className="text-center py-4"
                      >
                          <p className="text-red-600 font-medium">
                        Error: {ragError}
                          </p>
                      </motion.div>
                    )}
                      
                      {/* Conversation Messages - REMAINS INSIDE scrollable area */}
                      {/* Only render messages if history is not empty */}
                      {conversationHistory.length > 0 && (
                        <div className="space-y-2"> 
                          {conversationHistory.map((message, index) => (
                            <motion.div 
                              key={`message-${index}`}
                              id={`message-${index}`}
                              data-role={message.role}
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 0.1 * (index % 3) }}
                              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'} my-2`}
                            >
                              {/* Bot avatar for assistant messages */}
                            {message.role === 'assistant' && (
                              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 flex items-center justify-center text-white text-xs mr-1.5 shadow-md flex-shrink-0">
                                D
                              </div>
                            )}
                            
                            <div 
                              className={`max-w-[80%] xs:max-w-[85%] px-3 xs:px-4 py-2 xs:py-2.5 rounded-2xl shadow-sm ${
                                message.role === 'user' 
                                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-tr-sm border border-blue-500/20' 
                                  : 'bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 rounded-tl-sm border border-gray-200'
                              }`}
                            >
                              <p className={`text-sm sm:text-base whitespace-pre-wrap font-medium leading-relaxed ${
                                message.role === 'user' ? 'text-white' : ''
                              }`}>{message.content}</p>
                              <div className={`text-xs mt-1.5 flex items-center ${
                                message.role === 'user' 
                                  ? 'text-white/90' 
                                  : 'text-gray-500'
                              }`}>
                                {new Date(message.timestamp).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}
                                
                                {/* Message status indicator for user messages */}
                                {message.role === 'user' && (
                                  <svg className="w-3 h-3 ml-1.5 text-white/90" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L9 12.586l7.293-7.293a1 1 0 011.414 1.414l-8 8z"></path>
                                  </svg>
                                )}
                              </div>
                            </div>
                            
                            {/* User avatar for user messages */}
                            {message.role === 'user' && (
                              <div className="w-6 h-6 rounded-full bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center text-white text-xs ml-1.5 shadow-md flex-shrink-0">
                                U
                              </div>
                            )}
                            </motion.div>
                          ))}
                        
                          {/* Loading indicator for ongoing response - REMAINS INSIDE scrollable area */}
                          {isRagLoading && ( // Show ongoing loading only when loading is true
                            <motion.div 
                              key="ongoing-loading"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              className="flex justify-start my-1.5"
                            >
                              {/* Bot avatar for loading state */}
                            <div className="w-6 h-6 rounded-full bg-gradient-to-br from-blue-400 to-violet-500 flex items-center justify-center text-white text-xs mr-1.5 shadow-md flex-shrink-0">
                              D
                            </div>
                            
                            <div className="bg-gradient-to-r from-gray-100 to-gray-200 px-3 xs:px-4 py-2 xs:py-2.5 rounded-2xl rounded-tl-sm shadow-sm border border-gray-200">
                              <div className="flex flex-col">
                                <div className="flex items-center space-x-1.5">
                                  <div className="w-1.5 xs:w-2 h-1.5 xs:h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                                  <div className="w-1.5 xs:w-2 h-1.5 xs:h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                                  <div className="w-1.5 xs:w-2 h-1.5 xs:h-2 rounded-full bg-blue-500 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                                </div>
                                <div className="text-xs text-gray-600 mt-1.5 font-medium max-w-[180px] xs:max-w-[220px]">
                                  Searching for information...
                                </div>
                              </div>
                            </div>
                            </motion.div>
                          )}
                        </div> // End space-y-2 for messages
                      )} 

                      {/* Empty state with suggestions - MOVED BACK INSIDE scrollable area */}
                      {!isRagLoading && !ragError && conversationHistory.length === 0 && (
                        <motion.div 
                          key="placeholder"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="flex flex-col items-center justify-start h-full pt-0.5 pb-1 xs:py-2 text-center space-y-1 xs:space-y-2"
                        >
                          <div>
                            <div className="text-xl mb-1 flex justify-center">
                              <ClientEmoji unified="1f44b" />
                            </div>
                            <div className="inline-block mb-1 px-2 py-1 xs:px-3 xs:py-1.5 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-100 shadow-sm">
                              <p className="text-gray-700 text-sm font-medium">
                                Hi! I'm Dean's digital twin! Ask me anything!
                              </p>
                            </div>
                          </div>
                          
                          {/* Suggestions inside the chat area */}
                          <div className="w-full max-w-[98%] mx-auto mt-0.5">
                            <p className="text-sm font-medium text-gray-500 mb-0.5 text-left">Try asking:</p>
                            <div className="grid grid-cols-1 gap-1 xs:flex xs:flex-col xs:gap-1 sm:grid sm:grid-cols-2 sm:gap-1">
                              {suggestedPrompts.map((prompt, index) => (
                                <button
                                  key={index}
                                  type="button" 
                                  onClick={() => handleSuggestionClick(prompt)}
                                  disabled={isRagLoading}
                                  className="w-full px-2 py-1 sm:px-2 sm:py-1.5 text-sm font-medium bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 rounded-lg hover:from-blue-50 hover:to-blue-100 hover:text-blue-600 hover:border-blue-200 focus:outline-none focus:ring-1 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-150 ease-in-out border border-gray-200 shadow-sm text-left overflow-hidden text-ellipsis flex items-center"
                                >
                                  <span className="inline-flex xs:hidden items-center justify-center w-3 h-3 mr-1 rounded-full bg-blue-100 text-blue-500 flex-shrink-0">
                                    <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                                    </svg>
                                  </span>
                                  {/* Show bullet only on non-mobile */}
                                  <span className="mr-1 text-blue-500 hidden sm:inline">•</span> 
                                  <span className="flex-1 text-xs">{prompt}</span>
                                </button>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div> {/* End #rag-response-area */}

                  {/* Input form at bottom */}
                  <form onSubmit={handleRagSubmit} className="mt-1 xs:mt-2 flex-shrink-0"> {/* Added flex-shrink-0 */}
                    <div className="flex items-center gap-1 xs:gap-2 border border-gray-200 rounded-b-md p-2 xs:p-3 bg-white/90 backdrop-blur-sm"> 
                      <input
                        id="rag-query"
                        type="text"
                        value={ragQuery}
                        onChange={(e) => setRagQuery(e.target.value)}
                        placeholder="Message Dean's digital twin..."
                        required
                        disabled={isRagLoading}
                        className="flex-grow px-3 py-2 xs:px-4 xs:py-2.5 rounded-full bg-gray-100/80 text-gray-900 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:bg-white border-none transition-all duration-200 ease-in-out disabled:opacity-60 disabled:cursor-not-allowed shadow-inner text-sm"
                      />
                      <button 
                        id="rag-submit"
                        type="submit" 
                        disabled={isRagLoading}
                        className="min-w-[44px] min-h-[44px] p-2.5 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center transition-all duration-200 ease-in-out shadow-md"
                        aria-label="Send message"
                      >
                        {isRagLoading ? (
                          <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        ) : (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        )}
                      </button>
                    </div>
                  </form>
                </div> {/* End WhatsApp-style chat container */}
              </div>
            </SpotlightCard>
          </motion.div>
          {/* --- End RAG Interaction --- */}
        </div> 
      </div>
    </section>
  );
} 
