import React, { useState, useEffect } from 'react'

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0)
  
  const roles = [
    'Web Designer',
    'Frontend Developer', 
    'Fullstack Developer',
    'Python Enthusiast'
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      textAlign: 'center',
      padding: '20px'
    }}>
      <div>
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.1)',
          padding: '10px 20px',
          borderRadius: '20px',
          marginBottom: '20px',
          display: 'inline-block'
        }}>
          👋 Welcome to my portfolio
        </div>
        
        <h1 style={{fontSize: '3.5rem', marginBottom: '20px'}}>
          Hi, I'm <span style={{color: '#ffd700'}}>Sujith Varghese</span>
        </h1>
        
        <h2 style={{
          fontSize: '2rem', 
          marginBottom: '30px',
          color: '#a8e6cf',
          minHeight: '60px'
        }}>
          {roles[currentRole]}
        </h2>
        
        <p style={{
          fontSize: '1.2rem', 
          maxWidth: '700px', 
          lineHeight: '1.7',
          marginBottom: '40px'
        }}>
          Passionate about creating beautiful, functional web experiences and full-stack applications. 
          I specialize in frontend development, web design, fullstack solutions, and Python development 
          with a keen eye for clean code and exceptional user experiences.
        </p>
        
        <div style={{
          display: 'flex',
          gap: '3rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '40px'
        }}>
          <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#ffd700'}}>2+</div>
            <div style={{fontSize: '1rem'}}>Internships</div>
          </div>
          <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#ffd700'}}>2+</div>
            <div style={{fontSize: '1rem'}}>Years Learning</div>
          </div>
          <div style={{textAlign: 'center'}}>
            <div style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#ffd700'}}>17+</div>
            <div style={{fontSize: '1rem'}}>Technologies</div>
          </div>
        </div>

        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          flexWrap: 'wrap'
        }}>
          <button style={{
            backgroundColor: '#ffd700',
            color: '#333',
            border: 'none',
            padding: '15px 30px',
            borderRadius: '25px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            🚀 Explore My Work
          </button>
          <button style={{
            backgroundColor: 'transparent',
            color: 'white',
            border: '2px solid white',
            padding: '15px 30px',
            borderRadius: '25px',
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}>
            💬 Let's Connect
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero
