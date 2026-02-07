import express from 'express'
import cors from 'cors'
const app = express()

import authRoutes from './routes/auth.routes.js'
import locationRoutes from './routes/location.routes.js'
import hotelRoutes from './routes/hotel.routes.js'
import bookingRoutes from './routes/booking.routes.js'
import paymentRoutes from './routes/payment.routes.js'
import reviewRoutes from './routes/review.routes.js'
import userRoutes from './routes/user.routes.js'

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/locations', locationRoutes)
app.use('/api/hotels', hotelRoutes)
app.use('/api/bookings', bookingRoutes)
app.use('/api/payments', paymentRoutes)
app.use('/api/reviews', reviewRoutes)
app.use('/api/users', userRoutes)

export default app 