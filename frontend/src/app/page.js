'use client'

import { useState, useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import { useRouter } from 'next/navigation'

export default function Page() {
  const [isLeaving, setIsLeaving] = useState(false)
  const router = useRouter()

  const handleGetStarted = () => {
    setIsLeaving(true)

    setTimeout(() => {
      const token = localStorage.getItem('token')
      router.push(token ? '/dashboard' : '/login')
    }, 1000)
  }

  return (
    <div className="transition-container">
      <HeroSection animateOut={isLeaving} onGetStarted={handleGetStarted} />
    </div>
  )
}