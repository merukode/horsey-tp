'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Contact() {
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
            HELLO
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold mb-16 sm:mb-24 text-left glitch-text retro-title relative">
            <span className="absolute -top-6 left-0 text-sm font-mono text-[var(--accent)]">[CONTACT]</span>
            GET IN TOUCH
            <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[var(--accent)]"></div>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[var(--foreground)]">
            {/* Contact Form */}
            <motion.div
              className="relative bg-[var(--background)] p-8 sm:p-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="font-mono text-xs text-[var(--accent)] mb-8">MESSAGE_FORM</div>
              
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="block font-mono text-xs">NAME</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-2 border-[var(--foreground)] p-3 font-mono text-sm focus:border-[var(--accent)] outline-none"
                    placeholder="JOHN DOE"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block font-mono text-xs">EMAIL</label>
                  <input
                    type="email"
                    className="w-full bg-transparent border-2 border-[var(--foreground)] p-3 font-mono text-sm focus:border-[var(--accent)] outline-none"
                    placeholder="YOUR@EMAIL.COM"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block font-mono text-xs">SUBJECT</label>
                  <input
                    type="text"
                    className="w-full bg-transparent border-2 border-[var(--foreground)] p-3 font-mono text-sm focus:border-[var(--accent)] outline-none"
                    placeholder="PROJECT INQUIRY"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block font-mono text-xs">MESSAGE</label>
                  <textarea
                    className="w-full bg-transparent border-2 border-[var(--foreground)] p-3 font-mono text-sm focus:border-[var(--accent)] outline-none min-h-[150px]"
                    placeholder="YOUR MESSAGE HERE..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[var(--accent)] py-4 font-mono text-sm hover:bg-[var(--foreground)] transition-colors"
                >
                  SEND_MESSAGE
                </button>
              </form>

              {/* Brutalist accent */}
              <div className="absolute top-0 left-0 w-2 h-2 bg-[var(--accent)]"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-[var(--accent)]"></div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="relative bg-[var(--background)] p-8 sm:p-12"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <div className="font-mono text-xs text-[var(--accent)] mb-8">CONTACT_INFO</div>

              <div className="space-y-8">
                {/* Location */}
                <div>
                  <h3 className="font-mono text-xs mb-2">LOCATION</h3>
                  <p className="font-mono text-sm text-[var(--retro-gray)]">
                    JAKARTA, ID<br />
                    GMT+7
                  </p>
                </div>

                {/* Email */}
                <div>
                  <h3 className="font-mono text-xs mb-2">EMAIL</h3>
                  <a href="mailto:hello@example.com" className="font-mono text-sm text-[var(--retro-gray)] hover:text-[var(--accent)] transition-colors">
                    HELLO@EXAMPLE.COM
                  </a>
                </div>

                {/* Social Links */}
                <div>
                  <h3 className="font-mono text-xs mb-4">SOCIAL</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { name: 'GITHUB', url: 'https://github.com' },
                      { name: 'TWITTER', url: 'https://twitter.com' },
                      { name: 'LINKEDIN', url: 'https://linkedin.com' },
                      { name: 'INSTAGRAM', url: 'https://instagram.com' }
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-sm text-[var(--retro-gray)] hover:text-[var(--accent)] transition-colors"
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                </div>

                {/* Availability Status */}
                <div className="pt-8 mt-8 border-t-2 border-[var(--foreground)]/20">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500"></div>
                    <span className="font-mono text-sm">AVAILABLE FOR FREELANCE</span>
                  </div>
                </div>
              </div>

              {/* Brutalist accent */}
              <div className="absolute top-0 left-0 w-2 h-2 bg-[var(--accent)]"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 bg-[var(--accent)]"></div>
            </motion.div>
          </div>

          {/* Brutalist footer */}
          <div className="mt-8 flex items-center justify-between text-xs font-mono text-[var(--retro-gray)]">
            <div>RESPONSE_TIME: 24-48 HRS</div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-[var(--accent)]"></div>
              <div>STATUS: ACCEPTING_INQUIRIES</div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
} 