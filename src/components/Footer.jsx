import React from 'react'
import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          &copy; {currentYear} Adam Decker. All rights reserved.
        </motion.p>
      </div>
    </footer>
  )
}

export default Footer
