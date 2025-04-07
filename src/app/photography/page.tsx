'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Photography() {
  return (
    <div className="min-h-screen pt-20">
      <section className="py-12 sm:py-20 px-4 relative">
        <motion.div 
          className="max-w-7xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 right-0 text-[200px] font-bold opacity-5 -rotate-12 select-none pointer-events-none">
            PHOTO
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-16 sm:mb-24 text-left glitch-text retro-title relative">
            <span className="absolute -top-6 left-0 text-sm font-mono text-[var(--accent)]">[PHOTOGRAPHY]</span>
            VISUAL STORIES
            <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[var(--accent)]"></div>
          </h2>

          {/* Categories */}
          <div className="mb-12 flex flex-wrap gap-4">
            {['ALL', 'STREET', 'PORTRAIT', 'LANDSCAPE', 'ABSTRACT'].map((category) => (
              <button
                key={category}
                className="px-4 py-2 font-mono text-xs border-2 border-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--foreground)]">
            {[
              {
                title: 'URBAN_GEOMETRY_01',
                category: 'STREET',
                location: 'TOKYO, JP',
                year: '2024',
                camera: 'FUJIFILM X-T4'
              },
              {
                title: 'PORTRAIT_SERIES_05',
                category: 'PORTRAIT',
                location: 'NYC, USA',
                year: '2023',
                camera: 'SONY A7III'
              },
              {
                title: 'MOUNTAIN_VISTA_12',
                category: 'LANDSCAPE',
                location: 'ALPS, CH',
                year: '2023',
                camera: 'CANON R5'
              },
              {
                title: 'STREET_LIFE_08',
                category: 'STREET',
                location: 'LONDON, UK',
                year: '2023',
                camera: 'LEICA Q2'
              },
              {
                title: 'ABSTRACT_FORMS_03',
                category: 'ABSTRACT',
                location: 'BERLIN, DE',
                year: '2023',
                camera: 'FUJIFILM X-T4'
              },
              {
                title: 'CITYSCAPE_15',
                category: 'LANDSCAPE',
                location: 'HK, CN',
                year: '2022',
                camera: 'SONY A7III'
              }
            ].map((photo, index) => (
              <motion.div
                key={photo.title}
                className="group relative bg-[var(--background)]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative aspect-square overflow-hidden">
                  {/* Placeholder for photo - replace with actual image */}
                  <div className="absolute inset-0 bg-[var(--retro-bg)] group-hover:scale-105 transition-transform duration-500">
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--background)]/80"></div>
                  </div>

                  {/* Photo info */}
                  <div className="absolute inset-0 p-6 flex flex-col justify-end">
                    <div className="space-y-2">
                      <div className="font-mono text-xs text-[var(--accent)]">{photo.category}</div>
                      <h3 className="text-xl sm:text-2xl font-bold tracking-tighter">
                        {photo.title}
                      </h3>
                      <div className="flex justify-between items-center font-mono text-xs text-[var(--retro-gray)]">
                        <span>{photo.location}</span>
                        <span>{photo.year}</span>
                      </div>
                      <div className="font-mono text-xs text-[var(--retro-gray)]">{photo.camera}</div>
                    </div>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 border-2 border-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Brutalist accent */}
                  <div className="absolute top-0 left-0 w-2 h-2 bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-0 right-0 w-2 h-2 bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Brutalist footer */}
          <div className="mt-8 flex items-center justify-between text-xs font-mono text-[var(--retro-gray)]">
            <div>TOTAL_PHOTOS: 06</div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[var(--accent)]"></div>
              <div>STATUS: CURATED</div>
            </div>
          </div>

          {/* Equipment Section */}
          <div className="mt-20">
            <h3 className="text-xl font-bold mb-8 text-left relative">
              <span className="absolute -top-4 left-0 text-sm font-mono text-[var(--accent)]">[GEAR]</span>
              EQUIPMENT
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--foreground)]">
              {[
                { type: 'CAMERA', items: ['FUJIFILM X-T4', 'SONY A7III', 'LEICA Q2'] },
                { type: 'LENSES', items: ['35MM F/1.4', '50MM F/1.2', '85MM F/1.8'] },
                { type: 'LIGHTING', items: ['GODOX V1', 'APUTURE 120D', 'NANLITE FORZA'] },
                { type: 'ACCESSORIES', items: ['TRIPOD', 'FILTERS', 'FLASH TRIGGERS'] }
              ].map((category) => (
                <div key={category.type} className="bg-[var(--background)] p-6">
                  <div className="font-mono text-xs text-[var(--accent)] mb-4">{category.type}</div>
                  <ul className="space-y-2">
                    {category.items.map((item) => (
                      <li key={item} className="font-mono text-xs">{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
} 