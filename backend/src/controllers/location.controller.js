import prisma from '../prisma/client.js'

export const getStates = async (req, res) => {
    const allStates = await prisma.state.findMany()
    res.json(allStates)
}

export const getCitiesbyState = async(req, res) => {
    const {stateId} = req.params
    
    const cities = await prisma.city.findMany({
        where: {stateId: Number(stateId)}
    })

    res.json(cities)
}