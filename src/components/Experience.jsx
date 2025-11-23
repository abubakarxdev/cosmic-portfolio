import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import { FiBriefcase } from 'react-icons/fi';

const Experience = () => {
  const experiences = [
    {
      title: 'Web Developer Intern (Remote)',
      company: 'PulseMatrix LLC',
      period: 'Sep 2025 - Present',
      description: 'Developing responsive business websites and custom web solutions for diverse clients.',
      achievements: [
        'Developed 10+ responsive business websites using GoDaddy platform',
        'Engineered custom web solutions with media galleries and document management',
        'Reduced page load times by 30% through performance optimization',
      ],
    },
    {
      title: 'Software Engineer Intern',
      company: 'Codeaza Technologies',
      period: 'Feb 2025 - June 2025',
      description: 'Architected scalable multi-tenant platforms and RESTful APIs with ML integration.',
      achievements: [
        'Architected feedback platform serving 12+ chains with 800+ MAU',
        'Developed 20+ RESTful API endpoints with RBAC and JWT authentication',
        'Integrated ML-powered voice analytics with 85% accuracy',
      ],
    },
  ];

  return (
    <section id="experience" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Experience</h2>
          <p className="text-gray-400 text-lg">My professional journey through the cosmos</p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cosmic-500 via-nebula-purple to-nebula-pink" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-cosmic-500 rounded-full border-4 border-space-dark transform -translate-x-1/2 glow-cosmic z-10" />

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <GlassCard hover={false}>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cosmic-500 to-nebula-purple rounded-lg flex items-center justify-center">
                        <FiBriefcase className="text-white text-xl" />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-1">{exp.title}</h3>
                        <p className="text-cosmic-400 font-medium mb-2">{exp.company}</p>
                        <p className="text-sm text-gray-400 mb-4">{exp.period}</p>
                        <p className="text-gray-300 mb-4">{exp.description}</p>
                        
                        <div className="space-y-2">
                          {exp.achievements.map((achievement, i) => (
                            <div key={i} className="flex items-start space-x-2">
                              <span className="text-cosmic-400 mt-1">•</span>
                              <span className="text-gray-400 text-sm">{achievement}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
