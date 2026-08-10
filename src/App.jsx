import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './components/Preloader';
import NeuralCanvas from './components/NeuralCanvas';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);
  // Intersection Observer for scroll fades
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Trigger once
          }
        });
      },
      { threshold: 0.1 }
    );

    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="relative min-h-screen text-slate-100 bg-bg-dark" style={{ '--text-primary': 'var(--color-text-primary)', '--text-secondary': 'var(--color-text-secondary)' }}>
      {/* High-Tech Preloader Overlay */}
      <AnimatePresence>
        {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Dynamic Synaptic Canvas Web */}
      <NeuralCanvas />

      {/* Floating Header Navbar */}
      <Header />

      <main className="w-full">
        {/* Hero & Interactive Terminal */}
        <Hero />

        {/* About Objective */}
        <section 
          id="about" 
          className="reveal px-5 py-24 max-w-[1200px] mx-auto"
        >
          <About />
        </section>

        {/* Experience & Education */}
        <section
          id="timeline"
          className="reveal px-5 py-24 max-w-[1200px] mx-auto"
        >
          <Timeline />
        </section>

        {/* Skills Proficiencies */}
        <Skills />

        {/* Featured Projects Repository */}
        <Projects />

        {/* Certifications Verified list */}
        <Certifications />

        {/* Contact console JSON POST */}
        <ContactForm />
      </main>

      {/* Footer copyright shortcut */}
      <Footer />
    </div>
  );
}

export default App;
