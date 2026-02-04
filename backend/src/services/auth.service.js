import prisma from '../prisma/client.js'
import {generateToken} from '../utils/jwt.js'

const authWithEmail = async (email) => {
    if (!email) {
        throw new Error("Email is required");
    }

    email = email.toLowerCase().trim()

    let user = await prisma.user.findUnique({
        where: {email}
    })

    if(!user){
        user = await prisma.user.create({
            data: {email}
        })
    }

    const token = generateToken({userId: user.id})
    return {user, token}
}

export default authWithEmail