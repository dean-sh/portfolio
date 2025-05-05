'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/', isSection: false },
  { name: 'About', href: '/#about', isSection: true },
  { name: 'Works', href: '/#works', isSection: true },
  { name: 'Skills', href: '/#skills', isSection: true },
  { name: 'Resume', href: '/resume', isSection: false },
  { name: 'Contact', href: '/#contact', isSection: true },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const observerRefs = useRef<Map<string, IntersectionObserver | null>>(new Map());

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
      setIsHeroVisible(currentPosition <= 10);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (pathname !== '/') {
      observerRefs.current.forEach(observer => observer?.disconnect());
      observerRefs.current.clear();
      setActiveSection(null);
      return;
    }

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute('id');
        if (entry.isIntersecting && id) {
           const rect = entry.boundingClientRect;
           const viewportHeight = window.innerHeight;
           const isCentered = rect.top <= viewportHeight * 0.5 && rect.bottom >= viewportHeight * 0.5;

           if (isCentered) {
             setActiveSection(id);
           }
        }
      });
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    observerRefs.current.forEach(observer => observer?.disconnect());
    observerRefs.current.clear();

    navLinks.forEach((link) => {
      if (link.isSection && link.href.startsWith('/#')) {
        const sectionId = link.href.substring(2);
        const sectionElement = document.getElementById(sectionId);

        if (sectionElement) {
          const observer = new IntersectionObserver(observerCallback, observerOptions);
          observer.observe(sectionElement);
          observerRefs.current.set(sectionId, observer);
        } else {
          console.warn(`Navbar: Section element with ID "${sectionId}" not found.`);
        }
      }
    });

    return () => {
      observerRefs.current.forEach(observer => observer?.disconnect());
    };
  }, [pathname]);

  useEffect(() => {
    if (pathname === '/' && isHeroVisible) {
      setActiveSection(null);
    }
  }, [isHeroVisible, pathname]);

  const isActivePage = (href: string, isSection?: boolean) => {
    if (isSection && href.startsWith('/#') && pathname === '/') {
       const sectionId = href.substring(2);
       return sectionId === activeSection && !isHeroVisible;
    }
    if (href === '/' && pathname === '/') {
        return isHeroVisible;
    }
    return href === pathname;
  };

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrollPosition > 50 
          ? 'bg-white/95 backdrop-blur-sm shadow-sm py-3 border-b border-slate-200'
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ 
        duration: 0.7, 
        ease: "easeOut",
        opacity: { duration: 0.5 }
      }}
    >
      <div className="container flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHeroVisible ? 0 : 1 }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: isHeroVisible ? 1 : 1.05 }}
          whileTap={{ scale: isHeroVisible ? 1 : 0.95 }}
        >
          <Link href="/" className="text-2xl font-bold text-primary">
            DS
          </Link>
        </motion.div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link, index) => {
            const isActive = isActivePage(link.href, link.isSection);
              
            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.5,
                  ease: "easeOut"
                }}
              >
                <Link 
                  href={link.href}
                  className={`relative group transition-all duration-300 hover:text-accent text-primary ${
                    isActive 
                      ? 'text-accent font-medium bg-slate-100 px-3 py-1 rounded-md' 
                      : ''
                  }`}
                >
                  {link.name}
                  
                  <span className={`absolute left-0 w-0 h-0.5 bg-accent transition-all duration-300 ${
                    isActive ? 'w-full -bottom-1' : 'group-hover:w-full -bottom-1'
                  }`} />
                </Link>
              </motion.div>
            );
          })}
        </nav>

        {/* Mobile menu button */}
        <motion.button 
          type="button"
          className="md:hidden text-primary rounded-full p-2 hover:bg-gray-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </motion.button>
      </div>

      {/* Mobile navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-white/95 backdrop-blur-sm mt-3 mx-4 rounded-xl shadow-lg border border-slate-200"
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            transition={{ 
              duration: 0.4,
              ease: "easeOut"
            }}
          >
            <div className="py-4 px-6 space-y-3">
              {navLinks.map((link, index) => {
                const isActive = isActivePage(link.href, link.isSection);
                  
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ 
                      duration: 0.3,
                      ease: "easeOut"
                    }}
                  >
                    <Link
                      href={link.href}
                      className={`block py-2 text-primary hover:text-accent transition-all duration-300 relative rounded-md hover:bg-slate-100 ${
                        isActive ? 'text-accent font-medium bg-slate-100 px-3' : 'px-3'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {isActive && (
                        <span
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-accent rounded-full"
                        />
                      )}
                      <span className={`${isActive ? 'ml-3': ''}`}>{link.name}</span>
                    </Link>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
} 