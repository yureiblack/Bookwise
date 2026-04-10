import {
    createBooking,
    findBookingByQRToken,
    confirmCheckIn,
    getUserBookings
} from '../services/booking.service.js'

import {generateQR} from '../utils/qr.js'
import prisma from '../prisma/client.js'

export const bookHotel = async (req, res) => {
    try{
        console.log("===== BOOKING REQUEST =====");
        console.log("Decoded userId:", req.userId);
        console.log("Request body:", req.body);

        const booking = await createBooking({
            userId: req.userId,
            ...req.body
        })

        console.log("===== CREATED BOOKING =====");
        console.log("Created Booking:", JSON.stringify(booking, null, 2));

        // Fetch complete booking with relationships
        console.log("===== FETCHING COMPLETE BOOKING =====");
        const completeBooking = await prisma.booking.findUnique({
            where: { id: booking.id },
            include: {
                hotel: true,
                roomType: true
            }
        });

        console.log("Complete Booking with Relations:", JSON.stringify(completeBooking, null, 2));

        const qrUrl = `${process.env.BASE_URL}/api/bookings/verify/${booking.qrPayload.token}`
        const qrImage = await generateQR(qrUrl)

        const responseData = {
            bookingCode: completeBooking.bookingCode,
            bookingId: completeBooking.id,
            status: completeBooking.status,
            qrImage,
            hotelName: completeBooking.hotel?.name || "",
            roomType: completeBooking.roomType?.type || "",
            checkIn: completeBooking.checkIn ? new Date(completeBooking.checkIn).toISOString().split('T')[0] : "",
            checkOut: completeBooking.checkOut ? new Date(completeBooking.checkOut).toISOString().split('T')[0] : ""
        };

        console.log("===== RESPONSE DATA =====");
        console.log(JSON.stringify(responseData, null, 2));

        return res.status(201).json(responseData);
    } catch (err) {
        console.error("===== BOOKING ERROR =====");
        console.error("Error:", err);
        return res.status(500).json({
            message: "Booking failed",
            error: err.message
        });
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

export const fetchMyBookings = async (req, res) => {
    try {
        const bookings = await getUserBookings(req.userId);
        return res.json(bookings);
    } catch (err) {
        console.error("FETCH MY BOOKINGS ERROR:", err);
        return res.status(500).json({ message: "Failed to fetch bookings" });
    }
}