import React, { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar-optimized.jsx'
import Hero from './components/Hero-optimized.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className={`app ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <Navbar 
        activeSection={activeSection} 
        toggleTheme={toggleTheme} 
        isDarkMode={isDarkMode} 
      />
      <Hero isDarkMode={isDarkMode} />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App