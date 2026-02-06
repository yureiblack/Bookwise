import {
    createBooking,
    getUserBookings,
    getBookingByCode
} from '../services/booking.service.js'

export const createNewBooking = async (req, res) => {
    const userId = req.userId
    const {hotelId, roomTypeId, checkIn, checkOut} = req.body

    if (!hotelId || !roomTypeId || !checkIn || !checkOut){
        return res.status(400).json({message: "All booking fields are required"})
    }

    try{
        const booking = await createBooking({
            userId,
            hotelId,
            roomTypeId,
            checkIn,
            checkOut
        })

        return res.status(201).json(booking)
    } catch (err){
        return res.status(500).json({message: "Failed to create booking"})
    }
}

export const fetchMyBookings = async (req, res) => {
    const userId = req.userId
    try{
        const bookings = await getUserBookings(userId)
        return res.json(bookings)
    } catch {
        return res.status(500).json({message: "Failed to fetch user bookings"})
    }
}

export const fetchBookingByCode = async(req, res) => {
    const bookingCode = req.params

    if (!bookingCode){
        return res.status(400).json({message: "Booking Code required"})
    }

    try{
        const booking = await getBookingByCode(bookingCode)
        if(!booking){
            return res.status(404).json({message: "Booking not found"})
        }

        return res.json(booking)
    } catch{
        return res.status(500).json({message: "Failed to fetch booking"})
    }
}

