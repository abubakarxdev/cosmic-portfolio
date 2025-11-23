import React from 'react';
import { motion } from 'framer-motion';

const CosmicButton = ({ children, onClick, variant = 'primary', className = '', type = 'button' }) => {
  const variants = {
    primary: 'bg-gradient-to-r from-cosmic-600 to-cosmic-800 hover:from-cosmic-500 hover:to-cosmic-700',
    secondary: 'bg-gradient-to-r from-nebula-purple to-nebula-pink hover:from-nebula-pink hover:to-nebula-purple',
    outline: 'border-2 border-cosmic-500 hover:bg-cosmic-500/20',
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      type={type}
      className={`cosmic-button relative px-8 py-3 rounded-full font-semibold text-white 
        transition-all duration-300 glow-cosmic ${variants[variant]} ${className}`}
    >
      <span className="relative z-10">{children}</span>
    </motion.button>
  );
};

export default CosmicButton;
