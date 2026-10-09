import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, GraduationCap, Award, MapPin, Sparkles, ExternalLink, CheckCircle2, ArrowUpRight } from 'lucide-react';

const Timeline = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const experience = {
    color: '#06b6d4',
    gradientFrom: '#06b6d4',
    gradientTo: '#3B82F6',
    date: 'Sep 2026',
    duration: '6-Week Internship',
    category: 'Industry Internship',
    title: 'Machine Learning & AI Intern',
    institution: 'Skill Nexis',
    location: 'Remote · Kolkata, West Bengal',
    certId: 'SNX-00516-26',
    certFile: 'skillnexis-ml-ai-internship.pdf',
    accreditation: 'AICTE & MSME Registered',
    bullets: [
      'Developed and evaluated predictive machine learning models using Python, Scikit-learn, and Pandas.',
      'Constructed data preprocessing, feature normalization, and dataset evaluation pipelines.',
      'Conducted model accuracy scoring and algorithm performance benchmarking under industry mentor guidance.'
    ],
    skills: ['Python', 'Machine Learning', 'Pandas', 'NumPy', 'Scikit-learn', 'Model Evaluation']
  };

  const education = [
    {
      id: 'edu-btech',
      color: '#8B5CF6',
      gradientFrom: '#8B5CF6',
      gradientTo: '#ec4899',
      icon: GraduationCap,
      category: 'Undergraduate Degree',
      date: '2024 - 2028',
      title: 'B.Tech in AI & Machine Learning',
      institution: 'Bansal Institute of Science & Technology, Bhopal',
      grade: 'CGPA: 6.7 (Till 3rd sem)',
      desc: 'Core coursework in Artificial Intelligence, Machine Learning algorithms, Data Structures in C++, OOPs, DBMS, and Operating Systems.',
      tags: ['AI & ML', 'C++ DSA', 'DBMS', 'OOP', 'Python']
    },
    {
      id: 'edu-12th',
      color: '#10B981',
      gradientFrom: '#10B981',
      gradientTo: '#06b6d4',
      icon: Award,
      category: 'Higher Secondary',
      date: '2023 - 2024',
      title: 'Higher Secondary School (Class XII)',
      institution: 'Govt. Excellence School, Pandhurna, MP',
      grade: 'Score: 68%',
      desc: 'NCERT curriculum with Physics, Chemistry, and Mathematics (PCM) specialization & foundational science.',
      tags: ['Physics', 'Chemistry', 'Mathematics', 'PCM']
    },
    {
      id: 'edu-10th',
      color: '#00f2fe',
      gradientFrom: '#00f2fe',
      gradientTo: '#3B82F6',
      icon: Award,
      category: 'High School',
      date: '2021 - 2022',
      title: 'High School Certificate (Class X)',
      institution: 'Govt. High School, Chichanda, MP',
      grade: 'Score: 73%',
      desc: 'NCERT general science, mathematics, and foundational computer fundamentals with distinction.',
      tags: ['General Science', 'Mathematics', 'Computer Basics']
    }
  ];

  const isExpHovered = hoveredCard === 'exp';

  return (
    <section id="timeline" className="relative px-5 py-24 overflow-hidden scroll-mt-20">
      {/* Background ambient orbs matching Projects */}
      <div className="absolute left-[-5%] top-20 h-72 w-72 rounded-full bg-cyan-500/8 blur-[90px] pointer-events-none" />
      <div className="absolute right-[-5%] bottom-16 h-80 w-80 rounded-full bg-purple-500/8 blur-[90px] pointer-events-none" />

      {/* Section Header matching Projects */}
      <div className="relative z-10 max-w-[1200px] mx-auto text-center mb-12 sm:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-3"
        >
          <span className="inline-flex items-center gap-2 font-mono text-cyan-400 text-[11px] uppercase tracking-[0.25em] font-bold px-4 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/10 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Career &amp; Academics
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.55 }}
          className="text-4xl sm:text-5xl font-extrabold mb-4 gradient-text-1 leading-tight tracking-tight"
        >
          Experience &amp; Education
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="opacity-75 max-w-[620px] mx-auto text-base leading-relaxed"
        >
          My professional industry internship experience and formal academic background in AI &amp; Machine Learning engineering.
        </motion.p>
      </div>

      {/* Grid Layout matching Projects.jsx exactly (4 Cards Total: 1 Featured Internship + 3 Education Cards) */}
      <div className="relative z-10 max-w-[1200px] mx-auto grid gap-6 lg:grid-cols-2 items-stretch">
        
        {/* CARD 1: Industry Work Experience (Featured Full or 1st Column) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => setHoveredCard('exp')}
          onMouseLeave={() => setHoveredCard(null)}
          whileHover={{ y: -5 }}
          className="relative flex flex-col justify-between group overflow-hidden rounded-3xl border transition-all duration-150 p-7 sm:p-8 h-full"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: isExpHovered ? `${experience.color}50` : 'var(--border-color)',
            boxShadow: isExpHovered
              ? `0 20px 60px ${experience.color}18, 0 0 0 1px ${experience.color}20`
              : '0 4px 24px rgba(0,0,0,0.12)'
          }}
        >
          {/* Animated gradient top accent bar */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[2.5px] rounded-t-3xl"
            style={{
              background: `linear-gradient(90deg, ${experience.gradientFrom}, ${experience.gradientTo})`
            }}
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Ambient glow orb on hover */}
          <AnimatePresence>
            {isExpHovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.15 }}
                className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none blur-[65px]"
                style={{ backgroundColor: `${experience.color}18` }}
              />
            )}
          </AnimatePresence>

          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              {/* Header: Icon, Category, Title, Date & Accreditation */}
              <div className="flex items-start justify-between gap-3 mb-5">
                <div className="flex items-start gap-4">
                  {/* Icon box with gradient & micro-rotation */}
                  <motion.div
                    className="w-13 h-13 p-3 rounded-2xl flex items-center justify-center shrink-0 relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${experience.gradientFrom}22, ${experience.gradientTo}22)`,
                      border: `1px solid ${experience.color}35`
                    }}
                    whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Briefcase size={24} style={{ color: experience.color }} />
                  </motion.div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span
                        className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] block"
                        style={{ color: experience.color }}
                      >
                        {experience.category}
                      </span>
                      <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                        {experience.accreditation}
                      </span>
                    </div>
                    <h4 className="text-xl sm:text-2xl font-extrabold leading-tight" style={{ color: 'var(--text-primary)' }}>
                      {experience.title}
                    </h4>
                    <div className="text-sm font-semibold opacity-80 flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-cyan-400 font-bold">{experience.institution}</span>
                      <span className="opacity-40">•</span>
                      <span className="text-xs flex items-center gap-1 opacity-75">
                        <MapPin size={12} /> {experience.location}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end shrink-0">
                  <span className="font-mono text-[11px] font-semibold opacity-50">{experience.date}</span>
                  <span className="font-mono text-[10px] font-semibold px-2 py-0.5 mt-1 rounded-full border border-cyan-500/25 bg-cyan-500/10 text-cyan-400">
                    {experience.duration}
                  </span>
                </div>
              </div>

              {/* Bullets / Highlights matching Projects */}
              <ul className="space-y-3 mb-6">
                {experience.bullets.map((b, bIdx) => (
                  <motion.li
                    key={bIdx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + bIdx * 0.08, duration: 0.4 }}
                    className="flex items-start gap-2.5 text-sm font-medium"
                    style={{ color: 'var(--text-primary)', opacity: 0.85 }}
                  >
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: experience.color }} />
                    <span className="leading-relaxed">{b}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Tech Pills matching Projects */}
              <div className="flex flex-wrap gap-2 mb-6">
                {experience.skills.map((tag, tIdx) => (
                  <motion.span
                    key={tIdx}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 + tIdx * 0.05, duration: 0.35 }}
                    className="font-mono text-[11px] font-semibold rounded-full px-3 py-1 border transition-all duration-300"
                    style={{
                      borderColor: isExpHovered ? `${experience.color}40` : 'var(--border-color)',
                      backgroundColor: isExpHovered ? `${experience.color}10` : 'var(--bg-card)',
                      color: isExpHovered ? experience.color : 'var(--text-primary)',
                      opacity: isExpHovered ? 1 : 0.75
                    }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Action Button styled identically to Projects Demo/GitHub buttons */}
            <div className="pt-4 border-t flex items-center justify-between gap-3" style={{ borderColor: 'var(--border-color)' }}>
              <a
                href={`/certificates/${experience.certFile}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-bold transition-all duration-150 hover:opacity-90 active:scale-95 shadow-sm group/btn"
                style={{
                  background: `linear-gradient(135deg, ${experience.gradientFrom}, ${experience.gradientTo})`,
                  color: '#ffffff'
                }}
              >
                <ExternalLink size={14} />
                <span>View Official Certificate</span>
                <ArrowUpRight size={13} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
              </a>

              <span className="font-mono text-[11px] opacity-50 hidden sm:inline-block">
                ID: {experience.certId}
              </span>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: 3 Education Cards stacked cleanly, filling vertical height identically */}
        <div className="flex flex-col gap-4.5 justify-between h-full">
          {education.map((item, idx) => {
            const ItemIcon = item.icon;
            const isEduHovered = hoveredCard === item.id;

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                onMouseEnter={() => setHoveredCard(item.id)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -4 }}
                className="relative flex flex-col justify-between group overflow-hidden rounded-3xl border transition-all duration-150 p-5 sm:p-6 flex-1"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: isEduHovered ? `${item.color}50` : 'var(--border-color)',
                  boxShadow: isEduHovered
                    ? `0 16px 40px ${item.color}15, 0 0 0 1px ${item.color}20`
                    : '0 4px 20px rgba(0,0,0,0.08)'
                }}
              >
                {/* Top accent bar matching Projects */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-[2.5px] rounded-t-3xl"
                  style={{
                    background: `linear-gradient(90deg, ${item.gradientFrom}, ${item.gradientTo})`
                  }}
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + idx * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Ambient Glow Orb on hover */}
                <AnimatePresence>
                  {isEduHovered && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.7 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-0 right-0 w-44 h-44 rounded-full pointer-events-none blur-[50px]"
                      style={{ backgroundColor: `${item.color}16` }}
                    />
                  )}
                </AnimatePresence>

                <div className="relative z-10 flex flex-col justify-between h-full">
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3 mb-2.5">
                      <div className="flex items-center gap-3">
                        {/* Icon box with gradient & micro-rotation */}
                        <motion.div
                          className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 relative overflow-hidden"
                          style={{
                            background: `linear-gradient(135deg, ${item.gradientFrom}22, ${item.gradientTo}22)`,
                            border: `1px solid ${item.color}35`
                          }}
                          whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                          transition={{ duration: 0.4 }}
                        >
                          <ItemIcon size={20} style={{ color: item.color }} />
                        </motion.div>
                        <div>
                          <span
                            className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] block"
                            style={{ color: item.color }}
                          >
                            {item.category}
                          </span>
                          <h4 className="text-sm sm:text-base font-extrabold leading-snug" style={{ color: 'var(--text-primary)' }}>
                            {item.title}
                          </h4>
                        </div>
                      </div>

                      <span className="font-mono text-[11px] font-semibold opacity-50 shrink-0 pt-0.5">
                        {item.date}
                      </span>
                    </div>

                    {/* Institution */}
                    <p className="text-xs font-semibold opacity-75 mb-1.5 pl-1">
                      {item.institution}
                    </p>

                    {/* Description */}
                    <p className="text-xs opacity-75 leading-relaxed mb-3 pl-1">
                      {item.desc}
                    </p>
                  </div>

                  {/* Footer: Grade Badge + Tag Pills */}
                  <div className="pt-2.5 border-t flex flex-wrap items-center justify-between gap-2" style={{ borderColor: 'var(--border-color)' }}>
                    <span
                      className="font-mono text-xs font-extrabold px-3 py-1 rounded-full border"
                      style={{
                        color: item.color,
                        borderColor: `${item.color}35`,
                        backgroundColor: `${item.color}12`
                      }}
                    >
                      {item.grade}
                    </span>

                    {/* Quick Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tg, tIdx) => (
                        <span
                          key={tIdx}
                          className="font-mono text-[10px] font-semibold rounded-full px-2.5 py-0.5 border transition-all duration-200"
                          style={{
                            borderColor: isEduHovered ? `${item.color}35` : 'var(--border-color)',
                            backgroundColor: isEduHovered ? `${item.color}10` : 'var(--bg-card)',
                            color: isEduHovered ? item.color : 'var(--text-primary)',
                            opacity: isEduHovered ? 1 : 0.65
                          }}
                        >
                          {tg}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Timeline;
