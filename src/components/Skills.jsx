import React from 'react'
import { motion } from 'framer-motion'
import { 
  FaReact, 
  FaJs, 
  FaHtml5, 
  FaCss3Alt, 
  FaNode, 
  FaPython,
  FaFigma,
  FaGitAlt,
  FaDocker,
  FaAws,
  FaLinux
} from 'react-icons/fa'
import { 
  SiTypescript, 
  SiVuedotjs, 
  SiMongodb, 
  SiExpress 
} from 'react-icons/si'
import './Skills.css'

const Skills = () => {
  // Icon mapping for common technologies
  const iconMap = {
    'React': <FaReact />,
    'JavaScript': <FaJs />,
    'TypeScript': <SiTypescript />,
    'HTML/CSS': <FaHtml5 />,
    'HTML': <FaHtml5 />,
    'CSS': <FaCss3Alt />,
    'Vue.js': <SiVuedotjs />,
    'Node.js': <FaNode />,
    'Python': <FaPython />,
    'MongoDB': <SiMongodb />,
    'Express.js': <SiExpress />,
    'Git': <FaGitAlt />,
    'Docker': <FaDocker />,
    'AWS': <FaAws />,
    'Figma': <FaFigma />,
    'Linux': <FaLinux />
  }

  const skills = [
    { name: 'React', icon: iconMap['React'] },
    { name: 'JavaScript', icon: iconMap['JavaScript'] },
    { name: 'TypeScript', icon: iconMap['TypeScript'] },
    { name: 'HTML', icon: iconMap['HTML'] },
    { name: 'CSS', icon: iconMap['CSS'] },
    { name: 'Node.js', icon: iconMap['Node.js'] },
    { name: 'Python', icon: iconMap['Python'] },
    { name: 'MongoDB', icon: iconMap['MongoDB'] },
    { name: 'Express.js', icon: iconMap['Express.js'] },
    { name: 'Git', icon: iconMap['Git'] },
    { name: 'Figma', icon: iconMap['Figma'] },
    { name: 'Docker', icon: iconMap['Docker'] },
    { name: 'AWS', icon: iconMap['AWS'] },
    { name: 'Linux', icon: iconMap['Linux'] }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200
      }
    }
  }

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="skill-item"
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -5 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="skill-icon">
                {skill.icon || <FaJs />}
              </div>
              <span className="skill-name">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills