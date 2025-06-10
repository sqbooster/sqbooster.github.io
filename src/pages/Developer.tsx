import React from 'react';
import { Mail, Github, Twitter, Globe, Code, Coffee, Heart } from 'lucide-react';

const Developer: React.FC = () => {
  const skills = [
    'Python', 'SQLite', 'Database Design', 'API Development', 
    'Open Source', 'Software Architecture', 'Data Storage', 'Backend Development'
  ];

  const projects = [
    {
      name: 'sqbooster',
      description: 'Lightweight Python library for SQLite-based key-value storage',
      tech: ['Python', 'SQLite', 'JSON'],
      link: 'https://github.com/sqbooster/sqbooster'
    },
    {
      name: 'Database Tools',
      description: 'Collection of utilities for database management and optimization',
      tech: ['Python', 'PostgreSQL', 'MongoDB'],
      link: '#'
    },
    {
      name: 'Storage Solutions',
      description: 'High-performance storage solutions for modern applications',
      tech: ['Python', 'Redis', 'SQLite'],
      link: '#'
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <img 
                src="https://github.com/sqbooster/sqbooster.github.io/blob/main/assets/logo.jpeg?raw=true" 
                alt="Developer" 
                className="h-32 w-32 rounded-full border-4 border-blue-400 shadow-2xl"
              />
              <div className="absolute -bottom-2 -right-2 bg-green-500 h-8 w-8 rounded-full border-4 border-gray-900 flex items-center justify-center">
                <div className="h-3 w-3 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            sqbooster Developer
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Passionate Python developer focused on creating efficient, lightweight storage solutions 
            that make developers' lives easier.
          </p>
          
          <div className="flex justify-center space-x-6">
            <a href="mailto:contact@sqbooster.dev" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Mail className="h-6 w-6" />
            </a>
            <a href="https://github.com/sqbooster" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://twitter.com/sqbooster" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Twitter className="h-6 w-6" />
            </a>
            <a href="https://sqbooster.dev" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Globe className="h-6 w-6" />
            </a>
          </div>
        </div>

        {/* About */}
        <div className="mb-16">
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <Code className="h-8 w-8 mr-3 text-blue-400" />
              About Me
            </h2>
            <div className="text-gray-300 space-y-4 text-lg leading-relaxed">
              <p>
                I'm a Python developer with a passion for creating simple, efficient solutions 
                to complex problems. My journey with sqbooster started from a need for a 
                lightweight, reliable storage solution that didn't require the overhead of 
                full database systems.
              </p>
              <p>
                With years of experience in backend development and database design, I believe 
                in the power of well-crafted tools that just work. sqbooster embodies this 
                philosophy - it's designed to be intuitive, reliable, and performant.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing 
                to open source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-16">
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">Technical Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span 
                  key={index}
                  className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="mb-16">
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6">Featured Projects</h2>
            <div className="grid md:grid-cols-1 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-600 hover:border-blue-500 transition-colors">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                    <a 
                      href={project.link}
                      className="text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </div>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Philosophy */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl p-8 border border-blue-700">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
              <Heart className="h-8 w-8 mr-3 text-red-400" />
              Development Philosophy
            </h2>
            <div className="text-gray-200 space-y-4 text-lg">
              <blockquote className="border-l-4 border-blue-400 pl-6 italic">
                "Great software is not about complexity - it's about solving real problems 
                with elegant simplicity."
              </blockquote>
              <p>
                I believe in writing code that is clean, well-documented, and maintainable. 
                Every line should serve a purpose, and every feature should solve a genuine problem.
              </p>
            </div>
          </div>
        </div>

        {/* Contact */}
        <div className="text-center">
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <h2 className="text-3xl font-bold text-white mb-6 flex items-center justify-center">
              <Coffee className="h-8 w-8 mr-3 text-yellow-400" />
              Let's Connect
            </h2>
            <p className="text-gray-400 mb-6 text-lg">
              Have questions about sqbooster? Want to collaborate? I'd love to hear from you!
            </p>
            <a 
              href="mailto:contact@sqbooster.dev"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center space-x-2 transition-colors"
            >
              <Mail className="h-5 w-5" />
              <span>Get in Touch</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;