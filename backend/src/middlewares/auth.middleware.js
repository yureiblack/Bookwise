import jwt from 'jsonwebtoken'

export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers.authorization
    const token = authHeader?.startsWith('Bearer ')
        ? authHeader.split(' ')[1]
        : null
    
    if (!token) {
        return res.status(401).json({message: "Not authorised"})
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.userId = decoded.userId
        next()
    } catch{
        return res.status(401).json({message: "Invalid or expired token"})
    }
}
