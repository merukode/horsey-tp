'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Blog() {
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
            BLOG
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-16 sm:mb-24 text-left glitch-text retro-title relative">
            <span className="absolute -top-6 left-0 text-sm font-mono text-[var(--accent)]">[THOUGHTS]</span>
            BLOG POSTS
            <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[var(--accent)]"></div>
          </h2>

          {/* Categories */}
          <div className="mb-12 flex flex-wrap gap-4">
            {['ALL', 'TECH', 'DESIGN', 'PHOTOGRAPHY', 'TUTORIALS'].map((category) => (
              <button
                key={category}
                className="px-4 py-2 font-mono text-xs border-2 border-[var(--foreground)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                {category}
              </button>
            ))}
          </div>

          {/* Featured Post */}
          <div className="relative mb-12">
            <motion.div
              className="group relative bg-[var(--background)] border-2 border-[var(--foreground)]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative p-8 sm:p-12">
                <div className="font-mono text-xs text-[var(--accent)] mb-4">FEATURED_POST</div>
                <h3 className="text-3xl sm:text-4xl font-bold tracking-tighter mb-4">
                  THE FUTURE OF WEB DEVELOPMENT: AI AND AUTOMATION
                </h3>
                <p className="text-sm text-[var(--retro-gray)] font-mono leading-relaxed mb-6 max-w-2xl">
                  EXPLORING THE INTERSECTION OF ARTIFICIAL INTELLIGENCE AND WEB DEVELOPMENT, AND HOW IT&apos;S RESHAPING THE INDUSTRY.
                </p>
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[var(--retro-gray)]">2024-03-15</span>
                  <span className="text-[var(--accent)]">READ_TIME: 8 MIN</span>
                </div>

                {/* Brutalist accent */}
                <div className="absolute top-0 left-0 w-2 h-2 bg-[var(--accent)]"></div>
                <div className="absolute bottom-0 right-0 w-2 h-2 bg-[var(--accent)]"></div>
              </div>
            </motion.div>
          </div>

          {/* Blog Posts Grid */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--foreground)]">
            {[
              {
                title: 'BUILDING SCALABLE REACT APPLICATIONS',
                category: 'TECH',
                date: '2024-03-10',
                readTime: '5 MIN',
                excerpt: 'BEST PRACTICES FOR BUILDING LARGE-SCALE REACT APPLICATIONS WITH PERFORMANCE IN MIND.'
              },
              {
                title: 'THE ART OF MINIMALIST DESIGN',
                category: 'DESIGN',
                date: '2024-03-05',
                readTime: '4 MIN',
                excerpt: 'EXPLORING THE PRINCIPLES OF MINIMALISM IN MODERN WEB DESIGN.'
              },
              {
                title: 'MASTERING STREET PHOTOGRAPHY',
                category: 'PHOTOGRAPHY',
                date: '2024-02-28',
                readTime: '6 MIN',
                excerpt: 'TIPS AND TECHNIQUES FOR CAPTURING COMPELLING STREET PHOTOGRAPHS.'
              },
              {
                title: 'TYPESCRIPT BEST PRACTICES',
                category: 'TUTORIALS',
                date: '2024-02-20',
                readTime: '7 MIN',
                excerpt: 'A COMPREHENSIVE GUIDE TO WRITING BETTER TYPESCRIPT CODE.'
              },
              {
                title: 'THE RISE OF JAMSTACK',
                category: 'TECH',
                date: '2024-02-15',
                readTime: '5 MIN',
                excerpt: 'WHY JAMSTACK IS BECOMING THE GO-TO ARCHITECTURE FOR MODERN WEBSITES.'
              },
              {
                title: 'COLOR THEORY IN WEB DESIGN',
                category: 'DESIGN',
                date: '2024-02-10',
                readTime: '4 MIN',
                excerpt: 'UNDERSTANDING AND APPLYING COLOR THEORY IN DIGITAL INTERFACES.'
              }
            ].map((post, index) => (
              <motion.div
                key={post.title}
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

                  {/* Post info */}
                  <div className="flex flex-col space-y-4">
                    <div className="font-mono text-xs text-[var(--accent)]">{post.category}</div>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tighter">
                      {post.title}
                    </h3>
                    <p className="text-sm text-[var(--retro-gray)] font-mono leading-relaxed">
                      {post.excerpt}
                    </p>
                  </div>

                  {/* Post metadata */}
                  <div className="mt-6 flex justify-between items-center font-mono text-xs text-[var(--retro-gray)]">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
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
            <div>TOTAL_POSTS: 07</div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[var(--accent)]"></div>
              <div>STATUS: LATEST</div>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="mt-20 relative bg-[var(--background)] border-2 border-[var(--foreground)] p-8">
            <div className="font-mono text-xs text-[var(--accent)] mb-4">[SUBSCRIBE]</div>
            <h3 className="text-xl font-bold mb-4">GET UPDATES</h3>
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="YOUR@EMAIL.COM"
                className="flex-1 bg-transparent border-2 border-[var(--foreground)] p-2 font-mono text-sm focus:border-[var(--accent)] outline-none"
              />
              <button className="px-6 py-2 bg-[var(--accent)] font-mono text-sm hover:bg-[var(--foreground)] transition-colors">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
} 