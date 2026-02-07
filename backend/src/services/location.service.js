import prisma from '../prisma/client.js'

export const fetchStates = async () => {
    return prisma.state.findMany({
        orderBy: {name: 'asc'}
    })
}

export const fetchCitiesByState = async (stateId) => {
    return prisma.city.findMany({
        where: {stateId},
        orderBy: {name: 'asc'}
    })
} 