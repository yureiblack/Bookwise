'use client'
import { useRouter } from 'next/navigation'
import '../app/styles/homepage.css'

export default function HeroSection() {
  const router = useRouter()

  const handleGetStarted = () => {
    const token = localStorage.getItem('token')
    router.push(token ? '/dashboard' : '/login')
  }

  return (
    <div className="hero-container">
      <img src="/images/clear-image.jpg" className="clear-image" alt="Foreground" />

      <div className="hero-text">
        <h1>Bookwise</h1>
        <p>Your stay, simplified — book hotels with just your email</p>
        <span className="get-started" onClick={handleGetStarted}>
          Get Started
        </span>
      </div>
    </div>
  )
}
