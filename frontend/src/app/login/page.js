'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import './login.css'

export default function LoginPage() {
  const [animateIn, setAnimateIn] = useState(false)

  useEffect(() => {
    setAnimateIn(true)
  }, [])

  return (
    <div className="login-container">
      <img
        src="/images/clear-image.jpg"
        className="clear-image"
        alt="Background"
      />
      <form className={`login-form ${animateIn ? 'slide-in' : ''}`}>
        <h1>Bookwise Login</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
        <p className="register-text">
          New here?{' '}
          <Link href="/register" className="register-link">
            Register
          </Link>
        </p>
      </form>
    </div>
  )
}
