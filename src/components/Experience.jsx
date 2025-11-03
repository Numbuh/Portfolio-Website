import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'Your Company Name',
      location: 'Location',
      period: '2023 - Present',
      description: [
        'Developed and maintained web applications using modern frameworks',
        'Collaborated with cross-functional teams to deliver high-quality products',
        'Implemented responsive designs and optimized application performance'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB']
    },
    {
      title: 'Junior Developer',
      company: 'Previous Company',
      location: 'Location',
      period: '2021 - 2023',
      description: [
        'Built and maintained frontend components',
        'Participated in code reviews and team meetings',
        'Learned and applied new technologies'
      ],
      technologies: ['JavaScript', 'HTML/CSS', 'Vue.js']
    },
    {
      title: 'Freelance Developer',
      company: 'Self-Employed',
      location: 'Remote',
      period: '2020 - 2021',
      description: [
        'Created custom websites for clients',
        'Managed project timelines and client communications',
        'Delivered solutions tailored to client needs'
      ],
      technologies: ['WordPress', 'PHP', 'JavaScript']
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
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  }

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>
        <motion.div 
          className="timeline"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="timeline-item"
              variants={itemVariants}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <div className="timeline-meta">
                    <span className="company">
                      <FaBriefcase /> {exp.company}
                    </span>
                    <span className="location">
                      <FaMapMarkerAlt /> {exp.location}
                    </span>
                    <span className="period">
                      <FaCalendarAlt /> {exp.period}
                    </span>
                  </div>
                </div>
                <ul className="timeline-description">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
                <div className="timeline-technologies">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
