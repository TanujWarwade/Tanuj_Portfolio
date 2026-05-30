import React from 'react';
import { ArrowUp, Heart } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-neutral-950/95 py-10 px-5 border-t border-white/5 text-center mt-20">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-5">
        
        {/* Copyright notice */}
        <div className="text-text-muted text-sm font-medium flex items-center justify-center gap-1">
          &copy; 2026 Tanuj Warwade. Designed with 
          <Heart size={12} className="text-cyan fill-cyan drop-shadow-[0_0_8px_rgba(0,242,254,0.5)] inline mx-1 animate-pulse" /> 
          &amp; Vite + React + Tailwind.
        </div>

        {/* Back-to-top console shortcut */}
        <button 
          onClick={scrollToTop}
          className="font-mono text-xs text-text-secondary hover:text-cyan cursor-pointer transition-colors duration-300 flex items-center gap-1.5 p-1 bg-transparent border-none outline-none"
        >
          root@tanuj:~$ cd ~ <ArrowUp size={14} />
        </button>

      </div>
    </footer>
  );
};

export default Footer;
