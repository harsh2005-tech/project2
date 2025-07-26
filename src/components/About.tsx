import React from 'react';
import { Code, Database, Server, Globe, GitBranch, Container, FileText, Layers } from 'lucide-react';

const About = () => {
  const techStack = [
    { name: 'HTML5', icon: Globe, color: 'text-accent' },
    { name: 'CSS3', icon: Layers, color: 'text-accent' },
    { name: 'JavaScript', icon: Code, color: 'text-accent' },
    { name: 'Node.js', icon: Server, color: 'text-accent' },
    { name: 'Express.js', icon: FileText, color: 'text-accent' },
    { name: 'MongoDB', icon: Database, color: 'text-accent' },
    { name: 'MySQL', icon: Database, color: 'text-accent' },
    { name: 'Git', icon: GitBranch, color: 'text-accent' },
    { name: 'Docker', icon: Container, color: 'text-accent' },
  ];

  return (
    <section id="about" className="py-20 bg-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-accent mb-12 fade-in" style={{fontFamily: 'Space Grotesk, Inter, Poppins, sans-serif'}}>
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-main leading-relaxed slide-in-left">
                I'm <span className="font-semibold text-accent">Harsh Kumar</span>, a passionate Full Stack Developer and DevOps/Cloud Computing enthusiast. Currently pursuing B.Tech in CSE at Vivekananda Global University, Jaipur, and interning at Linux World Informatics Pvt. Ltd. I love solving real-world problems with modern web and cloud-native tools.
              </p>
              <p className="text-lg text-muted leading-relaxed fade-in" style={{animationDelay: '0.2s'}}>
                My tech stack includes HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, MySQL, Git, and Docker. I enjoy building scalable web applications and am always eager to learn new technologies.
              </p>
              <p className="text-lg text-muted leading-relaxed fade-in" style={{animationDelay: '0.4s'}}>
                I’m enthusiastic about contributing to impactful projects and growing as a developer in the tech industry.
              </p>
              <div className="pt-6">
                <h3 className="text-xl font-semibold text-accent mb-4">Education</h3>
                <div className="bg-main rounded-lg p-4">
                  <h4 className="font-semibold text-main">B.Tech in Computer Science</h4>
                  <p className="text-muted">Vivekananda Global University, Jaipur</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 fade-in" style={{animationDelay: '0.6s'}}>
              {techStack.map((tech) => (
                <div key={tech.name} className="flex flex-col items-center p-4 bg-section rounded-lg shadow-md glow-hover">
                  <tech.icon size={32} className={tech.color} />
                  <span className="mt-2 text-sm text-main font-medium" style={{fontFamily: 'Space Grotesk, Inter, Poppins, sans-serif'}}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;