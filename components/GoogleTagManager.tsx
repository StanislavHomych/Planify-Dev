'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    dataLayer: any[];
    google_tag_manager?: any;
  }
}

export default function GoogleTagManager() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initialize dataLayer immediately
    window.dataLayer = window.dataLayer || [];

    // Check if GTM script already exists
    const existingScript = document.querySelector('script[src*="googletagmanager.com/gtm.js"]');
    if (existingScript) {
      return;
    }

    // Check if initialization script already exists
    const existingInitScript = document.querySelector('script#google-tag-manager-init');
    if (existingInitScript) {
      return;
    }

    // Create and add GTM initialization script to head
    // Execute immediately to ensure early loading
    const script = document.createElement('script');
    script.id = 'google-tag-manager-init';
    script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NHQZVH2P');`;
    
    // Insert at the beginning of head for early execution
    if (document.head.firstChild) {
      document.head.insertBefore(script, document.head.firstChild);
    } else {
      document.head.appendChild(script);
    }
  }, []);

  return null;
}

