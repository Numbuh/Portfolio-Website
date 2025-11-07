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
        'I worked through the company’s ServiceNow (SNOW) ticket system to track, troubleshoot, and resolve tech issues for employees across multiple departments.',
        'I also worked with CI/CD pipelines to help test and deploy internal tools safely, making sure new updates didn’t break existing systems before release. ',
        'Each day, I handled requests ranging from software installations and password resets to fixing hardware problems like monitors, printers, and docking stations.'
      ],
      technologies: ['bash', 'SQL', 'WordPress', 'Bash Scripts']
    },
    {
      title: 'Esports Software Development',
      company: 'Columbia College',
      location: 'Columbia, MO',
      period: 'July 2024 - August 2025',
      description: [
        'I built clean and easy-to-use tournament dashboards using React, making it simple for players and admins to track scores and schedules in real time.',
        'Behind the scenes, I wrote Python code to handle match logic and update player stats instantly through REST APIs.',
        'I used Docker to make sure the system ran the same on every computer, and deployed everything on AWS so tournaments could scale without crashing. '
      ],
      technologies: ['AirTable', 'SQL', 'WordPress']
    },
    {
      title: 'Data Analyst',
      company: 'Columbia College',
      location: 'Columbia, MO',
      period: 'March 2023 - April 2024',
      description: [
        'I managed large sets of student records using SQL and Excel, checking for errors and keeping everything consistent across multiple systems. ',
        'I built and ran Python scripts to clean data and format it for official reports, saving the team hours of manual entry. ',
        'To make the whole process smoother, I documented workflows and set up automated checks that caught missing or mismatched data early, helping the college meet every reporting deadline accurately.'
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
