import React from 'react'
import resumePDF from '../assets/SUJITHVARGHESE_CSE_3128822104105_AGNI.pdf'

const Resume = () => {
  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = resumePDF
    link.download = 'SUJITHVARGHESE_CSE_Resume.pdf'
    link.target = '_blank'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const viewResume = () => {
    window.open(resumePDF, '_blank')
  }

  return (
    <div className="resume-section">
      <div className="resume-actions">
        <h3>📄 My Resume</h3>
        <p>Download or view my complete resume</p>
        <div className="resume-buttons">
          <button className="btn primary" onClick={downloadResume}>
            📥 Download PDF
          </button>
          <button className="btn secondary" onClick={viewResume}>
            👁️ View Online
          </button>
        </div>
      </div>
    </div>
  )
}

export default Resume