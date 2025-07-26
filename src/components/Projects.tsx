import React from 'react';
import { ExternalLink, Github, Code, Database, Globe } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce application with user authentication, product catalog, shopping cart, and payment integration.',
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Stripe API'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates, team collaboration features, and project tracking.',
      image: 'https://images.pexels.com/photos/7376/startup-photos.jpg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['JavaScript', 'Node.js', 'Socket.io', 'MySQL'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with location-based forecasts, historical data, and beautiful visualizations.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Weather API'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Blog Platform',
      description: 'Modern blog platform with content management, user profiles, comments system, and SEO optimization.',
      image: 'https://images.pexels.com/photos/265667/pexels-photo-265667.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Restaurant Booking System',
      description: 'Complete restaurant booking system with table reservations, menu management, and customer reviews.',
      image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['JavaScript', 'Node.js', 'MySQL', 'Express.js'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Chat Application',
      description: 'Real-time chat application with private messaging, group chats, file sharing, and emoji support.',
      image: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=400',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ];

  const getTechIcon = (tech: string) => {
    if (tech.includes('React') || tech.includes('HTML') || tech.includes('CSS')) return Globe;
    if (tech.includes('Node') || tech.includes('Express')) return Code;
    if (tech.includes('MongoDB') || tech.includes('MySQL')) return Database;
    return Code;
  };

  return (
    <section id="projects" className="py-20 bg-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-accent mb-12 fade-in" style={{fontFamily: 'Space Grotesk, Inter, Poppins, sans-serif'}}>
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for new project details */}
            <div className="bg-main rounded-xl shadow-lg border border-dashed border-accent-secondary flex flex-col items-center justify-center p-8 min-h-[200px] col-span-full fade-in" style={{animationDelay: '0.1s'}}>
              <span className="text-2xl font-semibold text-accent-secondary mb-2">New Project Coming Soon</span>
              <p className="text-muted text-center">Project details will be added here soon. Stay tuned!</p>
            </div>
            {/* Existing projects */}
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`bg-main rounded-xl shadow-lg card-hover border border-gray-800 overflow-hidden fade-up`}
                style={{ animationDelay: `${index * 0.2 + 0.2}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-accent mb-2" style={{fontFamily: 'Space Grotesk, Inter, Poppins, sans-serif'}}>
                    {project.title}
                  </h3>
                  <p className="text-muted mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => {
                      const Icon = getTechIcon(tech);
                      return (
                        <span
                          key={tech}
                          className="inline-flex items-center px-3 py-1 bg-accent-secondary text-main text-xs font-medium rounded-full float-slow"
                        >
                          <Icon size={12} className="mr-1" />
                          {tech}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex space-x-4">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-accent text-main rounded-lg glow-hover underline-animate text-sm font-medium focus:ring-2 focus:ring-accent-primary focus:outline-none active:scale-95"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-main text-accent-secondary rounded-lg glow-hover underline-animate text-sm font-medium focus:ring-2 focus:ring-accent-secondary focus:outline-none active:scale-95 border border-accent-secondary"
                    >
                      <Github size={16} className="mr-2" />
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;