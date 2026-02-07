import {getUserProfile} from '../services/user.service.js'

export const fetchMyProfile = async(req, res) => {
    const userId = req.userId

    if (!userId){
        return res.status(401).json({message: "Unauthorised"})
    }

    try{
        const user = await getUserProfile(userId)

        if (!user){
            return res.status(404).json({message: "User not found"})
        }

        return res.json(user)
    } catch{
        return res.status(500).json({message: 'Failed to fetch user profile'})
    }
}