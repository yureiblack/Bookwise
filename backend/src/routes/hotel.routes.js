import express from 'express'
import {fetchHotelsByCity, fetchHotelById} from '../controllers/hotel.controller.js'

const router = express.Router()

router.get('/cities/:cityId/hotels', fetchHotelsByCity)
router.get('/hotels/:hotelId', fetchHotelById)

export default router