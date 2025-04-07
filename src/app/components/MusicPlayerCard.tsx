'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useMusic } from '../context/MusicContext';

interface MusicPlayerCardProps {
  isVisible: boolean;
}

const playlist = [
  { title: "Valse", file: "/music/valse.mp3" },
  // Add more songs here
];

const MusicPlayerCard: React.FC<MusicPlayerCardProps> = ({ isVisible }) => {
  const { isPlaying, currentSong, setCurrentSong, togglePlay } = useMusic();

  const handleSongClick = (song: string) => {
    setCurrentSong(song);
    // You could add logic here to change the audio source
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-24 right-8 w-64 bg-[var(--royal-cream)] border-2 border-[var(--royal-gold)] rounded-lg shadow-lg p-4 z-50"
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
          
          <p className="text-[var(--foreground)] mb-2">{currentSong || "Valse"}</p>
          <div className="flex items-center mb-4">
            <span className={`w-2 h-2 rounded-full mr-2 ${isPlaying ? 'bg-[var(--royal-gold)]' : 'bg-gray-400'}`}></span>
            <span className="text-sm text-[var(--foreground)]">{isPlaying ? 'Playing' : 'Paused'}</span>
          </div>
          
          <div>
            <h4 className="text-[var(--royal-purple)] font-semibold mb-2">Playlist</h4>
            <ul className="space-y-2">
              {playlist.map((song, index) => (
                <li 
                  key={index}
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