import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sprout, Music, BarChart3, CheckCircle2 } from 'lucide-react';

const GithubIcon = ({ size = 16, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
  </svg>
);

const Projects = () => {
  const list = [
    {
      title: 'KrishiCart – AI Agriculture Marketplace',
      category: 'AI & Fullstack Development',
      date: 'May 2026',
      color: '#10B981',
      icon: <Sprout className="text-emerald-600 dark:text-emerald-400" size={24} />,
      highlights: [
        'Direct farmer-to-buyer marketplace connection',
        'Node.js, Express, MongoDB, JWT & Firebase auth backend',
        'Machine learning price & crop recommendations (Python, TensorFlow, Scikit-learn)'
      ],
      description: 'Built an AI-driven agriculture marketplace for farmers and buyers. Developed secure APIs, auth flows, and integrated ML decision support for crop pricing and recommendations.',
      tags: ['React', 'Vite', 'Tailwind', 'Node.js', 'Express', 'MongoDB', 'JWT', 'Firebase', 'Python', 'TensorFlow', 'Scikit-learn', 'Pandas'],
      repo: 'https://github.com/TanujWarwade/Krishi-Cart',
      demo: 'https://github.com/TanujWarwade/Krishi-Cart'
    },
    {
      title: 'Music Mood Recommendation System',
      category: 'AI & Machine Learning',
      date: 'April 2026',
      color: '#8B5CF6',
      icon: <Music className="text-purple-600 dark:text-purple-400" size={24} />,
      highlights: [
        'Personalized mood-based song classification',
        'Data preprocessing with Pandas & NumPy',
        'Content and collaborative recommendation algorithms'
      ],
      description: 'Developed a mood-based music recommendation system using Python for personalized song suggestions based on audio features and user preference signals.',
      tags: ['Python', 'Machine Learning', 'Pandas', 'NumPy', 'Scikit-learn'],
      repo: 'https://github.com/TanujWarwade/Music-Mood-Recommendation'
    },
    {
      title: 'Netflix Data Analysis & Insights',
      category: 'Data Science & Analytics',
      date: 'Hands-on Practice',
      color: '#3B82F6',
      icon: <BarChart3 className="text-indigo-600 dark:text-indigo-400" size={24} />,
      highlights: [
        'Exploratory data analysis on Netflix dataset',
        'Visual trend and category distribution plotting',
        'Data cleaning, filtering and feature engineering'
      ],
      description: 'Analyzed a global Netflix content dataset to uncover trends, content distribution by country, and genre insights using Python.',
      tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Data Analytics', 'EDA'],
      repo: 'https://github.com/TanujWarwade/Netflix-Data-Visualization'
    }
  ];

  return (
    <section id="projects" className="relative px-5 py-20 overflow-hidden">
      <div className="absolute left-0 top-12 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-10 h-44 w-44 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10 max-w-[1200px] mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-indigo-500 text-xs uppercase tracking-wider block font-semibold mb-2"
        >
          Source Repositories
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-extrabold mb-4 gradient-text-1"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="opacity-80 max-w-[640px] mx-auto mb-14 text-base leading-relaxed"
        >
          A showcase of my major AI and full-stack projects, data analytics work, and machine learning implementations.
        </motion.p>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto grid gap-8 lg:grid-cols-2 text-left">
        {list.map((proj, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{ y: -6, scale: 1.02 }}
            className={`panel-soft p-8 flex flex-col justify-between h-full group ${idx === 0 ? 'lg:col-span-2' : ''}`}
          >
            <div>
              <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b" style={{ borderColor: 'var(--border-color)' }}>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-2xl icon-box flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    {proj.icon}
                  </div>
                  <div>
                    <span className="text-xs font-mono font-bold uppercase tracking-wider block" style={{ color: proj.color }}>
                      {proj.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold group-hover:text-indigo-500 transition-colors">
                      {proj.title}
                    </h3>
                  </div>
                </div>
                <span className="font-mono text-xs font-semibold opacity-60">{proj.date}</span>
              </div>

              <p className="opacity-80 text-sm leading-relaxed mb-6">{proj.description}</p>

              <div className="space-y-3 mb-6">
                {proj.highlights.map((hl, hIdx) => (
                  <div key={hIdx} className="flex items-start gap-2 text-sm font-medium opacity-85">
                    <CheckCircle2 size={16} className="mt-1 shrink-0" style={{ color: proj.color }} />
                    <span>{hl}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {proj.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[11px] rounded-full border px-3 py-1 opacity-80"
                    style={{ borderColor: 'var(--border-color)' }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 pt-4 border-t sm:flex-row sm:items-center sm:justify-between" style={{ borderColor: 'var(--border-color)' }}>
              <motion.a
                whileHover={{ scale: 1.03 }}
                href={proj.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-4 py-2 text-sm font-semibold text-indigo-500 transition-colors duration-200"
              >
                <GithubIcon size={16} /> Repository
              </motion.a>
              {proj.demo && (
                <motion.a
                  whileHover={{ scale: 1.03 }}
                  href={proj.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-indigo-500/10 px-4 py-2 text-sm font-semibold text-slate-900 transition-colors duration-200 hover:bg-indigo-500/10"
                >
                  <ExternalLink size={16} /> Live Demo
                </motion.a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
