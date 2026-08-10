import React from 'react';
import { motion } from 'framer-motion';

const SkillLogos = {
  Python: () => (
    <svg className="w-7 h-7 shrink-0" viewBox="0 0 128 128">
      <path fill="#3776AB" d="M63.02 0c-32.32 0-30.43 14.02-30.43 14.02l.04 14.54h30.93v4.39H20.73S0 30.64 0 63.38c0 32.73 18.07 31.57 18.07 31.57h10.79v-15.2s-.58-18.07 17.78-18.07h30.43s16.91.29 16.91-16.33V14.02S96.86 0 63.02 0zm-16.6 9.68a6.11 6.11 0 1 1 0 12.22 6.11 6.11 0 0 1 0-12.22z"/>
      <path fill="#FFD43B" d="M64.98 128c32.32 0 30.43-14.02 30.43-14.02l-.04-14.54H64.44v-4.39h42.83s20.73 2.31 20.73-30.43c0-32.73-18.07-31.57-18.07-31.57H119.1v15.2s.58 18.07-17.78 18.07H70.89s-16.91-.29-16.91 16.33v31.33S51.14 128 64.98 128zm16.6-9.68a6.11 6.11 0 1 1 0-12.22 6.11 6.11 0 0 1 0 12.22z"/>
    </svg>
  ),
  CPP: () => (
    <svg className="w-7 h-7 shrink-0" viewBox="0 0 128 128">
      <path fill="#00599C" d="M117.5 38.5L64 7.6 10.5 38.5v61.8l53.5 30.9 53.5-30.9V38.5z"/>
      <path fill="#FFFFFF" d="M64 16.5l45.8 26.5v53L64 122.5 18.2 96v-53L64 16.5m0-8.9L8.8 39.6v58.8L64 129.4l55.2-31V39.6L64 7.6z"/>
      <path fill="#00599C" d="M49.6 77.2c-7.3 0-12.2-5.5-12.2-13.2s4.9-13.2 12.2-13.2c5.1 0 9.1 2.8 10.9 7.2h-6.7c-1-1.8-2.5-2.8-4.2-2.8-3.9 0-5.7 3.5-5.7 8.8s1.8 8.8 5.7 8.8c1.7 0 3.2-1 4.2-2.8h6.7c-1.8 4.4-5.8 7.2-10.9 7.2zm27-16.2h-4.2v-4.2h-4.2v4.2h-4.2v4.2h4.2v4.2h4.2v-4.2h4.2v-4.2z"/>
    </svg>
  ),
  C: () => (
    <svg className="w-7 h-7 shrink-0" viewBox="0 0 128 128">
      <path fill="#A8B9CC" d="M117.5 38.5L64 7.6 10.5 38.5v61.8l53.5 30.9 53.5-30.9V38.5z"/>
      <path fill="#283593" d="M64 16.5l45.8 26.5v53L64 122.5 18.2 96v-53L64 16.5m0-8.9L8.8 39.6v58.8L64 129.4l55.2-31V39.6L64 7.6z"/>
      <path fill="#FFFFFF" d="M64 47.8c-10 0-16.7 7.5-16.7 18s6.7 18 16.7 18c7 0 12.5-3.8 15-9.8h-9.2c-1.4 2.5-3.4 3.8-5.8 3.8-5.3 0-7.8-4.8-7.8-12s2.5-12 7.8-12c2.4 0 4.4 1.4 5.8 3.8h9.2c-2.5-6-8-9.8-15-9.8z"/>
    </svg>
  ),
  HTML5: () => (
    <svg className="w-7 h-7 shrink-0" viewBox="0 0 128 128">
      <path fill="#E44D26" d="M18.6 116.7L8.7 6h110.6l-9.9 110.7L64 128l-45.4-11.3z"/>
      <path fill="#F16529" d="M64 14.8v101.4l37.2-10.3 8.3-92.8H64z"/>
      <path fill="#EBEBEB" d="M64 53.7H47.1l-1.2-13.4H64V26.9H30.5l.4 4.5 3.1 35.7H64v-13.4zm0 33l-14.8-4-1-11.3H34.7l1.9 21.6L64 100.3V86.7z"/>
      <path fill="#FFFFFF" d="M64 53.7h16.9l-1.6 17.7-15.3 4.1v13.6l27.9-7.5 3.1-34.6.4-4.5H64v11.2zm0-26.8v13.4h31.2l1.2-13.4H64z"/>
    </svg>
  ),
  CSS3: () => (
    <svg className="w-7 h-7 shrink-0" viewBox="0 0 128 128">
      <path fill="#1572B6" d="M18.6 116.7L8.7 6h110.6l-9.9 110.7L64 128l-45.4-11.3z"/>
      <path fill="#33A9DC" d="M64 14.8v101.4l37.2-10.3 8.3-92.8H64z"/>
      <path fill="#EBEBEB" d="M64 53.6H47.1l-1.2-13.4H64V26.8H30.5l.4 4.5 3.1 35.7H64v-13.4zm0 33l-14.8-4-1-11.3H34.7l1.9 21.6L64 100.3V86.6z"/>
      <path fill="#FFFFFF" d="M64 53.6h32.1l1.2-13.4H64V26.8h46.2l-.4 4.5-3.1 35.7H64v-13.4zm0 33v13.7l27.9-7.5 1.9-21.6H80.5l-1 11.3-15.5 4.1z"/>
    </svg>
  ),
  JavaScript: () => (
    <svg className="w-7 h-7 shrink-0" viewBox="0 0 128 128">
      <path fill="#F7DF1E" d="M0 0h128v128H0z"/>
      <path fill="#000000" d="M67.3 104.3c3.2 5.5 8.1 9.4 16.3 9.4 6.8 0 11.2-3.4 11.2-8.1 0-5.7-4.5-7.7-12.2-11l-4.2-1.8c-12.1-5.1-20.1-11.4-20.1-25.1 0-14 10.7-24.6 27.5-24.6 12.1 0 20.3 4.2 26.2 14.6l-11.8 7.6c-3-5.2-6.5-7.3-14.4-7.3-5.3 0-8.8 2.5-8.8 6.1 0 4.2 3.4 6.1 10.4 9.1l4.2 1.8c14.6 6.3 22.1 12.4 22.1 26 0 15.3-12.1 25.8-30.2 25.8-17.1 0-27.1-8.1-32.9-19.1l16.7-9.4zM24.7 104.9c3.2 5.6 7.4 9.4 14.7 9.4 7.3 0 11.9-3.7 11.9-12.7V44.4h19v57.6c0 19.3-10.9 27.5-28.7 27.5-14.6 0-24.1-7.4-29-17l12.1-7.6z"/>
    </svg>
  ),
  Tailwind: () => (
    <svg className="w-7 h-7 shrink-0" viewBox="0 0 128 128">
      <path fill="#06B6D4" d="M64 19.2c-17.067 0-27.733 8.533-32 25.6 6.4-8.533 13.867-11.733 22.4-9.6 4.87 1.217 8.35 4.75 12.203 8.663C72.888 50.218 80.144 57.6 96 57.6c17.067 0 27.733-8.533 32-25.6-6.4 8.533-13.867 11.733-22.4 9.6-4.87-1.217-8.35-4.75-12.203-8.663C87.112 26.582 79.856 19.2 64 19.2zm-32 38.4c-17.067 0-27.733 8.533-32 25.6 6.4-8.533 13.867-11.733 22.4-9.6 4.87 1.217 8.35 4.75 12.203 8.663C50.888 88.618 58.144 96 74 96c17.067 0 27.733-8.533 32-25.6-6.4 8.533-13.867 11.733-22.4 9.6-4.87-1.217-8.35-4.75-12.203-8.663C65.112 66.182 57.856 57.6 32 57.6z"/>
    </svg>
  ),
  React: () => (
    <svg className="w-7 h-7 shrink-0 animate-[spin_12s_linear_infinite]" viewBox="0 0 128 128">
      <circle cx="64" cy="64" r="11.4" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="6" fill="none">
        <ellipse cx="64" cy="64" rx="52" ry="20"/>
        <ellipse cx="64" cy="64" rx="52" ry="20" transform="rotate(60 64 64)"/>
        <ellipse cx="64" cy="64" rx="52" ry="20" transform="rotate(120 64 64)"/>
      </g>
    </svg>
  ),
  MachineLearning: () => (
    <svg className="w-7 h-7 shrink-0" viewBox="0 0 24 24" fill="none" stroke="#7C3AED" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 100 20 10 10 0 000-20z"/>
      <path d="M12 6v6l4 2"/>
      <circle cx="12" cy="12" r="3" fill="#7C3AED" fillOpacity="0.4"/>
    </svg>
  ),
  Pandas: () => (
    <svg className="w-7 h-7 shrink-0" viewBox="0 0 128 128">
      <path fill="#150458" d="M21.3 16h16v96h-16V16zm34.7 0h21.3v96H56V16zm34.7 0H112v96H90.7V16z"/>
      <circle cx="29.3" cy="37.3" r="8" fill="#E11D48"/>
      <circle cx="66.7" cy="64" r="8" fill="#E11D48"/>
      <circle cx="101.3" cy="90.7" r="8" fill="#E11D48"/>
    </svg>
  ),
  NumPy: () => (
    <svg className="w-7 h-7 shrink-0" viewBox="0 0 128 128">
      <rect width="112" height="112" x="8" y="8" fill="none" stroke="#013243" strokeWidth="8" rx="12"/>
      <path stroke="#0284C7" strokeWidth="8" d="M8 64h112M64 8v112"/>
      <circle cx="36" cy="36" r="14" fill="#013243"/>
      <circle cx="92" cy="92" r="14" fill="#0284C7"/>
    </svg>
  ),
  ScikitLearn: () => (
    <svg className="w-7 h-7 shrink-0" viewBox="0 0 128 128">
      <circle cx="64" cy="64" r="52" fill="#F7931E" fillOpacity="0.2" stroke="#F7931E" strokeWidth="8"/>
      <path d="M40 64c12-16 36-16 48 0s-36 16-48 0z" stroke="#0284C7" strokeWidth="8" fill="none"/>
    </svg>
  ),
  Matplotlib: () => (
    <svg className="w-7 h-7 shrink-0" viewBox="0 0 128 128">
      <path stroke="#11557C" strokeWidth="10" strokeLinecap="round" d="M16 112h96M24 96l24-36 24 18 30-48 18 24" fill="none"/>
      <circle cx="48" cy="60" r="10" fill="#11557C"/>
      <circle cx="102" cy="30" r="10" fill="#11557C"/>
    </svg>
  )
};

