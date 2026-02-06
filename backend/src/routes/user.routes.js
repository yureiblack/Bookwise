import express from 'express'
import { fetchMyProfile } from '../controllers/user.controller.js'
import {authMiddleware} from '../middlewares/auth.middleware.js'

const router = express.Router()

router.get('/users/me', authMiddleware, fetchMyProfile)

export default router 