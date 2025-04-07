'use client';

import React, { useState, useEffect } from 'react';
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
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden cyber-grid">
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
          <div className="cyber-square-border p-8 sm:p-12 md:p-16">
            <motion.div className="glitch-container mb-6 holographic" variants={itemVariants}>
              <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tighter glitch-text retro-title tech-text">
                <span className="text-[var(--foreground)] block">AULIA</span>
                <span className="text-[var(--retro-gray)] block mt-2">RAMADHAN</span>
              </h1>
            </motion.div>
            {/* <motion.p 
              className="text-lg sm:text-xl md:text-2xl text-[var(--retro-gray)] max-w-2xl mx-auto typewriter"
              variants={itemVariants}
            >
              Crafting digital experiences through code and creativity
            </motion.p> */}
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
                <span className="relative z-10 text-white">VIEW PROJECTS</span>
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Marquee Section */}
      <section className="py-8 bg-[var(--background)] overflow-hidden">
        <div className="relative flex whitespace-nowrap">
          <div className="animate-marquee flex items-center">
            <div className="flex items-center space-x-16 mx-4">
              <span className="text-4xl font-bold text-[var(--accent)]">
                {currentTime.toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta' })} JAKARTA
              </span>
              <span className="text-4xl font-bold text-[var(--accent)]">
                {currentTime.toLocaleTimeString('en-US', { timeZone: 'America/New_York' })} NYC
              </span>
              <span className="text-4xl font-bold text-[var(--accent)]">
                {currentTime.toLocaleTimeString('ja-JP', { timeZone: 'Asia/Tokyo' })} TOKYO
              </span>
              <span className="text-4xl font-bold text-[var(--accent)]">
                {currentTime.toLocaleTimeString('en-GB', { timeZone: 'Europe/London' })} LONDON
              </span>
              <span className="text-4xl font-bold text-[var(--retro-gray)] italic">
                no pixels were harmed in the making of this site
              </span>
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex items-center space-x-16 mx-4">
              <span className="text-4xl font-bold text-[var(--accent)]">
                {currentTime.toLocaleTimeString('id-ID', { timeZone: 'Asia/Jakarta' })} JAKARTA
              </span>
              <span className="text-4xl font-bold text-[var(--accent)]">
                {currentTime.toLocaleTimeString('en-US', { timeZone: 'America/New_York' })} NYC
              </span>
              <span className="text-4xl font-bold text-[var(--accent)]">
                {currentTime.toLocaleTimeString('ja-JP', { timeZone: 'Asia/Tokyo' })} TOKYO
              </span>
              <span className="text-4xl font-bold text-[var(--accent)]">
                {currentTime.toLocaleTimeString('en-GB', { timeZone: 'Europe/London' })} LONDON
              </span>
              <span className="text-4xl font-bold text-[var(--retro-gray)] italic">
                no pixels were harmed in the making of this site
              </span>
            </div>
          </div>
        </div>
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
          <div className="absolute top-0 right-0 text-[200px] font-bold opacity-5 -rotate-12 select-none pointer-events-none">
            WORK
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-16 sm:mb-24 text-left glitch-text retro-title relative">
            <span className="absolute -top-6 left-0 text-sm font-mono text-[var(--accent)]">[SECTION_01]</span>
            FEATURED WORK
            <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[var(--accent)]"></div>
          </h2>

          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--foreground)]">
            {[
              { 
                name: 'PROJECT_01', 
                type: 'WEB APP', 
                tech: 'NEXT.JS',
                description: 'Full-stack web application with modern architecture'
              },
              { 
                name: 'PROJECT_02', 
                type: 'MOBILE', 
                tech: 'REACT',
                description: 'Cross-platform mobile experience with React Native'
              },
              { 
                name: 'PROJECT_03', 
                type: 'BACKEND', 
                tech: 'NODE.JS',
                description: 'Scalable backend infrastructure and API development'
              }
            ].map((project, index) => (
              <motion.div
                key={project.name}
                className="group relative bg-[var(--background)]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative p-6 sm:p-8 min-h-[280px] flex flex-col">
                  {/* Index number */}
                  <div className="absolute top-2 right-2 font-mono text-xs text-[var(--retro-gray)]">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Project info */}
                  <div className="flex flex-col space-y-4">
                    <div className="font-mono text-xs text-[var(--accent)]">{project.type}</div>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tighter">
                      {project.name}
                    </h3>
                    <p className="text-sm text-[var(--retro-gray)] font-mono leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech badge */}
                  <div className="mt-auto pt-6">
                    <div className="inline-block px-2 py-1 font-mono text-xs border border-[var(--accent)] text-[var(--accent)]">
                      {project.tech}
                    </div>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 border-2 border-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Brutalist accent */}
                <div className="absolute top-0 left-0 w-2 h-2 bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>

          {/* Brutalist footer */}
          <div className="mt-8 flex items-center justify-between text-xs font-mono text-[var(--retro-gray)]">
            <div>TOTAL_PROJECTS: 03</div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[var(--accent)]"></div>
              <div>STATUS: DEPLOYED</div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section className="py-12 sm:py-20 px-4 bg-[var(--retro-bg-alt)] relative overflow-hidden">
        <motion.div 
          className="max-w-7xl mx-auto relative z-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="absolute top-0 right-0 text-[200px] font-bold opacity-5 -rotate-12 select-none pointer-events-none">
            TECH
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-16 sm:mb-24 text-left glitch-text retro-title relative">
            <span className="absolute -top-6 left-0 text-sm font-mono text-[var(--accent)]">[SECTION_02]</span>
            TECH STACK
            <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[var(--accent)]"></div>
          </h2>
          
          {/* Brutalist Tech Stack Display */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--foreground)]">
            {[
              { name: 'REACT', type: 'FRONTEND', year: '2013' },
              { name: 'NODE.JS', type: 'BACKEND', year: '2009' },
              { name: 'TYPESCRIPT', type: 'LANGUAGE', year: '2012' },
              { name: 'PYTHON', type: 'LANGUAGE', year: '1991' },
              { name: 'NEXT.JS', type: 'FRAMEWORK', year: '2016' },
              { name: 'GRAPHQL', type: 'API', year: '2015' }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                className="group relative bg-[var(--background)]"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative p-6 sm:p-8">
                  {/* Index number */}
                  <div className="absolute top-2 right-2 font-mono text-xs text-[var(--retro-gray)]">
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Tech info */}
                  <div className="flex flex-col space-y-2">
                    <div className="font-mono text-xs text-[var(--accent)]">{tech.type}</div>
                    <h3 className="text-2xl sm:text-3xl font-bold tracking-tighter">
                      {tech.name}
                    </h3>
                    <div className="font-mono text-xs text-[var(--retro-gray)]">SINCE {tech.year}</div>
                  </div>

                  {/* Hover effect */}
                  <div className="absolute inset-0 border-2 border-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Brutalist accent */}
                <div className="absolute top-0 left-0 w-2 h-2 bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-[var(--accent)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>

          {/* Brutalist footer */}
          <div className="mt-8 flex items-center justify-between text-xs font-mono text-[var(--retro-gray)]">
            <div>TOTAL_STACK_COUNT: 06</div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[var(--accent)]"></div>
              <div>STATUS: ACTIVE</div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}