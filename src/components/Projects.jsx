import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import CosmicButton from './CosmicButton';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import neuroSentinelImg from '../assets/neurosentinel.png';
import blogAppImg from '../assets/blogapp.png';
import weatherAppImg from '../assets/weatherapp.png';

const Projects = () => {
  const projects = [
    {
      title: 'NeuroSentinel — AI Brain Disease Detection',
      description: 'Healthcare system with AI detection for 5+ neurological conditions achieving 92% accuracy using MRI/CT analysis.',
      image: neuroSentinelImg,
      tags: ['React.js', 'FastAPI', 'TensorFlow', 'MongoDB' , 'Node.js' , 'Express.js'],
      github: 'https://github.com/CodeWithBakar/NeuroSentinel_FrontEnd',
      demo: '#',
    },
    {
      title: 'BlogApp — Content Management Platform',
      description: 'Full-stack platform with JWT/OAuth2 authentication supporting 100+ concurrent users and rich-text editing.',
      image: blogAppImg,
      tags: ['React.js', 'FastAPI', 'PostgreSQL', 'Redux'],
      github: 'https://github.com/CodeWithBakar/blogapp',
      demo: '#',
    },
    {
      title: 'Weather App — Real-time Forecasts',
      description: 'React-based weather application providing real-time details for any city using OpenWeather API with dynamic backgrounds.',
      image: weatherAppImg,
      tags: ['React.js', 'OpenWeather API', 'Axios', 'CSS3'],
      github: 'https://github.com/CodeWithBakar/Weather-App',
      demo: '#',
    },
  ];

  return (
    <section id="projects" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Projects</h2>
          <p className="text-gray-400 text-lg">Exploring the universe of possibilities</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <GlassCard hover={false} className="h-full flex flex-col">
                {/* Project Image/Gradient */}
                <div 
                  className="w-full h-48 rounded-xl mb-4 flex items-center justify-center text-white text-2xl font-bold relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-all duration-300" />
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Project Info */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 flex-1">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-cosmic-500/20 border border-cosmic-500/30 rounded-full text-xs text-cosmic-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center space-x-4">
                    <a
                      href={project.github}
                      className="flex items-center space-x-2 text-gray-400 hover:text-cosmic-400 transition-colors"
                    >
                      <FiGithub className="text-xl" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.demo}
                      className="flex items-center space-x-2 text-gray-400 hover:text-cosmic-400 transition-colors"
                    >
                      <FiExternalLink className="text-xl" />
                      <span className="text-sm">Demo</span>
                    </a>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
