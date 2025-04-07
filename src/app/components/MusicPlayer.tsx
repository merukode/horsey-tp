'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useMusic } from '../context/MusicContext';

export default function MusicPlayer() {
  const { 
    currentSongIndex, 
    isPlaying, 
    togglePlay, 
    playNext, 
    playPrevious, 
    setCurrentSong, 
    songs 
  } = useMusic();
  
  const [showPlaylist, setShowPlaylist] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.5);

  // Update progress bar
  useEffect(() => {
    const audioElement = document.querySelector('audio');
    if (audioElement) {
      const updateProgress = () => {
        const progressPercent = (audioElement.currentTime / audioElement.duration) * 100;
        setProgress(progressPercent);
      };
      
      audioElement.addEventListener('timeupdate', updateProgress);
      return () => {
        audioElement.removeEventListener('timeupdate', updateProgress);
      };
    }
  }, []);

  // Handle volume changes
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    const audioElement = document.querySelector('audio');
    if (audioElement) {
      audioElement.volume = newVolume;
    }
  };

  // Handle song selection from playlist
  const handleSongClick = (index: number) => {
    setCurrentSong(index);
    setShowPlaylist(false);
  };

  return (
    <div className="relative bg-[var(--retro-bg)] p-4 brutalism-box">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold retro-text">MUSIC PLAYER</h3>
          <motion.button
            className="text-[var(--retro-gray)] hover:text-[var(--accent)]"
            onClick={() => setShowPlaylist(!showPlaylist)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {showPlaylist ? '×' : '≡'}
          </motion.button>
        </div>

        {/* Playlist */}
        <motion.div
          className="absolute top-full left-0 right-0 bg-[var(--retro-bg)] border-4 border-[var(--foreground)] mt-2 p-2 z-20"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: showPlaylist ? 1 : 0, y: showPlaylist ? 0 : -10 }}
          transition={{ duration: 0.2 }}
        >
          {songs.map((song, index) => (
            <motion.div
              key={song.id}
              className={`p-2 cursor-pointer hover:bg-[var(--accent)] hover:text-[var(--foreground)] transition-colors
                ${currentSongIndex === index ? 'bg-[var(--accent)] text-[var(--foreground)]' : 'text-[var(--retro-gray)]'}`}
              onClick={() => handleSongClick(index)}
              whileHover={{ x: 5 }}
            >
              <div className="font-bold retro-text">{song.title}</div>
              <div className="text-sm">{song.artist}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Player Controls */}
        <div className="flex items-center justify-center gap-4 mb-4">
          <motion.button
            className="text-2xl text-[var(--retro-gray)] hover:text-[var(--accent)]"
            onClick={playPrevious}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ⏮
          </motion.button>
          <motion.button
            className="text-4xl text-[var(--retro-gray)] hover:text-[var(--accent)]"
            onClick={togglePlay}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isPlaying ? '⏸' : '▶'}
          </motion.button>
          <motion.button
            className="text-2xl text-[var(--retro-gray)] hover:text-[var(--accent)]"
            onClick={playNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            ⏭
          </motion.button>
        </div>

        {/* Progress Bar */}
        <div className="h-1 bg-[var(--retro-gray)]/20 cursor-pointer mb-4">
          <motion.div
            className="h-full bg-[var(--accent)]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Volume Control */}
        <div className="flex items-center gap-2">
          <span className="text-[var(--retro-gray)]">🔊</span>
          <input
            type="range"
            min="0"
            max="1"
            step="0.1"
            value={volume}
            onChange={handleVolumeChange}
            className="w-full h-1 bg-[var(--retro-gray)]/20 appearance-none cursor-pointer"
          />
        </div>

        {/* Current Song Info */}
        <div className="mt-4 text-center">
          <div className="font-bold retro-text">{songs[currentSongIndex].title}</div>
          <div className="text-sm text-[var(--retro-gray)]">{songs[currentSongIndex].artist}</div>
        </div>
      </div>
    </div>
  );
} 