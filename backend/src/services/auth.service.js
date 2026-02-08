import prisma from '../prisma/client.js'
import bcrypt from 'bcrypt'
import { generateToken } from '../utils/jwt.js'

export const signupUser = async (email, password) => {
  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) throw new Error('USER_EXISTS')

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await prisma.user.create({
    data: { email, password: hashedPassword },
  })

  const token = generateToken({ userId: user.id })
  return { token }
}

export const loginUser = async (email, password) => {
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) throw new Error('INVALID_CREDENTIALS')

  const isValid = await bcrypt.compare(password, user.password)
  if (!isValid) throw new Error('INVALID_CREDENTIALS')

  const token = generateToken({ userId: user.id })
  return { token }
}