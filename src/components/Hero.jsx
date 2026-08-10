import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, ChevronDown } from 'lucide-react';
import AICore from './AICore';

const roles = [
  'AI & ML Engineer',
  'Full-Stack Developer',
  'Data Science Enthusiast',
  'Problem Solver',
];

const TypingText = () => {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = roles[roleIdx];
    let timeout;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx + 1));
        setCharIdx(c => c + 1);
      }, 70);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx(c => c - 1);
      }, 40);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setRoleIdx(r => (r + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIdx]);

  return (
    <span className="text-cyan font-mono">
      {displayed}
      <span className="inline-block w-0.5 h-5 bg-cyan ml-0.5 animate-pulse align-middle" />
    </span>
  );
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
};

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center px-5 pt-[96px] pb-16 max-w-[1250px] mx-auto relative"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 items-center w-full">

        {/* LEFT: Text Content */}
        <motion.div
          className="space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-cyan/20 bg-cyan/5 px-5 py-2 text-xs font-mono font-semibold text-cyan uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
              AI &amp; ML Engineering Student
            </span>
          </motion.div>

          {/* Name */}
          <motion.div variants={fadeUp} className="space-y-3">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] flex flex-col gap-1 sm:gap-2">
              <span className="text-2xl sm:text-3xl lg:text-4xl text-text-secondary font-bold tracking-normal">Hi, I am</span>
              <div>
                <span className="gradient-text-1">Tanuj Warwade</span>
              </div>
            </h1>

            {/* Typing role */}
            <div className="text-lg sm:text-xl font-semibold text-text-secondary flex items-center gap-2 min-h-[32px]">
              <span className="text-text-muted text-sm font-mono mr-1">{'>'}</span>
              <TypingText />
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="max-w-[580px] text-base text-text-secondary leading-relaxed"
          >
            I design clean web experiences, data-driven AI workflows, and business-ready solutions
            that look polished and perform at scale.
          </motion.p>

          {/* Stats row */}
          <motion.div variants={fadeUp} className="grid grid-cols-2 gap-4 sm:grid-cols-2 max-w-[420px]">
            {[
              { label: 'Focus', value: 'Product-driven AI applications' },
              { label: 'Experience', value: 'Internship, data projects & web' },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-white/8 bg-white/3 p-4 backdrop-blur-sm"
              >
                <p className="text-[10px] uppercase tracking-[0.3em] text-text-muted mb-1.5 font-semibold">{item.label}</p>
                <p className="text-sm font-semibold text-white leading-snug">{item.value}</p>
              </div>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div variants={fadeUp} className="flex flex-wrap gap-4 pt-2">
            <motion.a
              href="/Tanuj_Resume11.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0,242,254,0.4)' }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 rounded-full bg-cyan px-7 py-3.5 text-sm font-bold text-slate-950 transition-colors duration-300"
            >
              <FileText size={16} />
              View Resume
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors duration-300 hover:border-cyan/30 hover:bg-cyan/5"
            >
              Contact Me <ArrowRight size={15} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT: 3D AICore */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.1, delay: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <AICore />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-text-muted"
      >
        <span className="text-[10px] font-mono uppercase tracking-widest">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
