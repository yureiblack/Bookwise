'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import './login.css'

export default function LoginPage() {
  const [animateIn, setAnimateIn] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  useEffect(() => {
    setAnimateIn(true)
  }, [])

  const handleLogin = async (e) => {
    e.preventDefault()
    setError('')

    try {
      const res = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (res.ok) {
        // store JWT token locally
        localStorage.setItem('token', data.token)
        router.push('/dashboard') // redirect to dashboard
      } else {
        setError(data.message || 'Login failed')
      }
    } catch {
      setError('Something went wrong')
    }
  }

  return (
    <div className="login-container">
      <img
        src="/images/clear-image.jpg"
        className="clear-image"
        alt="Background"
      />

      <form
        className={`login-form ${animateIn ? 'slide-in' : ''}`}
        onSubmit={handleLogin}
      >
        <h1>User Login</h1>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <span className="error">{error}</span>}

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