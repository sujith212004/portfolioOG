import React, { useState, useEffect, useRef } from 'react'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')
  const [inView, setInView] = useState(false)
  const sectionRef = useRef(null)

  const skillCategories = {
    frontend: {
      title: '🎨 Frontend Development',
      description: 'Creating beautiful and responsive user interfaces',
      skills: [
        { name: 'React.js', level: 85, icon: '⚛️', color: '#61DAFB', description: 'Building dynamic UIs' },
        { name: 'JavaScript', level: 90, icon: '🟨', color: '#F7DF1E', description: 'Core programming language' },
        { name: 'HTML', level: 95, icon: '🌐', color: '#E34F26', description: 'Semantic markup' },
        { name: 'CSS', level: 90, icon: '🎨', color: '#1572B6', description: 'Styling and layouts' }
      ]
    },
    backend: {
      title: '⚙️ Backend & Programming',
      description: 'Server-side development and programming languages',
      skills: [
        { name: 'Python', level: 85, icon: '🐍', color: '#3776AB', description: 'Versatile programming' },
        { name: 'SQL', level: 80, icon: '🗃️', color: '#336791', description: 'Database queries' },
        { name: 'Node.js', level: 75, icon: '🗄️', color: '#4479A1', description: 'Server-side JavaScript' }
      ]
    },
    analytics: {
      title: '📊 Data Analytics & BI',
      description: 'Data visualization and business intelligence',
      skills: [
        { name: 'Power BI', level: 80, icon: '📊', color: '#F2C811', description: 'Business intelligence' },
        { name: 'Excel', level: 85, icon: '📈', color: '#217346', description: 'Data analysis & modeling' }
      ]
    },
    tools: {
      title: '🛠️ Tools & Development Environment',
      description: 'Development tools and IDE preferences',
      skills: [
        { name: 'Visual Studio', level: 85, icon: '💻', color: '#5C2D91', description: 'IDE for development' },
        { name: 'PyCharm', level: 80, icon: '🐍', color: '#000000', description: 'Python IDE' },
        { name: 'Postman', level: 75, icon: '📮', color: '#FF6C37', description: 'API testing' },
        { name: 'Git', level: 80, icon: '📚', color: '#F05032', description: 'Version control' },
        { name: 'Figma', level: 70, icon: '🎨', color: '#F24E1E', description: 'Design & prototyping' },
        { name: 'Android Studio', level: 65, icon: '📱', color: '#3DDC84', description: 'Mobile development' }
      ]
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const calculateStats = () => {
    const allSkills = Object.values(skillCategories).flatMap(cat => cat.skills)
    const totalSkills = allSkills.length
    const avgLevel = Math.round(allSkills.reduce((sum, skill) => sum + skill.level, 0) / totalSkills)
    const expertSkills = allSkills.filter(skill => skill.level >= 85).length
    
    return { totalSkills, avgLevel, expertSkills }
  }

  const { totalSkills, avgLevel, expertSkills } = calculateStats()

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <div className="skills-header">
          <h2 className="section-title">
            My <span className="title-highlight">Skills</span> & Expertise
          </h2>
          <p className="skills-subtitle">
            A comprehensive overview of my technical capabilities and expertise across different domains
          </p>
          
          <div className="skills-stats">
            <div className="stat-item">
              <span className="stat-number">{totalSkills}+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{avgLevel}%</span>
              <span className="stat-label">Avg Proficiency</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{expertSkills}</span>
              <span className="stat-label">Expert Level</span>
            </div>
          </div>
        </div>

        <div className="skills-navigation">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              className={`nav-btn ${activeCategory === key ? 'active' : ''}`}
              onClick={() => setActiveCategory(key)}
            >
              <span className="nav-icon">{category.title.split(' ')[0]}</span>
              <span className="nav-text">{category.title.split(' ').slice(1).join(' ')}</span>
            </button>
          ))}
        </div>

        <div className="skills-content">
          <div className="category-header">
            <h3 className="category-title">{skillCategories[activeCategory].title}</h3>
            <p className="category-description">{skillCategories[activeCategory].description}</p>
          </div>

          <div className="skills-grid">
            {skillCategories[activeCategory].skills.map((skill, index) => (
              <div 
                key={skill.name} 
                className="skill-card"
                style={{ 
                  '--skill-color': skill.color,
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <div className="skill-header">
                  <div className="skill-icon-wrapper">
                    <div className="skill-icon">{skill.icon}</div>
                    <div className="skill-glow"></div>
                  </div>
                  <div className="skill-info">
                    <h4 className="skill-name">{skill.name}</h4>
                    <p className="skill-description">{skill.description}</p>
                  </div>
                </div>

                <div className="skill-progress-section">
                  <div className="skill-level-text">
                    <span>Proficiency</span>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div 
                      className="skill-progress"
                      style={{ 
                        width: inView ? `${skill.level}%` : '0%',
                        backgroundColor: skill.color
                      }}
                    >
                      <div className="progress-shine"></div>
                    </div>
                  </div>
                  <div className="skill-level-indicator">
                    {skill.level >= 90 ? 'Intermediate' : skill.level >= 75 ? 'Learning' : skill.level >= 60 ? 'Beginner' : 'Novice'}
                  </div>
                </div>

                <div className="skill-hover-overlay">
                  <div className="hover-content">
                    <div className="proficiency-ring">
                      <svg className="circular-chart" viewBox="0 0 36 36">
                        <circle className="circle-bg" cx="18" cy="18" r="16" />
                        <circle 
                          className="circle" 
                          cx="18" 
                          cy="18" 
                          r="16"
                          stroke={skill.color}
                          strokeDasharray={`${skill.level}, 100`}
                        />
                      </svg>
                      <div className="percentage-text">{skill.level}%</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-footer">
          <div className="learning-note">
            <div className="note-icon">🚀</div>
            <p>
              I'm constantly learning and expanding my skill set. <strong>Technology evolves fast</strong>, 
              and I believe in staying updated with the latest trends and best practices in the industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
