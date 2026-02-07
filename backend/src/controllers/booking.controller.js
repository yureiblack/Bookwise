import {
    createBooking,
    findBookingByQRToken,
    confirmCheckIn
} from '../services/booking.service.js'

import {generateQR} from '../utils/qr.js'

export const bookHotel = async (req, res) => {
    try{
        const booking = await createBooking({
            userId: req.userId,
            ...req.body
        }) 

        const qrUrl = `${process.env.BASE_URL}/api/bookings/verify/${booking.qrPayload.token}`
        const qrImage = await generateQR(qrUrl)

        console.log("QR Token:", booking.qrPayload.token);

        return res.status(201).json({
            bookingCode: booking.bookingCode,
            bookingId: booking.id,
            status: booking.status,
            qrImage
        })
    } catch (err){
        return res.status(500).json({message: "Booking failed"})
    }
}

export const verifyBooking = async (req, res) => {
    const {token} = req.params
    const booking = await findBookingByQRToken(token)

    if (!booking || booking.status === "CHECKED_IN"){
        return res.status(404).json({message: "Invalid or used QR"})
    }

    return res.json({
        bookingCode: booking.bookingCode,
        hotel: booking.hotel.name,
        roomType: booking.roomType.type,
        checkIn: booking.checkIn,
        checkOut: booking.checkOut,
        status: booking.status,
        isPaid: booking.status === "CONFIRMED"
    })
}

export const checkInGuest = async (req, res) => {
    const {token} = req.params
    const booking = await findBookingByQRToken(token)

    if (!booking){
        return res.status(404).json({message: "Invalid QR"})
    }

    if (booking.status !== "CONFIRMED") {
        return res.status(400).json({
            message: "Booking not paid or not confirmed"
        })
    }
    
    try{
        await confirmCheckIn(booking.id)
        return res.json({message: "Guest checked in successfully"})
    } catch{
        return res.status(400).json({ message: "QR already used" })
    }
} 