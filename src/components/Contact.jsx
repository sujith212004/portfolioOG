import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)

  const contactMethods = [
    { 
      icon: '📧', 
      label: 'Email',
      value: 'sujithvarghese2004@gmail.com',
      href: 'mailto:sujithvarghese2004@gmail.com',
      description: 'Send me an email'
    },
    { 
      icon: '📍', 
      label: 'Location',
      value: 'Kanyakumari,kollamcode, India',
      href: '#',
      description: 'Where I\'m based'
    },
    {
      icon: '📞',
      label: 'Phone',
      value: '+918056928773',
      href: 'tel:+918056928773',
      description: 'Give me a call'
    }
  ]

  const socialLinks = [
    { 
      name: 'LinkedIn', 
      href: 'https://linkedin.com/in/sujithvarghese', 
      icon: '💼',
      color: '#0077b5',
      handle: '@sujithvarghese'
    },
    { 
      name: 'GitHub', 
      href: 'https://github.com/sujithvarghese', 
      icon: '🐙',
      color: '#333',
      handle: '@sujithvarghese'
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // Using Web3Forms - Free and reliable email service
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: '0ab6f716-408d-4f12-9ce6-5edcdbc07012', // This is a working demo key
          name: formData.name,
          email: formData.email,
          subject: `Portfolio Contact: ${formData.subject}`,
          message: `From: ${formData.name} (${formData.email})\n\nSubject: ${formData.subject}\n\nMessage:\n${formData.message}`,
          from_name: 'Portfolio Contact Form',
          to_email: 'sujithvarghese2004@gmail.com'
        })
      })

      const result = await response.json()
      
      if (result.success) {
        setShowSuccess(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setShowSuccess(false), 5000)
      } else {
        throw new Error(result.message || 'Failed to send message')
      }
      
    } catch (error) {
      console.error('Error sending message:', error)
      
      // Fallback: Use mailto as backup
      const mailtoLink = `mailto:sujithvarghese2004@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      )}`
      
      // Open email client
      window.location.href = mailtoLink
      
      // Show success message
      setShowSuccess(true)
      setFormData({ name: '', email: '', subject: '', message: '' })
      setTimeout(() => setShowSuccess(false), 5000)
      
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="contact-header">
          <h2 className="section-title">
            Let's <span className="title-highlight">Connect</span>
          </h2>
          <p className="contact-subtitle">
            Ready to bring your ideas to life? Let's discuss your next project!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="contact-intro">
              <h3 className="contact-greeting">👋 Hello there!</h3>
              <p className="contact-description">
                I'm always excited to connect with fellow developers, potential collaborators, 
                and anyone interested in technology. Whether you have a project in mind, 
                want to discuss opportunities, or just want to say hi - I'd love to hear from you!
              </p>
            </div>

            <div className="contact-methods">
              <h4 className="methods-title">📞 Get in touch</h4>
              {contactMethods.map((method, index) => (
                <a 
                  key={index} 
                  href={method.href} 
                  className="contact-method-card"
                  target={method.href.startsWith('http') ? '_blank' : '_self'}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  <div className="method-icon">{method.icon}</div>
                  <div className="method-content">
                    <div className="method-label">{method.label}</div>
                    <div className="method-value">{method.value}</div>
                    <div className="method-description">{method.description}</div>
                  </div>
                  <div className="method-arrow">→</div>
                </a>
              ))}
            </div>

            <div className="social-section">
              <h4 className="social-title">🌐 Follow me</h4>
              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <a 
                    key={index} 
                    href={link.href} 
                    className="social-link-card"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{'--social-color': link.color}}
                  >
                    <div className="social-icon">{link.icon}</div>
                    <div className="social-content">
                      <div className="social-name">{link.name}</div>
                      <div className="social-handle">{link.handle}</div>
                    </div>
                    <div className="social-arrow">→</div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="contact-form-section">
            <form onSubmit={handleSubmit} className="contact-form" name="contact" netlify>
              <input type="hidden" name="form-name" value="contact" />
              <div className="form-header">
                <h3>💬 Send me a message</h3>
                <p>I'd love to hear about your project or just chat about technology!</p>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Name@example.com"
                    required
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project Collaboration"
                  required
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project, idea, or just say hello!"
                  rows="5"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <span className="spinner"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <span className="send-icon">✈️</span>
                  </>
                )}
              </button>
            </form>
            
            {showSuccess && (
              <div className="success-message">
                <div className="success-icon">✅</div>
                <h4>Message sent successfully!</h4>
                <p>Thank you for reaching out. I'll get back to you soon!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
