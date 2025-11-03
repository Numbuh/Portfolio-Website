import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', message: '' })
      setTimeout(() => setSubmitStatus(null), 3000)
    }, 1000)
  }

  const contactMethods = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'hello@example.com',
      href: 'mailto:hello@example.com'
    },
    {
      icon: <FaLinkedin />,
      label: 'LinkedIn',
      value: 'LinkedIn',
      href: 'https://www.linkedin.com/in/adamdeckerzer0/',
      external: true
    },
    {
      icon: <FaGithub />,
      label: 'GitHub',
      value: 'GitHub',
      href: 'https://github.com/Numbuh',
      external: true
    }
  ]

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let's Connect
        </motion.h2>
        <div className="contact-content">
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>
              I'm always open to discussing new projects, creative ideas, or opportunities 
              to be part of your visions.
            </p>
            <div className="contact-methods">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.href}
                  className="contact-item"
                  target={method.external ? '_blank' : undefined}
                  rel={method.external ? 'noopener noreferrer' : undefined}
                  whileHover={{ scale: 1.05, x: 10 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <span className="contact-icon">{method.icon}</span>
                  <span>{method.label === 'Email' ? method.value : method.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  <FaPaperPlane /> Send Message
                </>
              )}
            </button>
            {submitStatus === 'success' && (
              <motion.div 
                className="form-success"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Thank you! Your message has been sent.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
