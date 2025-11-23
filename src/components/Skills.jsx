import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import { 
  FaReact, FaNodeJs, FaPython, FaDocker, FaGitAlt, FaDatabase,
  FaHtml5, FaCss3Alt, FaJs, FaAws 
} from 'react-icons/fa';
import { 
  SiTailwindcss, SiMongodb, SiPostgresql, SiTypescript, 
  SiNextdotjs, SiExpress, SiRedis, SiGraphql 
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      color: 'from-nebula-blue to-cosmic-500',
      skills: [
        { name: 'React.js', icon: FaReact, level: 95 },
        { name: 'Redux Toolkit', icon: FaReact, level: 90 },
        { name: 'TailwindCSS', icon: SiTailwindcss, level: 95 },
        { name: 'JavaScript (ES6+)', icon: FaJs, level: 92 },
        { name: 'HTML5', icon: FaHtml5, level: 98 },
        { name: 'CSS3', icon: FaCss3Alt, level: 95 },
      ],
    },
    {
      title: 'Backend',
      color: 'from-nebula-purple to-nebula-pink',
      skills: [
        { name: 'Python', icon: FaPython, level: 95 },
        { name: 'FastAPI', icon: FaPython, level: 92 },
        { name: 'Node.js', icon: FaNodeJs, level: 88 },
        { name: 'Express.js', icon: SiExpress, level: 85 },
        { name: 'RESTful APIs', icon: FaNodeJs, level: 90 },
      ],
    },
    {
      title: 'Database & AI/ML',
      color: 'from-nebula-pink to-nebula-cyan',
      skills: [
        { name: 'PostgreSQL', icon: SiPostgresql, level: 90 },
        { name: 'MongoDB', icon: SiMongodb, level: 88 },
        { name: 'TensorFlow', icon: FaPython, level: 85 },
        { name: 'Scikit-learn', icon: FaPython, level: 82 },
        { name: 'Docker', icon: FaDocker, level: 80 },
        { name: 'Git', icon: FaGitAlt, level: 92 },
      ],
    },
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Skills & Technologies</h2>
          <p className="text-gray-400 text-lg">My cosmic toolkit</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <GlassCard key={category.title} delay={categoryIndex * 0.2}>
              <div className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent mb-6`}>
                {category.title}
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <skill.icon className="text-2xl text-cosmic-400" />
                        <span className="text-gray-300 font-medium">{skill.name}</span>
                      </div>
                      <span className="text-cosmic-400 text-sm">{skill.level}%</span>
                    </div>
                    
                    {/* Skill bar */}
                    <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full relative`}
                      >
                        <div className="absolute inset-0 bg-white opacity-30 animate-pulse-glow" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
