import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Target, Zap, GraduationCap, Rocket, Award, FolderGit2, Code2, Sparkles, MapPin, CheckCircle2, Terminal, ArrowUpRight } from 'lucide-react';

const CountUp = ({ value }) => {
  const [current, setCurrent] = useState(0);
  const [startCount, setStartCount] = useState(false);
  const elementRef = useRef(null);

  const isDecimal = value.includes('.');
  const hasPlus = value.includes('+');
  const target = parseFloat(value);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (elementRef.current) observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!startCount) return;
    const duration = 1000;
    const stepTime = 20;
    const totalSteps = duration / stepTime;
    const stepValue = target / totalSteps;
    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      if (currentStep >= totalSteps) {
        setCurrent(target);
        clearInterval(timer);
      } else {
        setCurrent((prev) => prev + stepValue);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [startCount, target]);

  const formatValue = () => {
    if (isDecimal) return current.toFixed(2);
    return Math.floor(current) + (hasPlus ? '+' : '');
  };

  return <span ref={elementRef}>{formatValue()}</span>;
};

const About = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const stats = [
    {
      id: 'stat-cgpa',
      label: 'CGPA (B.Tech AIML)',
      value: '6.7',
      icon: GraduationCap,
      color: '#8B5CF6',
      gradientFrom: '#8B5CF6',
      gradientTo: '#ec4899',
      sub: 'Till 3rd Semester'
    },
    {
      id: 'stat-proj',
      label: 'Major GitHub Projects',
      value: '5',
      icon: FolderGit2,
      color: '#00f2fe',
      gradientFrom: '#00f2fe',
      gradientTo: '#3B82F6',
      sub: 'Open-Source Builds'
    },
    {
      id: 'stat-cert',
      label: 'Verified Credentials',
      value: '9+',
      icon: Award,
      color: '#10B981',
      gradientFrom: '#10B981',
      gradientTo: '#06b6d4',
      sub: 'Certificates & Internships'
    },
    {
      id: 'stat-tools',
      label: 'Tech Stack Tools',
      value: '10+',
      icon: Code2,
      color: '#f59e0b',
      gradientFrom: '#f59e0b',
      gradientTo: '#ef4444',
      sub: 'Languages & Frameworks'
    }
  ];

  const pillars = [
    {
      id: 'pillar-ai',
      icon: Target,
      color: '#00f2fe',
      gradientFrom: '#00f2fe',
      gradientTo: '#3B82F6',
      category: 'Core Competency',
      title: 'AI & Machine Learning',
      desc: 'Hands-on experience developing ML models, data pipelines, and audio/feature extraction using Scikit-learn & Python.',
      tags: ['Scikit-learn', 'Feature Engineering', 'Model Tuning']
    },
    {
      id: 'pillar-ds',
      icon: Zap,
      color: '#8B5CF6',
      gradientFrom: '#8B5CF6',
      gradientTo: '#ec4899',
      category: 'Data Science',
      title: 'Data Analytics & Pipelines',
      desc: 'Expertise in Pandas and NumPy for deep data wrangling, cleaning meteorological datasets, and statistical visualization.',
      tags: ['Pandas', 'NumPy', 'EDA & Cleaning']
    },
    {
      id: 'pillar-acad',
      icon: GraduationCap,
      color: '#10B981',
      gradientFrom: '#10B981',
      gradientTo: '#06b6d4',
      category: 'Academic Base',
      title: 'Computer Science Fundamentals',
      desc: 'Pursuing B.Tech in AIML at Bansal Institute of Science & Technology, maintaining a 6.7 CGPA with strong CS core knowledge.',
      tags: ['C++ DSA', 'DBMS', 'OOP', 'OS']
    },
    {
      id: 'pillar-web',
      icon: Rocket,
      color: '#ec4899',
      gradientFrom: '#ec4899',
      gradientTo: '#8B5CF6',
      category: 'Web Engineering',
      title: 'Full-Stack Execution',
      desc: 'Building responsive, high-performance web interfaces with HTML5, CSS3, modern JavaScript, and deploying live on Vercel.',
      tags: ['JavaScript', 'HTML5/CSS3', 'Vite', 'Vercel']
    }
  ];

  const isStoryHovered = hoveredCard === 'story';

  return (
    <section id="about" className="relative px-5 py-24 overflow-hidden scroll-mt-20">
      {/* Background ambient orbs matching Projects */}
      <div className="absolute left-[-5%] top-20 h-72 w-72 rounded-full bg-cyan-500/8 blur-[90px] pointer-events-none" />
      <div className="absolute right-[-5%] bottom-16 h-80 w-80 rounded-full bg-purple-500/8 blur-[90px] pointer-events-none" />

      {/* Unified Section Header matching Projects */}
      <div className="relative z-10 max-w-[1200px] mx-auto text-center mb-12 sm:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-3"
        >
          <span className="inline-flex items-center gap-2 font-mono text-cyan-400 text-[11px] uppercase tracking-[0.25em] font-bold px-4 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/10 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            About &amp; Profile
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.55 }}
          className="text-4xl sm:text-5xl font-extrabold mb-4 gradient-text-1 leading-tight tracking-tight"
        >
          About Me &amp; Background
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="opacity-75 max-w-[620px] mx-auto text-base leading-relaxed"
        >
          Driven AIML undergraduate bridging machine learning models, data science pipelines, and modern full-stack web applications.
        </motion.p>
      </div>

      {/* 2-Column Side-by-Side Layout matching Timeline & Projects */}
      <div className="relative z-10 max-w-[1200px] mx-auto grid gap-6 lg:grid-cols-2 items-stretch">
        
        {/* LEFT COLUMN: Developer Engineering Profile Card (Identical structure to Timeline Work Experience) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => setHoveredCard('story')}
          onMouseLeave={() => setHoveredCard(null)}
          whileHover={{ y: -5 }}
          className="relative flex flex-col justify-between group overflow-hidden rounded-3xl border transition-all duration-150 p-7 sm:p-8 h-full"
          style={{
            backgroundColor: 'var(--bg-card)',
            borderColor: isStoryHovered ? '#00f2fe50' : 'var(--border-color)',
            boxShadow: isStoryHovered
              ? '0 20px 60px rgba(0, 242, 254, 0.18), 0 0 0 1px rgba(0, 242, 254, 0.2)'
              : '0 4px 24px rgba(0,0,0,0.12)'
          }}
        >
          {/* Animated top accent bar matching Projects & Timeline */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-[2.5px] rounded-t-3xl"
            style={{ background: 'linear-gradient(90deg, #00f2fe, #9d4edd)' }}
            initial={{ scaleX: 0, originX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          />

          {/* Ambient glow orb on hover */}
          <AnimatePresence>
            {isStoryHovered && (
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.7 }}
                transition={{ duration: 0.15 }}
                className="absolute top-0 right-0 w-64 h-64 rounded-full pointer-events-none blur-[65px]"
                style={{ backgroundColor: 'rgba(0, 242, 254, 0.15)' }}
              />
            )}
          </AnimatePresence>

          <div className="relative z-10 flex flex-col h-full justify-between">
            <div>
              {/* Header: Icon, Category, Title, Date */}
              <div className="flex items-start justify-between gap-3 mb-5">
                <div className="flex items-start gap-4">
                  {/* Micro-rotating icon box */}
                  <motion.div
                    className="w-13 h-13 p-3 rounded-2xl flex items-center justify-center shrink-0 relative overflow-hidden"
                    style={{
                      background: 'linear-gradient(135deg, rgba(0,242,254,0.2), rgba(157,78,221,0.2))',
                      border: '1px solid rgba(0,242,254,0.35)',
                      color: '#00f2fe'
                    }}
                    whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Terminal size={24} />
                  </motion.div>
                  <div>
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-cyan-400 block">
                        Engineering Profile
                      </span>
                      <span className="font-mono text-[9px] font-bold px-2 py-0.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
                        Open for Internships
                      </span>
                    </div>
                    <h3 className="text-xl sm:text-2xl font-extrabold leading-tight" style={{ color: 'var(--text-primary)' }}>
                      Building Intelligence with Code &amp; Data
                    </h3>
                    <div className="text-sm font-semibold opacity-80 flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-cyan-400 font-bold">Bansal Institute of Science &amp; Technology</span>
                      <span className="opacity-40">•</span>
                      <span className="text-xs flex items-center gap-1 opacity-75">
                        <MapPin size={12} /> Bhopal, MP
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-end shrink-0">
                  <span className="font-mono text-[11px] font-semibold opacity-50">2024 - 2028</span>
                  <span className="font-mono text-[10px] font-semibold px-2 py-0.5 mt-1 rounded-full border border-purple-500/25 bg-purple-500/10 text-purple-400">
                    B.Tech AIML
                  </span>
                </div>
              </div>

              {/* Bio Narrative */}
              <p className="opacity-80 text-sm leading-relaxed mb-4">
                I am an Artificial Intelligence &amp; Machine Learning undergraduate focused on engineering predictive algorithms, extracting actionable signals, and translating analytical models into functional web software.
              </p>

              <p className="opacity-80 text-sm leading-relaxed mb-5">
                From developing the <span className="font-semibold text-purple-400">Monsoon Prediction System</span> for hackathon use-cases to engineering <span className="font-semibold text-cyan-400">MoodBeats</span> for emotional music recommendation, I prioritize shipping practical, reproducible code with clean architectural principles.
              </p>

              {/* Stat Badges Row inside the story card */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 border-y mb-5" style={{ borderColor: 'var(--border-color)' }}>
                {stats.map((st, sIdx) => (
                  <div key={sIdx} className="text-left">
                    <div className="text-xl sm:text-2xl font-extrabold gradient-text-1">
                      <CountUp value={st.value} />
                    </div>
                    <div className="text-[10px] font-semibold opacity-70 tracking-tight leading-tight">
                      {st.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Key Focus Tag Pills matching Projects & Timeline */}
              <div className="flex flex-wrap gap-2 mb-2">
                {['Machine Learning', 'Python & C++', 'Data Pipelines', 'Pandas & NumPy', 'Full-Stack Web', 'Vercel Deployment'].map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="font-mono text-[11px] font-semibold rounded-full px-3 py-1 border transition-all duration-300"
                    style={{
                      borderColor: isStoryHovered ? '#00f2fe40' : 'var(--border-color)',
                      backgroundColor: isStoryHovered ? '#00f2fe10' : 'var(--bg-card)',
                      color: isStoryHovered ? '#00f2fe' : 'var(--text-primary)',
                      opacity: isStoryHovered ? 1 : 0.75
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Quick Details Footer matching Timeline card footer */}
            <div className="pt-4 border-t flex flex-wrap items-center justify-between gap-3 mt-4" style={{ borderColor: 'var(--border-color)' }}>
              <div className="flex items-center gap-2 text-xs opacity-85">
                <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                <span>Available for Summer Internships &amp; Research</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400">
                <Sparkles size={13} />
                <span>AIML Engineer</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: 4 Competency Pillars in balanced 2x2 grid (Identical right-side architecture) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
          {pillars.map((pillar, idx) => {
            const PillarIcon = pillar.icon;
            const isPillarHovered = hoveredCard === pillar.id;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                onMouseEnter={() => setHoveredCard(pillar.id)}
                onMouseLeave={() => setHoveredCard(null)}
                whileHover={{ y: -4 }}
                className="relative flex flex-col justify-between group overflow-hidden rounded-3xl border transition-all duration-150 p-5 sm:p-6 flex-1"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: isPillarHovered ? `${pillar.color}50` : 'var(--border-color)',
                  boxShadow: isPillarHovered
                    ? `0 16px 40px ${pillar.color}15, 0 0 0 1px ${pillar.color}20`
                    : '0 4px 20px rgba(0,0,0,0.08)'
                }}
              >
                {/* Top accent bar matching Projects & Timeline */}
                <motion.div
                  className="absolute top-0 left-0 right-0 h-[2.5px] rounded-t-3xl"
                  style={{
                    background: `linear-gradient(90deg, ${pillar.gradientFrom}, ${pillar.gradientTo})`
                  }}
                  initial={{ scaleX: 0, originX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + idx * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Ambient Glow Orb on hover */}
                <AnimatePresence>
                  {isPillarHovered && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.7 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none blur-[45px]"
                      style={{ backgroundColor: `${pillar.color}16` }}
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
                            background: `linear-gradient(135deg, ${pillar.gradientFrom}22, ${pillar.gradientTo}22)`,
                            border: `1px solid ${pillar.color}35`,
                            color: pillar.color
                          }}
                          whileHover={{ rotate: [0, -8, 8, 0], scale: 1.08 }}
                          transition={{ duration: 0.4 }}
                        >
                          <PillarIcon size={20} />
                        </motion.div>
                        <div>
                          <span
                            className="text-[9px] font-mono font-bold uppercase tracking-[0.2em] block"
                            style={{ color: pillar.color }}
                          >
                            {pillar.category}
                          </span>
                          <h4 className="text-sm sm:text-base font-extrabold leading-snug" style={{ color: 'var(--text-primary)' }}>
                            {pillar.title}
                          </h4>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs opacity-75 leading-relaxed mb-3 pl-1">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Footer: Tag Pills matching Timeline */}
                  <div className="pt-2.5 border-t flex flex-wrap gap-1.5" style={{ borderColor: 'var(--border-color)' }}>
                    {pillar.tags.map((tg, tIdx) => (
                      <span
                        key={tIdx}
                        className="font-mono text-[10px] font-semibold rounded-full px-2.5 py-0.5 border transition-all duration-200"
                        style={{
                          borderColor: isPillarHovered ? `${pillar.color}35` : 'var(--border-color)',
                          backgroundColor: isPillarHovered ? `${pillar.color}10` : 'var(--bg-card)',
                          color: isPillarHovered ? pillar.color : 'var(--text-primary)',
                          opacity: isPillarHovered ? 1 : 0.65
                        }}
                      >
                        {tg}
                      </span>
                    ))}
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

export default About;
