import express from 'express'
import {getStates, getCitiesByState} from '../controllers/location.controller.js'

const router = express.Router()

router.get('/states', getStates)
router.get('/cities', getCitiesByState)

export default router 