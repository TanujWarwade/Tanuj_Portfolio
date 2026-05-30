import React from 'react';

const Timeline = () => {
  const steps = [
    {
      date: '2024 - 2028 (In Progress)',
      title: 'B.Tech in Artificial Intelligence & Machine Learning',
      institution: 'Bansal Institute Of Science & Technology, Bhopal',
      description: 'CGPA: 6.86 till 3rd Semester. Deep diving into programming logic, mathematical foundations of machine learning, and scalable dataset ingestion pipelines.'
    },
    {
      date: '2023 - 2024',
      title: 'Higher Secondary School Certificate (Class XII)',
      institution: 'Govt. Excellence School, Pandhurna, MP',
      description: 'NCERT Stream Curriculum. Score: 68%'
    },
    {
      date: '2021 - 2022',
      title: 'High School Certificate (Class X)',
      institution: 'Govt. High School, Chichanda, MP',
      description: 'NCERT Stream Curriculum. Score: 73%'
    }
  ];

  return (
    <div className="glass-card p-8 h-full">
      <span className="font-mono text-cyan text-sm uppercase tracking-wider block mb-2.5">
        Academic Path
      </span>
      
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-white">
        Education
      </h2>

      {/* Line timeline */}
      <div className="timeline relative pl-7 timeline-line">
        {steps.map((step, idx) => (
          <div key={idx} className="timeline-item relative mb-9 last:mb-0 group text-left">
            
            {/* Glowing Dot Node */}
            <span className="absolute -left-[30px] top-1.5 w-2.5 h-2.5 rounded-full bg-cyan border border-neutral-900 shadow-[0_0_10px_#00f2fe] group-hover:bg-purple group-hover:shadow-[0_0_12px_rgba(157,78,221,0.5)] group-hover:scale-120 transition-all duration-300 z-10"></span>
            
            <div className="font-mono text-purple text-xs font-semibold mb-1">
              {step.date}
            </div>
            
            <h3 className="text-lg font-bold text-white group-hover:text-cyan transition-colors duration-300">
              {step.title}
            </h3>
            
            <div className="text-sm text-text-secondary mb-2 font-medium">
              {step.institution}
            </div>
            
            <p className="text-xs sm:text-sm text-text-muted leading-relaxed">
              {step.description}
            </p>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
