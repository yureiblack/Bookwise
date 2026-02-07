import prisma from '../prisma/client.js'

export const addReview = async ({
    userId, 
    hotelId,
    rating, 
    comment
}) => {
    const booking = await prisma.booking.findFirst({
        where: {userId, hotelId, status: "CHECKED_IN", reviewed: false}
    })

    if (!booking){
        throw new Error("NOT_ALLOWED")
    }

    const review = prisma.review.create({
        data: {
            bookingId: booking.id,
            hotelId, 
            rating,
            comment
        }
    })

    await prisma.booking.update({
        where: {id: booking.id},
        data: {reviewed: true}
    })

    return review
}