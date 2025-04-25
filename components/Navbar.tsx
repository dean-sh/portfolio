'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/#about' },
  { name: 'Works', href: '/#works' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Resume', href: '/resume' },
  { name: 'Contact', href: '/#contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHeroVisible, setIsHeroVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY;
      setScrollPosition(currentPosition);
      setIsHeroVisible(currentPosition <= 10);
    };

    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isActivePage = (href: string) => {
    if (href.startsWith('/#') && pathname === '/') {
      return false;
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
            const isActive = isActivePage(link.href);
              
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
                  className={`text-primary hover:text-accent transition-all duration-300 relative group ${
                    isActive ? 'text-accent font-medium' : ''
                  }`}
                >
                  {link.name}
                  
                  <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 ${
                    isActive ? 'w-full' : 'group-hover:w-full'
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
                const isActive = isActivePage(link.href);
                  
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
                      className={`block py-2 text-primary hover:text-accent transition-all duration-300 relative ${
                        isActive ? 'text-accent font-medium pl-3' : ''
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {isActive && (
                        <span
                          className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-5 bg-accent rounded-full"
                        />
                      )}
                      {link.name}
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