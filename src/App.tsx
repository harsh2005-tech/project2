import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Resume from './components/Resume';
import Contact from './components/Contact';
import CursorGlow from './components/CursorGlow';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <CursorGlow />
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;