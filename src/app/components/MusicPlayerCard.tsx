'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMusic } from '../context/MusicContext';

interface MusicPlayerCardProps {
  isVisible: boolean;
}

const MusicPlayerCard: React.FC<MusicPlayerCardProps> = ({ isVisible }) => {
  const { isPlaying, currentSong, setCurrentSong, togglePlay, songs } = useMusic();

  const handleSongClick = (songTitle: string) => {
    setCurrentSong(songTitle);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed top-24 left-25 w-64 bg-[var(--royal-cream)] border-2 border-[var(--royal-gold)] rounded-lg shadow-lg p-4 z-50"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-[var(--royal-purple)] font-semibold">Now Playing</h3>
            <button 
              onClick={togglePlay}
              className="text-[var(--royal-purple)] hover:text-[var(--royal-gold)] transition-colors"
            >
              {isPlaying ? '⏸' : '▶'}
            </button>
          </div>
          
          <p className="text-[var(--foreground)] mb-2">{currentSong}</p>
          <div className="flex items-center mb-4">
            <span className={`w-2 h-2 rounded-full mr-2 ${isPlaying ? 'bg-[var(--royal-gold)]' : 'bg-gray-400'}`}></span>
            <span className="text-sm text-[var(--retro-gray)]">{isPlaying ? 'Playing' : 'Paused'}</span>
          </div>
          
          <div>
            <h4 className="text-[var(--royal-purple)] font-semibold mb-2">Playlist</h4>
            <ul className="space-y-2">
              {songs.map((song) => (
                <li 
                  key={song.title}
                  onClick={() => handleSongClick(song.title)}
                  className={`text-sm p-2 rounded cursor-pointer transition-colors ${
                    currentSong === song.title 
                      ? 'bg-[var(--royal-gold)] text-[var(--royal-cream)]' 
                      : 'hover:bg-[var(--retro-bg-alt)]'
                  }`}
                >
                  {song.title}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MusicPlayerCard; 