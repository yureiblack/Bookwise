'use client'

import '../styles/about.css'
import { useEffect } from 'react'

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="about-container">
      {/* Header Image with Title */}
      <div className="about-header-section">
        <img src="/images/about-header1.jpg" alt="BookWise" className="about-header-full" />
        <div className="about-header-overlay">
          <h1>Bookwise</h1>
          <p>Seamless hotel booking, simplified.</p>
        </div>
      </div>

      <div className="about-content">

        {/* Block 1: Content Left, Image Right */}
        <div className="about-block block-1">
          <div className="about-text-side">
            <section className="about-section">
              <h2>Our Story</h2>
              <p>
                Bookwise was built to simplify hotel booking into a fast, clean, and reliable experience.
                We noticed that traditional booking platforms overcomplicate a simple process with unnecessary
                steps, confusing interfaces, and forced account creations.
              </p>
              <p>
                What should take seconds often takes minutes. We decided to change that.
              </p>
            </section>
          </div>
          <div className="about-image-side">
            <img src="/images/about-img1.jpg" alt="Our Story" className="about-square-img" />
          </div>
        </div>

        {/* Block 2: Content Right, Image Left */}
        <div className="about-block block-2">
          <div className="about-image-side">
            <img src="/images/about-img5.jpg" alt="What Makes Us Different" className="about-square-img" />
          </div>
          <div className="about-text-side">
            <section className="about-section">
              <h2>What Makes Us Different</h2>
              <div className="features-list">
                <div className="feature-item">
                  <div className="feature-icon">L</div>
                  <div className="feature-content">
                    <h3>Minimal Authentication</h3>
                    <p>Email-only login. No lengthy signups.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">H</div>
                  <div className="feature-content">
                    <h3>Smart Hotel Discovery</h3>
                    <p>Browse by state to city to hotel.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">C</div>
                  <div className="feature-content">
                    <h3>Simple Booking Flow</h3>
                    <p>Choose dates and room in seconds.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">Q</div>
                  <div className="feature-content">
                    <h3>QR-Based Confirmation</h3>
                    <p>Unique booking QR for verification.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">P</div>
                  <div className="feature-content">
                    <h3>Pay at Hotel</h3>
                    <p>No forced online payment.</p>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">R</div>
                  <div className="feature-content">
                    <h3>Reviews and Ratings</h3>
                    <p>Real guest feedback to guide your choice.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Block 3: Content Left, Image Right */}
        <div className="about-block block-1">
          <div className="about-text-side">
            <section className="about-section">
              <h2>Who It's For</h2>
              <ul className="who-list">
                <li>Travelers who value simplicity</li>
                <li>Users who hate complicated booking apps</li>
                <li>Anyone who wants to book in under 1 minute</li>
                <li>People who prefer flexible payment options</li>
              </ul>
            </section>
          </div>
          <div className="about-image-side">
            <img src="/images/about-img2.jpg" alt="Who It's For" className="about-square-img" />
          </div>
        </div>

        {/* Block 4: Content Right, Image Left */}
        <div className="about-block block-2">
          <div className="about-image-side">
            <img src="/images/about-img4.jpg" alt="Tech Stack" className="about-square-img" />
          </div>
          <div className="about-text-side">
            <section className="about-section">
              <h2>Built With Modern Tech</h2>
              <p>
                Bookwise is built on a modern, scalable stack designed for speed and reliability:
              </p>
              <div className="tech-stack">
                <div className="tech-item">
                  <strong>Frontend:</strong> React with Next.js
                </div>
                <div className="tech-item">
                  <strong>Backend:</strong> Node.js with Express
                </div>
                <div className="tech-item">
                  <strong>Database:</strong> Prisma ORM with Supabase
                </div>
                <div className="tech-item">
                  <strong>Security:</strong> JWT Authentication, QR Verification
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Block 5: Content Left, Image Right */}
        <div className="about-block block-1">
          <div className="about-text-side">
            <section className="about-section">
              <h2>Trust and Transparency</h2>
              <ul className="trust-list">
                <li>Secure booking IDs and QR verification</li>
                <li>No spam. No unnecessary emails.</li>
                <li>Your data is yours. We do not sell it.</li>
                <li>Real-time booking confirmation</li>
              </ul>
            </section>
          </div>
          <div className="about-image-side">
            <img src="/images/about-img3.jpg" alt="Trust" className="about-square-img" />
          </div>
        </div>

        {/* How It Works - Full Width Centered */}
        <section className="about-section full-width-section">
          <h2>How It Works</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <div className="step-title">Search</div>
              <p>Pick your destination</p>
            </div>
            <div className="step-divider">→</div>
            <div className="step">
              <div className="step-number">2</div>
              <div className="step-title">Choose</div>
              <p>Select hotel and dates</p>
            </div>
            <div className="step-divider">→</div>
            <div className="step">
              <div className="step-number">3</div>
              <div className="step-title">Confirm</div>
              <p>Get your QR code</p>
            </div>
            <div className="step-divider">→</div>
            <div className="step">
              <div className="step-number">4</div>
              <div className="step-title">Arrive</div>
              <p>Check In at hotel</p>
            </div>
          </div>
        </section>

        {/* Developer Note - Full Width */}
        <section className="about-section full-width-section developer-note">
          <h2>A Note from the Developer</h2>
          <p>
            Bookwise is a full-stack project built with a focus on user experience and real-world
            workflow optimization. It demonstrates modern web development practices:
            clean architecture, efficient database queries, secure authentication, and a design
            that prioritizes simplicity over features.
          </p>
          <p>
            Every decision in Bookwise is intentional. Every feature solves a real problem.
          </p>
        </section>

        {/* CTA - Full Width */}
        <section className="about-section full-width-section cta-section">
          <h2>Ready to Book?</h2>
          <a href="/" className="cta-button">Start Exploring Hotels</a>
        </section>

      </div>
    </div>
  )
}
