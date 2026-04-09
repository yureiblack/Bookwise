'use client'
import '../app/styles/homepage.css'

export default function HeroSection({ animateOut, onGetStarted }) {
  return (
    <div className="hero-container">
      <img
        src="/images/clear-image.jpg"
        className="clear-image"
        alt="Foreground"
      />

      <div className={`hero-text ${animateOut ? 'slide-out' : ''}`}>
        <h1>Bookwise</h1>
        <p>Your stay, simplified — book hotels with just your email</p>
        <button className="get-started" onClick={onGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  )
}