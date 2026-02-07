import prisma from '../prisma/client.js'
import crypto from 'crypto'
// import {generateQR} from '../utils/qr.js'

export const createBooking = async ({
    userId,
    hotelId,
    roomTypeId,
    checkIn, 
    checkOut
}) => {
    // (Later) availability checks go here

    const bookingCode = `BW-${crypto.randomBytes(3).toString('hex').toUpperCase()}`
    const token = crypto.randomUUID()

    return prisma.booking.create({
        data: {
            bookingCode,
            userId,
            hotelId,
            roomTypeId,
            checkIn: new Date(checkIn),
            checkOut: new Date(checkOut),
            qrPayload: {
                token,
                issuedAt: new Date().toISOString()
            }
        }
    })
}

export const findBookingByQRToken = async (token) => {
    return prisma.booking.findFirst({
        where: {
            qrPayload: {
                path: ['token'],
                equals: token
            }
        },
        orderBy: {createdAt: 'desc'},
        include: {
            hotel: true,
            roomType: true,
            payment: true
        }
    })
}

// export const getBookingByCode = async (bookingCode) => {
//     return prisma.booking.findUnique({
//         where: {bookingCode},
//         include: {
//             user: true,
//             hotel: true,
//             roomType: true,
//             payment: true
//         }
//     })
// }

export const confirmCheckIn = async (bookingId) => {
    return prisma.booking.update({
        where: {id: bookingId},
        data: {status: "CONFIRMED"}
    }) 
}