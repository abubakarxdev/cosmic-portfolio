# Cosmic Portfolio Website

A stunning portfolio website with a unique planetary/galaxy/cosmos theme featuring advanced animations, particle effects, and interactive 3D elements.

## Features

- ✨ **Animated Starfield Background** - Twinkling stars and shooting meteors
- 🌌 **Nebula Effects** - Floating colored nebula clouds with depth
- 🎨 **Interactive Particles** - Mouse-responsive particle system
- 💎 **Glassmorphism UI** - Modern glass-effect cards and components
- 🚀 **Smooth Animations** - Framer Motion powered transitions
- 📱 **Fully Responsive** - Works beautifully on all devices
- 🎯 **Sections Included**:
  - Hero with typing animation
  - About Me
  - Skills with progress bars
  - Experience timeline
  - Education & Certifications
  - Projects showcase
  - Contact form

## Tech Stack

- **React** - UI library
- **Vite** - Build tool
- **TailwindCSS** - Styling with custom cosmic theme
- **Framer Motion** - Animations
- **React Icons** - Icon library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Start the development server:
\`\`\`bash
npm run dev
\`\`\`

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

\`\`\`bash
npm run build
\`\`\`

The production-ready files will be in the `dist` folder.

## Customization

### Update Your Information

1. **Hero Section** (`src/components/Hero.jsx`):
   - Change "Your Name" to your actual name
   - Update the typing animation text

2. **About Section** (`src/components/About.jsx`):
   - Replace the profile image placeholder with your photo
   - Update the bio text

3. **Skills Section** (`src/components/Skills.jsx`):
   - Add/remove skills as needed
   - Adjust skill levels (percentage)

4. **Experience Section** (`src/components/Experience.jsx`):
   - Add your work experience
   - Update company names and descriptions

5. **Education Section** (`src/components/Education.jsx`):
   - Add your degrees and certifications

6. **Projects Section** (`src/components/Projects.jsx`):
   - Add your actual projects
   - Update GitHub and demo links
   - Replace gradient placeholders with project images

7. **Contact Section** (`src/components/Contact.jsx`):
   - Update email and location
   - Add your social media links

### Color Customization

Edit `tailwind.config.js` to change the cosmic color palette:

\`\`\`javascript
colors: {
  cosmic: { /* Your colors */ },
  nebula: { /* Your colors */ },
}
\`\`\`

## Project Structure

\`\`\`
MyPortfolio/
├── src/
│   ├── components/
│   │   ├── StarfieldBackground.jsx
│   │   ├── NebulaBackground.jsx
│   │   ├── ParticleField.jsx
│   │   ├── GlassCard.jsx
│   │   ├── PlanetOrbit.jsx
│   │   ├── CosmicButton.jsx
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Experience.jsx
│   │   ├── Education.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.js
\`\`\`

## Performance Tips

- The starfield and particle effects use Canvas API for optimal performance
- Animations are GPU-accelerated using CSS transforms
- Framer Motion uses requestAnimationFrame for smooth 60fps animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - Feel free to use this for your own portfolio!

## Credits

Created with ❤️ using React, TailwindCSS, and Framer Motion
