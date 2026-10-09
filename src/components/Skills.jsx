import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Pause, Play, Sparkles, CheckCircle2 } from 'lucide-react';

const SkillLogos = {
  Python: () => (
    <svg className="w-6 h-6 shrink-0" viewBox="0 0 128 128">
      <path fill="#3776AB" d="M63.02 0c-32.32 0-30.43 14.02-30.43 14.02l.04 14.54h30.93v4.39H20.73S0 30.64 0 63.38c0 32.73 18.07 31.57 18.07 31.57h10.79v-15.2s-.58-18.07 17.78-18.07h30.43s16.91.29 16.91-16.33V14.02S96.86 0 63.02 0zm-16.6 9.68a6.11 6.11 0 1 1 0 12.22 6.11 6.11 0 0 1 0-12.22z"/>
      <path fill="#FFD43B" d="M64.98 128c32.32 0 30.43-14.02 30.43-14.02l-.04-14.54H64.44v-4.39h42.83s20.73 2.31 20.73-30.43c0-32.73-18.07-31.57-18.07-31.57H119.1v15.2s.58 18.07-17.78 18.07H70.89s-16.91-.29-16.91 16.33v31.33S51.14 128 64.98 128zm16.6-9.68a6.11 6.11 0 1 1 0-12.22 6.11 6.11 0 0 1 0 12.22z"/>
    </svg>
  ),
  CPP: () => (
    <svg className="w-6 h-6 shrink-0" viewBox="0 0 128 128">
      <path fill="#00599C" d="M117.5 38.5L64 7.6 10.5 38.5v61.8l53.5 30.9 53.5-30.9V38.5z"/>
      <path fill="#FFFFFF" d="M64 16.5l45.8 26.5v53L64 122.5 18.2 96v-53L64 16.5m0-8.9L8.8 39.6v58.8L64 129.4l55.2-31V39.6L64 7.6z"/>
      <path fill="#00599C" d="M49.6 77.2c-7.3 0-12.2-5.5-12.2-13.2s4.9-13.2 12.2-13.2c5.1 0 9.1 2.8 10.9 7.2h-6.7c-1-1.8-2.5-2.8-4.2-2.8-3.9 0-5.7 3.5-5.7 8.8s1.8 8.8 5.7 8.8c1.7 0 3.2-1 4.2-2.8h6.7c-1.8 4.4-5.8 7.2-10.9 7.2zm27-16.2h-4.2v-4.2h-4.2v4.2h-4.2v4.2h4.2v4.2h4.2v-4.2h4.2v-4.2z"/>
    </svg>
  ),
  C: () => (
    <svg className="w-6 h-6 shrink-0" viewBox="0 0 128 128">
      <path fill="#A8B9CC" d="M117.5 38.5L64 7.6 10.5 38.5v61.8l53.5 30.9 53.5-30.9V38.5z"/>
      <path fill="#283593" d="M64 16.5l45.8 26.5v53L64 122.5 18.2 96v-53L64 16.5m0-8.9L8.8 39.6v58.8L64 129.4l55.2-31V39.6L64 7.6z"/>
      <path fill="#FFFFFF" d="M64 47.8c-10 0-16.7 7.5-16.7 18s6.7 18 16.7 18c7 0 12.5-3.8 15-9.8h-9.2c-1.4 2.5-3.4 3.8-5.8 3.8-5.3 0-7.8-4.8-7.8-12s2.5-12 7.8-12c2.4 0 4.4 1.4 5.8 3.8h9.2c-2.5-6-8-9.8-15-9.8z"/>
    </svg>
  ),
  HTML5: () => (
    <svg className="w-6 h-6 shrink-0" viewBox="0 0 128 128">
      <path fill="#E44D26" d="M18.6 116.7L8.7 6h110.6l-9.9 110.7L64 128l-45.4-11.3z"/>
      <path fill="#F16529" d="M64 14.8v101.4l37.2-10.3 8.3-92.8H64z"/>
      <path fill="#EBEBEB" d="M64 53.7H47.1l-1.2-13.4H64V26.9H30.5l.4 4.5 3.1 35.7H64v-13.4zm0 33l-14.8-4-1-11.3H34.7l1.9 21.6L64 100.3V86.7z"/>
      <path fill="#FFFFFF" d="M64 53.7h16.9l-1.6 17.7-15.3 4.1v13.6l27.9-7.5 3.1-34.6.4-4.5H64v11.2zm0-26.8v13.4h31.2l1.2-13.4H64z"/>
    </svg>
  ),
  CSS3: () => (
    <svg className="w-6 h-6 shrink-0" viewBox="0 0 128 128">
      <path fill="#1572B6" d="M18.6 116.7L8.7 6h110.6l-9.9 110.7L64 128l-45.4-11.3z"/>
      <path fill="#33A9DC" d="M64 14.8v101.4l37.2-10.3 8.3-92.8H64z"/>
      <path fill="#EBEBEB" d="M64 53.6H47.1l-1.2-13.4H64V26.8H30.5l.4 4.5 3.1 35.7H64v-13.4zm0 33l-14.8-4-1-11.3H34.7l1.9 21.6L64 100.3V86.6z"/>
      <path fill="#FFFFFF" d="M64 53.6h32.1l1.2-13.4H64V26.8h46.2l-.4 4.5-3.1 35.7H64v-13.4zm0 33v13.7l27.9-7.5 1.9-21.6H80.5l-1 11.3-15.5 4.1z"/>
    </svg>
  ),
  MachineLearning: () => (
    <svg className="w-6 h-6 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/>
      <path d="M12 6v6l4 2"/>
      <circle cx="12" cy="12" r="3" fill="#8B5CF6" fillOpacity="0.4"/>
    </svg>
  ),
  Pandas: () => (
    <svg className="w-6 h-6 shrink-0" viewBox="0 0 128 128">
      <path fill="#150458" d="M21.3 16h16v96h-16V16zm34.7 0h21.3v96H56V16zm34.7 0H112v96H90.7V16z"/>
      <circle cx="29.3" cy="37.3" r="8" fill="#E11D48"/>
      <circle cx="66.7" cy="64" r="8" fill="#E11D48"/>
      <circle cx="101.3" cy="90.7" r="8" fill="#E11D48"/>
    </svg>
  ),
  NumPy: () => (
    <svg className="w-6 h-6 shrink-0" viewBox="0 0 128 128">
      <rect width="112" height="112" x="8" y="8" fill="none" stroke="#013243" strokeWidth="8" rx="12"/>
      <path stroke="#0284C7" strokeWidth="8" d="M8 64h112M64 8v112"/>
      <circle cx="36" cy="36" r="14" fill="#013243"/>
      <circle cx="92" cy="92" r="14" fill="#0284C7"/>
    </svg>
  ),
  ScikitLearn: () => (
    <svg className="w-6 h-6 shrink-0" viewBox="0 0 128 128">
      <circle cx="64" cy="64" r="52" fill="#F7931E" fillOpacity="0.2" stroke="#F7931E" strokeWidth="8"/>
      <path d="M40 64c12-16 36-16 48 0s-36 16-48 0z" stroke="#0284C7" strokeWidth="8" fill="none"/>
    </svg>
  ),
  Matplotlib: () => (
    <svg className="w-6 h-6 shrink-0" viewBox="0 0 128 128">
      <path stroke="#11557C" strokeWidth="10" strokeLinecap="round" d="M16 112h96M24 96l24-36 24 18 30-48 18 24" fill="none"/>
      <circle cx="48" cy="60" r="10" fill="#11557C"/>
      <circle cx="102" cy="30" r="10" fill="#11557C"/>
    </svg>
  )
};

