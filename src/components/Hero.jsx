import React from 'react';
import { ArrowRight, Brain } from 'lucide-react';
import AICore from './AICore';

const Hero = () => {
  return (
    <section id="hero" className="min-height-[100vh] flex flex-col justify-center items-center px-5 pt-[120px] max-w-[1200px] mx-auto relative">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 lg:gap-10 items-center w-full min-h-[calc(100vh-120px)] py-10">
        
        {/* Left Side: Personal Intro */}
        <div className="z-10 text-left">
          <div className="font-mono text-cyan text-sm font-semibold mb-5 flex items-center gap-2.5">
            <span className="w-2 h-2 bg-cyan rounded-full shadow-[0_0_10px_#00f2fe] inline-block animate-pulse-slow"></span>
            Initializing Neural Core
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-[4.2rem] leading-[1.1] font-extrabold tracking-tight mb-5 text-white">
            Hi, I'm <br />
            <span className="bg-gradient-to-r from-cyan to-purple bg-clip-text text-transparent">
              Tanuj Warwade
            </span>
          </h1>
          
          <p className="text-lg text-text-secondary mb-8 font-normal max-w-[550px] leading-relaxed">
            An undergraduate <strong className="text-cyan drop-shadow-[0_0_10px_rgba(0,242,254,0.3)]">AIML engineering student</strong> focused on designing intelligent applications, full-stack architectures, and scalable deep learning pipelines.
          </p>
          
          <div className="flex flex-wrap gap-5 mt-10">
            <a 
              href="#projects" 
              className="px-7 py-3.5 rounded-lg font-semibold text-sm bg-gradient-to-r from-cyan to-purple text-neutral-950 shadow-[0_4px_20px_rgba(0,242,254,0.25)] hover:shadow-[0_4px_30px_rgba(0,242,254,0.45)] hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2.5"
            >
              Browse Projects <ArrowRight size={16} />
            </a>
            <a 
              href="#contact" 
              className="px-7 py-3.5 rounded-lg font-semibold text-sm bg-white/3 text-white border border-white/6 hover:bg-white/8 hover:border-cyan hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2.5"
            >
              Get In Touch <Brain size={16} />
            </a>
          </div>
        </div>

        {/* Right Side: Animated AI Core Component */}
        <div className="reveal active">
          <AICore />
        </div>

      </div>
    </section>
  );
};

export default Hero;
