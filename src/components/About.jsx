import React from 'react'
import { motion } from 'framer-motion'
import { FaPalette, FaCode, FaServer } from 'react-icons/fa'
import './About.css'

const About = () => {
  const skills = [
    {
      icon: <FaPalette />,
      title: 'UI/UX Design',
      description: 'Loves designing and creating beautiful interfaces and experiences'
    },
    {
      icon: <FaCode />,
      title: 'Frontend Development',
      description: 'Building responsive and interactive experiences'
    },
    {
      icon: <FaServer />,
      title: 'Backend Development',
      description: 'Loves to work with unique and interesting projects.'
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.div 
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="about-text" variants={itemVariants}>
            <p>
              I'm a competitive programmer and a software engineer who enjoys understanding unqiue and difficult frameworks and projects.
            </p>
            <p>
              The projects I enjoy the most are ones that make me think about appraoching things from a different angle to combine all the complexe pieces into one simple finale project.
            </p>
          </motion.div>
          <motion.div 
            className="skills-grid"
            variants={containerVariants}
          >
            {skills.map((skill, index) => (
              <motion.div 
                key={index}
                className="skill-item"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="skill-icon">{skill.icon}</div>
                <h3>{skill.title}</h3>
                <p>{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
