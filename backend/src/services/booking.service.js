import prisma from '../prisma/client.js'
import crypto from 'crypto'

export const createBooking = async ({
    userId,
    hotelId,
    roomTypeId,
    checkIn, 
    checkOut
}) => {

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
            status: "PENDING",
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
        }
    })
}

export const confirmCheckIn = async (bookingId) => {
    const updated = await prisma.booking.updateMany({
        where: {
            id: bookingId,
            status: "CONFIRMED"
        },
        data: {
            status: "CHECKED_IN"
        }
    })

    if(updated.count === 0){
        throw new Error("ALREADY USED")
    }
} 