import {getUserProfile} from '../services/user.services.js'

export const fetchMyProfile = async(req, res) => {
    const userId = req.userId
    try{
        const user = await getUserProfile(userId)
        return res.json(user)
    } catch{
        return res.status(500).json({message: 'Failed to fetch user profile'})
    }
}