import { PrismaClient } from '@prisma/client';
import statesData from './statesData.js';
import path from 'path';
import crypto from 'crypto';

const prisma = new PrismaClient();
const IMAGE_URL = "http://localhost:5000/images/hotels";

async function seed(){
    // upsert states:
    for (const [stateName, hotels] of Object.entries(statesData)){
        const state = await prisma.state.upsert({
            where: {name: stateName},
            update: {},
            create: {name: stateName}
        })

        // upsert prevents duplicate rows in the database, but cityMap prevents duplicate database calls in your loop:
        const cityMap = {}
        
        //upsert cities:
        for (const hotel of hotels){
            if (!cityMap[hotel.city]){
                const city = await prisma.city.upsert({
                    where: {name_stateId: {name: hotel.city, stateId: state.id}},
                    update: {},
                    create: {name: hotel.city, stateId: state.id}
                })
                cityMap[hotel.city] = city.id
            }

            const cityId = cityMap[hotel.city]

            // Prepare backend image URL
            const imageBaseName = path.basename(hotel.image)
            const imageUrl = `${IMAGE_URL}/${imageBaseName}`

            // upsert hotels:

            const hotelDescriptions = [
                "A luxurious retreat offering world-class hospitality and elegant interiors.",
                "Perfect for business and leisure travelers with modern amenities and comfort.",
                "Nestled in a prime location, combining convenience with premium services.",
                "An elegant stay experience featuring spacious rooms and fine dining.",
                "Designed for travelers seeking comfort, style, and excellent service.",
                "A peaceful escape with refined rooms and attentive staff.",
                "Blending contemporary design with traditional hospitality.",
                "Ideal for families and professionals looking for a premium stay.",
                "Experience comfort and sophistication in the heart of the city.",
                "A modern hotel offering seamless luxury and relaxation.",
                "Known for its impeccable service and thoughtfully designed spaces.",
                "A stylish hotel catering to travelers who value comfort and quality.",
                "An upscale stay experience with top-tier facilities and ambience.",
                "Where comfort meets convenience in a refined setting.",
                "A well-appointed hotel offering a memorable and relaxing stay.",
                "Crafted for guests who appreciate elegance and efficiency.",
                "A premium hotel focused on comfort, service, and location.",
                "An inviting space designed for both short and extended stays.",
                "A refined urban hotel with modern comforts and warm hospitality.",
                "An ideal destination for a restful and enjoyable stay."
            ];


            const dbHotel = await prisma.hotel.upsert({
                where: {name_cityId: {name: hotel.name, cityId}},  
                update: {},
                create: {
                    name: hotel.name,
                    cityId,
                    rating: hotel.rating,
                    image: imageUrl,
                    amenities: hotel.amenities,
                    star: hotel.star,
                    description: hotelDescriptions[Math.floor(Math.random() * hotelDescriptions.length)]
                }
            })

            //upsert rooms:
            const priceMatrix = {
                4: {STANDARD: [6000, 9000], DELUXE:  [9000, 13000], SUITE:   [15000, 20000]},
                5: {STANDARD: [12000, 18000], DELUXE:  [18000, 26000],SUITE:   [30000, 45000]},
                7: {STANDARD: [25000, 35000], DELUXE:  [35000, 50000], SUITE:   [60000, 90000]},
            };

            function randomInRange(min, max) {
                return Math.floor(Math.random() * (max - min + 1)) + min;
            }

            const roomTypes = ["STANDARD", "DELUXE", "SUITE"]
            const starPricing = priceMatrix[hotel.star] 
            if (!starPricing) {
                throw new Error(`Invalid star rating ${hotel.star} for hotel ${hotel.name}`)
            }

            for (const type of roomTypes){
                const [minPrice, maxPrice] = starPricing[type]
                const price = randomInRange(minPrice, maxPrice)
                await prisma.roomType.upsert({
                    where: {hotelId_type: {hotelId: dbHotel.id, type}},
                    update: {priceNight: price},
                    create: {
                        hotelId: dbHotel.id,
                        type,
                        priceNight: price
                    }
                })
            }

            // Create Reviews
            await prisma.review.deleteMany({
                where: { hotelId: dbHotel.id }
            })

            for (const review of hotel.reviews) {
                const dummyUser = await prisma.user.upsert({
                    where: { email: `dummy-${review.comment}-${dbHotel.id}@bookwise.com` },
                    update: {},
                    create: {
                        email: `dummy-${review.comment}-${dbHotel.id}@bookwise.com`,
                        accountId: crypto.randomUUID(),
                        password: "dummy"
                    }
                });

                // Pick the first roomType of this hotel
                const roomType = await prisma.roomType.findFirst({
                    where: { hotelId: dbHotel.id }
                });

                const booking = await prisma.booking.create({
                    data: {
                        bookingCode: `BW-${crypto.randomBytes(3).toString('hex').toUpperCase()}`,
                        userId: dummyUser.id,
                        hotelId: dbHotel.id,
                        roomTypeId: roomType.id, 
                        checkIn: new Date(),
                        checkOut: new Date(),
                        status: "CONFIRMED",
                        qrPayload: {
                            token: crypto.randomUUID(),
                            issuedAt: new Date().toISOString()
                        }
                    }
                });

                // 3️⃣ Create the review with the bookingId
                await prisma.review.create({
                    data: {
                        hotelId: dbHotel.id,
                        bookingId: booking.id,
                        rating: review.rating,
                        comment: review.comment,
                        createdAt: new Date(review.date),
                    },
                });
            }
        }
    }

    console.log("Seeding Completed Successfully");
}

seed()
    .catch((err) => {
        console.error("Seeding Failed:", err)
    })
    .finally(() => {
        prisma.$disconnect()
    })


