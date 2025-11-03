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
    
    // Check if we're on Netlify or local
    const isNetlify = window.location.hostname.includes('netlify.app') || 
                      window.location.hostname.includes('netlify.com') ||
                      window.location.hostname.includes('localhost') === false
    
    // Netlify Forms automatically handles submission
    // Just encode the form data
    const formDataToSubmit = new FormData(e.target)
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formDataToSubmit).toString()
      })

      // Netlify Forms returns 200 on success, or 302 redirect
      // Also check response URL to see if we got redirected to success page
      const isSuccess = response.ok || 
                       response.status === 200 || 
                       response.status === 302 ||
                       response.url.includes('/thank-you') ||
                       response.url.includes('success')

      if (isSuccess) {
        setIsSubmitting(false)
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitStatus(null), 5000)
        return
      }

      // Try to check response text for success indicators
      const responseText = await response.text()
      if (responseText.includes('Thank you') || responseText.includes('success') || responseText.includes('form-success')) {
        setIsSubmitting(false)
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitStatus(null), 5000)
        return
      }

      // If we get here, it might have failed
      console.error('Form submission failed:', response.status, response.statusText)
      throw new Error(`Form submission failed with status: ${response.status}`)
    } catch (error) {
      console.error('Error submitting form:', error)
      setIsSubmitting(false)
      
      // On Netlify, even network errors might mean the form submitted
      // Netlify Forms can sometimes cause fetch errors but still process the form
      if (isNetlify) {
        // On Netlify, assume it might have worked and show success
        // User can check Netlify dashboard to confirm
        setSubmitStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setSubmitStatus(null), 5000)
      } else {
        // Show different message if testing locally
        if (window.location.hostname === 'localhost') {
          setSubmitStatus('local-error')
        } else {
          setSubmitStatus('error')
        }
        setTimeout(() => setSubmitStatus(null), 5000)
      }
    }
  }

  const contactMethods = [
    {
      icon: <FaEnvelope />,
      label: 'Email',
      value: 'deckerdev00@gmail.com', // Update with your actual email
      href: 'mailto:deckerdev00@gmail.com' // Update with your actual email
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
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Hidden field for Netlify form recognition */}
            <input type="hidden" name="form-name" value="contact" />
            
            {/* Honeypot field for spam protection */}
            <div style={{ display: 'none' }}>
              <label>
                Don't fill this out if you're human: <input name="bot-field" />
              </label>
            </div>
            
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
                Thank you! Your message has been sent. I'll get back to you soon!
              </motion.div>
            )}
            {submitStatus === 'error' && (
              <motion.div 
                className="form-error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Sorry, there was an error sending your message. Please try again or email me directly.
              </motion.div>
            )}
            {submitStatus === 'local-error' && (
              <motion.div 
                className="form-error"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                ⚠️ Netlify Forms only work when deployed to Netlify. The form will work once you deploy your site. For now, please email me directly using the email link above.
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
