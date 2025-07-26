import React from 'react';
import { Code, Database, Server, Globe, Palette, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Responsive Design'],
      color: 'from-accent-primary to-accent-secondary'
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Authentication', 'Middleware'],
      color: 'from-accent-secondary to-accent-primary'
    },
    {
      title: 'Database Management',
      icon: Database,
      skills: ['MongoDB', 'MySQL', 'Database Design', 'Query Optimization'],
      color: 'from-accent-primary to-accent-secondary'
    },
    {
      title: 'Development Tools',
      icon: Code,
      skills: ['Git', 'Docker', 'VS Code', 'Postman', 'Linux', 'Terminal'],
      color: 'from-accent-secondary to-accent-primary'
    },
    {
      title: 'Design & UI/UX',
      icon: Palette,
      skills: ['UI Design', 'User Experience', 'Prototyping', 'Wireframing'],
      color: 'from-accent-primary to-accent-secondary'
    },
    {
      title: 'Soft Skills',
      icon: Zap,
      skills: ['Problem Solving', 'Team Work', 'Communication', 'Project Management'],
      color: 'from-accent-secondary to-accent-primary'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-section">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-accent mb-12 fade-in" style={{fontFamily: 'Space Grotesk, Inter, Poppins, sans-serif'}}>
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="bg-main rounded-xl p-6 shadow-lg card-hover border border-gray-800 fade-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-main`}>
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-accent ml-3" style={{fontFamily: 'Space Grotesk, Inter, Poppins, sans-serif'}}>
                    {category.title}
                  </h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="flex items-center space-x-2 text-muted"
                    >
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-sm" style={{fontFamily: 'Space Grotesk, Inter, Poppins, sans-serif'}}>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;