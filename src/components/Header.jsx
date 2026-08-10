import React, { useState, useEffect } from 'react';
import { Mail, Menu, X, Sun, Moon } from 'lucide-react';
import { motion } from 'framer-motion';

const GithubIcon = ({ size = 18, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482C19.138 20.197 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ size = 18, ...props }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [lightMode, setLightMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem('theme');
      if (stored === 'light') {
        document.documentElement.classList.add('light-mode');
        setLightMode(true);
      } else {
        // Default: dark mode
        document.documentElement.classList.remove('light-mode');
        setLightMode(false);
        if (!stored) window.localStorage.setItem('theme', 'dark');
      }
    }
  }, []);

  const toggleTheme = () => {
    const next = !lightMode;
    setLightMode(next);
    if (next) {
      document.documentElement.classList.add('light-mode');
      window.localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light-mode');
      window.localStorage.setItem('theme', 'dark');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        isScrolled ? 'py-3.5' : 'py-5'
      }`}
      style={{
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        background: lightMode
          ? isScrolled
            ? 'rgba(240, 244, 255, 0.92)'
            : 'rgba(240, 244, 255, 0.75)'
          : isScrolled
          ? 'rgba(4, 4, 9, 0.92)'
          : 'rgba(4, 4, 9, 0.70)',
        borderBottom: lightMode
          ? `1px solid ${isScrolled ? 'rgba(148,163,184,0.30)' : 'transparent'}`
          : `1px solid ${isScrolled ? 'rgba(255,255,255,0.08)' : 'transparent'}`,
        boxShadow: isScrolled
          ? lightMode
            ? '0 4px 24px rgba(15,23,42,0.10)'
            : '0 4px 30px rgba(0,0,0,0.5), 0 0 1px rgba(0,242,254,0.12)'
          : 'none',
      }}
    >
      <div className="max-w-[1250px] mx-auto flex justify-between items-center px-5">
        
        {/* Logo */}
        <a href="#hero" className="font-extrabold text-xl tracking-wider bg-gradient-to-r from-cyan via-purple to-pink bg-clip-text text-transparent flex items-center gap-2.5 group">
          <span className="w-2.5 h-2.5 rounded-full bg-cyan inline-block" style={{ boxShadow: '0 0 10px #00f2fe, 0 0 20px rgba(0,242,254,0.4)', animation: 'glow-pulse 3s ease-in-out infinite' }}></span>
          Tanuj Warwade
        </a>

        {/* Mobile Menu Button */}
        <button
          className="menu-toggle md:hidden flex flex-col gap-1.5 cursor-pointer bg-none border-none p-1 z-50"
          style={{ color: lightMode ? '#0f172a' : '#f1f5f9' }}
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Nav Links */}
        <nav
          className={`fixed md:relative top-[68px] md:top-0 ${
            isMenuOpen ? 'left-0' : '-left-full md:left-0'
          } w-full md:w-auto h-[calc(100vh-68px)] md:h-auto backdrop-blur-xl md:backdrop-blur-none flex flex-col md:flex-row items-center justify-center gap-10 md:gap-8 transition-all duration-300 border-t md:border-t-0 z-40`}
          style={{
            background: isMenuOpen
              ? lightMode ? 'rgba(240,244,255,0.97)' : 'rgba(4,4,9,0.97)'
              : 'transparent',
            borderColor: lightMode ? 'rgba(148,163,184,0.2)' : 'rgba(255,255,255,0.06)',
          }}
        >
          <ul className="flex flex-col md:flex-row list-none gap-8 md:gap-6 text-center">
            {['Home', 'About', 'Skills', 'Projects', 'Certifications', 'Contact'].map((item) => (
              <li key={item}>
                <a
                  href={item === 'Home' ? '#hero' : `#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base md:text-sm font-medium transition-all duration-300 relative group"
                  style={{ color: lightMode ? '#475569' : '#94a3b8' }}
                  onMouseEnter={e => e.currentTarget.style.color = lightMode ? '#0f172a' : '#f1f5f9'}
                  onMouseLeave={e => e.currentTarget.style.color = lightMode ? '#475569' : '#94a3b8'}
                >
                  {item}
                  <span className="absolute -bottom-1.5 left-0 w-0 h-[1.5px] bg-gradient-to-r from-cyan to-purple group-hover:w-full transition-all duration-300 rounded-full" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <motion.button
            whileHover={{ scale: 1.02, x: 1.5, y: 1.5, boxShadow: lightMode ? '-2px -2px 8px rgba(15,23,42,0.05)' : '-2px -2px 10px rgba(0,242,254,0.15)' }}
            whileTap={{ scale: 0.95, x: 2.5, y: 2.5 }}
            transition={{ type: 'spring', stiffness: 500, damping: 25 }}
            onClick={toggleTheme}
            className="w-9 h-9 rounded-full flex items-center justify-center hover:text-cyan hover:border-cyan group cursor-pointer"
            style={{
              background: lightMode ? 'rgba(15,23,42,0.05)' : 'rgba(255,255,255,0.04)',
              border: lightMode ? '1px solid rgba(148,163,184,0.28)' : '1px solid rgba(255,255,255,0.08)',
              color: lightMode ? '#475569' : '#94a3b8',
            }}
            aria-label="Toggle Light Mode"
          >
            <span className="transition-transform duration-300 group-hover:rotate-[-12deg] group-hover:scale-110 flex items-center justify-center">
              {lightMode ? <Sun size={17} /> : <Moon size={17} />}
            </span>
          </motion.button>
          {[
            { href: 'https://github.com/TanujWarwade', label: 'GitHub Profile', icon: <GithubIcon size={17} /> },
            { href: 'https://www.linkedin.com/in/tanuj-warwade-4351152b6/', label: 'LinkedIn Profile', icon: <LinkedinIcon size={17} /> },
            { href: 'mailto:tanujwarwade17@gmail.com', label: 'Email Address', icon: <Mail size={17} /> },
          ].map(({ href, label, icon }) => (
            <motion.a
              key={label}
              whileHover={{ scale: 1.02, x: 1.5, y: 1.5, boxShadow: lightMode ? '-2px -2px 8px rgba(15,23,42,0.05)' : '-2px -2px 10px rgba(0,242,254,0.15)' }}
              whileTap={{ scale: 0.95, x: 2.5, y: 2.5 }}
              transition={{ type: 'spring', stiffness: 500, damping: 25 }}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full flex items-center justify-center hover:text-cyan hover:border-cyan group cursor-pointer"
              style={{
                background: lightMode ? 'rgba(15,23,42,0.05)' : 'rgba(255,255,255,0.04)',
                border: lightMode ? '1px solid rgba(148,163,184,0.28)' : '1px solid rgba(255,255,255,0.08)',
                color: lightMode ? '#475569' : '#94a3b8',
              }}
              aria-label={label}
            >
              <span className="transition-transform duration-300 group-hover:rotate-[-12deg] group-hover:scale-110 flex items-center justify-center">
                {icon}
              </span>
            </motion.a>
          ))}
        </div>

      </div>
    </header>
  );
};

export default Header;