const allSkills = [
  {
    name: 'Python',
    category: 'Languages',
    badge: 'Core AI',
    desc: 'AI & ML Scripting, Data Pipelines & Model Automation',
    color: '#3776AB',
    level: 'Advanced',
    Icon: SkillLogos.Python
  },
  {
    name: 'C++',
    category: 'Languages',
    badge: 'Systems',
    desc: 'OOPs, Data Structures & Algorithmic Problem Solving',
    color: '#00599C',
    level: 'Proficient',
    Icon: SkillLogos.CPP
  },
  {
    name: 'C Language',
    category: 'Languages',
    badge: 'Core',
    desc: 'Memory Architecture, Pointers & System Fundamentals',
    color: '#283593',
    level: 'Foundation',
    Icon: SkillLogos.C
  },
  {
    name: 'Machine Learning',
    category: 'AI & Data Science',
    badge: 'ML Engine',
    desc: 'Model Development, Supervised Learning & Training Pipelines',
    color: '#8B5CF6',
    level: 'Specialization',
    Icon: SkillLogos.MachineLearning
  },
  {
    name: 'Pandas',
    category: 'AI & Data Science',
    badge: 'Analytics',
    desc: 'Data Wrangling, Aggregation & Preprocessing Workflows',
    color: '#E11D48',
    level: 'Core Tool',
    Icon: SkillLogos.Pandas
  },
  {
    name: 'NumPy',
    category: 'AI & Data Science',
    badge: 'Computing',
    desc: 'Numerical Arrays, Linear Algebra & Fast Scientific Ops',
    color: '#0284C7',
    level: 'Core Tool',
    Icon: SkillLogos.NumPy
  },
  {
    name: 'Scikit-learn',
    category: 'AI & Data Science',
    badge: 'Predictive',
    desc: 'Classification, Regression & Model Evaluation Pipelines',
    color: '#F7931E',
    level: 'Production',
    Icon: SkillLogos.ScikitLearn
  },
  {
    name: 'Matplotlib',
    category: 'AI & Data Science',
    badge: 'Visuals',
    desc: 'Statistical Visualizations, Data Plots & Analytics Reports',
    color: '#11557C',
    level: 'Proficient',
    Icon: SkillLogos.Matplotlib
  },
  {
    name: 'HTML5',
    category: 'Web',
    badge: 'Markup',
    desc: 'Semantic Structure, Accessibility & Web Standards',
    color: '#E44D26',
    level: 'Foundation',
    Icon: SkillLogos.HTML5
  },
  {
    name: 'CSS3',
    category: 'Web',
    badge: 'Styling',
    desc: 'Responsive Layouts, Modern Flexbox & Animation Design',
    color: '#1572B6',
    level: 'Foundation',
    Icon: SkillLogos.CSS3
  }
];

