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
    <section id="projects" className="py-20 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-navy-900 mb-12">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Placeholder for new project details */}
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-dashed border-blue-400 dark:border-blue-700 flex flex-col items-center justify-center p-8 min-h-[200px] col-span-full">
              <span className="text-2xl font-semibold text-blue-600 dark:text-blue-400 mb-2">New Project Coming Soon</span>
              <p className="text-navy-700 dark:text-gray-300 text-center">Project details will be added here soon. Stay tuned!</p>
            </div>
            {/* Existing projects */}
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`bg-white dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-800 overflow-hidden ${
                  project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent dark:from-gray-900/70 dark:to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-navy-900 mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-navy-600 mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => {
                      const Icon = getTechIcon(tech);
                      return (
                        <span
                          key={tech}
                          className="inline-flex items-center px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-medium rounded-full"
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
                      className="flex items-center px-4 py-2 bg-blue-600 dark:bg-blue-800 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-900 transition-colors duration-200 text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none active:scale-95 transform transition-transform"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 bg-gray-800 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-900 dark:hover:bg-gray-900 transition-colors duration-200 text-sm font-medium focus:ring-2 focus:ring-blue-500 focus:outline-none active:scale-95 transform transition-transform"
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