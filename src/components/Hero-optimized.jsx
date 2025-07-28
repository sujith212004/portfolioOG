import React, { useState, useEffect } from 'react'

const Hero = ({ isDarkMode }) => {
  const [currentRole, setCurrentRole] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  
  const roles = [
    'Web Designer',
    'Frontend Developer', 
    'Fullstack Developer',
    'Python Enthusiast'
  ]

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const downloadCV = () => {
    // Create a temporary link element
    const link = document.createElement('a')
    link.href = '/resume.pdf' // Make sure to place your resume.pdf in the public folder
    link.download = 'Sujith_Varghese_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const heroStyles = {
    hero: {
      minHeight: '100vh',
      paddingTop: '100px', // Add space for fixed navbar
      background: isDarkMode 
        ? 'linear-gradient(135deg, #111827 0%, #1f2937 25%, #374151 50%, #4b5563 75%, #6b7280 100%)'
        : 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 25%, #cbd5e1 50%, #94a3b8 75%, #64748b 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      padding: '2rem',
      fontFamily: "'Inter', 'Segoe UI', sans-serif"
    },
    container: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
      maxWidth: '1200px',
      width: '100%',
      alignItems: 'center',
      zIndex: 2,
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
      transition: 'all 0.8s ease-out'
    },
    textSection: {
      color: isDarkMode ? 'white' : '#1f2937'
    },
    badge: {
      background: isDarkMode 
        ? 'rgba(255,255,255,0.15)' 
        : 'rgba(59, 130, 246, 0.1)',
      backdropFilter: 'blur(10px)',
      padding: '0.75rem 1.5rem',
      borderRadius: '50px',
      fontSize: '0.9rem',
      fontWeight: '600',
      marginBottom: '2rem',
      display: 'inline-block',
      border: isDarkMode 
        ? '1px solid rgba(255,255,255,0.2)' 
        : '1px solid rgba(59, 130, 246, 0.2)',
      color: isDarkMode ? 'white' : '#1e40af'
    },
    title: {
      fontSize: '3.5rem',
      fontWeight: '700',
      marginBottom: '1rem',
      lineHeight: '1.1'
    },
    highlight: {
      background: isDarkMode 
        ? 'linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899)'
        : 'linear-gradient(45deg, #1e40af, #7c3aed, #db2777)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    subtitle: {
      fontSize: '2.2rem',
      fontWeight: '600',
      marginBottom: '1.5rem',
      color: isDarkMode ? '#8b5cf6' : '#7c3aed',
      minHeight: '60px',
      display: 'flex',
      alignItems: 'center'
    },
    description: {
      fontSize: '1.2rem',
      lineHeight: '1.7',
      marginBottom: '2rem',
      color: isDarkMode ? 'rgba(255,255,255,0.8)' : 'rgba(31, 41, 55, 0.8)',
      maxWidth: '500px'
    },
    stats: {
      display: 'flex',
      gap: '2rem',
      marginBottom: '3rem',
      flexWrap: 'wrap'
    },
    statItem: {
      textAlign: 'center',
      background: isDarkMode 
        ? 'rgba(255,255,255,0.1)' 
        : 'rgba(255,255,255,0.7)',
      backdropFilter: 'blur(10px)',
      padding: '1.5rem',
      borderRadius: '15px',
      border: isDarkMode 
        ? '1px solid rgba(255,255,255,0.15)' 
        : '1px solid rgba(255,255,255,0.5)',
      minWidth: '100px',
      boxShadow: isDarkMode 
        ? '0 8px 32px rgba(0,0,0,0.3)' 
        : '0 8px 32px rgba(0,0,0,0.1)'
    },
    statNumber: {
      display: 'block',
      fontSize: '2.5rem',
      fontWeight: '700',
      color: isDarkMode ? '#3b82f6' : '#1e40af'
    },
    statLabel: {
      fontSize: '0.9rem',
      opacity: 0.8,
      color: isDarkMode ? 'white' : '#374151'
    },
    buttons: {
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap'
    },
    primaryBtn: {
      background: isDarkMode 
        ? 'linear-gradient(45deg, #3b82f6, #8b5cf6)'
        : 'linear-gradient(45deg, #1e40af, #7c3aed)',
      color: 'white',
      border: 'none',
      padding: '1rem 2rem',
      borderRadius: '50px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
      boxShadow: isDarkMode 
        ? '0 8px 25px rgba(59, 130, 246, 0.4)'
        : '0 8px 25px rgba(30, 64, 175, 0.3)'
    },
    secondaryBtn: {
      background: 'transparent',
      color: isDarkMode ? 'white' : '#374151',
      border: isDarkMode 
        ? '2px solid rgba(255,255,255,0.3)' 
        : '2px solid rgba(55, 65, 81, 0.3)',
      padding: '1rem 2rem',
      borderRadius: '50px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)'
    },
    visualSection: {
      display: 'flex',
      justifyContent: 'center',
      position: 'relative'
    },
    mainCircle: {
      width: '300px',
      height: '300px',
      borderRadius: '50%',
      background: isDarkMode 
        ? 'linear-gradient(45deg, rgba(59, 130, 246, 0.2), rgba(139, 92, 246, 0.1))'
        : 'linear-gradient(45deg, rgba(255,255,255,0.9), rgba(59, 130, 246, 0.1))',
      backdropFilter: 'blur(20px)',
      border: isDarkMode 
        ? '2px solid rgba(255,255,255,0.2)' 
        : '2px solid rgba(59, 130, 246, 0.3)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      animation: 'float 6s ease-in-out infinite',
      boxShadow: isDarkMode 
        ? '0 20px 60px rgba(59, 130, 246, 0.2)'
        : '0 20px 60px rgba(0, 0, 0, 0.1)'
    },
    avatar: {
      fontSize: '6rem',
      animation: 'pulse 2s ease-in-out infinite'
    },
    floatingIcon: {
      position: 'absolute',
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      background: isDarkMode 
        ? 'rgba(59, 130, 246, 0.2)' 
        : 'rgba(255, 255, 255, 0.8)',
      backdropFilter: 'blur(10px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '1.5rem',
      border: isDarkMode 
        ? '1px solid rgba(59, 130, 246, 0.3)' 
        : '1px solid rgba(59, 130, 246, 0.2)',
      boxShadow: isDarkMode 
        ? '0 8px 32px rgba(59, 130, 246, 0.2)'
        : '0 8px 32px rgba(0, 0, 0, 0.1)'
    },
    backgroundShapes: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: 1,
      overflow: 'hidden'
    },
    shape: {
      position: 'absolute',
      borderRadius: '50%',
      background: 'rgba(255,255,255,0.1)',
      animation: 'float 8s ease-in-out infinite'
    }
  }

  const floatingIcons = [
    { icon: '⚛️', style: { top: '10%', right: '20%', animationDelay: '0s' } },
    { icon: '🟨', style: { top: '60%', right: '10%', animationDelay: '2s' } },
    { icon: '🎨', style: { bottom: '20%', right: '25%', animationDelay: '4s' } },
    { icon: '🐍', style: { top: '20%', left: '15%', animationDelay: '1s' } },
    { icon: '💻', style: { bottom: '30%', left: '10%', animationDelay: '3s' } },
    { icon: '📊', style: { top: '50%', left: '5%', animationDelay: '5s' } }
  ]

  return (
    <>
      <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(180deg); }
          }
          
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
          
          .primary-btn:hover {
            transform: translateY(-3px);
            box-shadow: ${isDarkMode 
              ? '0 12px 35px rgba(59, 130, 246, 0.5)'
              : '0 12px 35px rgba(30, 64, 175, 0.4)'};
          }
          
          .secondary-btn:hover {
            background: ${isDarkMode 
              ? 'rgba(255,255,255,0.1)'
              : 'rgba(55, 65, 81, 0.1)'} !important;
            border-color: ${isDarkMode 
              ? 'rgba(255,255,255,0.5)'
              : 'rgba(55, 65, 81, 0.5)'};
          }
          
          .cv-btn:hover {
            transform: translateY(-3px);
            box-shadow: ${isDarkMode 
              ? '0 12px 35px rgba(236, 72, 153, 0.5)'
              : '0 12px 35px rgba(219, 39, 119, 0.4)'};
          }
          
          @media (max-width: 768px) {
            .hero-container {
              grid-template-columns: 1fr !important;
              text-align: center;
              gap: 2rem !important;
              padding-top: 2rem;
            }
            .hero-title {
              font-size: 2.5rem !important;
            }
            .hero-subtitle {
              font-size: 1.8rem !important;
            }
            .main-circle {
              width: 200px !important;
              height: 200px !important;
            }
            .avatar {
              font-size: 4rem !important;
            }
            .hero {
              padding-top: 120px !important;
            }
          }
        `}
      </style>
      
      <section id="home" style={heroStyles.hero}>
        <div style={heroStyles.backgroundShapes}>
          <div style={{...heroStyles.shape, width: '100px', height: '100px', top: '10%', left: '10%'}}></div>
          <div style={{...heroStyles.shape, width: '150px', height: '150px', top: '70%', right: '15%', animationDelay: '2s'}}></div>
          <div style={{...heroStyles.shape, width: '80px', height: '80px', bottom: '20%', left: '20%', animationDelay: '4s'}}></div>
        </div>
        
        <div style={heroStyles.container} className="hero-container">
          <div style={heroStyles.textSection}>
            <div style={heroStyles.badge}>
              👋 Welcome to my portfolio
            </div>
            
            <h1 style={heroStyles.title} className="hero-title">
              Hi, I'm <span style={heroStyles.highlight}>Sujith Varghese</span>
            </h1>
            
            <h2 style={heroStyles.subtitle} className="hero-subtitle">
              {roles[currentRole]}
            </h2>
            
            <p style={heroStyles.description}>
              Passionate about creating beautiful, functional web experiences and full-stack applications. 
              I specialize in frontend development, web design, fullstack solutions, and Python development 
              with a keen eye for clean code and exceptional user experiences.
            </p>
            
            <div style={heroStyles.stats}>
              <div style={heroStyles.statItem}>
                <span style={heroStyles.statNumber}>2+</span>
                <span style={heroStyles.statLabel}>Internships</span>
              </div>
              <div style={heroStyles.statItem}>
                <span style={heroStyles.statNumber}>2+</span>
                <span style={heroStyles.statLabel}>Years Learning</span>
              </div>
              <div style={heroStyles.statItem}>
                <span style={heroStyles.statNumber}>17+</span>
                <span style={heroStyles.statLabel}>Technologies</span>
              </div>
            </div>

            <div style={heroStyles.buttons}>
              <button 
                style={heroStyles.primaryBtn}
                className="primary-btn"
                onClick={() => scrollToSection('projects')}
              >
                <span>🚀</span>
                Explore My Work
              </button>
              <button 
                style={heroStyles.secondaryBtn}
                className="secondary-btn"
                onClick={() => scrollToSection('contact')}
              >
                <span>💬</span>
                Let's Connect
              </button>
              <button 
                style={{
                  ...heroStyles.secondaryBtn, 
                  background: isDarkMode 
                    ? 'linear-gradient(45deg, #ec4899, #f472b6)'
                    : 'linear-gradient(45deg, #db2777, #ec4899)', 
                  border: 'none', 
                  color: 'white'
                }}
                className="cv-btn"
                onClick={downloadCV}
              >
                <span>📄</span>
                Download CV
              </button>
            </div>
          </div>
          
          <div style={heroStyles.visualSection}>
            <div style={heroStyles.mainCircle} className="main-circle">
              <div style={heroStyles.avatar} className="avatar">👨‍💻</div>
              
              {floatingIcons.map((item, index) => (
                <div 
                  key={index}
                  style={{
                    ...heroStyles.floatingIcon,
                    ...item.style,
                    animation: `float 6s ease-in-out infinite ${item.style.animationDelay}`
                  }}
                >
                  {item.icon}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
