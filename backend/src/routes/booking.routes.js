import express from 'express'

import {bookHotel, verifyBooking, checkInGuest, fetchMyBookings} from '../controllers/booking.controller.js'
import {authMiddleware} from '../middlewares/auth.middleware.js'

const router = express.Router() 

router.post('/', authMiddleware, bookHotel)
router.get('/my', authMiddleware, fetchMyBookings)
router.get('/verify/:token', verifyBooking)
router.post('/verify/:token/checkin', checkInGuest)

export default router 
