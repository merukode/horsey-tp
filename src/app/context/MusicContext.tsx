'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface MusicContextType {
  isPlaying: boolean;
  togglePlay: () => void;
  currentSong: string;
  setCurrentSong: (song: string) => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState("Valse");

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    const audio = document.getElementById('global-audio-player') as HTMLAudioElement;
    if (audio) {
      if (isPlaying) {
        audio.play();
      } else {
        audio.pause();
      }
    }
  }, [isPlaying]);

  return (
    <MusicContext.Provider value={{ isPlaying, togglePlay, currentSong, setCurrentSong }}>
      {children}
    </MusicContext.Provider>
  );
}

export function useMusic() {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
} 