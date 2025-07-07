import React from 'react';
import { 
  Code, 
  Database, 
  Server, 
  Globe, 
  GitBranch, 
  Container,
  FileText,
  Layers
} from 'lucide-react';

const About = () => {
  const techStack = [
    { name: 'HTML5', icon: Globe, color: 'text-orange-600' },
    { name: 'CSS3', icon: Layers, color: 'text-blue-600' },
    { name: 'JavaScript', icon: Code, color: 'text-yellow-600' },
    { name: 'Node.js', icon: Server, color: 'text-green-600' },
    { name: 'Express.js', icon: FileText, color: 'text-gray-600' },
    { name: 'MongoDB', icon: Database, color: 'text-green-500' },
    { name: 'MySQL', icon: Database, color: 'text-blue-500' },
    { name: 'Git', icon: GitBranch, color: 'text-red-500' },
    { name: 'Docker', icon: Container, color: 'text-blue-400' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-navy-900 mb-12">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-navy-700 leading-relaxed">
                I'm <span className="font-semibold text-blue-600">Harsh Kumar</span>, a passionate Full Stack Developer currently pursuing a B.Tech from Vivekananda Global University, Jaipur. I'm undergoing a 45-day training internship at Linux World, gaining hands-on experience with modern web development technologies.
              </p>
              
              <p className="text-lg text-navy-700 leading-relaxed">
                My tech stack includes HTML, CSS, and JavaScript on the frontend, along with Node.js and Express on the backend. I've worked with MongoDB and MySQL for database management, and I use tools like Git and Docker for version control and containerization.
              </p>
              
              <p className="text-lg text-navy-700 leading-relaxed">
                I enjoy building scalable web applications and am constantly learning new tools to sharpen my skills. I'm enthusiastic about contributing to real-world projects and growing as a developer in the tech industry.
              </p>

              <div className="pt-6">
                <h3 className="text-xl font-semibold text-navy-900 mb-4">Education</h3>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="font-semibold text-navy-800">B.Tech in Computer Science</h4>
                  <p className="text-navy-600">Vivekananda Global University, Jaipur</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-navy-900 mb-6">Tech Stack</h3>
              <div className="grid grid-cols-3 gap-4">
                {techStack.map((tech, index) => (
                  <div
                    key={tech.name}
                    className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-100"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <tech.icon className={`w-8 h-8 ${tech.color}`} />
                      <span className="text-sm font-medium text-navy-700 text-center">
                        {tech.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;