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
    setSubmitStatus(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }
    setIsSubmitting(false);
    setTimeout(() => {
      setSubmitStatus(null);
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 bg-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-accent mb-12 fade-in" style={{fontFamily: 'Space Grotesk, Inter, Poppins, sans-serif'}}>
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8 slide-in-left">
              <div>
                <h3 className="text-2xl font-semibold text-accent mb-6">
                  Let's Connect
                </h3>
                <p className="text-lg text-muted leading-relaxed mb-8">
                  I'm always open to discussing new opportunities, collaborations, or just having a chat about technology. 
                  Feel free to reach out through any of the channels below.
                </p>
              </div>
              <div className="space-y-4">
                <a
                  href="mailto:23tec2cs491@vgu.ac.in"
                  className="flex items-center space-x-4 p-4 bg-main rounded-lg shadow-md glow-hover border border-gray-800"
                >
                  <div className="bg-accent p-3 rounded-full">
                    <Mail size={24} className="text-main" />
                  </div>
                  <div>
                    <p className="font-semibold text-accent">Email</p>
                    <p className="text-muted">23tec2cs491@vgu.ac.in</p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/harsh-k-319a32363"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 bg-main rounded-lg shadow-md glow-hover border border-gray-800"
                >
                  <div className="bg-accent-secondary p-3 rounded-full">
                    <Linkedin size={24} className="text-main" />
                  </div>
                  <div>
                    <p className="font-semibold text-accent-secondary">LinkedIn</p>
                    <p className="text-muted">Connect with me</p>
                  </div>
                </a>
                <div className="flex items-center space-x-4 p-4 bg-main rounded-lg shadow-md border border-gray-800">
                  <div className="bg-accent-secondary p-3 rounded-full">
                    <MapPin size={24} className="text-main" />
                  </div>
                  <div>
                    <p className="font-semibold text-accent-secondary">Location</p>
                    <p className="text-muted">Jaipur, Rajasthan, India</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <div className="bg-main rounded-xl shadow-lg p-8 border border-gray-800 fade-up">
              <h3 className="text-2xl font-semibold text-accent mb-6">
                Send Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-accent mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 bg-section text-main"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-accent mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 bg-section text-main"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-accent mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 bg-section text-main"
                    placeholder="Enter your message"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-card-bg border border-accent-primary text-main py-2 px-6 rounded-xl font-semibold underline-animate flex items-center justify-center focus:outline-none focus-neon group overflow-hidden transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
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
                  {isSubmitting ? (
                    <div className="animate-spin w-5 h-5 border-2 border-main border-t-transparent rounded-full" />
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                  <div className="absolute inset-0 pointer-events-none rounded-lg group-hover:bg-[linear-gradient(135deg,#0F2027,#00F7FF22)] group-hover:opacity-100 opacity-0 transition-opacity duration-300"></div>
                  <style>{`
                    button[type='submit']:hover {
                      box-shadow: 0 0 12px #00F7FF80;
                      text-shadow: 0 0 8px #00F7FF;
                    }
                    button[type='submit']:active {
                      transform: scale(0.98);
                      background: #0F0F1A;
                    }
                  `}</style>
                </button>
                {submitStatus === 'success' && (
                  <div className="bg-green-900 border border-green-800 rounded-lg p-4 text-green-200">
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