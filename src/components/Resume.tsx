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
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-12">
            <div className="flex justify-center mb-6">
              <div className="bg-blue-600 p-4 rounded-full">
                <FileText size={48} className="text-white" />
              </div>
            </div>
            
            <h2 className="text-4xl font-bold text-navy-900 mb-4">
              Download My Resume
            </h2>
            
            <p className="text-lg text-navy-700 mb-8 max-w-2xl mx-auto">
              Get a comprehensive overview of my skills, experience, and projects. 
              Download my resume to learn more about my background and qualifications.
            </p>
            
            <button
              id="download-btn"
              onClick={handleDownload}
              className="group relative bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center">
                <Download size={24} className="mr-3" />
                Download Resume
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-blue-800 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <p className="text-sm text-navy-600 mt-4">
              PDF format • Updated regularly
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;