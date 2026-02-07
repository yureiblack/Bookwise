'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import '../app/styles/homepage.css'

export default function HeroSection() {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) setIsLoggedIn(true)
  }, [])

  const handleGetStarted = () => {
    router.push(isLoggedIn ? '/dashboard' : '/login')
  }

  return (
    <div className="hero-container">
      <img
        src="/images/clear-image.jpg"
        className="clear-image"
        alt="Foreground"
      />

      <div className="hero-text">
        <h1>Bookwise</h1>
        <p>Your stay, simplified — book hotels with just your email, no lengthy forms or unnecessary details</p>
        <span className="get-started" onClick={handleGetStarted}>Get Started</span>
      </div>
    </div>
  )
}
