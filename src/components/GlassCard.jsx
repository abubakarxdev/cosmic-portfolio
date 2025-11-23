import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', hover = true, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      className={`glass rounded-2xl p-6 transition-all duration-300 ${
        hover ? 'hover:glow-cosmic cursor-pointer' : ''
      } ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
