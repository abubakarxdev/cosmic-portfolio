import React from 'react';
import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import { FiAward, FiBook, FiExternalLink } from 'react-icons/fi';
import certStats from '../assets/cert_statistics.jpeg';
import certWeb from '../assets/cert_html_css_js.jpg';
import certQa from '../assets/cert_testing.jpg';
import certFigma from '../assets/cert_figma.jpg';
import certReactNext from '../assets/cert_react_next.jpg';
import certAi from '../assets/cert_ai.jpeg';
import certCyber from '../assets/cert_cyber.jpeg';
import certIbmCloud from '../assets/cert_ibm_cloud_essentials.png';

const Education = () => {
  const education = [
    {
      degree: 'Bachelor of Software Engineering',
      institution: 'COMSATS University Islamabad',
      period: 'Feb 2021 - Jan 2025',
      description: 'Major in Computer Science. Final Year Project: AI-driven healthcare platform for brain disease detection (shortlisted in top 10 of 40 submissions).',
      achievements: ['Data Science', 'Software Engineering', 'Operating Systems', 'Web Technologies', 'AI'],
    },
  ];

  const certifications = [
    {
      title: 'Statistical Analysis of Data for Researchers',
      issuer: 'Punjab Higher Education Commission',
      date: 'Jul 2025',
      id: '1U5K2H7FQKML',
      skills: ['Data Analysis', 'Statistics', 'Research'],
      image: certStats,
      link: 'https://www.coursera.org/account/accomplishments/records/1U5K2H7FQKML',
    },
    {
      title: 'Master JavaScript, HTML, and CSS',
      issuer: 'Udemy',
      date: 'Feb 2025',
      id: 'UC-5442fcb9',
      skills: ['HTML', 'CSS', 'JavaScript', 'Web Development'],
      image: certWeb,
      link: 'https://www.udemy.com/certificate/UC-5442fcb9-2f2e-4dea-95fa-33e58910e178/',
    },
    {
      title: 'Professional Diploma in Software Testing',
      issuer: 'MTF Institute',
      date: 'Feb 2025',
      id: 'UC-47b4a32a',
      skills: ['Software Testing', 'Quality Assurance'],
      image: certQa,
      link: 'https://www.udemy.com/certificate/UC-47b4a32a-93d8-4a5a-b13a-44047235f274/',
    },
    {
      title: 'Figma Essential for UI/UX',
      issuer: 'Udemy',
      date: 'Jan 2025',
      id: 'UC-8e8e6ae6',
      skills: ['UI/UX', 'Figma', 'Design'],
      image: certFigma,
      link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-8e8e6ae6-3137-427a-84d9-fb843e525dbf.jpg',
    },
    {
      title: 'IBM Cloud Essentials V3',
      issuer: 'IBM',
      date: 'Jan 2025',
      id: '582fc86fb977',
      skills: ['Cloud Computing', 'Kubernetes', 'IBM Cloud'],
      image: certIbmCloud,
      link: 'https://courses.cognitiveclass.ai/certificates/582fc86fb9774c0eae3cac3652286587',
    },
    {
      title: 'Practical Next.js & React',
      issuer: 'Udemy',
      date: 'Jan 2025',
      id: 'UC-f726fbc0',
      skills: ['Next.js', 'React.js', 'Frontend'],
      image: certReactNext,
      link: 'https://udemy-certificate.s3.amazonaws.com/image/UC-f726fbc0-d1bb-480d-b0d1-535e03027558.jpg',
    },
    {
      title: 'AI for Beginners',
      issuer: 'HP',
      date: 'Dec 2024',
      id: null,
      skills: ['Artificial Intelligence'],
      image: certAi,
      link: 'https://api.life-global.org/learning/api/certificates/336e2a34-03b9-4093-a7c2-3d7aa23bfbae',
    },
    {
      title: 'Introduction to Cyber Security',
      issuer: 'HP',
      date: 'Dec 2024',
      id: null,
      skills: ['Cybersecurity', 'Risk Management'],
      image: certCyber,
      link: 'https://api.life-global.org/learning/api/certificates/0f03b9e7-886c-4d66-8e94-f87db3cf4470',
    },
  ];

  return (
    <section id="education" className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">Education</h2>
          <p className="text-gray-400 text-lg">Academic achievements and certifications</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="lg:col-span-3 space-y-6">
            {education.map((edu, index) => (
              <GlassCard key={index} delay={index * 0.2}>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-nebula-blue to-cosmic-500 rounded-lg flex items-center justify-center">
                    <FiBook className="text-white text-xl" />
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{edu.degree}</h3>
                    <p className="text-cosmic-400 font-medium mb-2">{edu.institution}</p>
                    <p className="text-sm text-gray-400 mb-4">{edu.period}</p>
                    <p className="text-gray-300 mb-4">{edu.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((achievement, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-cosmic-500/20 border border-cosmic-500/30 rounded-full text-sm text-cosmic-300"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>

          {/* Certifications */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3 mb-8"
            >
              <div className="w-10 h-10 bg-gradient-to-br from-nebula-pink to-nebula-purple rounded-lg flex items-center justify-center">
                <FiAward className="text-white text-lg" />
              </div>
              <h3 className="text-2xl font-bold text-white">Certifications</h3>
            </motion.div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => (
                <GlassCard key={index} delay={0.2 + index * 0.1} className="h-full flex flex-col">
                  {/* Certificate Image/Placeholder */}
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-40 rounded-lg mb-4 overflow-hidden relative group cursor-pointer"
                  >
                    {cert.image ? (
                      <img 
                        src={cert.image} 
                        alt={cert.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-cosmic-600 to-nebula-purple flex items-center justify-center p-4 text-center">
                        <span className="text-white font-bold opacity-50">{cert.issuer}</span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-white text-sm font-medium flex items-center gap-2">
                        View Credential <FiExternalLink />
                      </span>
                    </div>
                  </a>

                  <div className="flex-1 flex flex-col">
                    <h4 className="text-lg font-bold text-white mb-1 leading-tight">{cert.title}</h4>
                    <p className="text-cosmic-400 text-sm mb-2">{cert.issuer}</p>
                    <p className="text-gray-500 text-xs mb-3">{cert.date} • {cert.id ? `ID: ${cert.id}` : 'Credential'}</p>
                    
                    <div className="mt-auto flex flex-wrap gap-2">
                      {cert.skills.map((skill, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-white/5 rounded text-xs text-gray-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </GlassCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
