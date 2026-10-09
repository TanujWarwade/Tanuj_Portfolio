import React, { useState } from 'react';
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
import ScrollControls from './components/ScrollControls';
import ScrollReveal from './components/ScrollReveal';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen text-slate-100 bg-bg-dark" style={{ '--text-primary': 'var(--color-text-primary)', '--text-secondary': 'var(--color-text-secondary)' }}>
      {/* High-Tech Preloader Overlay */}
      <AnimatePresence>
        {loading && <Preloader key="preloader" onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {/* Dynamic Synaptic Canvas Web */}
      <NeuralCanvas />

      {/* Interactive Global Scroll Controls (Top Bar, Desktop Nav Dots, Back to Top Ring) */}
      <ScrollControls />

      {/* Floating Header Navbar */}
      <Header />

      <main className="w-full">
        {/* Hero & Interactive Terminal */}
        <Hero />

        {/* About Objective */}
        <ScrollReveal direction="up" distance={30} duration={0.6}>
          <About />
        </ScrollReveal>

        <div className="section-divider" />

        {/* Experience & Education */}
        <ScrollReveal direction="up" distance={30} duration={0.6}>
          <Timeline />
        </ScrollReveal>

        <div className="section-divider" />

        {/* Skills Proficiencies */}
        <ScrollReveal direction="up" distance={35} duration={0.65}>
          <Skills />
        </ScrollReveal>

        <div className="section-divider" />

        {/* Featured Projects Repository */}
        <ScrollReveal direction="up" distance={35} duration={0.65}>
          <Projects />
        </ScrollReveal>

        <div className="section-divider" />

        {/* Certifications Verified list */}
        <ScrollReveal direction="up" distance={35} duration={0.65}>
          <Certifications />
        </ScrollReveal>

        <div className="section-divider" />

        {/* Contact console */}
        <ScrollReveal direction="up" distance={35} duration={0.65}>
          <ContactForm />
        </ScrollReveal>
      </main>

      {/* Footer copyright shortcut */}
      <Footer />
    </div>
  );
}

export default App;
