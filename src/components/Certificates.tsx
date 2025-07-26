import React, { useState } from 'react';
import { ExternalLink, Award, X } from 'lucide-react';

const Certificates = () => {
  const [modalImage, setModalImage] = useState<string | null>(null);
  const certificates = [
    {
      title: 'Cyber Security Essentials',
      platform: 'Coursera',
      image: '/certificate-cyber-security-essentials.png', // Save the uploaded image as this file in the public directory
      url: 'https://www.coursera.org/account/accomplishments/verify/Y41W2LGXMJPF?utm_source=link&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course',
      description: 'Successfully completed Cyber Security Essentials, an online non-credit course authorized by Macquarie University and offered through Coursera.'
    },
    {
      title: 'JavaScript Basics',
      platform: 'Coursera',
      image: '/certificate-javascript-basics.png', // updated to local image
      url: 'https://coursera.org/share/30a83b697c029767c537f1b6f430e9c2',
      description: 'Comprehensive course covering JavaScript fundamentals, ES6+ features, and best practices.'
    },
    {
      title: 'Copywriting with ChatGPT',
      platform: 'Coursera',
      image: '/certificate-copywriting-chatgpt.png', // updated to local image
      url: 'https://coursera.org/share/71c9799b77f9bc6d6ee5599aacc0a418',
      description: 'Learn modern copywriting techniques and AI-assisted content creation strategies.'
    },
    {
      title: 'Google Ads for Beginners',
      platform: 'Coursera',
      image: '/certificate-google-ads-for-beginners.png', // updated to local image
      url: 'https://coursera.org/share/b51597e0858c8292170d8f4f2255dadc',
      description: 'Complete guide to Google Ads campaign creation, optimization, and performance analysis.'
    }
  ];

  // Modal close handler
  const closeModal = () => setModalImage(null);
  React.useEffect(() => {
    if (!modalImage) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [modalImage]);

  return (
    <section id="certificates" className="py-20 bg-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-accent mb-12 fade-in" style={{fontFamily: 'Space Grotesk, Inter, Poppins, sans-serif'}}>
            Certificates & Achievements
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={cert.title}
                className="bg-main rounded-xl shadow-lg card-hover border border-gray-800 overflow-hidden fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative overflow-hidden group cursor-pointer" onClick={() => setModalImage(cert.image)}>
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-accent-secondary text-main px-3 py-1 rounded-full text-sm font-medium">
                      {cert.platform}
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="text-main text-lg font-semibold">View Image</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Award className="w-5 h-5 text-accent-secondary mr-2" />
                    <h3 className="text-xl font-semibold text-accent">
                      {cert.title}
                    </h3>
                  </div>
                  <p className="text-muted mb-4 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-accent-secondary text-main rounded-lg glow-hover underline-animate text-sm font-medium focus:ring-2 focus:ring-accent-secondary focus:outline-none active:scale-95"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Modal for full-size image */}
      {modalImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm" onClick={closeModal}>
          <div className="relative max-w-2xl w-full mx-4" onClick={e => e.stopPropagation()}>
            <button onClick={closeModal} className="absolute top-2 right-2 text-main bg-black/60 rounded-full p-2 hover:bg-black/80 focus:outline-none">
              <X size={28} />
            </button>
            <img src={modalImage} alt="Certificate" className="w-full h-auto rounded-xl shadow-2xl border-4 border-main" />
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;