// review.service.js
import prisma from '../prisma/client.js';

export const addReviewByBooking = async ({ bookingId, userId, rating, comment }) => {
    const booking = await prisma.booking.findUnique({
        where: { id: bookingId },
    });

    if (!booking) {
        throw new Error("NOT_ALLOWED");
    }

    if (booking.userId !== userId) {
        throw new Error("NOT_ALLOWED");
    }

    // Allow review for CHECKED_IN or CONFIRMED bookings
    if (booking.status !== "CHECKED_IN" && booking.status !== "CONFIRMED") {
        throw new Error("NOT_ALLOWED");
    }

    // No duplicate check — users can post multiple reviews per booking

    const review = await prisma.review.create({
        data: {
            bookingId: booking.id,
            hotelId: booking.hotelId,
            rating,
            comment
        }
    });

    return review;
};
