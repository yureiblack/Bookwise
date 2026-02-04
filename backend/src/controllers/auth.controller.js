import {authWithEmail} from '../services/auth.service.js'
const loginOrSignup = async (req, res) => {
    let {email} = req.body

    if (!email){
        return res.status(400).json({message: "Email required"})
    }

    email = email.trim().toLowerCase()

    if(!email.includes("@") || !email.includes(".")){
        return res.status(400).json({message: "Invalid email"})
    }

    const data = await authWithEmail(email)
    res.json(data)
}

export default loginOrSignup