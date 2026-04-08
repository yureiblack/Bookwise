import {PrismaClient} from "@prisma/client"
import statesData from "./statesData.js"
import path from "path"

const prisma = new PrismaClient()

const HOTEL_IMAGE_URL = "http://localhost:3001/images/hotels"
const ROOM_IMAGE_URL = "http://localhost:3001/images/rooms"

async function seed(){
  for (const [stateName, hotels] of Object.entries(statesData)){
    //State:
    const state = await prisma.state.upsert({
      where: {name: stateName},
      update: {}, 
      create: {name: stateName}
    })

    const cityMap = {}

    for (const hotel of hotels){
      //City: 
      if (!cityMap[hotel.city]){
        const city = await prisma.city.upsert({
          where: {
            name_stateId: {
              name: hotel.city,
              stateId: state.id
            }
          },
          update: {}, 
          create: {
            name: hotel.city,
            stateId: state.id
          }
        })

        cityMap[hotel.city] = city.id
      }

      const cityId = cityMap[hotel.city] 

      //Hotel Image:
      const imageBaseName = path.basename(hotel.image)
      const imageUrl = `${HOTEL_IMAGE_URL}/${imageBaseName}`

      const hotelDescriptions = [
        "A luxurious retreat offering world-class hospitality and elegant interiors. Enjoy beautifully designed rooms, premium amenities, and exceptional service that ensures a memorable and relaxing stay for every guest.",
        "Perfect for business and leisure travelers with modern amenities and comfort. Whether you're attending meetings or exploring the city, this hotel provides convenience, efficiency, and a relaxing atmosphere.",
        "Nestled in a prime location, combining convenience with premium services. Guests can easily access nearby attractions while enjoying top-notch facilities, comfortable rooms, and attentive hospitality.",
        "An elegant stay experience featuring spacious rooms and fine dining. Indulge in a refined ambiance, curated cuisine, and thoughtfully designed spaces that elevate your overall stay experience.",
        "Designed for travelers seeking comfort, style, and excellent service. With modern interiors, cozy accommodations, and a welcoming environment, this hotel ensures a pleasant and hassle-free stay.",
        "A peaceful escape with refined rooms and attentive staff. Perfect for unwinding, the hotel offers a calm ambiance, personalized service, and all the essentials for a comfortable stay.",
        "Blending contemporary design with traditional hospitality. Experience stylish interiors paired with warm service, creating a balanced stay that feels both modern and welcoming.",
        "Ideal for families and professionals looking for a premium stay. Spacious rooms, thoughtful amenities, and a convenient location make it suitable for both relaxation and productivity.",
        "Experience comfort and sophistication in the heart of the city. Enjoy easy access to major attractions while relaxing in well-appointed rooms designed for maximum comfort and convenience.",
        "A modern hotel offering seamless luxury and relaxation. From well-equipped rooms to excellent service, every detail is designed to provide a smooth and enjoyable stay experience."
      ];

      //Hotel: 
      const dbHotel = await prisma.hotel.upsert({
        where: {
          name_cityId: {
            name: hotel.name,
            cityId
          }
        },
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
      
      //Rooms:
      for (const room of hotel.rooms){
        await prisma.roomType.upsert({
          where: {
            hotelId_type: {
              hotelId: dbHotel.id,
              type: room.type
            }
          },
          update: {
            priceNight: room.priceNight,
            image: `${ROOM_IMAGE_URL}/${path.basename(room.image)}`
          },
          create: {
            hotelId: dbHotel.id,
            type: room.type,
            priceNight: room.priceNight,
            image: `${ROOM_IMAGE_URL}/${path.basename(room.image)}`
          }
        })
      }

      //Clean Old Reviews:
      await prisma.review.deleteMany({
        where: {hotelId: dbHotel.id}
      })

      //Seeded Reviews (No Booking):
      for (const review of hotel.reviews){
        await prisma.review.create({
          data: {
            hotelId: dbHotel.id,
            rating: review.rating,
            comment: review.comment,
            createdAt: new Date(review.date)
          }
        })
      }
    }
  }

  console.log("Seeding completed")
}

seed()
  .catch((err) => {
    console.error("Seeding Failed:", err);
  })
  .finally(() => {
    prisma.$disconnect();
  });




































// import { PrismaClient } from '@prisma/client';
// import statesData from './statesData.js';
// import path from 'path';

// const prisma = new PrismaClient();

// const HOTEL_IMAGE_URL = "http://localhost:3001/images/hotels";
// const ROOM_IMAGE_URL = "http://localhost:3001/images/rooms";

// async function seed() {

//   for (const [stateName, hotels] of Object.entries(statesData)) {

//     // STATE: 
//     const state = await prisma.state.upsert({
//       where: { name: stateName },
//       update: {},
//       create: { name: stateName }
//     });

//     const cityMap = {};

//     for (const hotel of hotels) {

//       // CITY:
//       if (!cityMap[hotel.city]) {
//         const city = await prisma.city.upsert({
//           where: {
//             name_stateId: {
//               name: hotel.city,
//               stateId: state.id
//             }
//           },
//           update: {},
//           create: {
//             name: hotel.city,
//             stateId: state.id 
//           }
//         });

//         cityMap[hotel.city] = city.id;
//       }

//       const cityId = cityMap[hotel.city];

//       // -----------------------------
//       // HOTEL IMAGE (thumbnail)
//       // -----------------------------
//       const imageBaseName = path.basename(hotel.image);
//       const imageUrl = `${HOTEL_IMAGE_URL}/${imageBaseName}`;

//       const hotelDescriptions = [
//         "A luxurious retreat offering world-class hospitality and elegant interiors.",
//         "Perfect for business and leisure travelers with modern amenities and comfort.",
//         "Nestled in a prime location, combining convenience with premium services.",
//         "An elegant stay experience featuring spacious rooms and fine dining.",
//         "Designed for travelers seeking comfort, style, and excellent service.",
//         "A peaceful escape with refined rooms and attentive staff.",
//         "Blending contemporary design with traditional hospitality.",
//         "Ideal for families and professionals looking for a premium stay.",
//         "Experience comfort and sophistication in the heart of the city.",
//         "A modern hotel offering seamless luxury and relaxation."
//       ];

//       // -----------------------------
//       // HOTEL
//       // -----------------------------
//       const dbHotel = await prisma.hotel.upsert({
//         where: {
//           name_cityId: {
//             name: hotel.name,
//             cityId
//           }
//         },
//         update: {},
//         create: {
//           name: hotel.name,
//           cityId,
//           rating: hotel.rating,
//           image: imageUrl,
//           amenities: hotel.amenities,
//           star: hotel.star,
//           description:
//             hotelDescriptions[Math.floor(Math.random() * hotelDescriptions.length)]
//         }
//       });

//       // -----------------------------
//       // HOTEL GALLERY IMAGES
//       // -----------------------------
//       await prisma.hotelImage.deleteMany({
//         where: { hotelId: dbHotel.id }
//       });

//       if (hotel.images && hotel.images.length > 0) {
//         for (const img of hotel.images) {
//           const base = path.basename(img);
//           const url = `${HOTEL_IMAGE_URL}/${base}`;

//           await prisma.hotelImage.create({
//             data: {
//               hotelId: dbHotel.id,
//               url
//             }
//           });
//         }
//       }

//       // -----------------------------
//       // ROOM PRICING MATRIX
//       // -----------------------------
//       const priceMatrix = {
//         4: {
//           STANDARD: [6000, 9000],
//           DELUXE: [9000, 13000],
//           SUITE: [15000, 20000]
//         },
//         5: {
//           STANDARD: [12000, 18000],
//           DELUXE: [18000, 26000],
//           SUITE: [30000, 45000]
//         },
//         7: {
//           STANDARD: [25000, 35000],
//           DELUXE: [35000, 50000],
//           SUITE: [60000, 90000]
//         }
//       };

//       const starPricing = priceMatrix[hotel.star];

//       if (!starPricing) {
//         throw new Error(`Invalid star rating ${hotel.star} for ${hotel.name}`);
//       }

//       const roomTypes = ["STANDARD", "DELUXE", "SUITE"];

//       // -----------------------------
//       // ROOMS
//       // -----------------------------
//       for (const type of roomTypes) {

//         const [minPrice, maxPrice] = starPricing[type];
//         const price = randomInRange(minPrice, maxPrice);

//         const roomData = hotel.rooms?.find(r => r.type === type);

//         const roomImage = roomData
//           ? `${ROOM_IMAGE_URL}/${path.basename(roomData.image)}`
//           : null;

//         await prisma.roomType.upsert({
//           where: {
//             hotelId_type: {
//               hotelId: dbHotel.id,
//               type
//             }
//           },
//           update: {
//             priceNight: price,
//             image: roomImage
//           },
//           create: {
//             hotelId: dbHotel.id,
//             type,
//             priceNight: price,
//             image: roomImage
//           }
//         });
//       }

//       // -----------------------------
//       // CLEAN OLD REVIEWS
//       // -----------------------------
//       await prisma.review.deleteMany({
//         where: { hotelId: dbHotel.id }
//       });

//       // -----------------------------
//       // GET ONE ROOM FOR BOOKINGS
//       // -----------------------------
//       const roomType = await prisma.roomType.findFirst({
//         where: { hotelId: dbHotel.id }
//       });

//       // -----------------------------
//       // REVIEWS + BOOKINGS
//       // -----------------------------
//       for (const review of hotel.reviews) {

//         const email = safeEmail(review.comment, dbHotel.id);

//         const user = await prisma.user.upsert({
//           where: { email },
//           update: {},
//           create: {
//             email,
//             password: "dummy"
//           }
//         });

//         const booking = await prisma.booking.create({
//           data: {
//             bookingCode: `BW-${crypto.randomBytes(3).toString('hex').toUpperCase()}`,
//             userId: user.id,
//             hotelId: dbHotel.id,
//             roomTypeId: roomType.id,
//             checkIn: new Date(),
//             checkOut: new Date(),
//             status: "CONFIRMED",
//             qrPayload: {
//               token: crypto.randomUUID(),
//               issuedAt: new Date().toISOString()
//             }
//           }
//         });

//         await prisma.review.create({
//           data: {
//             hotelId: dbHotel.id,
//             bookingId: booking.id,
//             rating: review.rating,
//             comment: review.comment,
//             createdAt: new Date(review.date)
//           }
//         });
//       }
//     }
//   }

//   console.log("Seeding Completed Successfully");
// }

// seed()
//   .catch((err) => {
//     console.error("Seeding Failed:", err);
//   })
//   .finally(() => {
//     prisma.$disconnect();
//   });