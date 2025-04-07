'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function About() {
  return (
    <div className="min-h-screen py-20 px-4">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-center glitch-text retro-title">
          ABOUT ME
        </h1>

        {/* Who Am I Section */}
        <section className="mb-20 relative">
          <div className="relative bg-[var(--retro-bg)] p-6 sm:p-8 brutalism-box">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
            <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 opacity-10">
              {Array.from({ length: 64 }).map((_, i) => (
                <div key={i} className="border border-[var(--retro-gray)]/10"></div>
              ))}
            </div>
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 glitch-text retro-title">WHO AM I?</h2>
              <p className="text-[var(--retro-gray)] mb-4">
                I'm a passionate software engineer with a keen eye for design and a love for creating elegant solutions to complex problems. With a background in computer science and years of experience in web development, I specialize in building responsive, user-friendly applications that make a difference.
              </p>
              <p className="text-[var(--retro-gray)]">
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge through technical writing and mentoring.
              </p>
            </div>
          </div>
        </section>

        {/* My Journey Section */}
        <section className="mb-20 relative">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center glitch-text retro-title">MY JOURNEY</h2>
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-[var(--accent)]"></div>
            <div className="space-y-8 pl-6">
              {[
                { year: '2018', title: 'Started Learning Programming', description: 'Began my journey into the world of coding with HTML, CSS, and JavaScript.' },
                { year: '2020', title: 'First Professional Role', description: 'Joined a startup as a junior developer, working on full-stack web applications.' },
                { year: '2022', title: 'Specialized in Frontend', description: 'Focused on mastering React, TypeScript, and modern frontend technologies.' },
                { year: '2023', title: 'Freelance Developer', description: 'Started taking on freelance projects to expand my portfolio and skills.' },
                { year: '2024', title: 'Current Focus', description: 'Exploring AI integration in web applications and building more complex systems.' }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="relative pl-6"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="absolute left-0 top-2 w-4 h-4 rounded-full bg-[var(--accent)] transform -translate-x-1/2"></div>
                  <div className="bg-[var(--retro-bg)] p-4 brutalism-box hover:translate-x-2 transition-transform">
                    <div className="text-sm text-[var(--accent)] font-bold">{item.year}</div>
                    <h3 className="text-xl font-bold retro-text">{item.title}</h3>
                    <p className="text-[var(--retro-gray)]">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Philosophy Section */}
        <section className="mb-20 relative">
          <div className="relative bg-[var(--retro-bg)] p-6 sm:p-8 brutalism-box">
            <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5"></div>
            <div className="relative z-10">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4 glitch-text retro-title">PHILOSOPHY</h2>
              <p className="text-[var(--retro-gray)] mb-4">
                I believe in writing clean, maintainable code that not only solves problems but also provides a delightful experience for users. My approach combines technical expertise with creative problem-solving to build solutions that are both functional and beautiful.
              </p>
              <p className="text-[var(--retro-gray)]">
                I'm constantly learning and adapting to new technologies and methodologies, as I believe that growth is essential in the ever-evolving field of software development.
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="relative">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center glitch-text retro-title">SKILLS</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {[
              'JavaScript', 'TypeScript', 'React', 'Next.js', 
              'Node.js', 'Python', 'SQL', 'Git',
              'UI/UX Design', 'Responsive Design', 'API Development', 'Testing'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                className="p-4 bg-[var(--retro-bg)] border-4 border-[var(--foreground)] text-center hover:border-[var(--accent)] transition-all duration-300 transform hover:scale-105 relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <h3 className="text-base sm:text-lg font-bold relative z-10 retro-text">{skill}</h3>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[var(--accent)] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Photography Link */}
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-[var(--retro-gray)] mb-4">
            Besides coding, I'm also passionate about photography. Check out my photography portfolio!
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link 
              href="/photography" 
              className="inline-block px-6 py-3 bg-[var(--accent)] text-[var(--foreground)] font-bold brutalism-button"
            >
              VIEW PHOTOGRAPHY
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
} 