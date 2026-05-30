import React from 'react';
import { ExternalLink } from 'lucide-react';

const GithubIcon = ({ size = 16, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
  </svg>
);

const Projects = () => {
  const list = [
    {
      title: 'Netflix Data Visualization Assessment',
      category: 'Data Visualization',
      date: 'June 2026',
      description: 'Completed a Netflix dataset visualization assessment showcasing trends, user engagement patterns, and content analytics using Python-based visualization tools.',
      tags: ['Python', 'Matplotlib', 'Pandas', 'Data Visualization', 'Netflix Dataset'],
      repo: 'https://github.com/Tanujwar17'
    },
    {
      title: 'KrishiCart',
      category: 'AI & Fullstack',
      date: 'May 2026',
      description: 'An advanced AI-powered agricultural marketplace designed to optimize smart farming protocols and connect local farmers directly to high-margin buyer hubs. Facilitated with predictions and search indexes to maximize trade profits.',
      tags: ['React', 'Vite', 'Tailwind CSS', 'Node.js', 'Express.js', 'MongoDB', 'TensorFlow', 'Scikit-learn'],
      repo: 'https://github.com/Tanujwar17/Krishi-Cart'
    },
    {
      title: 'Aura Beats',
      category: 'Music Mood Recommendation',
      date: 'May 2026',
      description: 'A premium mood-based Indian music streaming and recommendation platform featuring a Spotify-inspired sleek aesthetic. Integrates real-time audio playback controls, mood filtering logic, and custom neural recommendation rules to match soundtracks with user emotions.',
      tags: ['React', 'Vite', 'Audio API', 'AI Mood Engine', 'Tailwind CSS', 'Vanilla CSS'],
      repo: 'https://github.com/Tanujwar17'
    },
    {
      title: 'FairRide',
      category: 'Fullstack Web & Algorithms',
      date: 'April 2026',
      description: 'A decentralized, fair ride-sharing booking platform designed to enforce transparency in transit taxi fares. Implements dynamic geospatial driver-rider pairing, real-time coordinate matching, and automated surge-preventive pricing models.',
      tags: ['React', 'Vite', 'Node.js', 'Express.js', 'MongoDB', 'Geospatial Grid', 'Algorithms'],
      repo: 'https://github.com/Tanujwar17'
    },
    {
      title: 'Lost and Found',
      category: 'Web Development',
      date: 'January 2026',
      description: 'A web application built to help campus or local community members quickly report lost objects or catalog found elements with search logic. Styled with modern user experience constraints and responsive screens.',
      tags: ['HTML5', 'CSS3', 'Python Scripting', 'Responsive Design'],
      repo: 'https://github.com/Tanujwar17'
    }
  ];

  return (
    <section id="projects" className="reveal active px-5 py-24 max-w-[1200px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4">
        <div>
          <span className="font-mono text-cyan text-sm uppercase tracking-wider block mb-2.5">
            Source Repositories
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Featured Projects
          </h2>
        </div>
        <div className="font-mono text-xs sm:text-sm text-text-muted select-none">
          Click links to inspect elements
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {list.map((proj, idx) => (
          <div 
            key={idx} 
            className="glass-card p-8 flex flex-col h-full overflow-hidden relative group before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-cyan before:to-purple before:scale-x-0 before:origin-left hover:before:scale-x-100 before:transition-transform before:duration-300"
          >
            {/* Meta details */}
            <div className="flex justify-between items-center font-mono text-xs text-cyan mb-4">
              <span>{proj.category}</span>
              <span className="text-text-muted">{proj.date}</span>
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan group-hover:shadow-[0_0_10px_rgba(0,242,254,0.15)] transition-all duration-300">
              {proj.title}
            </h3>

            {/* Description */}
            <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
              {proj.description}
            </p>

            {/* Tech Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              {proj.tags.map((tag, tIdx) => (
                <span 
                  key={tIdx} 
                  className="font-mono text-[10px] px-2.5 py-1 rounded bg-white/3 border border-white/5 text-text-secondary"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Action Links */}
            <div className="flex gap-5 mt-auto pt-4 border-t border-white/5">
              <a 
                href={proj.repo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-semibold text-text-primary hover:text-cyan transition-colors flex items-center gap-1.5"
              >
                <GithubIcon size={16} /> Repository
              </a>
              <a 
                href={proj.repo} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-semibold text-text-primary hover:text-cyan transition-colors flex items-center gap-1.5"
              >
                <ExternalLink size={16} /> Live Demo
              </a>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
