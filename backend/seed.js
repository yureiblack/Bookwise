const {PrismaClient, RoomCategory, BookingStatus, PaymentStatus} = require('@prisma/client')
const prisma = new PrismaClient()
const statesData = require('./states.json')
const path = require('path')

const IMAGE_URL = "http://localhost:5000/images/hotels"

async function seed(){
    for (const [stateName, hotels] of Object.entries(statesData)){
        const state = await prisma.state.upsert({
            where: {name: stateName},
            update: {},
            create: {name: stateName}
        })

        // upsert prevents duplicate rows in the database, but cityMap prevents duplicate database calls in your loop:
        const cityMap = {}

        for (const hotel of hotels){
            if (!cityMap[hotel.city]){
                const city = await prisma.city.upsert({
                    where: {name: hotel.city},
                    update: {},
                    create: {name: hotel.city}
                })
            }
        }
    }
}


