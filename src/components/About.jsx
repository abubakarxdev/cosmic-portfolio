import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import profilePic from '../assets/my_pic.jpg';

const About = () => {
  return (
    <section id="about" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">About Me</h2>
          <p className="text-gray-400 text-lg">Exploring the digital cosmos</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Cosmic border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-cosmic-500 via-nebula-purple to-nebula-pink rounded-full blur-xl opacity-50 animate-pulse-glow" />
              
              {/* Profile image */}
              <div className="relative glass-strong rounded-full aspect-square flex items-center justify-center overflow-hidden">
                <img 
                  src={profilePic} 
                  alt="Abu Bakar" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* About Content */}
          <div className="space-y-6">
            <GlassCard delay={0.2}>
              <h3 className="text-2xl font-bold text-cosmic-400 mb-4">Who I Am</h3>
              <p className="text-gray-300 leading-relaxed">
                Software Engineer with expertise in Python, FastAPI, and TensorFlow. Experienced in full-stack development, 
                ML models, and AI-driven applications. I have a proven track record in web development and computer vision 
                solutions, achieving high accuracy in complex detection systems.
              </p>
            </GlassCard>

            <GlassCard delay={0.4}>
              <h3 className="text-2xl font-bold text-cosmic-400 mb-4">What I Do</h3>
              <p className="text-gray-300 leading-relaxed">
                I build scalable web applications and AI solutions. My expertise ranges from developing robust backends 
                with FastAPI and Python to creating responsive frontends with React.js. I specialize in integrating 
                Machine Learning models into practical web applications.
              </p>
            </GlassCard>

            <GlassCard delay={0.6}>
              <h3 className="text-2xl font-bold text-cosmic-400 mb-4">My Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To leverage the power of AI and modern web technologies to solve real-world problems. 
                I aim to create intelligent, efficient, and user-centric solutions that make a tangible impact.
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
