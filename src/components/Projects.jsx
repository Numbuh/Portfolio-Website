import React from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack shopping experience with real-time updates',
      image: '/Project1.png',
      github: 'https://github.com/Numbuh/GCBot',
      live: '',
      tags: ['React', 'Node.js', 'MongoDB'],
      overlay: 'Modern web application with interactive features'
    },
    {
      title: 'Task Management App',
      description: 'Productivity tool with collaborative features',
      image: '/Project2.png',
      github: 'https://github.com/Numbuh/EventsWiiGame',
      live: '',
      tags: ['Vue.js', 'Firebase', 'PWA'],
      overlay: 'Mobile-first design with smooth animations'
    },
    {
      title: 'Analytics Dashboard',
      description: 'Real-time insights with interactive charts',
      image: null, // Add your Project3.jpg to public folder if available
      github: 'https://github.com/Numbuh/project3',
      live: '',
      tags: ['TypeScript', 'D3.js', 'Python'],
      overlay: 'Data visualization dashboard'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="projects" className="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <motion.div 
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="project-card"
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <div className="project-image">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-img"
                    onError={(e) => {
                      e.target.style.display = 'none'
                      e.target.nextElementSibling?.classList.add('show')
                    }}
                  />
                ) : (
                  <div className="project-placeholder">{project.title}</div>
                )}
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  {project.github && (
                    <a 
                      href={project.github} 
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {project.live && (
                    <a 
                      href={project.live} 
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
