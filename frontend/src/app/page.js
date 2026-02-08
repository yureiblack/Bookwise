'use client'

import { useState, useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import { useRouter } from 'next/navigation'

export default function Page() {
  const [isLeaving, setIsLeaving] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const router = useRouter()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) setIsLoggedIn(true)
  }, [])

  const handleGetStarted = () => {
    setIsLeaving(true) 

    setTimeout(() => {
      router.push(isLoggedIn ? '/dashboard' : '/login')
    }, 1000) 
  }

  return (
    <div className="transition-container">
      <HeroSection animateOut={isLeaving} onGetStarted={handleGetStarted} />
    </div>
  )
}