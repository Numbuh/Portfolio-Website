import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaArrowDown } from 'react-icons/fa'
import './Hero.css'

const Hero = () => {
  const [typingText, setTypingText] = useState('')
  const typingTexts = ['Developer', 'Designer', 'Gamer']
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const typeText = () => {
      const currentText = typingTexts[currentIndex]
      
      if (isDeleting) {
        if (charIndex > 0) {
          setTypingText(currentText.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        } else {
          setIsDeleting(false)
          setCurrentIndex((currentIndex + 1) % typingTexts.length)
        }
      } else {
        if (charIndex < currentText.length) {
          setTypingText(currentText.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      }
    }

    const timer = setTimeout(typeText, isDeleting ? 50 : 100)
    return () => clearTimeout(timer)
  }, [typingText, currentIndex, isDeleting, charIndex])

  const scrollToProjects = () => {
    const projects = document.getElementById('projects')
    if (projects) {
      projects.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = () => {
    const contact = document.getElementById('contact')
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="hero-title">
            <span className="text-gradient">Passionate</span>
            <div className="typing-container">
              <span className="typing-text">
                {typingText}
                <span className="cursor">|</span>
              </span>
            </div>
          </h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Passionate for Homebrew projects and open source software
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="btn btn-primary" onClick={scrollToProjects}>
              View Work
            </button>
            <button className="btn btn-secondary" onClick={scrollToContact}>
              Where to Find Me
            </button>
          </motion.div>
        </motion.div>
        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="profile-image-container">
            <div className="profile-image-wrapper">
              <img src="/profile.JPEG" alt="Adam Decker" className="profile-image" />
              <div className="profile-glow"></div>
            </div>
          </div>
        </motion.div>
      </div>
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="mouse">
          <FaArrowDown className="scroll-arrow" />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
