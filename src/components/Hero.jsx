import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';
import CosmicButton from './CosmicButton';
import PlanetOrbit from './PlanetOrbit';
import resume from '../docs/abubakar-resume.pdf';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Software Engineer | Python, FastAPI & AI Expert';
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => {
      clearInterval(typingInterval);
      clearInterval(cursorInterval);
    };
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Decorative Orbits */}
      {/* Decorative Orbits - Removed for 3D Scene */}
      {/* <div className="absolute top-20 right-20 opacity-30">
        <PlanetOrbit size="lg" color="cosmic" />
      </div>
      <div className="absolute bottom-20 left-20 opacity-20">
        <PlanetOrbit size="md" color="nebula" />
      </div> */}

      <div className="container mx-auto px-6 z-10 pt-32 h-full">
        <div className="grid md:grid-cols-2 gap-12 h-full items-center">
          {/* Left Content */}
          <div className="text-left flex flex-col justify-center">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="text-cosmic-400 text-lg md:text-xl font-medium tracking-wide">
                Welcome to the Cosmos
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 origin-left"
            >
              <span className="gradient-text">Abu Bakar</span>
            </motion.h1>

            {/* Typing Animation */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-10 h-12 flex items-center justify-start"
            >
              <span>{text}</span>
              <span className={`ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-gray-400 text-lg md:text-xl max-w-2xl mb-16 leading-relaxed"
            >
              Crafting digital experiences across the universe. Passionate about creating 
              innovative solutions that push the boundaries of technology.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-start gap-6 mb-20"
            >
              <CosmicButton onClick={scrollToProjects} variant="primary">
                View My Work
              </CosmicButton>
              <CosmicButton onClick={scrollToContact} variant="outline">
                Get In Touch
              </CosmicButton>
              <CosmicButton onClick={() => window.open(resume, '_blank')} variant="outline">
                View Resume
              </CosmicButton>
            </motion.div>
          </div>

          {/* Right Column - Reserved for 3D Earth */}
          <div className="hidden md:block">
            {/* The Earth is in the background layer, but this spacer helps with layout if needed */}
          </div>
        </div>

        {/* Scroll Indicator - Centered at bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center cursor-pointer hover:text-cosmic-400 transition-colors"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="text-sm text-gray-400 mb-2 tracking-widest uppercase text-xs">Scroll Down</span>
            <FiChevronDown className="text-2xl text-cosmic-400" />
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-1/4 left-10 w-4 h-4 rounded-full bg-nebula-pink opacity-50 blur-sm"
      />
      <motion.div
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-1/3 right-10 w-6 h-6 rounded-full bg-nebula-blue opacity-50 blur-sm"
      />
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute bottom-1/4 left-1/4 w-5 h-5 rounded-full bg-nebula-cyan opacity-50 blur-sm"
      />
    </section>
  );
};

export default Hero;
