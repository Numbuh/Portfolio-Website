import React from 'react'
import { FaSun, FaMoon } from 'react-icons/fa'
import './ThemeToggle.css'

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'dark' ? <FaSun /> : <FaMoon />}
    </button>
  )
}

export default ThemeToggle
