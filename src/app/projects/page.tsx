export default function Projects() {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution built with Next.js and Node.js",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/project1.jpg",
      year: "2023"
    },
    {
      title: "AI Chat Application",
      description: "Real-time chat application with AI-powered responses",
      tech: ["Python", "TensorFlow", "WebSocket", "React"],
      image: "/project2.jpg",
      year: "2022"
    },
    {
      title: "Portfolio Website",
      description: "Personal portfolio website with brutalism design",
      tech: ["Next.js", "TailwindCSS", "TypeScript"],
      image: "/project3.jpg",
      year: "2024"
    },
    {
      title: "Task Management System",
      description: "Enterprise task management system with real-time updates",
      tech: ["Vue.js", "Firebase", "Vuex"],
      image: "/project4.jpg",
      year: "2021"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-12 glitch-text retro-title">PROJECTS</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-[var(--retro-dark)] overflow-hidden brutalism-box"
            >
              <div className="absolute top-0 right-0 p-2 bg-[var(--background)]/80 text-xs font-mono">
                {project.year}
              </div>
              <div className="relative z-10 p-8">
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-2xl font-bold glitch-text retro-title">{project.title}</h2>
                  <div className="w-12 h-12 rounded-full bg-[var(--accent)] flex items-center justify-center group-hover:bg-[var(--retro-highlight)] transition-colors">
                    <span className="text-xl">→</span>
                  </div>
                </div>
                <p className="text-[var(--retro-light)] mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-[var(--background)] text-[var(--foreground)] text-sm border-2 border-[var(--foreground)] hover:border-[var(--retro-highlight)] transition-colors retro-text"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="absolute bottom-0 left-0 w-full h-1 bg-[var(--retro-highlight)] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block p-8 brutalism-box">
            <h2 className="text-2xl font-bold mb-4 glitch-text retro-title">MORE PROJECTS</h2>
            <p className="text-[var(--retro-light)] mb-6">
              Check out my GitHub for more projects and contributions
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 brutalism-button"
            >
              VISIT GITHUB
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 