import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import CursorGlow from './components/CursorGlow';
import Footer from './components/Footer';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black bg-animated-gradient-light dark:bg-animated-gradient">
        <div className="flex flex-col items-center">
          <div className="loader-dots mb-4">
            <div className="loader-dot" />
            <div className="loader-dot" />
            <div className="loader-dot" />
          </div>
          <span className="text-lg text-navy-900 dark:text-white animate-pulse">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black dark:text-gray-100 bg-animated-gradient-light dark:bg-animated-gradient">
      <CursorGlow />
      <Header />
      {/* Dark brown curved line SVG divider */}
      <svg viewBox="0 0 1440 120" className="w-full h-16 md:h-24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{display: 'block'}}>
        <path d="M0,60 Q720,180 1440,60 L1440,120 L0,120 Z" fill="#4B2E05" />
      </svg>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;