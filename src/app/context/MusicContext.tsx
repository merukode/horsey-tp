'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface Song {
  id: number;
  title: string;
  artist: string;
  src: string;
}

interface MusicContextType {
  currentSongIndex: number;
  isPlaying: boolean;
  togglePlay: () => void;
  playNext: () => void;
  playPrevious: () => void;
  setCurrentSong: (index: number) => void;
  songs: Song[];
}

const songs: Song[] = [
  { id: 1, title: 'Valse Di Fantastica', artist: 'Artist 1', src: '/music/valse.mp3' },
  { id: 2, title: 'Cyberangel', artist: 'Artist 2', src: '/music/cyberangel.mp3' },
];

// Create a global audio player instance
let globalAudioPlayer: HTMLAudioElement | null = null;

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function MusicProvider({ children }: { children: ReactNode }) {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Initialize the global audio player
  useEffect(() => {
    if (!globalAudioPlayer) {
      globalAudioPlayer = new Audio(songs[0].src);
      globalAudioPlayer.volume = 0.5;
    }
    
    // Handle visibility change to pause/resume music when tab is hidden/visible
    const handleVisibilityChange = () => {
      if (globalAudioPlayer) {
        if (document.visibilityState === 'hidden') {
          globalAudioPlayer.pause();
          setIsPlaying(false);
        } else if (isPlaying) {
          globalAudioPlayer.play();
        }
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    // Cleanup function
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      // Don't destroy the audio player on unmount to keep it playing
      // Only clean up if the component is being completely removed
      if (document.visibilityState === 'hidden') {
        globalAudioPlayer = null;
      }
    };
  }, [isPlaying]);

  const togglePlay = () => {
    if (globalAudioPlayer) {
      if (isPlaying) {
        globalAudioPlayer.pause();
      } else {
        globalAudioPlayer.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const playNext = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    if (globalAudioPlayer) {
      globalAudioPlayer.src = songs[nextIndex].src;
      globalAudioPlayer.play();
      setIsPlaying(true);
    }
  };

  const playPrevious = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
    if (globalAudioPlayer) {
      globalAudioPlayer.src = songs[prevIndex].src;
      globalAudioPlayer.play();
      setIsPlaying(true);
    }
  };

  const setCurrentSong = (index: number) => {
    setCurrentSongIndex(index);
    if (globalAudioPlayer) {
      globalAudioPlayer.src = songs[index].src;
      globalAudioPlayer.play();
      setIsPlaying(true);
    }
  };

  return (
    <MusicContext.Provider
      value={{
        currentSongIndex,
        isPlaying,
        togglePlay,
        playNext,
        playPrevious,
        setCurrentSong,
        songs,
      }}
    >
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