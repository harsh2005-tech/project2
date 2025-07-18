import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dark:bg-black">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-200 dark:from-black dark:via-gray-900 dark:to-gray-800 animate-gradient-x"></div>
      
      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400/20 dark:bg-blue-900/30 rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/20 dark:bg-blue-800/30 rounded-full animate-float-delay"></div>
        <div className="absolute top-3/4 left-1/2 w-32 h-32 bg-blue-300/20 dark:bg-blue-700/30 rounded-full animate-float-slow"></div>
      </div>

      <div className="relative z-10 text-center px-4">
        {/* Profile Photo */}
        <div className="mb-8">
          <div className="relative inline-block">
            <img
              src="/profile.jpg"
              alt="Harsh Kumar"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover shadow-xl ring-4 ring-white/50 dark:ring-gray-800"
            />
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-900 dark:to-blue-700 rounded-full -z-10 animate-pulse"></div>
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-navy-900 dark:text-white mb-4">
          <span className="bg-gradient-to-r from-blue-600 to-blue-800 dark:from-blue-400 dark:to-blue-600 bg-clip-text text-transparent">
            Harsh Kumar
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-navy-700 dark:text-gray-300 mb-8 font-medium">
          Full Stack Developer
        </p>

        {/* CTA Button */}
        <button
          onClick={scrollToProjects}
          className="group relative bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-800 dark:to-blue-900 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 focus:ring-2 focus:ring-blue-500 focus:outline-none active:scale-95 transition-transform"
        >
          View My Work
          <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 dark:from-blue-900 dark:to-blue-950 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-navy-600 dark:text-gray-300" />
        </div>
      </div>
    </section>
  );
};

export default Hero;