import React from 'react';
import { ExternalLink, Award } from 'lucide-react';

const Certificates = () => {
  const certificates = [
    {
      title: 'JavaScript Basics',
      platform: 'Coursera',
      image: 'https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400',
      url: 'https://coursera.org/share/30a83b697c029767c537f1b6f430e9c2',
      description: 'Comprehensive course covering JavaScript fundamentals, ES6+ features, and best practices.'
    },
    {
      title: 'Copywriting with ChatGPT',
      platform: 'Coursera',
      image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=400',
      url: 'https://coursera.org/share/71c9799b77f9bc6d6ee5599aacc0a418',
      description: 'Learn modern copywriting techniques and AI-assisted content creation strategies.'
    },
    {
      title: 'Google Ads for Beginners',
      platform: 'Coursera',
      image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=400',
      url: 'https://coursera.org/share/b51597e0858c8292170d8f4f2255dadc',
      description: 'Complete guide to Google Ads campaign creation, optimization, and performance analysis.'
    }
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-navy-900 mb-12">
            Certificates & Achievements
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={cert.title}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {cert.platform}
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <Award className="w-5 h-5 text-blue-600 mr-2" />
                    <h3 className="text-xl font-semibold text-navy-900">
                      {cert.title}
                    </h3>
                  </div>
                  
                  <p className="text-navy-600 mb-4 text-sm leading-relaxed">
                    {cert.description}
                  </p>
                  
                  <a
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 text-sm font-medium"
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
    </section>
  );
};

export default Certificates;