import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import CosmicButton from './CosmicButton';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Message sent! (This is a demo)');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { icon: FiGithub, label: 'GitHub', url: 'https://github.com' },
    { icon: FiLinkedin, label: 'LinkedIn', url: 'https://linkedin.com' },
    { icon: FiTwitter, label: 'Twitter', url: 'https://twitter.com' },
  ];

  return (
    <section id="contact" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Get In Touch</h2>
          <p className="text-gray-400 text-lg">Let's create something amazing together</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <GlassCard delay={0.2}>
            <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cosmic-500 focus:ring-2 focus:ring-cosmic-500/20 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cosmic-500 focus:ring-2 focus:ring-cosmic-500/20 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-cosmic-500 focus:ring-2 focus:ring-cosmic-500/20 transition-all resize-none"
                  placeholder="Your message..."
                />
              </div>

              <CosmicButton type="submit" variant="primary" className="w-full">
                Send Message
              </CosmicButton>
            </form>
          </GlassCard>

          {/* Contact Info */}
          <div className="space-y-6">
            <GlassCard delay={0.4}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-cosmic-500 to-nebula-purple rounded-lg flex items-center justify-center">
                  <FiMail className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                  <p className="text-gray-400">abubakarxdev@gmail.com</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard delay={0.5}>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-nebula-pink to-nebula-purple rounded-lg flex items-center justify-center">
                  <FiMapPin className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">Location</h4>
                  <p className="text-gray-400">Islamabad, Pakistan</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard delay={0.6}>
              <h4 className="text-lg font-semibold text-white mb-4">Connect With Me</h4>
              <div className="flex space-x-4">
                <motion.a
                  href="https://github.com/CodeWithBakar"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gradient-to-br from-cosmic-500 to-nebula-purple rounded-lg flex items-center justify-center hover:glow-cosmic transition-all"
                >
                  <FiGithub className="text-white text-xl" />
                </motion.a>
                <motion.a
                  href="https://www.linkedin.com/in/abubakarse005/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-gradient-to-br from-cosmic-500 to-nebula-purple rounded-lg flex items-center justify-center hover:glow-cosmic transition-all"
                >
                  <FiLinkedin className="text-white text-xl" />
                </motion.a>
              </div>
            </GlassCard>

            {/* Decorative Quote */}
            <GlassCard delay={0.7}>
              <blockquote className="text-gray-300 italic">
                "The cosmos is within us. We are made of star-stuff. We are a way for the universe to know itself."
                <footer className="text-cosmic-400 mt-2 not-italic">— Carl Sagan</footer>
              </blockquote>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
