import React from 'react';
import { Code, Database, Server, Globe, Palette, Zap } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Tailwind CSS', 'Responsive Design'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Authentication', 'Middleware'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Database Management',
      icon: Database,
      skills: ['MongoDB', 'MySQL', 'Database Design', 'Query Optimization'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Development Tools',
      icon: Code,
      skills: ['Git', 'Docker', 'VS Code', 'Postman', 'Linux', 'Terminal'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Design & UI/UX',
      icon: Palette,
      skills: ['UI Design', 'User Experience', 'Prototyping', 'Wireframing'],
      color: 'from-pink-500 to-pink-600'
    },
    {
      title: 'Soft Skills',
      icon: Zap,
      skills: ['Problem Solving', 'Team Work', 'Communication', 'Project Management'],
      color: 'from-indigo-500 to-indigo-600'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-navy-900 dark:text-white mb-12">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100 dark:border-gray-800"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} text-white dark:text-white`}>
                    <category.icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-navy-900 dark:text-white ml-3">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skill}
                      className="flex items-center space-x-2 text-navy-700 dark:text-gray-300"
                    >
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm">{skill}</span>
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