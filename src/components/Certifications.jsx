import React, { useState } from 'react';
import { Award, X, ExternalLink, ShieldCheck, Calendar, FileText } from 'lucide-react';

const Certifications = () => {
  const [activeCert, setActiveCert] = useState(null);

  const list = [
    { 
      name: 'C & C++ Programming Basics', 
      issuer: 'Simplilearn',
      id: 'SL-CPP-7749',
      date: 'October 2024',
      hash: '0x8F9C2...77C9',
      skills: 'C/C++ Foundation, Basic Logic, Loop Structures'
    },
    { 
      name: 'HTML, CSS & JavaScript Essential', 
      issuer: 'Cisco Networking Academy',
      id: 'CS-WEB-9021',
      date: 'December 2025',
      hash: '0x1C2F7...90D8',
      skills: 'Semantic HTML5, CSS Flexbox/Grid, Basic DOM scripting'
    },
    { 
      name: 'Python Essential 1', 
      issuer: 'Cisco Networking Academy',
      id: 'CS-PY-4402',
      date: 'January 2026',
      hash: '0x3D8B9...44E1',
      skills: 'Data Types, Control Flow, Lists, Basic Functions'
    },
    { 
      name: 'Data Structure in C++ Course', 
      issuer: 'Scaler',
      id: 'SC-DSA-8821',
      date: 'March 2026',
      hash: '0x9E2F0...88C2',
      skills: 'Time Complexity, Sorting, Pointers, Linked Lists, Trees'
    }
  ];

  return (
    <section id="certifications" className="reveal active px-5 py-6 max-w-[1200px] mx-auto text-left">
      <div className="glass-card p-8">
        <span className="font-mono text-cyan text-sm uppercase tracking-wider block mb-2.5">
          Verified Badges
        </span>
        
        <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white flex items-center gap-3">
          <Award className="text-cyan drop-shadow-[0_0_10px_rgba(0,242,254,0.4)]" size={32} />
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {list.map((cert, idx) => (
            <div 
              key={idx} 
              onClick={() => setActiveCert(cert)}
              className="bg-white/2 border border-white/4 rounded-lg p-5 flex flex-col justify-between hover:border-cyan/35 hover:bg-cyan/3 hover:-translate-y-1 transition-all duration-300 group cursor-pointer"
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-cyan/5 border border-cyan/15 flex items-center justify-center text-cyan group-hover:scale-110 transition-transform mb-4">
                  <Award size={20} />
                </div>
                <h3 className="text-sm font-bold text-white group-hover:text-cyan transition-colors min-h-[40px] flex items-center">
                  {cert.name}
                </h3>
                <p className="text-xs text-text-muted mt-2 font-semibold">
                  {cert.issuer}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-between text-[10px] font-mono text-text-muted group-hover:text-cyan transition-colors">
                <span>{cert.date}</span>
                <span className="underline group-hover:no-underline">View Certificate</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Digital Certificate Viewer Modal Overlay */}
      {activeCert && (
        <div className="fixed inset-0 bg-neutral-950/85 backdrop-blur-md z-250 flex items-center justify-center p-5 select-none animate-fadeIn">
          
          {/* Certificate Container */}
          <div className="w-full max-w-[700px] bg-[#0c0f1d] border border-cyan/30 rounded-2xl p-6 sm:p-10 relative shadow-[0_0_60px_rgba(0,242,254,0.15)] flex flex-col justify-between overflow-hidden before:absolute before:top-0 before:left-0 before:w-full before:h-1.5 before:bg-gradient-to-r before:from-cyan before:to-purple">
            
            {/* Ambient inner glow */}
            <div className="absolute top-10 right-10 w-[200px] h-[200px] rounded-full bg-gradient-to-r from-cyan/5 to-purple/5 blur-[50px] pointer-events-none"></div>

            {/* Modal Exit */}
            <button 
              onClick={() => setActiveCert(null)}
              className="absolute top-5 right-5 text-text-muted hover:text-white cursor-pointer transition-colors p-1"
              aria-label="Close Certificate Modal"
            >
              <X size={20} />
            </button>

            {/* Certificate Header Banner */}
            <div className="flex justify-between items-start border-b border-white/5 pb-5 select-none">
              <div>
                <span className="font-mono text-[9px] text-cyan block mb-1">CREDENTIAL STATUS: VERIFIED</span>
                <div className="flex items-center gap-1.5 text-white font-extrabold text-lg tracking-widest bg-gradient-to-r from-cyan to-purple bg-clip-text text-transparent">
                  <ShieldCheck size={18} className="text-cyan drop-shadow-[0_0_6px_#00f2fe]" />
                  TANUJ.AI
                </div>
              </div>
              <div className="text-right font-mono text-[9px] text-text-muted">
                <div>CERTIFICATE ID: {activeCert.id}</div>
                <div>HASH: {activeCert.hash}</div>
              </div>
            </div>

            {/* Certificate Core Content body */}
            <div className="py-8 sm:py-12 text-center select-text">
              <span className="font-mono text-xs uppercase tracking-widest text-text-muted block mb-4">
                Certificate of Completion
              </span>
              
              <p className="text-sm text-text-secondary mb-6 font-medium">
                This is to officially verify that
              </p>

              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-cyan to-purple bg-clip-text text-transparent mb-6 inline-block py-1">
                Tanuj Warwade
              </h3>

              <p className="text-sm text-text-secondary max-w-[480px] mx-auto leading-relaxed mb-8">
                has successfully completed all curricular requirements, tests, and practical evaluations designated by the review panel of <strong className="text-white">{activeCert.issuer}</strong> for the course:
              </p>

              <h4 className="text-lg sm:text-xl font-bold text-white mb-2 max-w-[500px] mx-auto drop-shadow-[0_0_8px_rgba(0,242,254,0.1)]">
                {activeCert.name}
              </h4>
              
              <div className="inline-flex flex-wrap justify-center gap-1.5 max-w-[500px] mx-auto mt-3">
                {activeCert.skills.split(', ').map((skill, sIdx) => (
                  <span key={sIdx} className="font-mono text-[8px] sm:text-[9px] px-2 py-0.5 rounded bg-white/2 border border-white/5 text-text-muted">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Certificate Footer Signature Layer */}
            <div className="flex justify-between items-end border-t border-white/5 pt-5 select-none">
              
              {/* Date Block */}
              <div className="text-left font-mono text-xs text-text-muted flex items-center gap-1.5">
                <Calendar size={14} className="text-cyan" />
                <span>Issue Date: <strong className="text-white">{activeCert.date}</strong></span>
              </div>

              {/* Gold Verification Seal SVG */}
              <div className="hidden sm:flex flex-col items-center relative -top-3">
                <svg viewBox="0 0 100 100" className="w-[70px] h-[70px] text-cyan drop-shadow-[0_0_12px_rgba(0,242,254,0.4)] animate-pulse-slow">
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5 3" />
                  <circle cx="50" cy="50" r="34" fill="none" stroke="currentColor" strokeWidth="1" />
                  <path d="M50 20 L58 38 L77 38 L62 50 L68 68 L50 56 L32 68 L38 50 L23 38 L42 38 Z" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1" />
                  <text x="50" y="88" textAnchor="middle" fill="currentColor" fontSize="6" fontWeight="bold" fontFamily="monospace" letterSpacing="1">SECURE</text>
                </svg>
              </div>

              {/* Signature Block */}
              <div className="text-right">
                <div className="font-serif italic text-sm text-cyan pr-2 select-none" style={{ fontFamily: 'Georgia, serif' }}>
                  Verification Board
                </div>
                <div className="w-[110px] h-[1px] bg-white/10 mt-1 mb-1"></div>
                <div className="font-mono text-[8px] text-text-muted">
                  CREDENTIAL REGISTRY
                </div>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Certifications;
