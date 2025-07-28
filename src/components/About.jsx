import React from 'react'

const About = () => {
  const stats = [
    { number: '2+', label: 'Internships Completed', icon: '🏢' },
    { number: '2+', label: 'Years Learning', icon: '📚' },
    { number: '17+', label: 'Technologies', icon: '💻' }
  ]

  const experiences = [
    { 
      title: 'MERN Stack Intern', 
      company: 'Shristi Innovative',
      description: 'Developed and deployed full-stack applications using React, Node.js, REST API, and MongoDB Atlas. Designed and improved database interaction performance.',
      icon: '💻',
      technologies: ['React', 'Node.js', 'MongoDB', 'REST API']
    },
    { 
      title: 'Data Analytics Trainee', 
      company: 'Besant Technology',
      description: 'Trained on SQL basics and data visualization using Power BI. Worked on projects with hands-on experience and gained valuable knowledge.',
      icon: '📊',
      technologies: ['SQL', 'Power BI', 'Data Analytics']
    }
  ]

  const achievements = [
    { title: 'Problem Solver', description: 'Love tackling complex challenges', icon: '🧩' },
    { title: 'Team Player', description: 'Collaborative and communicative', icon: '🤝' },
    { title: 'Fast Learner', description: 'Quick to adapt new technologies', icon: '⚡' },
    { title: 'Detail Oriented', description: 'Focused on quality and precision', icon: '🎯' }
  ]

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">
          <span className="title-highlight">About</span> Me
        </h2>
        <div className="about-content">
          <div className="about-text">
            <div className="about-intro">
              <h3 className="about-subtitle">👋 Nice to meet you!</h3>
              <p className="intro-text">
                I'm Sujith Varghese, a passionate Computer Science student with practical experience 
                in full-stack development and data analytics. My journey includes hands-on internships 
                where I've built real-world applications and gained valuable industry experience.
              </p>
              <p className="intro-text">
                I specialize in MERN stack development and data analytics, with experience in technologies 
                like React, Node.js, MongoDB, SQL, and Power BI. I'm passionate about creating efficient 
                solutions and turning data into meaningful insights.
              </p>
            </div>

            <div className="experience-section">
              <h4 className="section-subtitle">💼 Professional Experience</h4>
              <div className="experience-grid">
                {experiences.map((experience, index) => (
                  <div key={index} className="experience-card">
                    <div className="experience-header">
                      <div className="experience-icon">{experience.icon}</div>
                      <div className="experience-info">
                        <h5 className="experience-title">{experience.title}</h5>
                        <p className="experience-company">{experience.company}</p>
                      </div>
                    </div>
                    <p className="experience-description">{experience.description}</p>
                    <div className="experience-technologies">
                      {experience.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            

          
          </div>
          
          <div className="about-visual">
            <div className="visual-container">
              <div className="code-window">
                <div className="window-header">
                  <div className="window-controls">
                    <span className="control red"></span>
                    <span className="control yellow"></span>
                    <span className="control green"></span>
                  </div>
                  <div className="window-title">about-me.js</div>
                </div>
                <div className="code-content">
                  <div className="code-line">
                    <span className="keyword">const</span> 
                    <span className="variable"> developer</span> 
                    <span className="operator"> = </span>
                    <span className="brace">{'{'}</span>
                  </div>
                  <div className="code-line indent">
                    <span className="property">name:</span> 
                    <span className="string">'Sujith Varghese'</span>,
                  </div>
                  <div className="code-line indent">
                    <span className="property">role:</span> 
                    <span className="string">'CS Student & Developer'</span>,
                  </div>
                  <div className="code-line indent">
                    <span className="property">experience:</span> 
                    <span className="bracket">[</span>
                    <span className="string">'MERN Stack'</span>,
                  </div>
                  <div className="code-line indent2">
                    <span className="string">'Data Analytics'</span>
                    <span className="bracket">]</span>,
                  </div>
                  <div className="code-line indent">
                    <span className="property">skills:</span> 
                    <span className="bracket">[</span>
                    <span className="string">'React'</span>,
                  </div>
                  <div className="code-line indent2">
                    <span className="string">'Node.js'</span>, 
                    <span className="string">'MongoDB'</span>,
                  </div>
                  <div className="code-line indent2">
                    <span className="string">'SQL'</span>, 
                    <span className="string">'Power BI'</span>
                    <span className="bracket">]</span>,
                  </div>
                  <div className="code-line indent">
                    <span className="property">passion:</span> 
                    <span className="string">'Building Real Solutions'</span>
                  </div>
                  <div className="code-line">
                    <span className="brace">{'}'}</span>
                  </div>
                </div>
              </div>
              
              <div className="floating-elements">
                <div className="floating-tech tech-1">⚛️</div>
                <div className="floating-tech tech-2">🟨</div>
                <div className="floating-tech tech-3">🐍</div>
                <div className="floating-tech tech-4">🎨</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About