'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
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
            ABOUT
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-16 sm:mb-24 text-left glitch-text retro-title relative">
            <span className="absolute -top-6 left-0 text-sm font-mono text-[var(--accent)]">[WHO_AM_I]</span>
            ABOUT ME
            <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[var(--accent)]"></div>
          </h2>

          {/* Bio Section */}
          <div className="relative grid grid-cols-1 md:grid-cols-2 gap-px bg-[var(--foreground)]">
            {/* Main Bio */}
            <motion.div
              className="relative bg-[var(--background)] p-6 sm:p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="font-mono text-xs text-[var(--accent)] mb-4">BIOGRAPHY</div>
              <div className="space-y-4 font-mono text-sm">
                <p>SOFTWARE ENGINEER WITH A PASSION FOR BUILDING DIGITAL EXPERIENCES.</p>
                <p>FOCUSED ON CREATING INTUITIVE AND PERFORMANT APPLICATIONS THAT SOLVE REAL-WORLD PROBLEMS.</p>
                <p>CONSTANTLY EXPLORING NEW TECHNOLOGIES AND METHODOLOGIES TO PUSH THE BOUNDARIES OF WHAT'S POSSIBLE.</p>
              </div>
            </motion.div>

            {/* Stats/Details */}
            <motion.div
              className="relative bg-[var(--background)] p-6 sm:p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="font-mono text-xs text-[var(--accent)] mb-4">QUICK_STATS</div>
              <div className="space-y-4">
                {[
                  { label: 'LOCATION', value: 'EARTH.ASIA.ID' },
                  { label: 'EXPERIENCE', value: '5+ YEARS' },
                  { label: 'AVAILABILITY', value: 'OPEN TO OPPORTUNITIES' },
                  { label: 'INTERESTS', value: 'AI, WEB3, PHOTOGRAPHY' }
                ].map((stat, index) => (
                  <div key={stat.label} className="flex justify-between items-center border-b border-[var(--foreground)]/20 pb-2">
                    <span className="font-mono text-xs text-[var(--retro-gray)]">{stat.label}</span>
                    <span className="font-mono text-sm">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Timeline Section */}
          <div className="mt-12">
            <div className="font-mono text-xs text-[var(--accent)] mb-6">TIMELINE</div>
            <div className="relative grid grid-cols-1 gap-px bg-[var(--foreground)]">
              {[
                { year: '2023', title: 'SENIOR SOFTWARE ENGINEER', company: 'TECH CORP' },
                { year: '2021', title: 'FULL STACK DEVELOPER', company: 'STARTUP INC' },
                { year: '2019', title: 'FRONTEND DEVELOPER', company: 'DIGITAL AGENCY' },
                { year: '2018', title: 'GRADUATED', company: 'COMPUTER SCIENCE' }
              ].map((event, index) => (
                <motion.div
                  key={event.year}
                  className="group relative bg-[var(--background)]"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="relative p-6 sm:p-8 flex items-center">
                    <div className="w-20 font-mono text-sm text-[var(--accent)]">{event.year}</div>
                    <div>
                      <h3 className="text-lg font-bold">{event.title}</h3>
                      <p className="font-mono text-xs text-[var(--retro-gray)]">{event.company}</p>
                    </div>
                    {/* Brutalist accent */}
                    <div className="absolute top-0 left-0 w-2 h-2 bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Brutalist footer */}
          <div className="mt-8 flex items-center justify-between text-xs font-mono text-[var(--retro-gray)]">
            <div>LAST_UPDATED: 2024</div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[var(--accent)]"></div>
              <div>STATUS: ONLINE</div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
} 