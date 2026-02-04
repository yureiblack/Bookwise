import express from 'express'
import {getStates, getCitiesByState} from '../controllers/location.controller.js'

const router = express.Router()

router.get('/states', getStates)
router.get('/states/:stateId/cities', getCitiesByState)

export default router