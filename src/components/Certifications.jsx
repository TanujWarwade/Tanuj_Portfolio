import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, ShieldCheck, Calendar, ExternalLink, FileCheck } from 'lucide-react';

const Certifications = () => {
  const [activeCert, setActiveCert] = useState(null);

  const list = [
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
      color: '#8b5cf6',
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
      color: '#8b5cf6',
      id: 'CS-PY-4402',
      date: '28 June 2025',
      skills: 'Data Types, Control Flow, Lists, Functions',
      file: 'misc-certificate-2.pdf'
    },
    {
      name: 'JavaScript Essentials 1',
      issuer: 'Cisco Networking Academy',
      color: '#f59e0b',
      id: 'CS-JS-4501',
      date: '24 April 2025',
      skills: 'JavaScript Basics, DOM Interaction, Functions',
      file: 'misc-certificate-1.pdf'
    }
  ];

  return (
    <section id="certifications" className="relative px-5 py-20 overflow-hidden">
      <div className="absolute left-0 top-16 h-36 w-36 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-14 h-44 w-44 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="relative z-10 max-w-[1200px] mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-indigo-500 text-xs uppercase tracking-wider block font-semibold mb-2"
        >
          Verified Badges
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-extrabold mb-4 gradient-text-1"
        >
          Certifications &amp; Credentials
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="opacity-80 max-w-[640px] mx-auto mb-14 text-base leading-relaxed"
        >
          Official certificates and technical training badges earned from recognized industry institutions and learning platforms.
        </motion.p>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
        {list.map((cert, idx) => (
          <motion.button
            key={idx}
            type="button"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
            onClick={() => setActiveCert(cert)}
            whileHover={{ y: -6, scale: 1.02 }}
            className="cert-card group text-left"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-3">
                <span
                  className="cert-pill"
                  style={{ color: cert.color, borderColor: `${cert.color}33`, backgroundColor: `${cert.color}18` }}
                >
                  Verified
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold leading-tight group-hover:text-indigo-500 transition-colors">
                    {cert.name}
                  </h3>
                  <p className="text-sm opacity-70 mt-2">{cert.issuer}</p>
                </div>
              </div>
              <div className="w-12 h-12 rounded-2xl icon-box flex items-center justify-center shrink-0">
                <FileCheck size={24} style={{ color: cert.color }} />
              </div>
            </div>

            <div className="mt-5 flex flex-col gap-3 text-[11px] font-semibold opacity-80">
              <span>{cert.date}</span>
              <span>ID: {cert.id}</span>
            </div>

            <div className="mt-6 flex items-center justify-between gap-4 text-[11px] font-semibold opacity-90">
              <span className="text-indigo-500">View Details</span>
              <ExternalLink size={14} className="text-indigo-500" />
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveCert(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 backdrop-blur-md p-5"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-[680px] overflow-hidden rounded-3xl border p-6 sm:p-10 shadow-2xl"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-color)',
                color: 'var(--text-primary)'
              }}
            >
              <button
                onClick={() => setActiveCert(null)}
                className="absolute right-5 top-5 rounded-full p-2 opacity-60 transition-opacity hover:opacity-100"
                aria-label="Close Certificate Modal"
              >
                <X size={20} />
              </button>

              <div className="flex flex-col gap-4 border-b pb-4" style={{ borderColor: 'var(--border-color)' }}>
                <div className="flex items-center gap-3">
                  <div className="grid h-12 w-12 place-items-center rounded-3xl bg-gradient-to-br from-indigo-500 to-fuchsia-500 text-white">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] font-bold uppercase tracking-widest opacity-70 block">
                      CREDENTIAL STATUS
                    </span>
                    <h3 className="text-xl font-extrabold">Verified Certification</h3>
                  </div>
                </div>
                <div className="font-mono text-[11px] opacity-60">ID: {activeCert.id}</div>
              </div>

              <div className="py-8 text-center">
                <span className="font-mono text-xs uppercase tracking-[0.4em] opacity-60 block mb-3">
                  Certificate of Completion
                </span>
                <p className="text-sm opacity-80 mb-4 font-medium">This is to officially verify that</p>
                <h3 className="text-3xl font-extrabold tracking-tight mb-4 gradient-text-1">
                  Tanuj Warwade
                </h3>
                <p className="mx-auto max-w-[480px] text-sm opacity-75 leading-relaxed mb-6">
                  has successfully completed all curricular requirements designated by the review panel of <strong>{activeCert.issuer}</strong> for the course.
                </p>
                <h4 className="text-lg font-bold mb-3" style={{ color: activeCert.color }}>
                  {activeCert.name}
                </h4>
                <div className="mx-auto flex flex-wrap justify-center gap-2 max-w-[520px] mt-3">
                  {activeCert.skills.split(', ').map((skill, sIdx) => (
                    <span key={sIdx} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase opacity-80">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex flex-col gap-3 border-t pt-4 text-sm opacity-70" style={{ borderColor: 'var(--border-color)' }}>
                <div className="flex items-center gap-2">
                  <Calendar size={14} />
                  Issue Date: {activeCert.date}
                </div>
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.2em] opacity-60">
                  <span>Credential Registry</span>
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
