'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Projects() {
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
            WORK
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-16 sm:mb-24 text-left glitch-text retro-title relative">
            <span className="absolute -top-6 left-0 text-sm font-mono text-[var(--accent)]">[PROJECTS]</span>
            ALL PROJECTS
            <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[var(--accent)]"></div>
          </h2>

          {/* Filter Section */}
          <div className="mb-12 flex flex-wrap gap-4">
            {['ALL', 'WEB', 'MOBILE', 'AI', 'BACKEND'].map((filter) => (
              <button
                key={filter}
                className="px-4 py-2 font-mono text-xs border-2 border-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--foreground)]">
            {[
              {
                name: 'PROJECT_01',
                type: 'WEB APP',
                tech: ['NEXT.JS', 'TYPESCRIPT', 'TAILWIND'],
                description: 'Full-stack web application with modern architecture',
                year: '2024',
                status: 'LIVE'
              },
              {
                name: 'PROJECT_02',
                type: 'MOBILE APP',
                tech: ['REACT NATIVE', 'REDUX', 'NODE.JS'],
                description: 'Cross-platform mobile experience with React Native',
                year: '2023',
                status: 'LIVE'
              },
              {
                name: 'PROJECT_03',
                type: 'AI PROJECT',
                tech: ['PYTHON', 'TENSORFLOW', 'FLASK'],
                description: 'Machine learning model with web interface',
                year: '2023',
                status: 'BETA'
              },
              {
                name: 'PROJECT_04',
                type: 'BACKEND',
                tech: ['NODE.JS', 'GRAPHQL', 'MONGODB'],
                description: 'Scalable backend infrastructure and API',
                year: '2023',
                status: 'LIVE'
              },
              {
                name: 'PROJECT_05',
                type: 'WEB APP',
                tech: ['REACT', 'EXPRESS', 'POSTGRESQL'],
                description: 'E-commerce platform with real-time features',
                year: '2022',
                status: 'ARCHIVED'
              },
              {
                name: 'PROJECT_06',
                type: 'MOBILE APP',
                tech: ['FLUTTER', 'FIREBASE'],
                description: 'IoT control application for smart home',
                year: '2022',
                status: 'MAINTENANCE'
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
                <div className="relative p-6 sm:p-8 min-h-[320px] flex flex-col">
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
                    
                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 text-xs font-mono border border-[var(--foreground)] text-[var(--retro-gray)]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Project metadata */}
                  <div className="mt-auto pt-6 flex justify-between items-center font-mono text-xs">
                    <span className="text-[var(--retro-gray)]">{project.year}</span>
                    <span className={`${
                      project.status === 'LIVE' ? 'text-green-500' :
                      project.status === 'BETA' ? 'text-yellow-500' :
                      project.status === 'ARCHIVED' ? 'text-red-500' :
                      'text-[var(--retro-gray)]'
                    }`}>
                      {project.status}
                    </span>
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
            <div>TOTAL_PROJECTS: 06</div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[var(--accent)]"></div>
              <div>STATUS: ARCHIVED_INCLUDED</div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
} 