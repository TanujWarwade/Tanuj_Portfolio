import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, CheckCircle2, Music2, CloudRain, Car, ShoppingCart, ListMusic, ArrowUpRight } from 'lucide-react';

const GithubIcon = ({ size = 16, className = '', ...props }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Projects = () => {
  const [hovered, setHovered] = useState(null);

  const list = [
    {
      title: 'MoodBeats',
      category: 'AI & Machine Learning',
      date: '2026',
      color: '#8B5CF6',
      gradientFrom: '#8B5CF6',
      gradientTo: '#ec4899',
      icon: Music2,
      highlights: [
        'Mood-based music recommendation using ML models',
        'Audio feature extraction & classification pipeline',
        'Personalized song suggestions based on emotional state'
      ],
      description: 'An AI-powered music recommendation system that analyzes mood and emotional signals to suggest the perfect songs using intelligent audio-feature-based filtering.',
      tags: ['Python', 'Machine Learning', 'Pandas', 'NumPy', 'Scikit-learn'],
      repo: 'https://github.com/TanujWarwade/MoodBeats',
      demo: 'https://moodbeats-tnj.vercel.app/',
      featured: true
    },
    {
      title: 'Monsoon Prediction System',
      category: 'AI & Data Science',
      date: 'Sep 2026',
      color: '#06b6d4',
      gradientFrom: '#06b6d4',
      gradientTo: '#3B82F6',
      icon: CloudRain,
      highlights: [
        'ML-based rainfall & monsoon onset forecasting',
        'Historical meteorological data preprocessing',
        'TypeScript + Python full-stack prediction pipeline'
      ],
      description: 'A Smart India Hackathon project that predicts monsoon patterns using historical weather data and ML to aid agricultural and disaster management planning.',
      tags: ['TypeScript', 'Python', 'Machine Learning', 'Pandas', 'Scikit-learn'],
      repo: 'https://github.com/TanujWarwade/Monsoon-Prediction-System'
    },
    {
      title: 'FairRide',
      category: 'Web Development',
      date: '2026',
      color: '#f97316',
      gradientFrom: '#f97316',
      gradientTo: '#ef4444',
      icon: Car,
      highlights: [
        'Transparent & fair cab fare estimation system',
        'Route-based dynamic pricing logic',
        'Clean UI for real-time ride fare breakdown'
      ],
      description: 'A transparent cab fare estimation platform that computes route-based pricing without hidden charges, bridging trust between riders and drivers.',
      tags: ['JavaScript', 'HTML5', 'CSS3', 'Node.js', 'Express', 'Maps API'],
      repo: 'https://github.com/TanujWarwade/FairRide'
    },
    {
      title: 'Krishi-Cart',
      category: 'AI & Full-Stack',
      date: 'Apr 2026',
      color: '#10B981',
      gradientFrom: '#10B981',
      gradientTo: '#06b6d4',
      icon: ShoppingCart,
      highlights: [
        'Direct farmer-to-buyer agriculture marketplace',
        'JavaScript backend with MongoDB data layer',
        'ML-powered crop price & recommendation engine'
      ],
      description: 'An AI-driven agriculture e-commerce platform connecting farmers directly to buyers with smart crop pricing recommendations and secure transaction flows.',
      tags: ['JavaScript', 'Node.js', 'MongoDB', 'Express', 'Python', 'Scikit-learn'],
      repo: 'https://github.com/TanujWarwade/Krishi-Cart'
    },
    {
      title: 'Cab Playlist',
      category: 'Web App',
      date: 'Oct 2026',
      color: '#ec4899',
      gradientFrom: '#ec4899',
      gradientTo: '#8B5CF6',
      icon: ListMusic,
      highlights: [
        'Curated music playlists for cab & travel vibes',
        'Dynamic playlist filtering by mood & genre',
        'Deployed live on Vercel with smooth UI/UX'
      ],
      description: 'A travel-companion web app that curates the perfect music playlist for cab rides with mood-based filtering and a sleek responsive interface.',
      tags: ['JavaScript', 'HTML5', 'CSS3', 'Vite'],
      repo: 'https://github.com/TanujWarwade/Cab-Playlist',
      demo: 'https://cab-playlist.vercel.app/'
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1, y: 0, scale: 1,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section id="projects" className="relative px-5 py-24 overflow-hidden scroll-mt-20">
      {/* Background ambience */}
      <div className="absolute left-[-5%] top-20 h-72 w-72 rounded-full bg-cyan-500/8 blur-[90px] pointer-events-none" />
      <div className="absolute right-[-5%] bottom-16 h-80 w-80 rounded-full bg-purple-500/8 blur-[90px] pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 max-w-[1200px] mx-auto text-center mb-12 sm:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-3"
        >
          <span className="inline-flex items-center gap-2 font-mono text-cyan-400 text-[11px] uppercase tracking-[0.25em] font-bold px-4 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/10 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Featured Repositories
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.55 }}
          className="text-4xl sm:text-5xl font-extrabold mb-5 gradient-text-1 leading-tight"
        >
          Featured Projects
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18, duration: 0.5 }}
          className="opacity-70 max-w-[560px] mx-auto text-base leading-relaxed"
        >
          From mood-based AI recommendations to smart agriculture & monsoon forecasting — real-world builds, real GitHub links.
        </motion.p>
      </div>

      {/* Projects Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.05 }}
        className="relative z-10 max-w-[1200px] mx-auto grid gap-6 lg:grid-cols-2"
      >
        {list.map((proj, idx) => {
          const Icon = proj.icon;
          const isHovered = hovered === idx;

          return (
            <motion.div
              key={idx}
              variants={cardVariants}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              className={`relative flex flex-col group overflow-hidden rounded-3xl border transition-all duration-150 ${proj.featured ? 'lg:col-span-2' : ''}`}
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: isHovered ? `${proj.color}50` : 'var(--border-color)',
                boxShadow: isHovered ? `0 20px 60px ${proj.color}18, 0 0 0 1px ${proj.color}20` : '0 4px 24px rgba(0,0,0,0.12)'
              }}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.12, ease: 'easeOut' }}
            >
              {/* Animated gradient top accent bar */}
              <motion.div
                className="absolute top-0 left-0 right-0 h-[2px] rounded-t-3xl"
                style={{
                  background: `linear-gradient(90deg, ${proj.gradientFrom}, ${proj.gradientTo})`
                }}
                initial={{ scaleX: 0, originX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + idx * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              />

              {/* Glow orb on hover */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-0 right-0 w-56 h-56 rounded-full pointer-events-none blur-[60px]"
                    style={{ backgroundColor: `${proj.color}18` }}
                  />
                )}
              </AnimatePresence>

              <div className={`relative z-10 p-7 sm:p-8 flex flex-col h-full ${proj.featured ? 'lg:flex-row lg:gap-10' : ''}`}>

                {/* Left column (featured layout) */}
                <div className={proj.featured ? 'lg:w-1/2' : ''}>
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="flex items-center gap-4">
                      {/* Icon box with gradient */}
                      <motion.div
                        className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 relative overflow-hidden"
                        style={{ background: `linear-gradient(135deg, ${proj.gradientFrom}22, ${proj.gradientTo}22)`, border: `1px solid ${proj.color}30` }}
                        whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                        transition={{ duration: 0.4 }}
                      >
                        <Icon size={26} style={{ color: proj.color }} />
                      </motion.div>
                      <div>
                        <span
                          className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] block mb-0.5"
                          style={{ color: proj.color }}
                        >
                          {proj.category}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-extrabold leading-tight" style={{ color: 'var(--text-primary)' }}>
                          {proj.title}
                        </h3>
                      </div>
                    </div>
                    <span className="font-mono text-[11px] font-semibold opacity-40 shrink-0 pt-1">{proj.date}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed opacity-75 mb-5">{proj.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2.5 mb-6">
                    {proj.highlights.map((hl, hIdx) => (
                      <motion.li
                        key={hIdx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + hIdx * 0.08, duration: 0.4 }}
                        className="flex items-start gap-2.5 text-sm font-medium"
                        style={{ color: 'var(--text-primary)', opacity: 0.85 }}
                      >
                        <CheckCircle2 size={15} className="mt-0.5 shrink-0" style={{ color: proj.color }} />
                        <span>{hl}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Right column (featured layout) or bottom section */}
                <div className={`flex flex-col justify-between ${proj.featured ? 'lg:w-1/2' : ''}`}>
                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tags.map((tag, tIdx) => (
                      <motion.span
                        key={tIdx}
                        initial={{ opacity: 0, scale: 0.85 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + tIdx * 0.05, duration: 0.35 }}
                        className="font-mono text-[11px] font-semibold rounded-full px-3 py-1 border transition-all duration-300"
                        style={{
                          borderColor: isHovered ? `${proj.color}40` : 'var(--border-color)',
                          backgroundColor: isHovered ? `${proj.color}10` : 'var(--bg-card)',
                          color: isHovered ? proj.color : 'var(--text-primary)',
                          opacity: isHovered ? 1 : 0.7
                        }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div
                    className="flex flex-wrap gap-3 pt-4 border-t"
                    style={{ borderColor: 'var(--border-color)' }}
                  >
                    <motion.a
                      whileHover={{ scale: 1.05, x: 2 }}
                      whileTap={{ scale: 0.97 }}
                      href={proj.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all duration-300"
                      style={{
                        background: `linear-gradient(135deg, ${proj.gradientFrom}20, ${proj.gradientTo}20)`,
                        color: proj.color,
                        border: `1px solid ${proj.color}35`
                      }}
                    >
                      <GithubIcon size={15} />
                      <span>View on GitHub</span>
                      <ArrowUpRight size={13} />
                    </motion.a>

                    {proj.demo && (
                      <motion.a
                        whileHover={{ scale: 1.05, x: 2 }}
                        whileTap={{ scale: 0.97 }}
                        href={proj.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all duration-200 shadow-sm"
                        style={{
                          background: `linear-gradient(135deg, ${proj.gradientFrom}, ${proj.gradientTo})`,
                          color: '#ffffff',
                          boxShadow: `0 4px 14px ${proj.color}40`
                        }}
                      >
                        <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                        <ArrowUpRight size={13} className="opacity-80" />
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Projects;
