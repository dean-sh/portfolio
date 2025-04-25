'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface PopupLinkProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  icon?: boolean;
}

const PopupLink: React.FC<PopupLinkProps> = ({ href, className, children, icon = false }) => {
  const [isHovering, setIsHovering] = useState(false);
  
  const openPopup = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Prevent default anchor tag behavior
    const width = 800;
    const height = 700;
    const left = window.screen.width / 2 - width / 2;
    const top = window.screen.height / 2 - height / 2;
    
    console.log('Opening popup for:', href); // Add logging for debugging
    
    // Try to open popup - window.open can return null if blocked
    const popup = window.open(
      href,
      'googleCalendarPopup',
      `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes`
    );
    
    // Check if popup was blocked
    if (!popup || popup.closed || typeof popup.closed === 'undefined') {
      console.warn('Popup was blocked - informing user');
      alert('Please allow popups for this site to book a call.');
    }
  };

  return (
    <motion.a 
      href="#"
      onClick={openPopup}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={`${className} inline-flex items-center justify-center gap-2`}
      rel="noopener noreferrer"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {icon && (
        <motion.svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-5 w-5" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          initial={{ rotate: 0 }}
          animate={{ rotate: isHovering ? 10 : 0 }}
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
          />
        </motion.svg>
      )}
      {children}
    </motion.a>
  );
};

export default PopupLink; 