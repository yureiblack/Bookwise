import prisma from '../prisma/client.js'

export const getHotelsByCity = async (cityId) => {
    return prisma.hotel.findMany({
        where: {cityId},
        include: {
            rooms: true, reviews: true
        }
    })
}

export const getHotelById = async(hotelId) => {
    return prisma.hotel.findUnique({
        where: {id: hotelId},
        include: {
            city: true, rooms: true, reviews: true
        }
    })
} 