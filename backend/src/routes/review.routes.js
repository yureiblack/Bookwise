import express from 'express'
import {postReview} from '../controllers/review.controller.js'
import {authMiddleware} from '../middlewares/auth.middleware.js'

const router = express.Router()

router.post('/hotels/:hotelId/reviews', authMiddleware, postReview)

export default router 