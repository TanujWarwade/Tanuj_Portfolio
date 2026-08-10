import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('Initializing Core Engine...');
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    // Check local storage / document theme state
    if (typeof window !== 'undefined') {
      const stored = window.localStorage.getItem('theme');
      if (stored === 'light' || document.documentElement.classList.contains('light-mode')) {
        setIsLightMode(true);
      } else {
        setIsLightMode(false);
      }
    }
  }, []);

  useEffect(() => {
    const statusMessages = [
      'Initializing Core Engine...',
      'Loading Neural Visuals...',
      'Configuring 3D Assets...',
      'Optimizing Cyber Aesthetics...',
      'System Ready.'
    ];

    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 3) + 1;
      
      if (currentProgress >= 100) {
        currentProgress = 100;
        setProgress(100);
        setStatusText('System Ready.');
        clearInterval(interval);
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 800);
      } else {
        setProgress(currentProgress);
        const index = Math.min(
          Math.floor((currentProgress / 100) * statusMessages.length),
          statusMessages.length - 2
        );
        setStatusText(statusMessages[index]);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center select-none px-5 transition-colors duration-300"
      style={{
        backgroundColor: isLightMode ? '#f0f4ff' : '#040409',
        color: isLightMode ? '#0f172a' : '#f8fafc',
      }}
    >
      {/* Background ambient glow */}
      <div 
        className="absolute w-[450px] h-[450px] rounded-full blur-[140px] pointer-events-none"
        style={{
          background: isLightMode 
            ? 'radial-gradient(circle, rgba(0,242,254,0.15) 0%, rgba(148,163,184,0.15) 70%, transparent 100%)'
            : 'radial-gradient(circle, rgba(0,242,254,0.15) 0%, rgba(157,78,221,0.12) 70%, transparent 100%)'
        }}
      />

      <div className="relative z-10 flex flex-col items-center max-w-sm w-full text-center">
        
        {/* Glowing Logo Icon */}
        <motion.div
          animate={{ scale: [1, 1.08, 1], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 border"
          style={{
            backgroundColor: isLightMode ? 'rgba(255,255,255,0.8)' : 'rgba(0,242,254,0.1)',
            borderColor: isLightMode ? 'rgba(148,163,184,0.4)' : 'rgba(0,242,254,0.4)',
            boxShadow: isLightMode ? '0 8px 24px rgba(15,23,42,0.08)' : '0 0 30px rgba(0,242,254,0.3)',
          }}
        >
          <span className="font-extrabold text-2xl tracking-tighter bg-gradient-to-r from-cyan via-purple to-pink bg-clip-text text-transparent">
            TW
          </span>
        </motion.div>

        {/* Title */}
        <h2 className="text-xl font-extrabold tracking-wider bg-gradient-to-r from-cyan via-purple to-pink bg-clip-text text-transparent mb-2">
          Tanuj Warwade
        </h2>

        {/* Status text */}
        <p 
          className="font-mono text-xs mb-6 h-4 font-semibold"
          style={{ color: isLightMode ? '#64748b' : '#94a3b8' }}
        >
          {statusText}
        </p>

        {/* Progress Bar Container */}
        <div 
          className="w-full h-2 rounded-full overflow-hidden p-0.5 relative mb-4 border"
          style={{
            backgroundColor: isLightMode ? 'rgba(148,163,184,0.2)' : 'rgba(255,255,255,0.1)',
            borderColor: isLightMode ? 'rgba(148,163,184,0.3)' : 'rgba(255,255,255,0.05)',
          }}
        >
          <motion.div
            className="h-full bg-gradient-to-r from-cyan via-purple to-pink rounded-full"
            style={{ 
              width: `${progress}%`,
              boxShadow: isLightMode ? '0 0 10px rgba(0,242,254,0.5)' : '0 0 14px #00f2fe'
            }}
            transition={{ ease: 'easeOut' }}
          />
        </div>

        {/* Percentage Counter */}
        <div 
          className="font-mono text-xs font-extrabold tracking-widest"
          style={{ color: isLightMode ? '#0284c7' : '#00f2fe' }}
        >
          {progress}%
        </div>

      </div>
    </motion.div>
  );
};

export default Preloader;
