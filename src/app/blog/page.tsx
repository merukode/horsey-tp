export default function Blog() {
  const posts = [
    {
      title: "The Future of Web Development",
      date: "March 15, 2024",
      excerpt: "Exploring the latest trends and technologies shaping the future of web development...",
      category: "Technology",
      readTime: "5 min read"
    },
    {
      title: "Building Scalable Applications",
      date: "March 10, 2024",
      excerpt: "Best practices and patterns for creating scalable web applications...",
      category: "Architecture",
      readTime: "8 min read"
    },
    {
      title: "The Art of Clean Code",
      date: "March 5, 2024",
      excerpt: "Principles and practices for writing maintainable and clean code...",
      category: "Programming",
      readTime: "6 min read"
    },
    {
      title: "Modern State Management",
      date: "February 28, 2024",
      excerpt: "Comparing different state management solutions in modern web applications...",
      category: "Frontend",
      readTime: "7 min read"
    }
  ];

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-12 glitch-text retro-title">BLOG</h1>
        
        <div className="space-y-12">
          {posts.map((post, index) => (
            <article
              key={index}
              className="relative group"
            >
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-6 opacity-5">
                {Array.from({ length: 36 }).map((_, i) => (
                  <div key={i} className="border border-[var(--retro-light)]/10"></div>
                ))}
              </div>
              <div className="relative z-10 brutalism-box p-8 hover:translate-x-2 transition-all duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-[var(--retro-light)] font-mono retro-text">{post.date}</span>
                  <span className="px-3 py-1 bg-[var(--background)] text-[var(--foreground)] text-sm border-2 border-[var(--foreground)] retro-text">
                    {post.category}
                  </span>
                  <span className="text-sm text-[var(--retro-light)] font-mono ml-auto retro-text">{post.readTime}</span>
                </div>
                <h2 className="text-2xl font-bold mb-4 glitch-text retro-title">{post.title}</h2>
                <p className="text-[var(--retro-light)] mb-6">{post.excerpt}</p>
                <a
                  href="#"
                  className="inline-block text-[var(--foreground)] hover:text-[var(--retro-highlight)] transition-colors group-hover:translate-x-2 transform retro-text"
                >
                  Read More →
                </a>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block p-8 brutalism-box">
            <h2 className="text-2xl font-bold mb-4 glitch-text retro-title">SUBSCRIBE</h2>
            <p className="text-[var(--retro-light)] mb-6">
              Get notified when I publish new articles
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 bg-[var(--background)] border-2 border-[var(--foreground)] focus:border-[var(--retro-highlight)] focus:outline-none transition-colors"
              />
              <button className="px-6 py-2 brutalism-button">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 