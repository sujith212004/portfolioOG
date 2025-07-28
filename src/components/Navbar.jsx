import React, { useState } from 'react'

const Navbar = ({ activeSection, toggleTheme, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="nav-logo">Portfolio</h2>
        <div className="nav-controls">
          <button className="theme-toggle" onClick={toggleTheme}>
            {isDarkMode ? '☀️' : '🌙'}
          </button>
          <button 
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          {['home', 'about', 'skills', 'projects', 'contact'].map(item => (
            <li key={item}>
              <button
                className={activeSection === item ? 'active' : ''}
                onClick={() => scrollToSection(item)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar