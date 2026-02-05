import {fetchStates, fetchCitiesByState} from '../services/location.service.js'

export const getStates = async (req, res) => {
    try{
        const states = await fetchStates()
        return res.json(states)
    } catch{
        return res.status(500).json({message: "Failed to fetch states"})
    }
}

export const getCitiesByState = async(req, res) => {
    const {stateId} = req.params
    
    if (!stateId){
        return res.status(400).json({message: "State ID is required"})
    }

    try{
        const cities = await fetchCitiesByState(stateId)
        return res.json(cities)
    } catch{
        return res.status(500).json({message: "Failed to fetch cities by stateId"})
    }
}