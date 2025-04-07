'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useMusic } from '../context/MusicContext';
import MusicPlayerCard from './MusicPlayerCard';

export default function SpinningDisc() {
  const { isPlaying, togglePlay } = useMusic();
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);
  const playerRef = useRef<HTMLDivElement>(null);
  const discRef = useRef<HTMLDivElement>(null);

  // Handle spinning animation
  useEffect(() => {
    if (isPlaying) {
      controls.start({
        rotate: 360,
        transition: {
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }
      });
    } else {
      controls.stop();
    }
  }, [isPlaying, controls]);

  // Handle clicks outside the player card
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        showPlayer && 
        playerRef.current && 
        discRef.current && 
        !playerRef.current.contains(event.target as Node) &&
        !discRef.current.contains(event.target as Node)
      ) {
        setShowPlayer(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPlayer]);

  const handleInteraction = () => {
    setShowPlayer(!showPlayer);
    togglePlay();
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <motion.div
        ref={discRef}
        className="relative w-16 h-16 cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleInteraction}
        animate={controls}
      >
        {/* Vinyl Record */}
        <div className="absolute inset-0 rounded-full bg-[var(--retro-bg)] border-4 border-[var(--foreground)] overflow-hidden">
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
          {/* Record Grooves */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_30%,rgba(255,255,255,0.1)_30%,rgba(255,255,255,0.1)_31%,transparent_31%,transparent_40%,rgba(255,255,255,0.1)_40%,rgba(255,255,255,0.1)_41%,transparent_41%)]"></div>
          {/* Center Label */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-[var(--accent)] border-2 border-[var(--foreground)]"></div>
          </div>
        </div>

        {/* Play/Pause Icon */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center text-[var(--foreground)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isPlaying ? '⏸' : '▶'}
        </motion.div>

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-full"
          initial={{ boxShadow: '0 0 0 0 rgba(255,62,0,0.5)' }}
          animate={{
            boxShadow: isPlaying ? '0 0 20px 5px rgba(255,62,0,0.5)' : '0 0 0 0 rgba(255,62,0,0.5)'
          }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>

      {/* Music Player Card */}
      <div ref={playerRef}>
        <MusicPlayerCard isVisible={showPlayer} />
      </div>
    </div>
  );
} 