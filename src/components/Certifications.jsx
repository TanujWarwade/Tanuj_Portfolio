import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, ShieldCheck, Calendar, ExternalLink, FileCheck, Pause, Play, Sparkles } from 'lucide-react';

const Certifications = () => {
  const [activeCert, setActiveCert] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [showCertImage, setShowCertImage] = useState(false);

  const list = [
    {
      name: 'Introduction to Machine Learning',
      issuer: 'NPTEL (IIT Kharagpur)',
      color: '#a855f7',
      id: 'NPTEL26CS119S252800666',
      date: 'Jul - Sep 2026',
      score: '57%',
      scoreDetails: {
        assignments: '24.58 / 25',
        exam: '31.5 / 75',
        credits: '3 Credits',
        coordinator: 'Prof. Haimanti Banerji (IIT Kharagpur)'
      },
      skills: 'Machine Learning, Supervised Learning, Deep Learning, Model Evaluation',
      file: 'nptel-introduction-to-machine-learning.png',
      isImage: true
    },
    {
      name: 'Python Fundamentals',
      issuer: 'OnWingspan',
      color: '#06b6d4',
      id: 'OW-PY-7704',
      date: '20 July 2026',
      skills: 'Python Basics, Automation, Scripting',
      file: 'python-fundamentals.pdf'
    },
    {
      name: 'AWS DevOps Engineer',
      issuer: 'OnWingspan',
      color: '#f97316',
      id: 'AWS-DEV-1022',
      date: '19 July 2026',
      skills: 'Cloud Infrastructure, CI/CD, Automation',
      file: 'aws-devops-certificate.pdf'
    },
    {
      name: 'Deloitte Data Analyst',
      issuer: 'Deloitte',
      color: '#0ea5e9',
      id: 'DL-DA-2103',
      date: '01 July 2026',
      skills: 'Data Analysis, Excel, SQL, Reporting',
      file: 'deloitte-data-analyst.pdf'
    },
    {
      name: 'TATA Job Simulation',
      issuer: 'Tata Consultancy Services',
      color: '#22c55e',
      id: 'TATA-JS-5521',
      date: '04 July 2026',
      skills: 'Problem Solving, Team Collaboration, Case Study',
      file: 'tata-job-simulation.pdf'
    },
    {
      name: 'DSA in C++',
      issuer: 'Scaler',
      color: '#f59e0b',
      id: 'SC-DSA-8821',
      date: '18 May 2026',
      skills: 'Time Complexity, Data Structures, Pointers',
      file: 'dsa-in-cpp.pdf'
    },
    {
      name: 'Python for Data Science',
      issuer: 'NPTEL',
      color: '#10b981',
      id: 'NP-PY-5520',
      date: '23 April 2026',
      skills: 'Pandas, NumPy, Matplotlib, Data Analysis',
      file: 'python-for-data-science-certificate.pdf'
    },
    {
      name: 'CSS Essentials',
      issuer: 'Cisco Networking Academy',
      color: '#ec4899',
      id: 'CS-CSS-1102',
      date: '10 January 2026',
      skills: 'Flexbox, Grid, Responsive Styling, Animations',
      file: 'css-essentials-certificate.pdf'
    },
    {
      name: 'HTML Essentials',
      issuer: 'Cisco Networking Academy',
      color: '#06b6d4',
      id: 'CS-HTML-9021',
      date: '14 December 2025',
      skills: 'Semantic HTML5, Accessibility, Web Structure',
      file: 'html-essentials-certificate.pdf'
    },
    {
      name: 'C++ Essentials 1',
      issuer: 'Cisco Networking Academy',
      color: '#3b82f6',
      id: 'CS-CPP-7749',
      date: '03 November 2025',
      skills: 'C++ Syntax, Loops, Pointers, OOP Basics',
      file: 'c-essentials-1-certificate.pdf'
    },
    {
      name: 'Python Essentials 1',
      issuer: 'Cisco Networking Academy',
      color: '#14b8a6',
      id: 'CS-PY-4402',
      date: '28 June 2025',
      skills: 'Data Types, Control Flow, Lists, Functions',
      file: 'misc-certificate-2.pdf'
    },
    {
      name: 'JavaScript Essentials 1',
      issuer: 'Cisco Networking Academy',
      color: '#eab308',
      id: 'CS-JS-4501',
      date: '24 April 2025',
      skills: 'JavaScript Basics, DOM Interaction, Functions',
      file: 'misc-certificate-1.pdf'
    }
  ];

  // Duplicate items for infinite seamless horizontal loop
  const marqueeItems = [...list, ...list];

  // Pause track when manually paused, hovered, or when a certificate modal is opened
  const isMarqueePaused = isPaused || isHovered || Boolean(activeCert);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setActiveCert(null);
      }
    };
    if (activeCert) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeCert]);

  return (
    <section id="certifications" className="relative px-5 py-24 overflow-hidden scroll-mt-20">
      {/* Decorative ambient gradients */}
      <div className="absolute left-[-5%] top-20 h-72 w-72 rounded-full bg-cyan-500/8 blur-[90px] pointer-events-none" />
      <div className="absolute right-[-5%] bottom-16 h-80 w-80 rounded-full bg-purple-500/8 blur-[90px] pointer-events-none" />

      {/* Section Header */}
      <div className="relative z-10 max-w-[1200px] mx-auto text-center mb-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-3"
        >
          <span className="inline-flex items-center gap-2 font-mono text-cyan-400 text-[11px] uppercase tracking-[0.25em] font-bold px-4 py-1.5 rounded-full border border-cyan-500/25 bg-cyan-500/10 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Verified Credentials
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.55 }}
          className="text-4xl sm:text-5xl font-extrabold mb-4 gradient-text-1 leading-tight tracking-tight"
        >
          Certifications &amp; Credentials
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="opacity-75 max-w-[620px] mx-auto text-base leading-relaxed mb-6"
        >
          Official certificates and technical training badges earned from recognized industry institutions, IITs, and global learning platforms.
        </motion.p>

        {/* Marquee status & control toolbar */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-4">
          <button
            type="button"
            onClick={() => setIsPaused(!isPaused)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium border transition-all duration-300 hover:scale-105 active:scale-95 shadow-sm"
            style={{
              backgroundColor: 'var(--bg-card)',
              borderColor: 'var(--border-color)',
              color: 'var(--text-primary)'
            }}
            title={isPaused ? "Resume automated scroll" : "Pause automated scroll"}
          >
            {isPaused ? (
              <>
                <Play size={13} className="text-emerald-400 fill-emerald-400" />
                <span>Resume Scroll</span>
              </>
            ) : (
              <>
                <Pause size={13} className="text-indigo-400 fill-indigo-400" />
                <span>Pause Scroll</span>
              </>
            )}
          </button>

        </div>
      </div>

      {/* Single Row Floating Marquee Container */}
      <div
        className="relative w-full overflow-hidden py-10 sm:py-14 select-none"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={() => setIsHovered(true)}
        onTouchEnd={() => setIsHovered(false)}
      >
        {/* Soft edge gradient fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-36 z-20 cert-fade-edge-left" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-36 z-20 cert-fade-edge-right" />

        {/* Marquee Track with alternating floating wrappers */}
        <div className={`cert-marquee-track ${isMarqueePaused ? 'is-paused' : ''}`}>
          {marqueeItems.map((cert, idx) => {
            const floatClass = idx % 3 === 0 ? 'cert-floating-1' : idx % 3 === 1 ? 'cert-floating-2' : 'cert-floating-3';
            return (
              <div
                key={`${cert.id}-${idx}`}
                className={`cert-card-wrapper px-3.5 shrink-0 ${floatClass}`}
                style={{ width: '350px' }}
              >
                <motion.button
                  type="button"
                  whileHover={{ y: -6, scale: 1.025, boxShadow: `0 14px 34px ${cert.color}30` }}
                  onClick={() => setActiveCert(cert)}
                  className="cert-card h-full flex flex-col justify-between text-left group transition-all"
                  style={{ minHeight: '260px' }}
                >
                  <div>
                    {/* Header: Verified Pill, Score, and Icon */}
                    <div className="flex items-start justify-between gap-3 mb-3.5">
                      <div className="flex flex-wrap items-center gap-1.5">
                        <span
                          className="cert-pill"
                          style={{
                            color: cert.color,
                            borderColor: `${cert.color}40`,
                            backgroundColor: `${cert.color}15`
                          }}
                        >
                          Verified
                        </span>
                        {cert.score && (
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                            Score {cert.score}
                          </span>
                        )}
                      </div>
                      <div className="w-10 h-10 rounded-2xl icon-box flex items-center justify-center shrink-0">
                        <FileCheck size={20} style={{ color: cert.color }} />
                      </div>
                    </div>

                    {/* Course Title and Issuer */}
                    <h3 className="text-base font-bold leading-snug group-hover:text-indigo-400 transition-colors line-clamp-2 min-h-[44px]">
                      {cert.name}
                    </h3>
                    <p className="text-xs opacity-75 mt-1 font-medium">{cert.issuer}</p>
                  </div>

                  {/* Card Footer: Date, ID and Action link */}
                  <div className="mt-5 pt-3.5 border-t border-white/5 space-y-2.5">
                    <div className="flex items-center justify-between text-[11px] font-mono opacity-70">
                      <span>{cert.date}</span>
                      <span className="truncate max-w-[140px] text-right font-semibold">ID: {cert.id}</span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] font-semibold pt-1">
                      <span className="text-indigo-400 group-hover:underline">View Credential</span>
                      <ExternalLink size={13} className="text-indigo-400 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </motion.button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Interactive Certificate Inspection Modal */}
      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => { setActiveCert(null); setShowCertImage(false); }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-md p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[680px] max-h-[90vh] overflow-y-auto rounded-3xl border p-6 sm:p-8 shadow-2xl relative"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-primary)'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => { setActiveCert(null); setShowCertImage(false); }}
                className="absolute right-5 top-5 rounded-full p-2 opacity-60 transition-opacity hover:opacity-100 hover:bg-white/5 cursor-pointer"
                aria-label="Close Certificate Modal"
              >
                <X size={20} />
              </button>

              {/* Modal Header */}
              <div className="flex flex-col gap-3 border-b pb-4 pr-8" style={{ borderColor: 'var(--border-color)' }}>
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white shadow-md">
                    <ShieldCheck size={22} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest opacity-70 block">
                      CREDENTIAL STATUS: VERIFIED
                    </span>
                    <h3 className="text-xl font-extrabold">{activeCert.name}</h3>
                  </div>
                </div>
                <div className="font-mono text-[11px] opacity-60">Credential ID: {activeCert.id}</div>
              </div>

              {/* Modal Body */}
              <div className="py-6 text-center">
                <span className="font-mono text-xs uppercase tracking-[0.35em] opacity-60 block mb-2">
                  Certificate of Completion
                </span>
                <p className="text-sm opacity-80 mb-2 font-medium">This is to officially verify that</p>
                <h3 className="text-3xl font-extrabold tracking-tight mb-3 gradient-text-1">
                  Tanuj Warwade
                </h3>
                <p className="mx-auto max-w-[500px] text-sm opacity-75 leading-relaxed mb-5">
                  has successfully completed all curricular requirements designated by the review panel of <strong>{activeCert.issuer}</strong>.
                </p>

                {/* Score breakdown if available (e.g., NPTEL ML Certificate) */}
                {activeCert.scoreDetails && (
                  <div className="mx-auto max-w-[520px] rounded-2xl bg-indigo-500/10 border border-indigo-500/20 p-4 mb-5 text-left">
                    <div className="flex items-center justify-between mb-2 pb-2 border-b border-indigo-500/15">
                      <span className="font-mono text-xs uppercase font-bold text-indigo-400">Consolidated Score</span>
                      <span className="text-base font-extrabold text-emerald-400">{activeCert.score}</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs">
                      <div>
                        <span className="opacity-60 block text-[10px]">Online Assignments</span>
                        <span className="font-mono font-bold text-white/90">{activeCert.scoreDetails.assignments}</span>
                      </div>
                      <div>
                        <span className="opacity-60 block text-[10px]">Proctored Exam</span>
                        <span className="font-mono font-bold text-white/90">{activeCert.scoreDetails.exam}</span>
                      </div>
                      <div>
                        <span className="opacity-60 block text-[10px]">Credits Recommended</span>
                        <span className="font-mono font-bold text-white/90">{activeCert.scoreDetails.credits}</span>
                      </div>
                    </div>
                    {activeCert.scoreDetails.coordinator && (
                      <div className="mt-2.5 pt-2 border-t border-indigo-500/15 text-[11px] opacity-75">
                        Coordinator: <strong>{activeCert.scoreDetails.coordinator}</strong>
                      </div>
                    )}
                  </div>
                )}

                {/* Course Skills Badges */}
                <div className="mx-auto flex flex-wrap justify-center gap-2 max-w-[520px] mb-6">
                  {activeCert.skills.split(', ').map((skill, sIdx) => (
                    <span key={sIdx} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase opacity-80 font-mono">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Toggle Certificate Image Button (only for image certs) */}
                {activeCert.file && activeCert.isImage && (
                  <button
                    type="button"
                    onClick={() => setShowCertImage(prev => !prev)}
                    className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-5 mb-4 rounded-xl font-semibold text-xs sm:text-sm border transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                    style={{
                      borderColor: `${activeCert.color || '#a855f7'}50`,
                      backgroundColor: `${activeCert.color || '#a855f7'}12`,
                      color: activeCert.color || '#a855f7'
                    }}
                  >
                    <span>{showCertImage ? 'Hide Certificate' : 'Show Certificate'}</span>
                    <ExternalLink size={14} />
                  </button>
                )}

                {/* Certificate Image — only shown after button click */}
                <AnimatePresence>
                  {activeCert.file && activeCert.isImage && showCertImage && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginBottom: 0 }}
                      animate={{ opacity: 1, height: 'auto', marginBottom: '1.25rem' }}
                      exit={{ opacity: 0, height: 0, marginBottom: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 p-2 shadow-inner"
                    >
                      <img
                        src={`/certificates/${activeCert.file}`}
                        alt={activeCert.name}
                        className="w-full h-auto max-h-[280px] object-contain rounded-xl mx-auto"
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Document Action Button */}
                {activeCert.file && (
                  <a
                    href={`/certificates/${activeCert.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-xl font-semibold text-xs sm:text-sm bg-gradient-to-r from-indigo-500 to-fuchsia-500 text-white shadow-lg shadow-indigo-500/25 hover:opacity-95 transition-all hover:scale-[1.01] active:scale-[0.99] cursor-pointer"
                  >
                    <span>
                      {activeCert.isImage ? 'Open Full Certificate ↗' : 'View Official Certificate (PDF) ↗'}
                    </span>
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>

              {/* Modal Footer */}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-t pt-4 text-xs opacity-70" style={{ borderColor: 'var(--border-color)' }}>
                <div className="flex items-center gap-2">
                  <Calendar size={14} className="text-indigo-400" />
                  <span>Issue Date: <strong>{activeCert.date}</strong></span>
                </div>
                <div className="flex items-center gap-4 uppercase tracking-[0.15em] text-[10px] opacity-70 font-mono">
                  <span>Credential Registry</span>
                  <span>•</span>
                  <span>Verification Board</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
