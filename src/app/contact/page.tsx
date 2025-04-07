'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-12 glitch-text retro-title">CONTACT</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative">
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-5">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="border border-[var(--retro-light)]/10"></div>
              ))}
            </div>
            <div className="relative z-10 p-8 brutalism-box">
              <h2 className="text-2xl font-bold mb-6 glitch-text retro-title">GET IN TOUCH</h2>
              <p className="text-[var(--retro-light)] mb-8">
                Have a project in mind? Want to collaborate? Feel free to reach out!
              </p>
              
              <div className="space-y-6">
                <div className="group">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--retro-highlight)] transition-colors retro-text">Email</h3>
                  <p className="text-[var(--retro-light)] group-hover:text-[var(--foreground)] transition-colors">contact@example.com</p>
                </div>
                <div className="group">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--retro-highlight)] transition-colors retro-text">Location</h3>
                  <p className="text-[var(--retro-light)] group-hover:text-[var(--foreground)] transition-colors">San Francisco, CA</p>
                </div>
                <div className="group">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--retro-highlight)] transition-colors retro-text">Social</h3>
                  <div className="flex gap-4">
                    <a href="#" className="text-[var(--retro-light)] hover:text-[var(--retro-highlight)] transition-colors retro-text">GitHub</a>
                    <a href="#" className="text-[var(--retro-light)] hover:text-[var(--retro-highlight)] transition-colors retro-text">LinkedIn</a>
                    <a href="#" className="text-[var(--retro-light)] hover:text-[var(--retro-highlight)] transition-colors retro-text">Twitter</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-5">
              {Array.from({ length: 36 }).map((_, i) => (
                <div key={i} className="border border-[var(--retro-light)]/10"></div>
              ))}
            </div>
            <div className="relative z-10 p-8 brutalism-box">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="group">
                  <label htmlFor="name" className="block text-sm font-medium mb-2 group-hover:text-[var(--retro-highlight)] transition-colors retro-text">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[var(--background)] border-2 border-[var(--foreground)] px-4 py-2 focus:border-[var(--retro-highlight)] focus:outline-none transition-colors"
                    required
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium mb-2 group-hover:text-[var(--retro-highlight)] transition-colors retro-text">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[var(--background)] border-2 border-[var(--foreground)] px-4 py-2 focus:border-[var(--retro-highlight)] focus:outline-none transition-colors"
                    required
                  />
                </div>
                
                <div className="group">
                  <label htmlFor="message" className="block text-sm font-medium mb-2 group-hover:text-[var(--retro-highlight)] transition-colors retro-text">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-[var(--background)] border-2 border-[var(--foreground)] px-4 py-2 focus:border-[var(--retro-highlight)] focus:outline-none transition-colors"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full brutalism-button"
                >
                  <span className="relative z-10">SEND MESSAGE</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 