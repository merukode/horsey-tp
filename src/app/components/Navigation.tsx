'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Photography', path: '/photography' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.05,
        staggerDirection: 1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-[var(--retro-bg)]/90 backdrop-blur-sm z-50 border-b-4 border-[var(--foreground)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/" className="text-[var(--foreground)] font-mono text-xl tracking-wider hover:text-[var(--accent)] transition-colors retro-text">
              &lt;DEV/&gt;
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={item.path}
                    className={`px-3 py-2 text-sm font-medium transition-all duration-200 retro-text
                      ${pathname === item.path
                        ? 'bg-[var(--accent)] text-[var(--foreground)] scale-110 brutalism-box'
                        : 'text-[var(--retro-gray)] hover:text-[var(--accent)] hover:scale-105'
                      }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-6 h-0.5 bg-[var(--foreground)] mb-1.5"></div>
            <div className="w-6 h-0.5 bg-[var(--foreground)] mb-1.5"></div>
            <div className="w-6 h-0.5 bg-[var(--foreground)]"></div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="md:hidden bg-[var(--retro-bg)] border-b-4 border-[var(--foreground)]"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <motion.div
                  key={item.path}
                  variants={itemVariants}
                  whileHover={{ x: 10 }}
                >
                  <Link
                    href={item.path}
                    className={`block px-3 py-2 text-base font-medium transition-all duration-200 retro-text
                      ${pathname === item.path
                        ? 'bg-[var(--accent)] text-[var(--foreground)] brutalism-box'
                        : 'text-[var(--retro-gray)] hover:text-[var(--accent)]'
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 