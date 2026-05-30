import React from 'react';

const AICore = () => {
  return (
    <div className="relative w-full max-w-[450px] aspect-square mx-auto flex items-center justify-center select-none group">
      
      {/* Ambient Outer Glow Blob */}
      <div className="absolute w-[280px] h-[280px] rounded-full bg-gradient-to-r from-cyan/15 to-purple/15 blur-[60px] group-hover:from-cyan/25 group-hover:to-purple/25 group-hover:scale-110 transition-all duration-700"></div>

      {/* 3D Gyroscopic Coaxial Rings */}
      {/* Outer Ring */}
      <div className="absolute w-[360px] h-[360px] rounded-full border border-dashed border-cyan/20 group-hover:border-cyan/40 animate-[spin_20s_linear_infinite] transition-colors duration-500 flex items-center justify-center">
        <span className="absolute -top-1 w-2 h-2 rounded-full bg-cyan shadow-[0_0_10px_#00f2fe]"></span>
        <span className="absolute -bottom-1 w-2 h-2 rounded-full bg-cyan shadow-[0_0_10px_#00f2fe]"></span>
      </div>

      {/* Middle Ring (Rotated 45deg) */}
      <div className="absolute w-[290px] h-[290px] rounded-full border border-dashed border-purple/25 group-hover:border-purple/50 animate-[spin_15s_linear_infinite_reverse] transition-colors duration-500 flex items-center justify-center" style={{ transform: 'rotateX(55deg) rotateY(45deg)' }}>
        <span className="absolute -left-1 w-1.5 h-1.5 rounded-full bg-purple shadow-[0_0_10px_#9d4edd]"></span>
        <span className="absolute -right-1 w-1.5 h-1.5 rounded-full bg-purple shadow-[0_0_10px_#9d4edd]"></span>
      </div>

      {/* Inner Ring (Rotated -45deg) */}
      <div className="absolute w-[220px] h-[220px] rounded-full border border-dotted border-cyan/30 group-hover:border-cyan/60 animate-[spin_10s_linear_infinite] transition-colors duration-500" style={{ transform: 'rotateX(55deg) rotateY(-45deg)' }}>
      </div>

      {/* Glowing Central AI Core Robot */}
      <div className="absolute w-[170px] h-[170px] rounded-full bg-neutral-950/85 border border-cyan/20 backdrop-blur-md flex items-center justify-center shadow-[0_0_40px_rgba(0,242,254,0.15)] group-hover:shadow-[0_0_55px_rgba(0,242,254,0.3)] group-hover:border-cyan/40 group-hover:scale-105 transition-all duration-500">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan/20 via-transparent to-purple/20 opacity-80"></div>
        <svg viewBox="0 0 100 100" className="relative w-[110px] h-[110px] text-cyan drop-shadow-[0_0_20px_rgba(0,242,254,0.6)] animate-pulse-slow">
          <circle cx="50" cy="50" r="40" fill="#041019" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.35" />

          {/* Robot head */}
          <rect x="26" y="28" width="48" height="44" rx="10" ry="10" fill="#081823" stroke="currentColor" strokeWidth="1.5" />
          <rect x="38" y="44" width="10" height="10" rx="3" fill="#7dd3fc" />
          <rect x="52" y="44" width="10" height="10" rx="3" fill="#7dd3fc" />
          <path d="M38 62 C44 70, 56 70, 62 62" stroke="#7dd3fc" strokeWidth="1.5" fill="none" strokeLinecap="round" />
          <circle cx="50" cy="38" r="3" fill="#7dd3fc" />

          {/* Antenna */}
          <line x1="50" y1="22" x2="50" y2="10" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
          <circle cx="50" cy="8" r="2" fill="#7dd3fc" />

          {/* Circuit connections */}
          <line x1="26" y1="55" x2="14" y2="42" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="74" y1="55" x2="86" y2="42" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
          <line x1="50" y1="72" x2="50" y2="86" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
          <circle cx="14" cy="42" r="2" fill="#7dd3fc" />
          <circle cx="86" cy="42" r="2" fill="#7dd3fc" />
          <circle cx="50" cy="86" r="2" fill="#7dd3fc" />
        </svg>
        <span className="absolute bottom-3 text-[10px] text-text-muted uppercase tracking-[0.21em]">
          AI CORE BOT
        </span>
      </div>

      {/* Floating Interactive Tech Badges */}
      {/* Badge 1: Top-Right */}
      <div className="absolute top-[10%] right-[5%] font-mono text-[9px] px-2 py-0.5 rounded bg-cyan/5 border border-cyan/25 text-cyan shadow-[0_0_8px_rgba(0,242,254,0.15)] animate-[bounce_4s_ease-in-out_infinite] flex items-center gap-1 select-none">
        <span className="w-1 h-1 rounded-full bg-cyan inline-block animate-ping"></span>
        SYS_CORE: ACTIVE
      </div>

      {/* Badge 2: Bottom-Left */}
      <div className="absolute bottom-[12%] left-[3%] font-mono text-[9px] px-2 py-0.5 rounded bg-purple/5 border border-purple/25 text-purple shadow-[0_0_8px_rgba(157,78,221,0.15)] animate-[bounce_5s_ease-in-out_infinite] flex items-center gap-1 select-none" style={{ animationDelay: '1s' }}>
        <span className="w-1 h-1 rounded-full bg-purple inline-block"></span>
        MODEL: DNN_v4.2
      </div>

      {/* Badge 3: Floating Subtitle */}
      <div className="absolute bottom-[2%] right-[15%] font-mono text-[8px] text-text-muted hover:text-cyan transition-colors select-none">
        [EPOCH_COUNT: 12500/12500]
      </div>

    </div>
  );
};

export default AICore;
