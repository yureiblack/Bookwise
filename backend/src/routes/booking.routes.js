import express from 'express'

import {bookHotel, verifyBooking, checkInGuest} from '../controllers/booking.controller.js'
import {authMiddleware} from '../middlewares/auth.middleware.js'

const router = express.Router() 

router.post('/bookings', authMiddleware, bookHotel)
router.get('/verify/:token', verifyBooking)
router.post('/verify/:token/checkin', checkInGuest)

export default router 
