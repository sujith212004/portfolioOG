import React, { useState } from 'react'
import storeImage from '../assets/store.png'
import resume from '../assets/resume.png'
import galleryimage from '../assets/galary.png'
import Attendancyimage from '../assets/Attendance.jpg'

const Projects = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)

  const openImageModal = (project) => {
    setSelectedProject(project)
    setSelectedImage(project.image)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
    setSelectedProject(null)
  }
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with React, Node.js, and MongoDB',
      tags: ['React', 'Node.js', 'MongoDB'],
      image: storeImage
    },
    {
      title: 'Smart Resume Analyser App',
      description: 'AI-powered resume screening tool for recruiters',
      tags: ['Flask', 'Python', 'NLP'],
      image: resume
    },
    {
      title: 'Photo Gallery',
      description: 'A simple photo gallery app with image upload and display features',
      tags: ['React', 'Node.js', 'Express', 'MongoDB','REST API'],
      image: galleryimage
    },
    {
      title: 'Attendance Management System',
      description: 'A web application to manage and track attendance',
      tags: ['Flutter', 'Dart',' Firebase', 'MongoDB'],
      image: Attendancyimage
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                <div className="project-placeholder">
                  {typeof project.image === 'string' && (project.image.startsWith('http') || project.image.includes('.png') || project.image.includes('.jpg') || project.image.includes('.jpeg')) ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      style={{
                        width: '100%',
                        height: '200px',
                        objectFit: 'cover',
                        borderRadius: '8px'
                      }}
                    />
                  ) : (
                    <span style={{ fontSize: '4rem' }}>{project.image}</span>
                  )}
                </div>
                <div className="project-overlay">
                  <button 
                    className="btn primary" 
                    onClick={() => openImageModal(project)}
                  >
                    View Project
                  </button>
                  <button className="btn secondary">GitHub</button>
                </div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="image-modal" 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.8)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1000,
            cursor: 'pointer'
          }}
          onClick={closeImageModal}
        >
          <div 
            style={{
              position: 'relative',
              maxWidth: '90%',
              maxHeight: '90%',
              backgroundColor: 'white',
              borderRadius: '10px',
              padding: '20px',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={closeImageModal}
              style={{
                position: 'absolute',
                top: '10px',
                right: '15px',
                background: 'none',
                border: 'none',
                fontSize: '24px',
                cursor: 'pointer',
                color: '#666'
              }}
            >
              ×
            </button>
            <h3 style={{ marginBottom: '15px', color: '#333' }}>
              {selectedProject?.title}
            </h3>
            <img 
              src={selectedImage} 
              alt={selectedProject?.title}
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '70vh',
                objectFit: 'contain',
                borderRadius: '8px'
              }}
            />
            <p style={{ marginTop: '15px', color: '#666' }}>
              {selectedProject?.description}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects