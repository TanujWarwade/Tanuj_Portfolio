import React from 'react';
import { motion } from 'framer-motion';

const AICore = () => {
  return (
    <div className="flex items-center justify-center select-none py-4 lg:py-0">
      <div className="relative flex items-center justify-center">
        
        {/* Soft background ambient glow */}
        <div 
          className="absolute inset-0 rounded-full blur-3xl opacity-50 pointer-events-none"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(0,242,254,0.2) 0%, rgba(157,78,221,0.15) 60%, transparent 80%)' }}
        />

        {/* Clean Photo Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.5 }}
          className="relative z-10 w-full max-w-[480px] max-h-[580px] flex items-center justify-center"
        >
          <img 
            src="/tanuj-transparent.png" 
            alt="Tanuj Warwade"
            className="w-full h-full object-contain pointer-events-none"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 100%)',
              filter: 'drop-shadow(0 10px 25px rgba(0,242,254,0.2))'
            }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/tanuj-photo.png';
            }}
          />
        </motion.div>

      </div>
    </div>
  );
};

export default AICore;
