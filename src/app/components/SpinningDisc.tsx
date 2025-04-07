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
    <div className="fixed top-25 left-8 z-50">
      <motion.div
        ref={discRef}
        className="relative w-16 h-16 cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={handleInteraction}
        animate={controls}
      >
        {/* Vinyl Record */}
        <div className="absolute inset-0 rounded-full bg-[var(--retro-bg)] border-2 border-[var(--accent)] overflow-hidden">
          {/* Simple record grooves */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 rounded-full border-[1px] border-[var(--accent)] opacity-30"></div>
            <div className="absolute inset-[15%] rounded-full border-[1px] border-[var(--accent)] opacity-30"></div>
            <div className="absolute inset-[30%] rounded-full border-[1px] border-[var(--accent)] opacity-30"></div>
          </div>
          
          {/* Center Label */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-[var(--accent)] border border-[var(--foreground)]"></div>
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
      </motion.div>

      {/* Music Player Card */}
      <div ref={playerRef}>
        <MusicPlayerCard isVisible={showPlayer} />
      </div>
    </div>
  );
} 