const Skills = () => {
  const skillCategories = [
    {
      title: 'Core Programming',
      color: '#3B82F6',
      items: [
        { name: 'Python', desc: 'AI & ML Scripting', Icon: SkillLogos.Python },
        { name: 'C++', desc: 'OOPs & Data Structures', Icon: SkillLogos.CPP },
        { name: 'C Language', desc: 'System Fundamentals', Icon: SkillLogos.C }
      ]
    },
    {
      title: 'Web & Mobile Development',
      color: '#8B5CF6',
      items: [
        { name: 'HTML5', desc: 'Semantic Markup', Icon: SkillLogos.HTML5 },
        { name: 'CSS3', desc: 'Responsive Layouts', Icon: SkillLogos.CSS3 },
        { name: 'JavaScript', desc: 'ES6+ & Dynamic Web', Icon: SkillLogos.JavaScript },
        { name: 'React', desc: 'UI Components', Icon: SkillLogos.React },
        { name: 'Tailwind CSS', desc: 'Utility Design Systems', Icon: SkillLogos.Tailwind }
      ]
    },
    {
      title: 'AI & ML / Data Science',
      color: '#10B981',
      items: [
        { name: 'Machine Learning', desc: 'Model Development', Icon: SkillLogos.MachineLearning },
        { name: 'Pandas', desc: 'Data Wrangling', Icon: SkillLogos.Pandas },
        { name: 'NumPy', desc: 'Numerical Computing', Icon: SkillLogos.NumPy },
        { name: 'Scikit-learn', desc: 'Predictive Modeling', Icon: SkillLogos.ScikitLearn },
        { name: 'Matplotlib', desc: 'Data Visualization', Icon: SkillLogos.Matplotlib }
      ]
    }
  ];

  return (
    <section id="skills" className="relative px-5 py-20 overflow-hidden">
      <div className="absolute left-0 top-24 h-36 w-36 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-16 h-40 w-40 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative z-10 max-w-[1200px] mx-auto text-center">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-indigo-500 text-xs uppercase tracking-wider block font-semibold mb-2"
        >
          Expertise Index
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-extrabold mb-4 gradient-text-1"
        >
          Tech Stack &amp; Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="opacity-80 max-w-[640px] mx-auto mb-14 text-base leading-relaxed"
        >
          A comprehensive skill set bridging core programming, modern web development, and data science &amp; machine learning libraries.
        </motion.p>
      </div>

      <div className="relative z-10 space-y-10 max-w-[1200px] mx-auto text-left">
        {skillCategories.map((category, catIdx) => (
          <motion.div
            key={catIdx}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: catIdx * 0.1 }}
            className="panel-soft p-6 sm:p-8"
          >
            <div className="flex items-center gap-3 mb-6 pb-3 border-b" style={{ borderColor: 'var(--border-color)' }}>
              <span
                className="w-3.5 h-3.5 rounded-full shadow-sm shrink-0"
                style={{ backgroundColor: category.color }}
              />
              <h3 className="text-xl font-bold">{category.title}</h3>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
              {category.items.map((skill, sIdx) => {
                const IconComponent = skill.Icon;
                return (
                  <motion.div
                    key={sIdx}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: sIdx * 0.05 }}
                    whileHover={{ y: -6, scale: 1.05 }}
                    className="skill-logo-card flex flex-col items-center justify-center text-center"
                  >
                    <div className="w-12 h-12 rounded-2xl icon-box flex items-center justify-center shrink-0 mb-4">
                      <IconComponent />
                    </div>
                    <div className="font-bold text-sm leading-tight">{skill.name}</div>
                    <div className="text-[11px] font-semibold opacity-70 mt-1">{skill.desc}</div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
