import React from 'react';
import { Download, FileText } from 'lucide-react';

const Resume = () => {
  const handleDownload = () => {
    // Create a click animation effect
    const button = document.getElementById('download-btn');
    if (button) {
      button.classList.add('animate-pulse');
      setTimeout(() => {
        button.classList.remove('animate-pulse');
      }, 1000);
    }
    
    // Open the PDF in a new tab
    window.open('https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', '_blank');
  };

  return (
    <section className="py-20 bg-dark-golden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-12">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-600 dark:bg-blue-800 p-4 rounded-full">
                <FileText size={48} className="text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl font-bold text-navy-900 dark:text-white mb-4">
              Download My Resume
            </h2>
            
            <p className="text-lg text-navy-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a comprehensive overview of my skills, experience, and projects. 
              Download my resume to learn more about my background and qualifications.
            </p>
            
            <button
              id="download-btn"
              onClick={handleDownload}
              className="relative bg-card-bg border border-accent-primary text-main rounded-xl py-2 px-6 font-semibold text-lg transition-all duration-300 focus:outline-none focus-neon group overflow-hidden"
              style={{
                backgroundColor: '#13141F',
                color: '#F1F5F9',
                border: '1px solid #00F7FF',
                boxShadow: '0 0 10px #00F7FF, 0 0 20px #00F7FF66',
                transition: 'all 0.3s ease-in-out',
              }}
              onMouseDown={e => { e.currentTarget.style.backgroundColor = '#0A0A17'; e.currentTarget.style.transform = 'scale(0.97)'; }}
              onMouseUp={e => { e.currentTarget.style.backgroundColor = '#13141F'; e.currentTarget.style.transform = 'scale(1)'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = '#13141F'; e.currentTarget.style.transform = 'scale(1)'; }}
              onMouseOver={e => { e.currentTarget.style.backgroundColor = '#0F0F1A'; e.currentTarget.style.boxShadow = '0 0 10px #00F7FF, 0 0 20px #00F7FF66'; e.currentTarget.style.border = '1px solid #00F7FFAA'; e.currentTarget.style.textShadow = '0 0 6px #00F7FF'; e.currentTarget.style.transform = 'scale(1.03)'; }}
            >
              <div className="flex items-center">
                <Download size={24} className="mr-3" />
                Download Resume
              </div>
              <div className="absolute inset-0 pointer-events-none rounded-lg group-hover:bg-[linear-gradient(135deg,#0F2027,#00F7FF22)] group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
              <style>{`
                #download-btn:hover {
                  box-shadow: 0 0 12px #00F7FF80;
                  text-shadow: 0 0 8px #00F7FF;
                }
                #download-btn:active {
                  transform: scale(0.98);
                  background: #0F0F1A;
                }
              `}</style>
            </button>
            
            <p className="text-sm text-navy-600 dark:text-gray-300 mt-4">
              PDF format • Updated regularly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;