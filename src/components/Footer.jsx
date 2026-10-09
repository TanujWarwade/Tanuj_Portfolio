import React from 'react';
import { ArrowUp, Mail, Heart, Sparkles } from 'lucide-react';
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

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/TanujWarwade', icon: <GithubIcon size={18} /> },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/tanuj-warwade-4351152b6/', icon: <LinkedinIcon size={18} /> },
    { label: 'Email', href: 'mailto:tanujwarwade17@gmail.com', icon: <Mail size={18} /> },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative pt-16 pb-8 px-5 mt-24 border-t text-left overflow-hidden"
      style={{ borderColor: 'var(--border-color)', background: 'var(--bg-card)' }}
    >
      
      {/* Top Gradient Border Accent */}
      <div 
        className="absolute top-0 left-0 right-0 h-[1.5px]" 
        style={{
          background: 'linear-gradient(90deg, transparent, rgba(0,242,254,0.6), rgba(157,78,221,0.6), transparent)'
        }} 
      />

      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[250px] bg-cyan/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b" style={{ borderColor: 'var(--border-color)' }}>
          
          {/* Brand & Bio (Col 1-5) */}
          <div className="md:col-span-5 space-y-4">
            <a href="#hero" className="font-extrabold text-2xl tracking-wider bg-gradient-to-r from-cyan via-purple to-pink bg-clip-text text-transparent inline-flex items-center gap-2.5">
              <span className="w-3 h-3 rounded-full bg-cyan inline-block" style={{ boxShadow: '0 0 10px #00f2fe' }} />
              Tanuj Warwade
            </a>
            <p className="text-text-secondary text-sm leading-relaxed max-w-md">
              AI & Machine Learning Engineering Student. Passionate about building intelligent algorithms, predictive models, and high-performance modern web applications.
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for Internships & Projects
            </div>
          </div>

          {/* Quick Links (Col 6-8) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-text-secondary">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-text-muted hover:text-cyan transition-colors duration-200 inline-block font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Socials (Col 9-12) */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-text-secondary">
              Connect With Me
            </h4>
            <p className="text-text-muted text-sm">
              Feel free to reach out for collaborations or project discussions.
            </p>
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-2xl flex items-center justify-center border transition-colors hover:text-cyan hover:border-cyan"
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    borderColor: 'var(--border-color)',
                    color: 'var(--text-secondary)'
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

        </div>

        {/* Bottom copyright and Scroll-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-text-muted font-medium">
          <div className="flex items-center gap-1.5 flex-wrap justify-center sm:justify-start">
            &copy; {new Date().getFullYear()} <span className="font-bold text-cyan">Tanuj Warwade</span>. All rights reserved.
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="font-mono text-xs text-text-secondary hover:text-cyan flex items-center gap-2 px-4 py-2 rounded-full border transition-colors cursor-pointer group"
            style={{
              backgroundColor: 'rgba(255,255,255,0.03)',
              borderColor: 'var(--border-color)'
            }}
          >
            <span>Back to Top</span>
            <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
