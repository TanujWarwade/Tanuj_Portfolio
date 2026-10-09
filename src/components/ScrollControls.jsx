import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'timeline', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'contact', label: 'Contact' },
];

export const ScrollControls = () => {
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  const [scrollProgressPercent, setScrollProgressPercent] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Track scroll position for active section and back-to-top visibility
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setShowScrollTop(currentScroll > 260);

      if (currentScroll < 100) {
        setActiveSection('hero');
        return;
      }

      // Determine active section
      const scrollPos = currentScroll + window.innerHeight * 0.35;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop > 0 && scrollPos >= el.offsetTop) {
          setActiveSection(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Update circular percentage
  useEffect(() => {
    return scrollYProgress.on('change', (latest) => {
      setScrollProgressPercent(Math.round(latest * 100));
    });
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Circular progress calculations for Back to Top ring
  const circleRadius = 18;
  const circumference = 2 * Math.PI * circleRadius;
  const strokeDashoffset = circumference - (scrollProgressPercent / 100) * circumference;

  return (
    <>
      {/* 1. TOP SCROLL PROGRESS BAR */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[120] pointer-events-none bg-white/5">
        <motion.div
          className="h-full origin-left bg-gradient-to-r from-cyan via-purple to-pink"
          style={{
            scaleX,
            boxShadow: '0 0 10px rgba(0, 242, 254, 0.7), 0 0 20px rgba(157, 78, 221, 0.4)',
          }}
        />
      </div>

      {/* 2. RIGHT-SIDE FLOATING SECTION NAV DOTS (Desktop) */}
      <aside 
        aria-label="Page section navigation"
        className="fixed right-5 top-1/2 -translate-y-1/2 z-40 hidden xl:flex flex-col items-center gap-3.5 py-4 px-2 rounded-full border border-white/8 bg-black/40 backdrop-blur-md shadow-2xl"
      >
        {sections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              aria-label={`Jump to ${section.label}`}
              className="group relative flex items-center justify-center p-1 cursor-pointer transition-all focus:outline-none"
            >
              {/* Tooltip on Hover */}
              <span className="absolute right-8 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold tracking-wider uppercase text-cyan bg-slate-950/90 border border-cyan/30 shadow-lg pointer-events-none opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 whitespace-nowrap">
                {section.label}
              </span>

              {/* Indicator Dot */}
              <div
                className={`transition-all duration-300 rounded-full ${
                  isActive
                    ? 'w-3 h-3 bg-cyan shadow-[0_0_12px_#00f2fe] ring-2 ring-cyan/40 scale-125'
                    : 'w-2 h-2 bg-white/30 group-hover:bg-white/80 group-hover:scale-125'
                }`}
              />
            </button>
          );
        })}
      </aside>

      {/* 3. FLOATING BACK TO TOP BUTTON WITH CIRCULAR PROGRESS */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="back-to-top"
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            transition={{ duration: 0.25 }}
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full flex items-center justify-center border border-white/10 bg-slate-950/85 backdrop-blur-lg shadow-xl cursor-pointer hover:border-cyan/50 hover:shadow-[0_0_20px_rgba(0,242,254,0.35)] group transition-all"
          >
            {/* SVG Circular Progress Track & Fill */}
            <svg className="absolute w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 44 44">
              <circle
                cx="22"
                cy="22"
                r={circleRadius}
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="text-white/10"
              />
              <circle
                cx="22"
                cy="22"
                r={circleRadius}
                fill="none"
                stroke="url(#progressGradient)"
                strokeWidth="2.5"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-150"
              />
              <defs>
                <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#00f2fe" />
                  <stop offset="100%" stopColor="#9d4edd" />
                </linearGradient>
              </defs>
            </svg>

            {/* Arrow Icon */}
            <ArrowUp
              size={18}
              className="text-white/80 group-hover:text-cyan group-hover:-translate-y-0.5 transition-all relative z-10"
            />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScrollControls;
