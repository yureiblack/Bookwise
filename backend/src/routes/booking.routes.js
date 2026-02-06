import express from 'express'

import {createNewBooking, fetchMyBookings, fetchBookingByCode} from '../controllers/booking.controller.js'
import {authMiddleware} from '../middlewares/auth.middleware.js'

const router = express.Router()

router.post('/bookings', authMiddleware, createNewBooking)
router.get('/bookings/me', authMiddleware, fetchMyBookings)
router.get('/bookings/code/:bookingCode', fetchBookingByCode)

export default router
