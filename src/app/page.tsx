'use client';

import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--background)]/80"></div>
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-10">
          {Array.from({ length: 64 }).map((_, i) => (
            <div key={i} className="border border-[var(--retro-gray)]/10"></div>
          ))}
        </div>
        <motion.div 
          className="relative z-10 text-center px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="glitch-container mb-6" variants={itemVariants}>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter glitch-text retro-title">
              <span className="text-[var(--foreground)] block">SOFTWARE</span>
              <span className="text-[var(--retro-gray)] block mt-2">ENGINEER</span>
            </h1>
          </motion.div>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-[var(--retro-gray)] max-w-2xl mx-auto typewriter"
            variants={itemVariants}
          >
            Crafting digital experiences through code and creativity
          </motion.p>
          <motion.div 
            className="mt-8"
            variants={itemVariants}
          >
            <motion.a
              href="/projects"
              className="inline-block px-6 sm:px-8 py-3 sm:py-4 bg-[var(--accent)] text-[var(--foreground)] font-bold text-base sm:text-lg brutalism-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">VIEW PROJECTS</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Section */}
      <section className="py-12 sm:py-20 px-4 relative">
        <motion.div 
          className="max-w-7xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center glitch-text retro-title">FEATURED WORK</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={item}
                className="group relative aspect-video bg-[var(--retro-bg)] overflow-hidden brutalism-box"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--background)]/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-4 sm:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h3 className="text-lg sm:text-xl font-bold mb-2 retro-text">Project {item}</h3>
                  <p className="text-sm sm:text-base text-[var(--retro-gray)]">Description of the project goes here</p>
                </div>
                <div className="absolute top-0 right-0 p-2 bg-[var(--background)]/80 text-xs font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                  {item === 1 ? 'NEXT.JS' : item === 2 ? 'REACT' : 'NODE.JS'}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-12 sm:py-20 px-4 bg-[var(--retro-bg-alt)] relative">
        <motion.div 
          className="max-w-7xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center glitch-text retro-title">TECH STACK</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
            {['React', 'Node.js', 'TypeScript', 'Python'].map((skill, index) => (
              <motion.div
                key={skill}
                className="p-4 sm:p-6 bg-[var(--background)] border-4 border-[var(--foreground)] text-center hover:border-[var(--accent)] transition-all duration-300 transform hover:scale-105 relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <h3 className="text-base sm:text-xl font-bold relative z-10 retro-text">{skill}</h3>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[var(--accent)] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}