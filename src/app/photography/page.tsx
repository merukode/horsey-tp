'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Sample photography data - replace with your actual photos
const photos = [
  { id: 1, src: '/photos/photo1.jpg', title: 'Mountain Landscape', category: 'Nature' },
  { id: 2, src: '/photos/photo2.jpg', title: 'Urban Street', category: 'Urban' },
  { id: 3, src: '/photos/photo3.jpg', title: 'Portrait', category: 'Portrait' },
  { id: 4, src: '/photos/photo4.jpg', title: 'Architecture', category: 'Architecture' },
  { id: 5, src: '/photos/photo5.jpg', title: 'Wildlife', category: 'Nature' },
  { id: 6, src: '/photos/photo6.jpg', title: 'Abstract', category: 'Abstract' },
  { id: 7, src: '/photos/photo7.jpg', title: 'Street Photography', category: 'Urban' },
  { id: 8, src: '/photos/photo8.jpg', title: 'Macro', category: 'Nature' },
  { id: 9, src: '/photos/photo9.jpg', title: 'Cityscape', category: 'Urban' },
  { id: 10, src: '/photos/photo10.jpg', title: 'People', category: 'Portrait' },
  { id: 11, src: '/photos/photo11.jpg', title: 'Building', category: 'Architecture' },
  { id: 12, src: '/photos/photo12.jpg', title: 'Pattern', category: 'Abstract' },
];

// Get unique categories
const categories = ['All', ...new Set(photos.map(photo => photo.category))];

export default function Photography() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  // Filter photos based on selected category
  const filteredPhotos = selectedCategory === 'All' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <div className="min-h-screen py-20 px-4">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center glitch-text retro-title">
          PHOTOGRAPHY
        </h1>
        
        <p className="text-center text-[var(--retro-gray)] max-w-2xl mx-auto mb-12">
          A collection of my photography work, capturing moments and perspectives that inspire me.
        </p>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-4 py-2 text-sm font-medium transition-all duration-200 retro-text
                ${selectedCategory === category
                  ? 'bg-[var(--accent)] text-[var(--foreground)] brutalism-box'
                  : 'bg-[var(--retro-bg)] text-[var(--retro-gray)] hover:text-[var(--accent)]'
                }`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={photo.id}
              className="mb-4 break-inside-avoid overflow-hidden brutalism-box"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedPhoto(photo.id)}
            >
              <div className="relative group cursor-pointer">
                <div className="aspect-[3/4] bg-[var(--retro-bg)] overflow-hidden">
                  {/* Replace with actual image when available */}
                  <div className="w-full h-full bg-gradient-to-br from-[var(--accent)]/20 to-[var(--accent2)]/20 flex items-center justify-center">
                    <span className="text-[var(--retro-gray)] text-sm">{photo.title}</span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-lg font-bold retro-text">{photo.title}</h3>
                    <p className="text-sm text-[var(--retro-gray)]">{photo.category}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Photo Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 bg-[var(--background)]/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <motion.div
              className="relative max-w-4xl w-full bg-[var(--retro-bg)] p-4 brutalism-box"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-[var(--foreground)] text-2xl"
                onClick={() => setSelectedPhoto(null)}
              >
                ×
              </button>
              <div className="aspect-[4/3] bg-[var(--retro-bg-alt)] flex items-center justify-center">
                {/* Replace with actual image when available */}
                <span className="text-[var(--retro-gray)]">
                  {photos.find(p => p.id === selectedPhoto)?.title}
                </span>
              </div>
              <div className="mt-4">
                <h3 className="text-xl font-bold retro-text">
                  {photos.find(p => p.id === selectedPhoto)?.title}
                </h3>
                <p className="text-[var(--retro-gray)]">
                  {photos.find(p => p.id === selectedPhoto)?.category}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 