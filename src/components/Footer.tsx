import React from 'react';

const Footer = () => {
  return (
    <footer
      className="w-full bg-[#0A0A17] border-t" 
      style={{
        borderTop: '1px solid var(--accent-primary)',
        background: 'var(--bg-secondary, #0A0A17)',
      }}
    >
      <div className="max-w-4xl mx-auto px-4 py-8 flex flex-col items-center justify-center fade-up">
        <div className="flex space-x-4 mb-3">
          <a
            href="https://github.com/harshkumar"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="icon transition-all duration-300 text-muted hover:text-accent-primary"
            style={{ fontSize: 24 }}
          >
            {/* GitHub SVG */}
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" className="icon">
              <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.622.069-.609.069-.609 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.254-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.254-.446-1.277.098-2.661 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.747-1.025 2.747-1.025.546 1.384.202 2.407.1 2.661.64.7 1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/harsh-k-319a32363"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="icon transition-all duration-300 text-muted hover:text-accent-primary"
            style={{ fontSize: 24 }}
          >
            {/* LinkedIn SVG */}
            <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24" className="icon">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.968v5.699h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.844-1.563 3.042 0 3.604 2.003 3.604 4.605v5.591z" />
            </svg>
          </a>
        </div>
        <div className="text-center text-muted text-sm" style={{fontFamily: 'Space Grotesk, Inter, Poppins, sans-serif'}}>
          © 2025 Harsh Kumar. All Rights Reserved.
        </div>
      </div>
      <style>{`
        .icon {
          transition: all 0.3s ease-in-out;
        }
        .icon:hover {
          color: var(--accent-primary);
          text-shadow: 0 0 10px var(--accent-primary);
          transform: scale(1.1);
        }
        .fade-up {
          opacity: 0;
          animation: fadeUp 0.8s cubic-bezier(.4,0,.2,1) forwards;
          animation-delay: 0.2s;
        }
        @media (max-width: 640px) {
          .footer {
            padding: 2rem 1rem;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer; 