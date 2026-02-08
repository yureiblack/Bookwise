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

    if (booking.reviewed || booking.status !== "CHECKED_IN") {
        throw new Error("NOT_ALLOWED");
    }

    const review = await prisma.review.create({
        data: {
            bookingId: booking.id,
            hotelId: booking.hotelId,
            rating,
            comment
        }
    });

    await prisma.booking.update({
        where: { id: booking.id },
        data: { reviewed: true }
    });

    return review;
};
