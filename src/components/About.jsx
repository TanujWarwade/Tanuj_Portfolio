import React from 'react';

const About = () => {
  const stats = [
    { label: 'CGPA (B.Tech AIML)', value: '6.86' },
    { label: 'Major Tech Projects', value: '2+' },
    { label: 'Industry Certifications', value: '4' },
    { label: 'Tech Skills Mastered', value: '5+' }
  ];

  return (
    <div className="glass-card p-8">
      <span className="font-mono text-cyan text-sm uppercase tracking-wider block mb-2.5">
        System Description
      </span>
      
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white">
        Career Objective
      </h2>
      
      <p className="text-text-secondary text-base leading-relaxed mb-5">
        I am a dedicated AIML engineering student focused on building intelligent systems, data-driven models, and visualization pipelines for real-world problems.
      </p>
      
      <p className="text-text-secondary text-base leading-relaxed mb-10">
        Passionate about machine learning architectures, AI-powered analytics, and smart user experiences, my goal is to translate complex models into accessible, high-impact applications.
      </p>

      {/* Grid Stats */}
      <div className="grid grid-cols-2 gap-5 mt-10">
        {stats.map((stat, idx) => (
          <div 
            key={idx} 
            className="bg-white/2 border border-white/4 rounded-lg p-4.5 hover:border-purple/25 hover:bg-purple/3 transition-all duration-300"
          >
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan mb-1 drop-shadow-[0_0_8px_rgba(0,242,254,0.25)]">
              {stat.value}
            </div>
            <div className="text-[10px] sm:text-xs text-text-muted uppercase tracking-wider font-semibold">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
