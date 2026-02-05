import {getHotelsByCity, getHotelById} from '../services/hotel.service.js'

export const fetchHotelsByCity = async (req, res) => {
    const {cityId} = req.params

    if (!cityId){
        return res.status(400).json({message: "cityId is required"})
    }

    try{
        const hotels = await getHotelsByCity(cityId)
        return res.json(hotels)
    } catch(err){
        return res.status(500).json({message: "Failed to fetch hotels by city"})
    }
}

export const fetchHotelById = async (req, res) => {
    const {hotelId} = req.params
    
    if (!hotelId){
        return res.status(400).json({message: "hotelId is required"})
    }

    try{
        const hotel = await getHotelById(hotelId)

        if (!hotel){
            return res.status(404).json({message: "Hotel not found"})
        }

        return res.json(hotel)
    } catch(err){
        return res.status(500).json({message: "Failed to fetch hotel by id"})
    }
}