import prisma from '../prisma/client.js'

export const addReview = async ({
    userId, 
    hotelId,
    rating, 
    comment
}) => {
    const booking = await prisma.booking.findFirst({
        where: {userId, hotelId, status: "CHECKED_IN"}
    })

    if (!booking){
        throw new Error("NOT_ALLOWED")
    }

    return prisma.review.create({
        data: {
            hotelId, 
            rating,
            comment
        }
    })
}