'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    calendar?: {
      schedulingButton: {
        load: (config: {
          url: string;
          color: string;
          label: string;
          target: HTMLElement;
        }) => void;
      };
    };
  }
}

export default function GoogleCalendarWidget() {
  const targetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let isLoaded = false;
    
    const loadCalendarWidget = () => {
      if (window.calendar && targetRef.current && !isLoaded) {
        // Clear any existing content first
        targetRef.current.innerHTML = '';
        
        window.calendar.schedulingButton.load({
          url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ1FNGEsrn4DPL4_EkcnKhDXUnyyG0Rqluwnf6D9_a2vaF35hcUg0DaMTjDOE_0AbGIPT1F7iz_6?gv=true',
          color: '#059669', // energy-600 color to match our theme
          label: 'Book Appointment',
          target: targetRef.current,
        });
        
        // Force apply our custom styles after Google's button loads
        setTimeout(() => {
          const button = targetRef.current?.querySelector('button');
          if (button) {
            button.className = 'google-calendar-scheduling-button custom-styled';
            // Apply inline styles as backup
            button.style.cssText = `
              background: linear-gradient(135deg, #059669 0%, #047857 50%, #065f46 100%) !important;
              border: 1px solid rgba(5, 150, 105, 0.3) !important;
              color: white !important;
              font-weight: 600 !important;
              font-size: 16px !important;
              padding: 16px 32px !important;
              border-radius: 12px !important;
              font-family: var(--font-outfit), -apple-system, BlinkMacSystemFont, sans-serif !important;
              letter-spacing: 0.025em !important;
              width: 100% !important;
              display: block !important;
              text-align: center !important;
              cursor: pointer !important;
              box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.1) !important;
              transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
            `;
          }
        }, 500);
        
        isLoaded = true;
      }
    };

    // Add a delay to ensure the script is fully loaded
    const timer = setTimeout(() => {
      loadCalendarWidget();
    }, 1000);

    // Also listen for the script to load
    const checkForScript = setInterval(() => {
      if (window.calendar && !isLoaded) {
        loadCalendarWidget();
        clearInterval(checkForScript);
      }
    }, 500);

    // Cleanup
    return () => {
      clearTimeout(timer);
      clearInterval(checkForScript);
    };
  }, []);

  return (
    <div className="flex justify-center">
      <div ref={targetRef} className="google-calendar-widget" />
    </div>
  );
}