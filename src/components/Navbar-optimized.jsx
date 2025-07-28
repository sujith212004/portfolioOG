import React, { useState, useEffect } from 'react'

const Navbar = ({ activeSection, toggleTheme, isDarkMode }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' })
    setIsMenuOpen(false)
  }

  const navStyles = {
    navbar: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      padding: '1rem 0',
      background: isScrolled 
        ? (isDarkMode ? 'rgba(17, 24, 39, 0.95)' : 'rgba(255, 255, 255, 0.95)')
        : (isDarkMode ? 'rgba(17, 24, 39, 0.8)' : 'rgba(255, 255, 255, 0.9)'),
      backdropFilter: 'blur(20px)',
      borderBottom: isScrolled 
        ? (isDarkMode ? '1px solid rgba(75, 85, 99, 0.3)' : '1px solid rgba(229, 231, 235, 0.8)')
        : (isDarkMode ? '1px solid rgba(75, 85, 99, 0.2)' : '1px solid rgba(229, 231, 235, 0.6)'),
      boxShadow: isScrolled 
        ? (isDarkMode ? '0 4px 20px rgba(0, 0, 0, 0.3)' : '0 4px 20px rgba(0, 0, 0, 0.1)')
        : (isDarkMode ? '0 2px 10px rgba(0, 0, 0, 0.2)' : '0 2px 10px rgba(0, 0, 0, 0.05)'),
      transition: 'all 0.3s ease',
      fontFamily: "'Inter', 'Segoe UI', sans-serif"
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '0 2rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    logo: {
      fontSize: '1.6rem',
      fontWeight: '800',
      background: isDarkMode 
        ? 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)'
        : 'linear-gradient(45deg, #1e40af, #7c3aed, #db2777)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      letterSpacing: '-0.02em',
      // Fallback for browsers that don't support background-clip
      color: isDarkMode ? '#3b82f6' : '#1e40af'
    },
    menu: {
      display: 'flex',
      alignItems: 'center',
      gap: '2rem',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    menuItem: {
      position: 'relative'
    },
    menuButton: {
      background: 'none',
      border: 'none',
      color: isDarkMode ? 'white' : '#374151',
      fontSize: '0.95rem',
      fontWeight: '600',
      padding: '0.75rem 1.5rem',
      borderRadius: '50px',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden'
    },
    activeButton: {
      background: isDarkMode 
        ? 'linear-gradient(45deg, #3b82f6, #8b5cf6)'
        : 'linear-gradient(45deg, #1e40af, #7c3aed)',
      color: 'white',
      boxShadow: isDarkMode 
        ? '0 8px 25px rgba(59, 130, 246, 0.4)'
        : '0 8px 25px rgba(30, 64, 175, 0.3)'
    },
    controls: {
      display: 'flex',
      alignItems: 'center',
      gap: '1rem'
    },
    themeToggle: {
      background: isDarkMode 
        ? 'rgba(255, 255, 255, 0.1)' 
        : 'rgba(107, 114, 128, 0.1)',
      border: isDarkMode 
        ? '2px solid rgba(255, 255, 255, 0.2)' 
        : '2px solid rgba(107, 114, 128, 0.2)',
      borderRadius: '50%',
      width: '45px',
      height: '45px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.2rem',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      color: isDarkMode ? '#fbbf24' : '#374151'
    },
    mobileMenu: {
      display: 'none',
      flexDirection: 'column',
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      background: isDarkMode 
        ? 'rgba(17, 24, 39, 0.95)' 
        : 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      padding: '2rem',
      borderRadius: '0 0 20px 20px',
      border: isDarkMode 
        ? '1px solid rgba(75, 85, 99, 0.3)' 
        : '1px solid rgba(229, 231, 235, 0.8)',
      borderTop: 'none',
      boxShadow: isDarkMode 
        ? '0 10px 40px rgba(0, 0, 0, 0.3)' 
        : '0 10px 40px rgba(0, 0, 0, 0.1)'
    },
    hamburger: {
      display: 'none',
      flexDirection: 'column',
      cursor: 'pointer',
      padding: '0.5rem',
      gap: '4px'
    },
    hamburgerLine: {
      width: '25px',
      height: '3px',
      background: isDarkMode ? 'white' : '#374151',
      borderRadius: '2px',
      transition: 'all 0.3s ease'
    }
  }

  return (
    <>
      <style>
        {`
          .nav-button:hover {
            background: ${isDarkMode 
              ? 'rgba(255, 255, 255, 0.1)' 
              : 'rgba(107, 114, 128, 0.1)'} !important;
            transform: translateY(-2px);
          }
          
          .theme-toggle:hover {
            background: ${isDarkMode 
              ? 'rgba(255, 255, 255, 0.2)' 
              : 'rgba(107, 114, 128, 0.2)'} !important;
            transform: scale(1.1);
            border-color: ${isDarkMode 
              ? 'rgba(255, 255, 255, 0.4)' 
              : 'rgba(107, 114, 128, 0.4)'};
          }
          
          .logo:hover {
            transform: scale(1.05);
          }
          
          .logo {
            background: ${isDarkMode 
              ? 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)' 
              : 'linear-gradient(45deg, #1e40af, #7c3aed, #db2777)'} !important;
            -webkit-background-clip: text !important;
            -webkit-text-fill-color: transparent !important;
            background-clip: text !important;
          }
          
          @media (max-width: 768px) {
            .desktop-menu {
              display: none !important;
            }
            .hamburger {
              display: flex !important;
            }
            .mobile-menu.active {
              display: flex !important;
            }
          }
        `}
      </style>
      
      <nav style={navStyles.navbar}>
        <div style={navStyles.container}>
          <h2 
            style={navStyles.logo} 
            className="logo"
            onClick={() => scrollToSection('home')}
          >
            Sujith Varghese
          </h2>
          
          <ul style={navStyles.menu} className="desktop-menu">
            {['home', 'about', 'skills', 'projects', 'contact'].map(item => (
              <li key={item} style={navStyles.menuItem}>
                <button
                  style={{
                    ...navStyles.menuButton,
                    ...(activeSection === item ? navStyles.activeButton : {})
                  }}
                  className="nav-button"
                  onClick={() => scrollToSection(item)}
                >
                  {item === 'home' ? '🏠' : 
                   item === 'about' ? '👨‍💻' : 
                   item === 'skills' ? '⚡' : 
                   item === 'projects' ? '🚀' : '📬'} {item.charAt(0).toUpperCase() + item.slice(1)}
                </button>
              </li>
            ))}
          </ul>

          <div style={navStyles.controls}>
            <button 
              style={navStyles.themeToggle}
              className="theme-toggle"
              onClick={toggleTheme}
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            
            <div 
              style={navStyles.hamburger}
              className="hamburger"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div style={{
                ...navStyles.hamburgerLine,
                transform: isMenuOpen ? 'rotate(45deg) translateY(7px)' : 'none'
              }}></div>
              <div style={{
                ...navStyles.hamburgerLine,
                opacity: isMenuOpen ? 0 : 1
              }}></div>
              <div style={{
                ...navStyles.hamburgerLine,
                transform: isMenuOpen ? 'rotate(-45deg) translateY(-7px)' : 'none'
              }}></div>
            </div>
          </div>
        </div>
        
        <div style={{
          ...navStyles.mobileMenu,
          display: isMenuOpen ? 'flex' : 'none'
        }} className="mobile-menu">
          {['home', 'about', 'skills', 'projects', 'contact'].map(item => (
            <button
              key={item}
              style={{
                ...navStyles.menuButton,
                width: '100%',
                textAlign: 'center',
                marginBottom: '0.5rem',
                ...(activeSection === item ? navStyles.activeButton : {})
              }}
              onClick={() => scrollToSection(item)}
            >
              {item === 'home' ? '🏠' : 
               item === 'about' ? '👨‍💻' : 
               item === 'skills' ? '⚡' : 
               item === 'projects' ? '🚀' : '📬'} {item.charAt(0).toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
      </nav>
    </>
  )
}

export default Navbar
