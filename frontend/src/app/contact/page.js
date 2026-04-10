'use client'

import '../styles/contact.css'
import { useEffect } from 'react'

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="contact-container">
      <div className="contact-content">
        <h1>Get in Touch</h1>
        <p>Feel free to reach out through any of the platforms below.</p>
        
        <div className="contact-links">
          {/* Email */}
          <a href="mailto:yureiblack666@gmail.com" className="contact-link-item">
            <div className="contact-detail">yureiblack666@gmail.com</div>
          </a>

          {/* Phone */}
          <a href="tel:+911234567890" className="contact-link-item">
            <div className="contact-detail">+91 1234567890</div>
          </a>

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer" className="contact-link-item">
            <div className="contact-detail">LinkedIn</div>
          </a>

          {/* Codeforces */}
          <a href="https://codeforces.com/profile/yurei_black" target="_blank" rel="noopener noreferrer" className="contact-link-item">
            <div className="contact-detail">Codeforces Profile</div>
          </a>

          {/* Instagram */}
          <a href="https://www.instagram.com/yurei_black/?hl=en" target="_blank" rel="noopener noreferrer" className="contact-link-item">
            <div className="contact-detail">Instagram</div>
          </a>
        </div>
      </div>
    </div>
  )
}
