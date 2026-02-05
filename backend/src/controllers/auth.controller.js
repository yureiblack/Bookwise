import authUser from '../services/auth.service.js'
const loginOrSignup = async (req, res) => {
    let {email, password} = req.body

    if (!email || !password){
        return res.status(400).json({message: "Email and password required"})
    }

    email = email.trim().toLowerCase()

    if(!email.includes("@") || !email.includes(".")){
        return res.status(400).json({message: "Invalid email"})
    }

    if(password.length < 6){
        return res.status(400).json({message: "Password must be at least 6 characters"})
    }

    try{
        const data = await authUser(email, password)
        res.json(data)
    } catch(err){
        if (err.message === "INVALID_CREDENTIALS"){
            return res.status(401).json({message: "Invalid credentials"})
        } else{
            return res.status(500).json({message: "Server error"})
        }
    }
}

export default loginOrSignup