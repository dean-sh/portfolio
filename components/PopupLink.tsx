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
    e.preventDefault();
    e.stopPropagation();
    
    const calendarUrl = 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1FNGEsrn4DPL4_EkcnKhDXUnyyG0Rqluwnf6D9_a2vaF35hcUg0DaMTjDOE_0AbGIPT1F7iz_6?gv=true';
    
    const width = 800;
    const height = 700;
    const left = (window.screen.width - width) / 2;
    const top = (window.screen.height - height) / 2;
    
    console.log('Opening calendar popup from header');
    
    // Open popup with proper features
    const popup = window.open(
      calendarUrl,
      '_blank',
      `popup=yes,width=${width},height=${height},left=${left},top=${top},resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,status=no`
    );
    
    // Focus the popup window
    if (popup) {
      popup.focus();
    } else {
      console.warn('Popup was blocked');
      // Fallback: try to open in new tab
      window.open(calendarUrl, '_blank', 'noopener,noreferrer');
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