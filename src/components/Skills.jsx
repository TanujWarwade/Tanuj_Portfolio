import React, { useState, useEffect, useRef } from 'react';
import { Code, Laptop, Brain } from 'lucide-react';

const Skills = () => {
  const [animate, setAnimate] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  const skillGroups = [
    {
      title: 'Core Programming',
      icon: <Code className="text-cyan drop-shadow-[0_0_8px_rgba(0,242,254,0.3)]" size={20} />,
      list: [
        { name: 'Python (AI & ML scripting)', pct: 85 },
        { name: 'C++ (Object-Oriented Programming)', pct: 80 },
        { name: 'C Language (Data Structures)', pct: 75 }
      ]
    },
    {
      title: 'Web & Fullstack Basics',
      icon: <Laptop className="text-purple drop-shadow-[0_0_8px_rgba(157,78,221,0.3)]" size={20} />,
      list: [
        { name: 'React, Vite & Tailwind CSS', pct: 80 },
        { name: 'HTML5 / CSS3 (Semantic layouts)', pct: 85 },
        { name: 'VS Code, Git & Firebase', pct: 85 }
      ]
    },
    {
      title: 'AI & ML Frameworks',
      icon: <Brain className="text-cyan drop-shadow-[0_0_8px_rgba(0,242,254,0.3)]" size={20} />,
      list: [
        { name: 'TensorFlow & Scikit-learn', pct: 75 },
        { name: 'Data Processing (Pandas, Numpy)', pct: 80 },
        { name: 'Matplotlib (Data visualization)', pct: 85 }
      ]
    }
  ];

  return (
    <section id="skills" ref={containerRef} className="reveal active px-5 py-24 max-w-[1200px] mx-auto text-center">
      <span className="font-mono text-cyan text-sm uppercase tracking-wider block mb-2.5">
        Expertise Index
      </span>
      <h2 className="text-3xl sm:text-4xl font-bold mb-5 text-white">
        Skills & Proficiencies
      </h2>
      <p className="text-text-secondary max-w-[600px] mx-auto mb-16 text-base leading-relaxed">
        A solid set of skills bridging structured programming with modern web engineering and data modeling foundations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
        {skillGroups.map((group, idx) => (
          <div key={idx} className="glass-card p-7">
            <h3 className="text-lg font-bold text-white mb-8 pb-3 border-b border-white/5 flex items-center gap-2.5">
              {group.icon}
              {group.title}
            </h3>
            
            <div className="space-y-6">
              {group.list.map((skill, sIdx) => (
                <div key={sIdx} className="w-full">
                  <div className="flex justify-between text-sm font-medium mb-2">
                    <span className="text-text-primary">{skill.name}</span>
                    <span className="font-mono text-cyan">{skill.pct}%</span>
                  </div>
                  
                  {/* Skill Progress Track */}
                  <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden relative">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-cyan to-purple shadow-[0_0_8px_rgba(0,242,254,0.4)] transition-all duration-[1500ms] cubic-bezier(0.1, 1, 0.1, 1)"
                      style={{ width: animate ? `${skill.pct}%` : '0%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
