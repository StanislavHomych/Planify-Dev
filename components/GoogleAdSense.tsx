'use client';

import { useEffect } from 'react';

export default function GoogleAdSense() {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Check if AdSense script already exists
    const existingScript = document.querySelector(
      'script[src*="pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"]'
    );
    if (existingScript) {
      return;
    }

    // Create and add AdSense script to head
    const script = document.createElement('script');
    script.async = true;
    script.src =
      'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2980943706375055';
    script.crossOrigin = 'anonymous';
    script.setAttribute('data-ad-client', 'ca-pub-2980943706375055');

    // Insert at the beginning of head for early execution
    if (document.head.firstChild) {
      document.head.insertBefore(script, document.head.firstChild);
    } else {
      document.head.appendChild(script);
    }
  }, []);

  return null;
}

