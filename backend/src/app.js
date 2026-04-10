import express from 'express'
import cors from 'cors'
import path from 'path'
const app = express()

const allowedOrigins = [
  'http://localhost:3000',
  process.env.FRONTEND_URL,
].filter(Boolean)

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(new Error(`CORS blocked: ${origin}`))
    }
  },
  credentials: true
}))

app.use(express.json())

app.use(
  "/images",
  express.static(path.join(process.cwd(), "public/images"))
);

import authRoutes from './routes/auth.routes.js'
import locationRoutes from './routes/location.routes.js'
import hotelRoutes from './routes/hotel.routes.js'
import bookingRoutes from './routes/booking.routes.js'
import paymentRoutes from './routes/payment.routes.js'
import reviewRoutes from './routes/review.routes.js'
import userRoutes from './routes/user.routes.js'

app.use('/api/auth', authRoutes)
app.use('/api/locations', locationRoutes)
app.use('/api/hotels', hotelRoutes)
app.use('/api/bookings', bookingRoutes)
app.use('/api/payments', paymentRoutes)
app.use('/api/hotels', reviewRoutes)
app.use('/api/users', userRoutes)

export default app 