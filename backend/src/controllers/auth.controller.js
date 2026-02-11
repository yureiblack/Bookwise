import { signupUser, loginUser } from '../services/auth.service.js'

export const signup = async (req, res) => {
  let { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' })
  }

  email = email.trim().toLowerCase()

  if (!email.includes('@') || !email.includes('.')) {
    return res.status(400).json({ message: 'Invalid email' })
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: 'Password must be at least 6 characters' })
  }

  try {
    const data = await signupUser(email, password)
    res.status(201).json(data)
  } catch (err) {
    if (err.message === 'USER_EXISTS') {
      return res.status(409).json({ message: 'User already exists' })
    }
    res.status(500).json({ message: 'Server error' })
  }
}

export const login = async (req, res) => {
  let { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password required' })
  }

  email = email.trim().toLowerCase()

  try {
    const data = await loginUser(email, password)
    res.json(data)
  } catch (err) {
    if (err.message === 'INVALID_CREDENTIALS') {
      return res.status(401).json({ message: 'Invalid credentials' })
    }
    res.status(500).json({ message: 'Server error' })
  }
} 