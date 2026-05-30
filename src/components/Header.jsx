import React, { useState, useEffect } from 'react';
import { Mail, Menu, X } from 'lucide-react';

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
    <header className={`fixed top-0 left-0 w-full z-100 transition-all duration-300 ${
      isScrolled 
        ? 'bg-neutral-950/85 backdrop-blur-md shadow-2xl border-b border-white/5 py-4' 
        : 'bg-neutral-950/70 backdrop-blur-md border-b border-transparent py-5'
    }`}>
      <div className="max-w-[1250px] mx-auto flex justify-between items-center px-5">
        
        {/* Logo */}
        <a href="#hero" className="font-extrabold text-xl tracking-widest bg-gradient-to-r from-cyan to-purple bg-clip-text text-transparent flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-cyan shadow-[0_0_10px_#00f2fe] inline-block animate-pulse-slow"></span>
          TANUJ.AI
        </a>

        {/* Mobile Menu Button */}
        <button 
          className="menu-toggle md:hidden flex flex-col gap-1.5 cursor-pointer bg-none border-none p-1 z-50 text-white"
          onClick={toggleMenu}
          aria-label="Toggle Navigation"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Nav Links */}
        <nav className={`fixed md:relative top-[72px] md:top-0 ${
          isMenuOpen ? 'left-0' : '-left-full md:left-0'
        } w-full md:w-auto h-[calc(100vh-72px)] md:h-auto bg-neutral-950/95 md:bg-transparent backdrop-blur-lg md:backdrop-blur-none flex flex-col md:flex-row items-center justify-center gap-10 md:gap-8 transition-all duration-300 border-t border-white/5 md:border-t-0 z-40`}>
          <ul className="flex flex-col md:flex-row list-none gap-8 md:gap-7 text-center">
            {['Home', 'About', 'Skills', 'Projects', 'Timeline', 'Contact'].map((item) => (
              <li key={item}>
                <a 
                  href={item === 'Home' ? '#hero' : `#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-base md:text-sm font-medium text-text-secondary hover:text-text-primary transition-all duration-300 relative after:absolute after:-bottom-1.5 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-cyan after:to-purple hover:after:w-full after:transition-all after:duration-300"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Social Quick-Links */}
        <div className="hidden md:flex gap-4">
          <a 
            href="https://github.com/Tanujwar17" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-9.5 h-9.5 rounded-full bg-white/4 border border-white/8 flex items-center justify-center text-text-secondary hover:text-cyan hover:border-cyan hover:shadow-[0_0_12px_rgba(0,242,254,0.4)] hover:bg-cyan/5 -translate-y-0 hover:-translate-y-0.5 transition-all duration-300"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={18} />
          </a>
          <a 
            href="https://linkedin.com/in/tanuj-warwade-4a1b4129b" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-9.5 h-9.5 rounded-full bg-white/4 border border-white/8 flex items-center justify-center text-text-secondary hover:text-cyan hover:border-cyan hover:shadow-[0_0_12px_rgba(0,242,254,0.4)] hover:bg-cyan/5 -translate-y-0 hover:-translate-y-0.5 transition-all duration-300"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={18} />
          </a>
          <a 
            href="mailto:tanujwarwade17@gmail.com" 
            className="w-9.5 h-9.5 rounded-full bg-white/4 border border-white/8 flex items-center justify-center text-text-secondary hover:text-cyan hover:border-cyan hover:shadow-[0_0_12px_rgba(0,242,254,0.4)] hover:bg-cyan/5 -translate-y-0 hover:-translate-y-0.5 transition-all duration-300"
            aria-label="Email Address"
          >
            <Mail size={18} />
          </a>
        </div>

      </div>
    </header>
  );
};

export default Header;
