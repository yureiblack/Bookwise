import prisma from '../prisma/client.js'

export const getUserProfile = async (userId) => {
    return prisma.user.findUnique({
        where: {id: userId},
        select: {
            id: true,
            email: true,
            accountId: true,
            createdAt: true
        }
    })
}