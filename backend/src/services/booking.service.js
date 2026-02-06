import prisma from '../prisma/client.js'
import crypto from 'crypto'
import {generateQR} from '../utils/qr.js'

export const createBooking = async ({
    userId,
    hotelId,
    roomTypeId,
    checkIn, 
    checkOut
}) => {
    // (Later) availability checks go here

    const bookingCode = `BW-${crypto.randomBytes(4).toString('hex').toUpperCase()}`

    const qrPayload = {
        bookingCode,
        hotelId,
        roomTypeId, 
        checkIn,
        checkOut
    }

    const qrCode = await generateQR(qrPayload)

    const booking = await prisma.booking.create({
        data: {
            bookingCode,
            userId,
            hotelId,
            roomTypeId,
            checkIn: new Date(checkIn),
            checkOut: new Date(checkOut),
            qrPayload: {
                ...qrPayload,
                qrCode
            } 
        },
        include: {
            hotel: true,
            roomType: true
        }
    }) 

    return booking
}

export const getUserBookings = async (userId) => {
    return prisma.booking.findMany({
        where: {userId},
        orderBy: {createdAt: 'desc'},
        include: {
            hotel: true,
            roomType: true,
            payment: true
        }
    })
}

export const getBookingByCode = async (bookingCode) => {
    return prisma.booking.findUnique({
        where: {bookingCode},
        include: {
            user: true,
            hotel: true,
            roomType: true,
            payment: true
        }
    })
}