import prisma from '../prisma/client.js'

export const initiatePayment = async ({bookingId, provider}) => {
    const booking = await prisma.booking.findUnique({
        where: {id: bookingId},
        include: {payment: true}
    })

    if (!booking){
        throw new Error("BOOKING_NOT_FOUND")
    }

    if (booking.status !== "PENDING"){
        throw new Error("INVALID_BOOKING_STATE")
    }

    if (booking.payment){
        throw new Error("PAYMENT_ALREADY_INITIATED")
    }

    const payment = await prisma.payment.create({
        data: {
            bookingId,
            provider
        }
    })

    const hotelPaymentUrl = `https://pay.${provider}.com/booking/${booking.bookingCode}`

    return {
        paymentId: payment.id,
        redirectUrl: hotelPaymentUrl
    }
}

export const confirmPayment = async({bookingId, reference}) => {
    const payment = await prisma.payment.findUnique({
        where: {bookingId}
    })

    if (!payment){
        throw new Error("PAYMENT_NOT_FOUND")
    }

    if (payment.status === "SUCCESS"){
        return true
    } 

    await prisma.$transaction([
        prisma.payment.update({
            where: {bookingId},
            data: {
                status: "SUCCESS",
                reference
            }      
        }),
        prisma.booking.update({
            where: {
                id: bookingId,
                status: "PENDING"
            }, 
            data: {
                status: "CONFIRMED"
            }
        })
    ])

    return true
} 