import prisma from '../prisma/client.js'

export const initiatePayment = async ({bookingId, provider}) => {
    const booking = await prisma.booking.findUnique({
        where: {id: bookingId}
    })

    if (!booking){
        throw new Error("BOOKING_NOT_FOUND")
    }

    const payment = await prisma.payment.create({
        data: {
            bookingId,
            provider
        }
    })

    // In real life this comes from hotel dashboard / config
    const hotelPaymentUrl = `https://pay.${provider}.com/booking/${booking.bookingCode}`

    return {
        paymentId: payment.id,
        redirectUrl: hotelPaymentUrl
    }
}

export const confirmPayment = async({bookingId, reference}) => {
    await prisma.payment.update({
        where: {bookingId},
        data: {
            status: "SUCCESS",
            reference
        }
    })

    await prisma.booking.update({
        where: {id: bookingId},
        data: {
            status: "CONFIRMED"
        }
    })

    return true
}