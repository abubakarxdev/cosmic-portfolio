import React from 'react';
import StarfieldBackground from './components/StarfieldBackground';
import NebulaBackground from './components/NebulaBackground';
import ParticleField from './components/ParticleField';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="relative min-h-screen bg-space-dark text-white">
      {/* Background Layers */}
      <StarfieldBackground />
      <NebulaBackground />
      <ParticleField />

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Abu Bakar. Crafted with{' '}
            <span className="text-nebula-pink">❤</span> in the cosmos.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
