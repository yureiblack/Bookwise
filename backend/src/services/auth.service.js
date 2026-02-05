import prisma from '../prisma/client.js'
import bcrypt from 'bcrypt'
import crypto from 'crypto'
import {generateToken} from '../utils/jwt.js'

const authUser = async (email, password) => {
    let user = await prisma.user.findUnique({
        where: {email}
    })

    //LOGIN:
    if(user){
        const passwordCheck = await bcrypt.compare(password, user.password)

        if(!passwordCheck){
            throw new Error("INVALID_CREDENTIALS")
        }

        const {password: _, ...safeUser} = user
        return {user: safeUser, token: generateToken({userId: user.id})}
    }

    //SIGNUP:
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await prisma.user.create({
        data: {
            email,
            password: hashedPassword,
            accountId: crypto.randomUUID()
        }
    })

    const {password: _, ...safeUser} = newUser
    return {user: safeUser, token: generateToken({userId: newUser.id})}
}

export default authUser