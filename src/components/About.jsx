import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, GraduationCap, Rocket, Award, FolderGit2, Code2 } from 'lucide-react';

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
  const stats = [
    { label: 'CGPA (B.Tech AIML)', value: '6.86', icon: <GraduationCap size={22} />, color: 'text-indigo-500' },
    { label: 'Major Tech Projects', value: '3', icon: <FolderGit2 size={22} />, color: 'text-purple-500' },
    { label: 'Industry Badges', value: '5', icon: <Award size={22} />, color: 'text-emerald-500' },
    { label: 'Skills Mastered', value: '8+', icon: <Code2 size={22} />, color: 'text-cyan-500' }
  ];

  const highlights = [
    {
      icon: <Target size={22} />, color: 'text-indigo-500',
      title: 'Career Vision',
      desc: 'Focused on creating real-world AI applications, intelligent data pipelines, and scalable web solutions.'
    },
    {
      icon: <Zap size={22} />, color: 'text-purple-500',
      title: 'Technical Focus',
      desc: 'Hands-on expertise in Python, machine learning models, Scikit-learn, Pandas, data analysis, and modern web development.'
    },
    {
      icon: <GraduationCap size={22} />, color: 'text-emerald-500',
      title: 'Academic Track',
      desc: 'Pursuing B.Tech in AIML at Bansal Institute of Science & Technology with a strong foundation in AI fundamentals.'
    },
    {
      icon: <Rocket size={22} />, color: 'text-cyan-500',
      title: 'Growth Mindset',
      desc: 'Continuously building projects, solving challenges, and exploring emerging AI trends.'
    }
  ];

  return (
    <div className="relative space-y-12 text-center overflow-hidden">
      <div className="absolute left-0 top-12 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-0 h-52 w-52 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-indigo-500 text-xs uppercase tracking-wider block font-semibold mb-2"
        >
          System Description
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-extrabold mb-4 gradient-text-1"
        >
          About Me &amp; Background
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="opacity-80 max-w-[640px] mx-auto mb-10 text-base leading-relaxed"
        >
          Motivated AIML undergraduate student with a strong passion for artificial intelligence, machine learning, data engineering, and modern web development.
        </motion.p>
      </div>

      <div className="relative z-10 grid gap-8 lg:grid-cols-[1.25fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="panel-soft p-8 sm:p-10 overflow-hidden"
        >
          <div className="absolute -top-12 left-0 h-44 w-44 rounded-full bg-indigo-500/10 blur-3xl" />
          <p className="relative opacity-90 text-base sm:text-lg leading-relaxed">
            Seeking opportunities to apply my technical skills, gain valuable industry exposure, and contribute to cutting-edge intelligent applications and data-driven systems.
          </p>

          <div className="grid gap-4 sm:grid-cols-2 mt-10">
            {highlights.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="rounded-3xl border border-white/10 bg-slate-950/20 p-5 transition-colors duration-300"
                style={{ borderColor: 'var(--border-color)' }}
              >
                <div className={`w-12 h-12 rounded-3xl icon-box flex items-center justify-center mb-4 ${item.color}`}>
                  {item.icon}
                </div>
                <h3 className="font-semibold text-base mb-2">{item.title}</h3>
                <p className="text-sm opacity-80 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="panel-soft p-8 sm:p-10 border border-white/10"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-indigo-500">
              Quick Facts
            </span>
            <h3 className="mt-6 text-2xl font-extrabold">Performance at a glance</h3>
            <p className="mt-3 text-sm opacity-80 leading-relaxed">
              These metrics highlight my recent academic achievements, project output, and industry-ready skill set.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className="panel-soft p-5 text-left"
              >
                <div className={`w-12 h-12 rounded-3xl icon-box flex items-center justify-center mb-4 ${stat.color}`}>
                  {stat.icon}
                </div>
                <div className="text-3xl font-extrabold mb-1 gradient-text-1">
                  <CountUp value={stat.value} />
                </div>
                <div className="text-xs opacity-75 uppercase tracking-[0.24em] font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
