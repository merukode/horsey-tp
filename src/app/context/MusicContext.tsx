'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

interface MusicContextType {
  isPlaying: boolean;
  togglePlay: () => void;
  currentSong: string;
  setCurrentSong: (song: string) => void;
  songs: { title: string; file: string }[];
  currentSongIndex: number;
  playNext: () => void;
  playPrevious: () => void;
}

const songs = [
  { title: "Valse", file: "/music/valse.mp3" },
  { title: "Cyberangel", file: "/music/cyberangel.mp3" }
];

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export function MusicProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState("Valse");
  const [currentSongIndex, setCurrentSongIndex] = useState(0);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    setCurrentSong(songs[nextIndex].title);
  };

  const playPrevious = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
    setCurrentSong(songs[prevIndex].title);
  };

  useEffect(() => {
    const audio = document.getElementById('global-audio-player') as HTMLAudioElement;
    if (audio) {
      const song = songs.find(s => s.title === currentSong);
      if (song) {
        audio.src = song.file;
        if (isPlaying) {
          audio.play();
        }
      }
    }
  }, [currentSong, isPlaying]);

  return (
    <MusicContext.Provider value={{ isPlaying, togglePlay, currentSong, setCurrentSong, songs, currentSongIndex, playNext, playPrevious }}>
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