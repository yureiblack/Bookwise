import express from 'express'
import {startPayment, paymentSuccess} from '../controllers/payment.controller.js'
import {authMiddleware} from '../middlewares/auth.middleware.js'

const router = express.Router()

router.post('/payments/initiate', authMiddleware, startPayment)
router.post('/payments/success', paymentSuccess)

export default router