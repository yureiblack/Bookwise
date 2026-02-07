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
    if (isLoggedIn) {
      router.push('/dashboard')
    } else {
      router.push('/login')
    }
  }

  return (
    <div className="hero-container">
      <img src="/images/blur-bg.jpg" className="blur-bg" alt="Background" />
      <img src="/images/clear-image.png" className="clear-image" alt="Foreground" />

      <div className="hero-text">
        <h1>Bookwise</h1>
        <p>Your smart gateway to hassle-free hotel bookings</p>
        <span className="get-started" onClick={handleGetStarted}>
          Get Started →
        </span>
      </div>
    </div>
  )
}