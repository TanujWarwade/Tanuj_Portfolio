import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, MapPin, Sparkles } from 'lucide-react';

const Timeline = () => {
  const experience = [
    {
      iconColor: 'text-indigo-500',
      date: '6-Week Online Internship',
      title: 'Machine Learning & AI Intern',
      institution: 'AXCENTRA',
      location: 'Remote',
      description: 'Gained practical exposure to machine learning and AI concepts. Worked with Python libraries including Pandas, NumPy, Matplotlib, and Scikit-learn for data processing and model training.',
      skills: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn', 'Model Evaluation']
    }
  ];

  const education = [
    {
      iconColor: 'text-purple-500',
      Icon: GraduationCap,
      date: '2024 - 2028',
      title: 'B.Tech in Artificial Intelligence & Machine Learning',
      institution: 'Bansal Institute of Science & Technology, Bhopal',
      grade: 'CGPA: 6.86 (Till 3rd sem)',
      description: 'Core curriculum covering AI foundations, data structures, algorithms, object-oriented programming, discrete math, and database management.'
    },
    {
      iconColor: 'text-emerald-500',
      Icon: Award,
      date: '2023 - 2024',
      title: 'Higher Secondary School Certificate (Class XII)',
      institution: 'Govt. Excellence School, Pandhurna, MP',
      grade: 'Score: 68%',
      description: 'NCERT stream curriculum covering mathematics, physics, chemistry, and computer foundations.'
    },
    {
      iconColor: 'text-cyan-500',
      Icon: Award,
      date: '2021 - 2022',
      title: 'High School Certificate (Class X)',
      institution: 'Govt. High School, Chichanda, MP',
      grade: 'Score: 73%',
      description: 'NCERT general curriculum with strong foundations in mathematics and science.'
    }
  ];

  return (
    <div id="timeline" className="relative space-y-12 text-center overflow-hidden">
      <div className="absolute left-0 top-16 h-32 w-32 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="absolute right-0 bottom-12 h-40 w-40 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-indigo-500 text-xs uppercase tracking-wider block font-semibold mb-2"
        >
          Career &amp; Academic Track
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-3xl sm:text-4xl font-extrabold mb-4 gradient-text-1"
        >
          Experience &amp; Education
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="opacity-80 max-w-[640px] mx-auto mb-10 text-base leading-relaxed"
        >
          My professional internship journey and academic background in Artificial Intelligence &amp; Machine Learning engineering.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="panel-soft p-8 sm:p-10 text-left"
      >
        <div className="flex items-center gap-3 mb-6 pb-4 border-b" style={{ borderColor: 'var(--border-color)' }}>
          <div className="w-12 h-12 rounded-2xl icon-box flex items-center justify-center shrink-0 text-indigo-500">
            <Briefcase size={22} />
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-wider block font-semibold text-indigo-500">Industry Experience</span>
            <h3 className="text-xl font-extrabold">Machine Learning Internship</h3>
          </div>
        </div>

        {experience.map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="panel-soft p-6 rounded-3xl border transition-colors duration-200 mb-6"
          >
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-12 h-12 rounded-3xl icon-box flex items-center justify-center shrink-0 ${step.iconColor}`}>
                  <Briefcase size={22} />
                </div>
                <div>
                  <h4 className="text-lg font-extrabold">{step.title}</h4>
                  <div className="text-sm font-semibold opacity-70 flex flex-wrap items-center gap-2 mt-0.5">
                    <span>{step.institution}</span>
                    <span className="opacity-40">•</span>
                    <span className="text-xs flex items-center gap-1">
                      <MapPin size={12} /> {step.location}
                    </span>
                  </div>
                </div>
              </div>
              <span className="font-mono text-xs font-semibold opacity-60">{step.date}</span>
            </div>

            <p className="text-sm opacity-80 leading-relaxed mb-4">{step.description}</p>
            <div className="flex flex-wrap gap-2 pt-3 border-t" style={{ borderColor: 'var(--border-color)' }}>
              {step.skills.map((sk, sIdx) => (
                <span
                  key={sIdx}
                  className="font-mono text-xs font-semibold px-3 py-1 rounded-full opacity-80"
                  style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
                >
                  {sk}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="panel-soft p-8 sm:p-10 text-left"
      >
        <div className="flex items-center gap-3 mb-6 pb-4 border-b" style={{ borderColor: 'var(--border-color)' }}>
          <div className="w-12 h-12 rounded-2xl icon-box flex items-center justify-center shrink-0 text-purple-500">
            <GraduationCap size={22} />
          </div>
          <div>
            <span className="font-mono text-xs uppercase tracking-wider block font-semibold text-purple-500">Academic Credentials</span>
            <h3 className="text-xl font-extrabold">Academic Journey</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {education.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="p-6 rounded-3xl border flex flex-col justify-between transition-colors duration-200"
              style={{ backgroundColor: 'var(--bg-card)', borderColor: 'var(--border-color)' }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className={`w-12 h-12 rounded-3xl icon-box flex items-center justify-center shrink-0 ${item.iconColor}`}>
                    <item.Icon size={22} />
                  </div>
                  <span className="font-mono text-xs font-semibold opacity-60">{item.date}</span>
                </div>
                <h4 className="text-base font-extrabold mb-2 leading-snug">{item.title}</h4>
                <div className="text-xs font-semibold opacity-70 mb-3">{item.institution}</div>
                <p className="text-xs opacity-75 leading-relaxed">{item.description}</p>
              </div>
              <div className="pt-4 mt-4 border-t flex items-center justify-between" style={{ borderColor: 'var(--border-color)' }}>
                <span className="text-sm font-bold opacity-90">{item.grade}</span>
                <Sparkles size={14} className="opacity-40" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Timeline;
