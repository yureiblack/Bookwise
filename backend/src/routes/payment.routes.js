import express from 'express'
import {startPayment, paymentSuccess, mockPayment} from '../controllers/payment.controller.js'
import {authMiddleware} from '../middlewares/auth.middleware.js'

const router = express.Router()

router.post('/initiate', authMiddleware, startPayment)
router.post('/success', paymentSuccess)
router.post('/mock', authMiddleware, mockPayment);

export default router 