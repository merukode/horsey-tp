'use client';

import { useEffect, useState } from 'react';

export default function ParallaxBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="parallax-container pointer-events-none">
      <div 
        className="parallax-layer parallax-grid" 
        style={{ 
          transform: `translateY(${scrollY * 0.1}px)`,
          opacity: 0.15
        }}
      />
      <div 
        className="parallax-layer parallax-dots" 
        style={{ 
          transform: `translateY(${scrollY * 0.2}px)`,
          opacity: 0.1
        }}
      />
      <div 
        className="parallax-layer parallax-lines" 
        style={{ 
          transform: `translateY(${scrollY * 0.3}px)`,
          opacity: 0.08
        }}
      />
      <div 
        className="absolute inset-0" 
        style={{ 
          background: 'radial-gradient(circle at center, transparent 0%, var(--background) 70%)',
          opacity: 0.5
        }}
      />
    </div>
  );
} 