import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Instagram, Send, MapPin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-navy-900 mb-12">
            Get In Touch
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-navy-900 mb-6">
                  Let's Connect
                </h3>
                <p className="text-lg text-navy-700 leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, collaborations, or just having a chat about technology. 
                  Feel free to reach out through any of the channels below.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:23tec2cs491@vgu.ac.in"
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-blue-600 p-3 rounded-full">
                    <Mail size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">Email</p>
                    <p className="text-navy-600">23tec2cs491@vgu.ac.in</p>
                  </div>
                </a>

                <a
                  href="tel:8002524376"
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-green-600 p-3 rounded-full">
                    <Phone size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">Phone</p>
                    <p className="text-navy-600">+91 8002524376</p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/harsh-k-319a32363"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-blue-700 p-3 rounded-full">
                    <Linkedin size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">LinkedIn</p>
                    <p className="text-navy-600">Connect with me</p>
                  </div>
                </a>

                <a
                  href="https://www.instagram.com/harshkumar27_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
                >
                  <div className="bg-pink-600 p-3 rounded-full">
                    <Instagram size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">Instagram</p>
                    <p className="text-navy-600">@harshkumar27_</p>
                  </div>
                </a>

                <div className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md">
                  <div className="bg-red-600 p-3 rounded-full">
                    <MapPin size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-navy-900">Location</p>
                    <p className="text-navy-600">Jaipur, Rajasthan, India</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-navy-900 mb-6">
                Send Message
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-navy-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-navy-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-navy-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your message"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full" />
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4 text-green-800">
                    Thank you for your message! I'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;