// Duplicate items for seamless continuous marquee loop
const marqueeItems = [...allSkills, ...allSkills, ...allSkills];

const Skills = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const isMarqueePaused = isPaused || isHovered;

  return (
    <section id="skills" className="relative px-5 py-24 overflow-hidden scroll-mt-20">
      {/* Background ambience orbs */}
      <div className="absolute left-[-5%] top-20 h-72 w-72 rounded-full bg-cyan-500/8 blur-[90px] pointer-events-none" />
      <div className="absolute right-[-5%] bottom-20 h-80 w-80 rounded-full bg-purple-500/8 blur-[90px] pointer-events-none" />

      {/* Unified Section Header */}
      <div className="relative z-10 max-w-[1200px] mx-auto text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-3"
        >
          <span className="inline-flex items-center gap-2 font-mono text-cyan-400 text-[11px] uppercase tracking-[0.25em] font-bold px-4 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/10 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Tech Stack &amp; Tools
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.55 }}
          className="text-4xl sm:text-5xl font-extrabold mb-4 gradient-text-1 leading-tight tracking-tight"
        >
          Skills &amp; Technologies
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="opacity-75 max-w-[620px] mx-auto text-base leading-relaxed mb-6"
        >
          Core programming foundations, modern web markup, and complete data science &amp; machine learning pipelines.
        </motion.p>

        {/* Scroll status & control toolbar */}
        <div className="flex items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setIsPaused(!isPaused)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border transition-all duration-150 hover:scale-105 active:scale-95 shadow-sm cursor-pointer"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-primary)'
            }}
            title={isPaused ? 'Resume floating scroll' : 'Pause floating scroll'}
          >
            {isPaused ? (
              <>
                <Play size={13} className="text-emerald-400 fill-emerald-400" />
                <span>Resume Flow</span>
              </>
            ) : (
              <>
                <Pause size={13} className="text-cyan-400 fill-cyan-400" />
                <span>Pause Flow</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Single Line Floating Marquee Container — Identical to Certifications */}
      <div
        className="relative w-full overflow-hidden py-10 sm:py-14 select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        {/* Soft edge gradient fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-36 z-20 skill-fade-edge-left" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-36 z-20 skill-fade-edge-right" />

        {/* Single Row Floating Marquee Track with exact matching cert flow */}
        <div className={`skill-marquee-track ${isMarqueePaused ? 'is-paused' : ''}`}>
          {marqueeItems.map((skill, idx) => {
            const floatClass = idx % 3 === 0 ? 'cert-floating-1' : idx % 3 === 1 ? 'cert-floating-2' : 'cert-floating-3';

            return (
              <div
                key={`${skill.name}-${idx}`}
                className={`cert-card-wrapper px-3.5 shrink-0 ${floatClass}`}
                style={{ width: '350px' }}
              >
                <motion.div
                  whileHover={{ y: -6, scale: 1.025, boxShadow: `0 14px 34px ${skill.color}30` }}
                  transition={{ duration: 0.12, ease: 'easeOut' }}
                  className="cert-card h-full flex flex-col justify-between text-left group transition-all"
                  style={{ minHeight: '260px' }}
                >
                  <div>
                    {/* Header: Skill Pill, Badge, and Brand Icon Box */}
                    <div className="flex items-start justify-between gap-3 mb-3.5">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span
                          className="cert-pill"
                          style={{
                            color: skill.color,
                            borderColor: `${skill.color}40`,
                            backgroundColor: `${skill.color}15`
                          }}
                        >
                          {skill.category}
                        </span>
                        <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-cyan-500/15 text-cyan-400 border border-cyan-500/30">
                          {skill.badge}
                        </span>
                      </div>
                      <div className="w-10 h-10 rounded-2xl icon-box flex items-center justify-center shrink-0">
                        <skill.Icon />
                      </div>
                    </div>

                    {/* Skill Title and Level */}
                    <h3 className="text-base font-bold leading-snug group-hover:text-cyan-400 transition-colors line-clamp-2 min-h-[44px]">
                      {skill.name}
                    </h3>
                    <p className="text-xs opacity-75 mt-1 font-medium leading-relaxed">{skill.desc}</p>
                  </div>

                  {/* Card Footer: Metadata and Status Indicator (Identical to Cert Card Footer) */}
                  <div className="mt-5 pt-3.5 border-t border-white/5 space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] font-mono opacity-70">
                      <span>Proficiency</span>
                      <span className="truncate max-w-[140px] text-right font-semibold" style={{ color: skill.color }}>
                        {skill.level}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-semibold pt-1">
                      <span className="text-cyan-400 group-hover:underline flex items-center gap-1.5">
                        <CheckCircle2 size={13} className="text-cyan-400" />
                        Production Verified
                      </span>
                      <Sparkles size={13} className="text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
