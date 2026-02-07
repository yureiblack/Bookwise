import express from 'express'
import {fetchHotelsByCity, fetchHotelById} from '../controllers/hotel.controller.js'

const router = express.Router()

router.get('/', fetchHotelsByCity)
router.get('/:hotelId', fetchHotelById)

export default router