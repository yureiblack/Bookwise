import {
    createBooking,
    findBookingByQRToken,
    confirmCheckIn
} from '../services/booking.service.js'

import {generateQR} from '../utils/qr.js'

export const bookHotel = async (req, res) => {
    try{
        const booking = await createBooking({
            userId: req.user.id,
            ...req.body
        }) 

        const qrUrl = `${process.env.BASE_URL}/verify/${booking.qrPayload.token}`
        const qrImage = await generateQR(qrUrl)

        return res.status(201).json({
            bookingCode: booking.bookingCode,
            qrImage
        })
    } catch (err){
        return res.status(500).json({message: "Booking failed"})
    }
}

export const verifyBooking = async (req, res) => {
    const {token} = req.params
    const booking = await findBookingByQRToken(token)

    if (!booking){
        return res.status(404).json({message: "Booking not found"})
    }

    return res.json({
        bookingCode: booking.bookingCode,
        hotel: booking.hotelId,
        roomTypeId: booking.roomTypeId,
        checkIn: booking.checkIn,
        checkOut: booking.checkOut,
        status: booking.status
    })
}

export const checkInGuest = async (req, res) => {
    const {token} = req.params
    const booking = await findBookingByQRToken(token)

    if (!booking || booking.status !== 'PENDING'){
        return res.status(400).json({message: "Cannot check in"})
    }

    await confirmCheckIn(booking.id)
    return res.json({message: "Guest checked in successfully"})
} 