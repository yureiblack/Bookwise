const express = require('express')
const cors = require('cors')
const app = express()

import authRoutes from './routes/auth.routes.js'
import locationRoutes from './routes/location.routes.js'
import hotelRoutes from './routes/hotel.routes,js'
import bookingRoutes from './routes/booking.routes.js'

app.use(cors())
app.use(express.json())

app.use('/api/auth', authRoutes)
app.use('/api/locations', locationRoutes)
app.use('/api/hotels', hotelRoutes)
app.use('/api/bookings', bookingRoutes)

export default app 