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
                issuedAt: new Date()
            }
        },
        include: {
            hotel: true,
            roomType: true
        }
    })
}

export const findBookingByQRToken = async (token) => {
    const thirtyDaysAgo = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
    const bookings = await prisma.booking.findMany({
        where: {
            createdAt: { gte: thirtyDaysAgo },
            status: { not: "CHECKED_IN" }
        },
        orderBy: { createdAt: 'desc' },
        include: {
            hotel: true,
            roomType: true
        }
    });

    return bookings.find(b => {
        let payload = b.qrPayload;
        if (typeof payload === "string") payload = JSON.parse(payload);
        return payload?.token === token;
    });
}

export const confirmCheckIn = async (bookingId) => {
    const updated = await prisma.booking.update({
        where: { id: bookingId },
        data: { status: "CHECKED_IN" }
    });

    if (!updated) {
        throw new Error("ALREADY_USED");
    }
};

export const getUserBookings = async (userId) => {
    return prisma.booking.findMany({
        where: {
            userId,
            status: { in: ["CONFIRMED", "CHECKED_IN"] }
        },
        include: {
            hotel: {
                include: { city: true }
            },
            roomType: true
        },
        orderBy: { createdAt: 'desc' }
    });
};
