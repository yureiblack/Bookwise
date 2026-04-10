'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import '../login/login-register.css'   
const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001"

export default function RegisterPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleRegister = async (e) => {
    e.preventDefault()
    setError('')

    try {
      const res = await fetch(`${API_URL}/api/auth/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })

      const data = await res.json()

      if (res.ok) {
        localStorage.setItem('token', data.token)
        router.push('/dashboard')
      } else {
        setError(data.message || 'Signup failed')
      }
    } catch {
      setError('Something went wrong')
    }
  }

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleRegister}>
        <h1>Create Account</h1>
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

        <button type="submit">Register</button>
      </form>
    </div>
  )
}


