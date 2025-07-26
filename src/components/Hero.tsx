import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
// Tech icon SVGs (inline for demo, replace with your own or use react-icons)
const techIcons = [
  {
    name: 'React',
    svg: (
      <svg viewBox="0 0 40 40" width="32" height="32" fill="none"><circle cx="20" cy="20" r="4" fill="#00FFF7"/><ellipse rx="16" ry="6.5" cx="20" cy="20" stroke="#00FFF7" strokeWidth="2" transform="rotate(60 20 20)"/><ellipse rx="16" ry="6.5" cx="20" cy="20" stroke="#00FFF7" strokeWidth="2" transform="rotate(120 20 20)"/><ellipse rx="16" ry="6.5" cx="20" cy="20" stroke="#00FFF7" strokeWidth="2"/></svg>
    ),
    style: 'top-10 left-10 animate-float1',
  },
  {
    name: 'Docker',
    svg: (
      <svg viewBox="0 0 40 40" width="32" height="32" fill="none"><rect x="10" y="20" width="20" height="8" rx="2" fill="#7C3AED"/><rect x="14" y="16" width="4" height="4" rx="1" fill="#00FFF7"/><rect x="20" y="16" width="4" height="4" rx="1" fill="#00FFF7"/><rect x="26" y="16" width="4" height="4" rx="1" fill="#00FFF7"/></svg>
    ),
    style: 'top-24 right-16 animate-float2',
  },
  {
    name: 'AWS',
    svg: (
      <svg viewBox="0 0 40 40" width="32" height="32" fill="none"><ellipse cx="20" cy="20" rx="16" ry="8" fill="#232F3E"/><path d="M10 20c2 2 6 4 10 4s8-2 10-4" stroke="#00FFF7" strokeWidth="2" fill="none"/></svg>
    ),
    style: 'bottom-10 left-1/2 animate-float3',
  },
];

const roles = [
  'DevOps Enthusiast',
  'Cloud Learner',
  'Full Stack Developer',
];

function useTypewriter(words: string[], speed = 80, delay = 1200) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), delay);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }
    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, reverse ? 40 : speed);
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, speed, delay]);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((v) => !v), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return [words[index].substring(0, subIndex), blink] as const;
}

const Hero = () => {
  // Animated gradient background
  const gradientRef = useRef<HTMLDivElement>(null);
  // Typewriter effect
  const [role, blink] = useTypewriter(roles, 90, 1200);

  // 3D tilt effect for profile image
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
    setTilt({ x, y });
  };
  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden font-sans"
      style={{ background: 'linear-gradient(135deg, #0F0F0F 0%, #1E1E2F 50%, #7C3AED 100%)' }}
    >
      {/* Animated Gradient Overlay */}
      <div
        ref={gradientRef}
        className="absolute inset-0 w-full h-full z-0 animate-gradientMove"
        style={{ background: 'linear-gradient(135deg, #0F0F0F 0%, #1E1E2F 50%, #7C3AED 100%)', opacity: 0.95 }}
        aria-hidden="true"
      />
      {/* Floating Tech Icons */}
      {techIcons.map((icon, i) => (
        <div
          key={icon.name}
          className={`pointer-events-none absolute z-10 opacity-40 ${icon.style}`}
          style={{ animationDuration: `${12 + i * 3}s` }}
        >
          {icon.svg}
        </div>
      ))}
      {/* Main Content */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl px-6 py-24 gap-12">
        {/* Left: Text Content */}
        <motion.div
          className="flex-1 text-left"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {/* Headline */}
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: 'spring', stiffness: 400, damping: 18, duration: 1 }}
          >
            Hi, I’m Harsh <span className="inline-block">👋</span>
          </motion.h1>
          {/* Typewriter Subheadline */}
          <motion.div
            className="h-10 md:h-12 text-xl md:text-2xl font-semibold text-[#00FFF7] flex items-center mb-4"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            aria-live="polite"
          >
            <span>{role}</span>
            <span className={`ml-1 w-2 h-7 md:h-8 bg-[#00FFF7] rounded-sm ${blink ? 'opacity-100' : 'opacity-0'} animate-blink`} />
          </motion.div>
          {/* Paragraph */}
          <motion.p
            className="text-base md:text-lg text-[#B3B3B3] max-w-xl mb-2"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Currently pursuing B.Tech in CSE at Vivekananda Global University. Intern at Linux World Informatics Pvt. Ltd. Passionate about solving real-world problems with DevOps and cloud-native tools.
          </motion.p>
          {/* Social Icons Example */}
          <div className="flex gap-4 mt-6">
            <a
              href="https://github.com/harshkumar"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-white hover:text-[#00FFF7] transition-colors duration-300"
              aria-label="GitHub"
            >
              <svg width="28" height="28" fill="currentColor" className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                <path d="M14 2C7.373 2 2 7.373 2 14c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.606-2.665-.304-5.466-1.332-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23a11.52 11.52 0 0 1 3.003-.404c1.018.005 2.045.138 3.003.404 2.291-1.552 3.297-1.23 3.297-1.23.654 1.653.243 2.873.12 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.625-5.475 5.921.43.372.823 1.102.823 2.222v3.293c0 .32.218.694.825.576C22.565 23.796 26 19.298 26 14c0-6.627-5.373-12-12-12z" />
              </svg>
            </a>
            {/* Add more social icons as needed */}
          </div>
        </motion.div>
        {/* Right: Profile Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end items-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <div
            className="relative group"
            style={{
              transform: `rotateY(${tilt.x}deg) rotateX(${-tilt.y}deg) scale(1)`,
              transition: 'transform 0.2s cubic-bezier(.25,.8,.25,1)',
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src="/profile.jpg"
              alt="Harsh Kumar"
              className="w-40 h-40 md:w-56 md:h-56 rounded-full object-cover shadow-2xl border-4 border-[#1E1E2F] group-hover:scale-105 group-hover:shadow-cyan-400/40 transition-transform duration-300"
              style={{ boxShadow: '0 0 32px 0 #00FFF7, 0 4px 32px 0 #1E1E2F' }}
            />
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#00FFF7] via-[#7C3AED] to-[#1E1E2F] rounded-full blur-xl opacity-60 -z-10 animate-pulse"></div>
          </div>
        </motion.div>
      </div>
      {/* Optional: Bouncing scroll-down arrow */}
      {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
        <svg width="32" height="32" fill="#00FFF7" viewBox="0 0 24 24"><path d="M12 16l-6-6h12z" /></svg>
      </div> */}
      {/* Custom Animations */}
      <style>{`
        @keyframes gradientMove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradientMove {
          background-size: 200% 200%;
          animation: gradientMove 10s ease-in-out infinite;
        }
        @keyframes float1 { 0%{transform:translateY(0);} 50%{transform:translateY(-18px);} 100%{transform:translateY(0);} }
        @keyframes float2 { 0%{transform:translateY(0);} 50%{transform:translateY(14px);} 100%{transform:translateY(0);} }
        @keyframes float3 { 0%{transform:translateY(0);} 50%{transform:translateY(-10px);} 100%{transform:translateY(0);} }
        .animate-float1 { animation: float1 12s ease-in-out infinite; }
        .animate-float2 { animation: float2 15s ease-in-out infinite; }
        .animate-float3 { animation: float3 18s ease-in-out infinite; }
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        .animate-blink { animation: blink 1s step-end infinite; }
      `}</style>
    </section>
  );
};

export default Hero;