'use client';

import { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

declare global {
  interface Window {
    __deanCalFloatingButtonInitialized?: boolean;
  }
}

export default function CalFloatingButton() {
  useEffect(() => {
    let isActive = true;

    async function initializeCalButton() {
      const cal = await getCalApi({ namespace: '30min' });

      if (!isActive || window.__deanCalFloatingButtonInitialized) {
        return;
      }

      window.__deanCalFloatingButtonInitialized = true;

      cal('floatingButton', {
        calLink: 'deanshabi/30min',
        config: {
          layout: 'month_view',
          useSlotsViewOnSmallScreen: 'true',
        },
        buttonText: 'Book a call',
      });

      cal('ui', {
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    }

    initializeCalButton();

    return () => {
      isActive = false;
    };
  }, []);

  return null;
}
