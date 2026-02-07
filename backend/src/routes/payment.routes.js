import express from 'express'
import {startPayment, paymentSuccess} from '../controllers/payment.controller.js'
import {authMiddleware} from '../middlewares/auth.middleware.js'

const router = express.Router()

router.post('/initiate', authMiddleware, startPayment)
router.post('/success', paymentSuccess)

export default router