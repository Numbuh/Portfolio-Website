import React from 'react'
import { motion } from 'framer-motion'
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'
import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'Intern Support Technician',
      company: 'Shelter Insurance',
      location: 'Columbia, MO',
      period: '2025 - Present',
      description: [
        'Restructured inventory management system',
        'Assisted in the ticketing system while helping end users and prepping bash scripts for admins.',
        'Created and maintained various bash scripts to automate tasks and improve efficiency.'
      ],
      technologies: ['bash', 'SQL', 'WordPress', 'Bash Scripts']
    },
    {
      title: 'Esports Management',
      company: 'Columbia College',
      location: 'Columbia, MO',
      period: 'July 2024 - August 2025',
      description: [
        'Managed and organized various esports events and tournaments',
        'Worked with various software to manage and track esports events and tournaments'
        
      ],
      technologies: ['AirTable', 'SQL', 'WordPress']
    },
    {
      title: 'Data Analyst',
      company: 'Columbia College',
      location: 'Columbia, MO',
      period: 'March 2023 - April 2024',
      description: [
        'Worked with various data sources to create reports and dashboards',
        'Used various tools to analyze data and create reports',
        'Used various tools to create reports and dashboards'
      ],
      technologies: ['Python', 'SQL', 'Tableau']
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
