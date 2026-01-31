const statesData = {
  "Andhra Pradesh": [
    {
      "id": "and_city_01",
      "name": "The Imperial Crown",
      "rating": 5.0,
      "image": "/images/hotels/and_img1.jpg",
      "pricePerNight": 43000,
      "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
      "star": 7,
      "city": "Visakhapatnam",
      "reviews": [{
        "reviewerName": "Anjali Sharma",
        "date": "2025-04-10",
        "rating": 5,
        "comment": "Absolutely stunning hotel with exceptional service!"
      },
      {
        "reviewerName": "Ravi Kumar",
        "date": "2025-03-15",
        "rating": 4,
        "comment": "Luxurious experience but food could've been better."
      }]
    },
    {
      "id": "and_city_02",
      "name": "Grand Eden",
      "rating": 4.5,
      "image": "/images/hotels/and_img2.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Vijayawada",
      "reviews": [{
        "reviewerName": "Meera Verma",
        "date": "2025-01-20",
        "rating": 5,
        "comment": "Impeccable service and a gorgeous view."
      },
      {
        "reviewerName": "Karan Joshi",
        "date": "2025-02-02",
        "rating": 3,
        "comment": "Nice place but rooms were a bit small."
      }]
    },
    {
      "id": "and_city_03",
      "name": "Azure Bay Hotel",
      "rating": 4.5,
      "image": "/images/hotels/and_img3.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Tirupati",
      "reviews": [{
        "reviewerName": "Priya Menon",
        "date": "2025-04-01",
        "rating": 4,
        "comment": "Very clean and well-maintained hotel."
      },
      {
        "reviewerName": "Arjun Singh",
        "date": "2025-03-05",
        "rating": 5,
        "comment": "Loved the pool and the food!"
      }]
    },
    {
      "id": "and_city_04",
      "name": "The Golden Lotus",
      "rating": 4.5,
      "image": "/images/hotels/and_img4.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Visakhapatnam",
      "reviews": [{
        "reviewerName": "Nisha Patel",
        "date": "2025-02-25",
        "rating": 4,
        "comment": "Great location. Would visit again."
      },
      {
        "reviewerName": "Siddharth Rao",
        "date": "2025-01-18",
        "rating": 5,
        "comment": "Everything was perfect. Worth every penny."
      }]
    },
    {
      "id": "and_city_05",
      "name": "The Oakwood Inn",
      "rating": 4.0,
      "image": "/images/hotels/and_img5.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Vijayawada",
      "reviews": [{
        "reviewerName": "Divya Kapoor",
        "date": "2025-03-22",
        "rating": 3,
        "comment": "Service was slow but the room was nice."
      },
      {
        "reviewerName": "Harshita Jain",
        "date": "2025-04-17",
        "rating": 5,
        "comment": "Best hotel experience I've had in a while!"
      }]
    },
    {
      "id": "and_city_06",
      "name": "Riverstone Hotel",
      "rating": 4.0,
      "image": "/images/hotels/and_img6.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Guntur",
      "reviews": [{
        "reviewerName": "Allison Hill",
        "date": "2024-12-03",
        "rating": 3,
        "comment": "Absolutely stunning hotel with exceptional service!"
      },
      {
        "reviewerName": "Brian Yang",
        "date": "2025-02-03",
        "rating": 4.5,
        "comment": "Everything was perfect. Worth every penny."
      }]
    }
  ],
  "Arunachal Pradesh": [
    {
      "id": "aru_city_01",
      "name": "Prestige Heights",
      "rating": 4.5,
      "image": "/images/hotels/aru_img3.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Itanagar",
      "reviews": [{
        "reviewerName": "Javier Johnson",
        "date": "2024-12-02",
        "rating": 4,
        "comment": "Very clean and well-maintained hotel."
      },
      {
        "reviewerName": "Lance Hoffman",
        "date": "2025-03-09",
        "rating": 3,
        "comment": "Peaceful environment and cozy rooms."
      }]
    },
    {
      "id": "aru_city_02",
      "name": "Sterling Vista",
      "rating": 4.5,
      "image": "/images/hotels/aru_img4.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Tawang",
      "reviews": [{
        "reviewerName": "Kimberly Robinson",
        "date": "2025-02-12",
        "rating": 3,
        "comment": "Excellent amenities and courteous staff."
      },
      {
        "reviewerName": "Sean Blake",
        "date": "2024-11-21",
        "rating": 5,
        "comment": "Luxurious experience but food could've been better."
      }]
    },
    {
      "id": "aru_city_03",
      "name": "Pine Hill Lodge",
      "rating": 4.0,
      "image": "/images/hotels/aru_img1.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Itanagar",
      "reviews": [{
        "reviewerName": "Gina Moore",
        "date": "2025-03-18",
        "rating": 3,
        "comment": "Impeccable service and a gorgeous view."
      },
      {
        "reviewerName": "Brandon Davis",
        "date": "2025-04-03",
        "rating": 4,
        "comment": "Everything was perfect. Worth every penny."
      }]
    },
    {
      "id": "aru_city_04",
      "name": "The Green Terrace",
      "rating": 4.0,
      "image": "/images/hotels/aru_img2.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Pasighat",
      "reviews": [{
        "reviewerName": "Dennis Williams",
        "date": "2025-01-18",
        "rating": 3,
        "comment": "Peaceful environment and cozy rooms."
      },
      {
        "reviewerName": "Valerie Gray",
        "date": "2025-02-05",
        "rating": 4,
        "comment": "Peaceful environment and cozy rooms."
      }]
    }
  ],
  "Assam": [
    {
      "id": "ass_city_01",
      "name": "Hotel Royale Pearl",
      "rating": 4.5,
      "image": "/images/hotels/ass_img1.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Guwahati",
      "reviews": [{
        "reviewerName": "Mark Mcclure",
        "date": "2024-12-30",
        "rating": 5,
        "comment": "Everything was perfect. Worth every penny."
      },
      {
        "reviewerName": "Michele Williams",
        "date": "2024-12-04",
        "rating": 5,
        "comment": "Excellent amenities and courteous staff."
      }]
    },
    {
      "id": "ass_city_02",
      "name": "The Marigold Inn",
      "rating": 4.5,
      "image": "/images/hotels/ass_img2.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Tezpur",
      "reviews": [{
        "reviewerName": "Victoria Wyatt",
        "date": "2025-04-07",
        "rating": 4.5,
        "comment": "Absolutely stunning hotel with exceptional service!"
      },
      {
        "reviewerName": "Donald Reid",
        "date": "2024-12-30",
        "rating": 4,
        "comment": "Location was perfect for sightseeing."
      }]
    },
    {
      "id": "ass_city_03",
      "name": "Lakeside Haven",
      "rating": 4.0,
      "image": "/images/hotels/ass_img3.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Guwahati",
      "reviews": [{
        "reviewerName": "Henry Santiago",
        "date": "2025-03-06",
        "rating": 4.5,
        "comment": "Service was slow but the room was nice."
      },
      {
        "reviewerName": "Maria Lynch",
        "date": "2024-11-23",
        "rating": 4,
        "comment": "Great location. Would visit again."
      }]
    },
    {
      "id": "ass_city_04",
      "name": "Meadowview Inn",
      "rating": 4.0,
      "image": "/images/hotels/ass_img4.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Silchar",
      "reviews": [{
        "reviewerName": "Danielle Ford",
        "date": "2024-12-12",
        "rating": 4.5,
        "comment": "Nice place but rooms were a bit small."
      },
      {
        "reviewerName": "Margaret Hawkins DDS",
        "date": "2025-04-02",
        "rating": 3,
        "comment": "The ambiance is absolutely delightful."
      }]
    }
  ],
  "Bihar": [
    {
      "id": "bih_city_01",
      "name": "Elysian Grandeur",
      "rating": 5.0,
      "image": "/images/hotels/bih_img1.jpg",
      "pricePerNight": 43000,
      "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
      "star": 7,
      "city": "Patna",
      "reviews": [{
        "reviewerName": "Amy Underwood",
        "date": "2025-03-26",
        "rating": 3,
        "comment": "Room service was prompt and friendly."
      },
      {
        "reviewerName": "Derek Clark",
        "date": "2025-02-08",
        "rating": 4.5,
        "comment": "My go-to hotel whenever I'm in town."
      }]
    },
    {
      "id": "bih_city_02",
      "name": "Solace Suites",
      "rating": 4.5,
      "image": "/images/hotels/bih_img2.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Gaya",
      "reviews": [{
        "reviewerName": "Emily Rios",
        "date": "2025-01-05",
        "rating": 4.5,
        "comment": "Luxurious experience but food could've been better."
      },
      {
        "reviewerName": "Maria Thomas",
        "date": "2024-11-17",
        "rating": 5,
        "comment": "Peaceful environment and cozy rooms."
      }]
    },
    {
      "id": "bih_city_03",
      "name": "The Radiant Crest",
      "rating": 4.5,
      "image": "/images/hotels/bih_img3.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Patna",
      "reviews": [{
        "reviewerName": "Justin Baker",
        "date": "2025-02-11",
        "rating": 3,
        "comment": "The ambiance is absolutely delightful."
      },
      {
        "reviewerName": "Kevin Cox",
        "date": "2024-11-16",
        "rating": 3,
        "comment": "Peaceful environment and cozy rooms."
      }]
    },
    {
      "id": "bih_city_04",
      "name": "Zenith Valley Resort",
      "rating": 4.5,
      "image": "/images/hotels/bih_img4.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Bihar Sharif",
      "reviews": [{
        "reviewerName": "Ann Williams",
        "date": "2024-11-11",
        "rating": 4.5,
        "comment": "My go-to hotel whenever I'm in town."
      },
      {
        "reviewerName": "Christopher Becker",
        "date": "2025-02-13",
        "rating": 4.5,
        "comment": "Excellent amenities and courteous staff."
      }]
    },
    {
      "id": "bih_city_05",
      "name": "Willow Creek Hotel",
      "rating": 4.0,
      "image": "/images/hotels/bih_img5.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Patna",
      "reviews": [{
        "reviewerName": "James Ferrell",
        "date": "2025-01-31",
        "rating": 4,
        "comment": "Impeccable service and a gorgeous view."
      },
      {
        "reviewerName": "Juan Dunlap",
        "date": "2025-03-02",
        "rating": 3,
        "comment": "Everything was perfect. Worth every penny."
      }]
    },
    {
      "id": "bih_city_06",
      "name": "Sunnybrook Inn",
      "rating": 4.0,
      "image": "/images/hotels/bih_img6.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Gaya",
      "reviews": [{
        "reviewerName": "Melanie Herrera",
        "date": "2024-12-11",
        "rating": 4.5,
        "comment": "Impeccable service and a gorgeous view."
      },
      {
        "reviewerName": "Gina Carter",
        "date": "2024-11-20",
        "rating": 4,
        "comment": "Nice place but rooms were a bit small."
      }]
    }
  ],
  "Chhattisgarh": [
    {
      "id": "chh_city_01",
      "name": "Aurora Heights",
      "rating": 5.0,
      "image": "/images/hotels/chh_img1.jpg",
      "pricePerNight": 43000,
      "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
      "star": 7,
      "city": "Raipur",
      "reviews": [{
        "reviewerName": "Troy Liu",
        "date": "2024-12-11",
        "rating": 5,
        "comment": "Service was slow but the room was nice."
      },
      {
        "reviewerName": "Pamela Romero",
        "date": "2024-11-10",
        "rating": 5,
        "comment": "Room service was prompt and friendly."
      }]
    },
    {
      "id": "chh_city_02",
      "name": "The Velvet Leaf",
      "rating": 4.5,
      "image": "/images/hotels/chh_img2.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Bilaspur",
      "reviews": [{
        "reviewerName": "Elizabeth Fowler",
        "date": "2025-02-16",
        "rating": 4,
        "comment": "Room service was prompt and friendly."
      },
      {
        "reviewerName": "James Martin",
        "date": "2025-03-21",
        "rating": 4.5,
        "comment": "Great location. Would visit again."
      }]
    },
    {
      "id": "chh_city_03",
      "name": "Crystal Mirage",
      "rating": 4.5,
      "image": "/images/hotels/chh_img3.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Korba",
      "reviews": [{
        "reviewerName": "Tamara George",
        "date": "2025-01-23",
        "rating": 4.5,
        "comment": "Impeccable service and a gorgeous view."
      },
      {
        "reviewerName": "Timothy Koch",
        "date": "2025-03-31",
        "rating": 4,
        "comment": "Peaceful environment and cozy rooms."
      }]
    },
    {
      "id": "chh_city_04",
      "name": "Opal Garden Hotel",
      "rating": 4.5,
      "image": "/images/hotels/chh_img4.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Raipur",
      "reviews": [{
        "reviewerName": "Cynthia Allen",
        "date": "2025-02-08",
        "rating": 4,
        "comment": "Loved the pool and the food!"
      },
      {
        "reviewerName": "Angelica Tucker",
        "date": "2024-11-03",
        "rating": 5,
        "comment": "The ambiance is absolutely delightful."
      }]
    },
    {
      "id": "chh_city_05",
      "name": "Valley Vista Resort",
      "rating": 4.0,
      "image": "/images/hotels/chh_img5.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Raigarh",
      "reviews": [{
        "reviewerName": "Kim Martinez",
        "date": "2025-02-26",
        "rating": 4.5,
        "comment": "Peaceful environment and cozy rooms."
      },
      {
        "reviewerName": "Joshua Baker",
        "date": "2025-04-08",
        "rating": 4,
        "comment": "The spa services were top-notch!"
      }]
    },
    {
      "id": "chh_city_06",
      "name": "The Orchard House",
      "rating": 4.0,
      "image": "/images/hotels/chh_img6.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Durg-Bhilai Nagar",
      "reviews": [{
        "reviewerName": "Tracey Hickman",
        "date": "2025-03-16",
        "rating": 3,
        "comment": "Everything was perfect. Worth every penny."
      },
      {
        "reviewerName": "Christina Collins",
        "date": "2025-02-28",
        "rating": 3,
        "comment": "The spa services were top-notch!"
      }]
    }
  ],
  "Goa": [
    {
      "id": "goa_city_01",
      "name": "Coral Cove",
      "rating": 4.5,
      "image": "/images/hotels/goa_img1.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Panaji",
      "reviews": [{
        "reviewerName": "Jessica Holmes",
        "date": "2024-11-13",
        "rating": 5,
        "comment": "Service was slow but the room was nice."
      },
      {
        "reviewerName": "Austin Smith",
        "date": "2025-02-05",
        "rating": 3,
        "comment": "Great location. Would visit again."
      }]
    },
    {
      "id": "goa_city_02",
      "name": "Regal Breeze",
      "rating": 4.5,
      "image": "/images/hotels/goa_img2.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Vasco da Gama",
      "reviews": [{
        "reviewerName": "Daniel Jones",
        "date": "2025-02-20",
        "rating": 4.5,
        "comment": "Great location. Would visit again."
      },
      {
        "reviewerName": "Austin Johnson",
        "date": "2024-12-24",
        "rating": 5,
        "comment": "The ambiance is absolutely delightful."
      }]
    },
    {
      "id": "goa_city_03",
      "name": "Clearview Lodge",
      "rating": 4.0,
      "image": "/images/hotels/goa_img3.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Panaji",
      "reviews": [{
        "reviewerName": "David Caldwell",
        "date": "2024-12-01",
        "rating": 5,
        "comment": "Very clean and well-maintained hotel."
      },
      {
        "reviewerName": "Miranda Khan",
        "date": "2025-02-09",
        "rating": 4.5,
        "comment": "Very clean and well-maintained hotel."
      }]
    },
    {
      "id": "goa_city_04",
      "name": "Hillside Retreat",
      "rating": 4.0,
      "image": "/images/hotels/goa_img4.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Margao",
      "reviews": [{
        "reviewerName": "Richard Aguirre",
        "date": "2024-11-26",
        "rating": 4,
        "comment": "Peaceful environment and cozy rooms."
      },
      {
        "reviewerName": "Matthew Gomez",
        "date": "2025-01-08",
        "rating": 4.5,
        "comment": "Excellent amenities and courteous staff."
      }]
    }
  ],
  "Gujarat": [
    {
      "id": "guj_city_01",
      "name": "The Zenith Royale",
      "rating": 5.0,
      "image": "/images/hotels/guj_img1.jpg",
      "pricePerNight": 43000,
      "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
      "star": 7,
      "city": "Ahmedabad",
      "reviews": [{
        "reviewerName": "Nicholas Nunez",
        "date": "2025-02-23",
        "rating": 5,
        "comment": "Excellent amenities and courteous staff."
      },
      {
        "reviewerName": "James Morgan",
        "date": "2025-04-06",
        "rating": 5,
        "comment": "Room service was prompt and friendly."
      }]
    },
    {
      "id": "guj_city_02",
      "name": "The Sapphire Enclave",
      "rating": 5.0,
      "image": "/images/hotels/guj_img2.jpg",
      "pricePerNight": 43000,
      "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
      "star": 7,
      "city": "Surat",
      "reviews": [{
        "reviewerName": "Corey Herrera",
        "date": "2024-11-17",
        "rating": 4,
        "comment": "Very clean and well-maintained hotel."
      },
      {
        "reviewerName": "Donald Wright",
        "date": "2025-04-18",
        "rating": 5,
        "comment": "Impeccable service and a gorgeous view."
      }]
    },
    {
      "id": "guj_city_03",
      "name": "The Blossom Crown",
      "rating": 4.5,
      "image": "/images/hotels/guj_img3.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Rajkot",
      "reviews": [{
        "reviewerName": "Robert Chase",
        "date": "2024-11-09",
        "rating": 3,
        "comment": "Nice place but rooms were a bit small."
      },
      {
        "reviewerName": "Zachary Huff",
        "date": "2024-11-08",
        "rating": 4,
        "comment": "Loved the pool and the food!"
      }]
    },
    {
      "id": "guj_city_04",
      "name": "Harmony Luxe",
      "rating": 4.5,
      "image": "/images/hotels/guj_img4.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Ahmedabad",
      "reviews": [{
        "reviewerName": "Sarah Martin",
        "date": "2025-01-23",
        "rating": 5,
        "comment": "My go-to hotel whenever I'm in town."
      },
      {
        "reviewerName": "Dr. Steven Martin",
        "date": "2024-10-21",
        "rating": 3,
        "comment": "The ambiance is absolutely delightful."
      }]
    },
    {
      "id": "guj_city_05",
      "name": "Tranquil Palace",
      "rating": 4.5,
      "image": "/images/hotels/guj_img5.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Vadodara",
      "reviews": [{
        "reviewerName": "Sarah Martin",
        "date": "2025-01-23",
        "rating": 5,
        "comment": "My go-to hotel whenever I'm in town."
      },
      {
        "reviewerName": "Dr. Steven Martin",
        "date": "2024-10-21",
        "rating": 3,
        "comment": "The ambiance is absolutely delightful."
      }]
    },
    {
      "id": "guj_city_06",
      "name": "The Crown Orchid",
      "rating": 4.5,
      "image": "/images/hotels/guj_img6.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Junagadh",
      "reviews": [{
        "reviewerName": "Mrs. Rachel Gibson",
        "date": "2025-01-11",
        "rating": 5,
        "comment": "My go-to hotel whenever I'm in town."
      },
      {
        "reviewerName": "Monica Logan",
        "date": "2025-02-26",
        "rating": 5,
        "comment": "Highly recommended for families."
      }]
    },
    {
      "id": "guj_city_07",
      "name": "Birchwood Suites",
      "rating": 4.0,
      "image": "/images/hotels/guj_img7.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Dwarka",
      "reviews": [{
        "reviewerName": "Brittney Phillips",
        "date": "2024-11-01",
        "rating": 4.5,
        "comment": "Peaceful environment and cozy rooms."
      },
      {
        "reviewerName": "Kimberly Adkins",
        "date": "2024-11-01",
        "rating": 3,
        "comment": "Nice place but rooms were a bit small."
      }]
    },
    {
      "id": "guj_city_08",
      "name": "Redwood Inn",
      "rating": 4.0,
      "image": "/images/hotels/guj_img8.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Gandhinagar",
      "reviews": [{
        "reviewerName": "John Calhoun",
        "date": "2025-02-01",
        "rating": 4.5,
        "comment": "The spa services were top-notch!"
      },
      {
        "reviewerName": "Tyler Miller",
        "date": "2024-11-26",
        "rating": 3,
        "comment": "Best hotel experience I've had in a while!"
      }]
    },
    {
      "id": "guj_city_09",
      "name": "Cedar Lane Hotel",
      "rating": 4.0,
      "image": "/images/hotels/guj_img9.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Vadodara",
      "reviews": [{
        "reviewerName": "Barry Hensley",
        "date": "2025-01-07",
        "rating": 5,
        "comment": "Loved the pool and the food!"
      },
      {
        "reviewerName": "Steve Sanchez",
        "date": "2025-02-13",
        "rating": 5,
        "comment": "Absolutely stunning hotel with exceptional service!"
      }]
    }
  ],
  "Haryana": [
    {
      "id": "har_city_01",
      "name": "Celestia Majestic",
      "rating": 5.0,
      "image": "/images/hotels/har_img1.jpg",
      "pricePerNight": 43000,
      "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
      "star": 7,
      "city": "Faridabad",
      "reviews": [{
        "reviewerName": "Bradley Sandoval",
        "date": "2025-02-07",
        "rating": 4.5,
        "comment": "Highly recommended for families."
      },
      {
        "reviewerName": "Taylor Harris",
        "date": "2025-03-09",
        "rating": 4,
        "comment": "Highly recommended for families."
      }]
    },
    {
      "id": "har_city_02",
      "name": "Nova Haven",
      "rating": 4.5,
      "image": "/images/hotels/har_img2.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Gurgaon",
      "reviews": [{
        "reviewerName": "Derek Anderson",
        "date": "2025-02-23",
        "rating": 3,
        "comment": "Best hotel experience I've had in a while!"
      },
      {
        "reviewerName": "Eugene Walton",
        "date": "2024-11-04",
        "rating": 4,
        "comment": "Very clean and well-maintained hotel."
      }]
    },
    {
      "id": "har_city_03",
      "name": "Emerald Ridge",
      "rating": 4.5,
      "image": "/images/hotels/har_img3.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Sonipat",
      "reviews": [{
        "reviewerName": "Marc Hart",
        "date": "2024-11-09",
        "rating": 4.5,
        "comment": "Loved the pool and the food!"
      },
      {
        "reviewerName": "Daniel Baker",
        "date": "2025-04-20",
        "rating": 3,
        "comment": "My go-to hotel whenever I'm in town."
      }]
    },
    {
      "id": "har_city_04",
      "name": "Hotel Aurora Bliss",
      "rating": 4.5,
      "image": "/images/hotels/har_img4.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Panipat",
      "reviews": [{
        "reviewerName": "Benjamin Sanchez",
        "date": "2024-12-15",
        "rating": 4.5,
        "comment": "Could improve the check-in process."
      },
      {
        "reviewerName": "Roy Warner",
        "date": "2025-02-16",
        "rating": 3,
        "comment": "Nice place but rooms were a bit small."
      }]
    },
    {
      "id": "har_city_05",
      "name": "Maplewood Retreat",
      "rating": 4.0,
      "image": "/images/hotels/har_img5.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Faridabad",
      "reviews": [{
        "reviewerName": "Benjamin Sanchez",
        "date": "2024-12-15",
        "rating": 4.5,
        "comment": "Could improve the check-in process."
      },
      {
        "reviewerName": "Roy Warner",
        "date": "2025-02-16",
        "rating": 3,
        "comment": "Nice place but rooms were a bit small."
      }]
    },
    {
      "id": "har_city_06",
      "name": "Creekside Inn",
      "rating": 4.0,
      "image": "/images/hotels/har_img6.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Ambala",
      "reviews": [{
        "reviewerName": "Dr. Kendra Contreras",
        "date": "2025-02-05",
        "rating": 4.5,
        "comment": "Best hotel experience I've had in a while!"
      },
      {
        "reviewerName": "Matthew Mcmillan",
        "date": "2024-11-16",
        "rating": 4,
        "comment": "Luxurious experience but food could've been better."
      }]
    }
  ],
  "Himachal Pradesh": [
    {
      "id": "him_city_01",
      "name": "The Urban Oasis",
      "rating": 4.5,
      "image": "/images/hotels/him_img1.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Shimla",
      "reviews": [{
        "reviewerName": "Steve Newton",
        "date": "2024-11-20",
        "rating": 4,
        "comment": "Excellent amenities and courteous staff."
      },
      {
        "reviewerName": "Larry Robbins",
        "date": "2024-11-29",
        "rating": 3,
        "comment": "Impeccable service and a gorgeous view."
      }]
    },
    {
      "id": "him_city_02",
      "name": "Riviera Hilltop",
      "rating": 4.5,
      "image": "/images/hotels/him_img2.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Manali",
      "reviews": [{
        "reviewerName": "Sarah Wagner",
        "date": "2024-12-08",
        "rating": 5,
        "comment": "Impeccable service and a gorgeous view."
      },
      {
        "reviewerName": "Sarah Davis",
        "date": "2025-01-11",
        "rating": 4,
        "comment": "Very clean and well-maintained hotel."
      }]
    },
    {
      "id": "him_city_03",
      "name": "Garden Grove Hotel",
      "rating": 4.0,
      "image": "/images/hotels/him_img3.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Shimla",
      "reviews": [{
        "reviewerName": "Amanda Cook",
        "date": "2024-11-15",
        "rating": 5,
        "comment": "Peaceful environment and cozy rooms."
      },
      {
        "reviewerName": "Deborah Figueroa",
        "date": "2025-02-05",
        "rating": 4,
        "comment": "Service was slow but the room was nice."
      }]
    },
    {
      "id": "him_city_04",
      "name": "Blue Ridge Lodge",
      "rating": 4.0,
      "image": "/images/hotels/him_img4.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Dharamshala",
      "reviews": [{
        "reviewerName": "Kristina Rodriguez",
        "date": "2025-04-10",
        "rating": 5,
        "comment": "Great location. Would visit again."
      },
      {
        "reviewerName": "Brittany Johnson",
        "date": "2024-12-31",
        "rating": 4,
        "comment": "Best hotel experience I've had in a while!"
      }]
    }
  ],
  "Jharkhand": [
    {
      "id": "jha_city_01",
      "name": "Regalia Haven",
      "rating": 5.0,
      "image": "/images/hotels/jha_img1.jpg",
      "pricePerNight": 43000,
      "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
      "star": 7,
      "city": "Ranchi",
      "reviews": [{
        "reviewerName": "Brittany Anderson",
        "date": "2024-12-19",
        "rating": 5,
        "comment": "Room service was prompt and friendly."
      },
      {
        "reviewerName": "Timothy Stanton",
        "date": "2024-10-28",
        "rating": 5,
        "comment": "Highly recommended for families."
      }]
    },
    {
      "id": "jha_city_02",
      "name": "The Skylight Grand",
      "rating": 4.5,
      "image": "/images/hotels/jha_img2.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Jamshedpur",
      "reviews": [{
        "reviewerName": "Christine Wright",
        "date": "2024-11-09",
        "rating": 5,
        "comment": "Nice place but rooms were a bit small."
      },
      {
        "reviewerName": "Justin Baxter",
        "date": "2025-02-18",
        "rating": 4,
        "comment": "Everything was perfect. Worth every penny."
      }]
    },
    {
      "id": "jha_city_03",
      "name": "Royal Summit",
      "rating": 4.5,
      "image": "/images/hotels/jha_img3.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Bokaro Steel City",
      "reviews": [{
        "reviewerName": "Tammy Young",
        "date": "2024-11-21",
        "rating": 3,
        "comment": "The spa services were top-notch!"
      },
      {
        "reviewerName": "Rita Keith",
        "date": "2024-10-25",
        "rating": 3,
        "comment": "Excellent amenities and courteous staff."
      }]
    },
    {
      "id": "jha_city_04",
      "name": "Velvet Shore Resort",
      "rating": 4.5,
      "image": "/images/hotels/jha_img4.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Deoghar",
      "reviews": [{
        "reviewerName": "Tim Patton",
        "date": "2025-01-08",
        "rating": 4,
        "comment": "Excellent amenities and courteous staff."
      },
      {
        "reviewerName": "Sharon Cochran",
        "date": "2024-12-11",
        "rating": 4,
        "comment": "Absolutely stunning hotel with exceptional service!"
      }]
    },
    {
      "id": "jha_city_05",
      "name": "The Elmwood Inn",
      "rating": 4.0,
      "image": "/images/hotels/jha_img5.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Ranchi",
      "reviews": [{
        "reviewerName": "Michael Reyes",
        "date": "2024-10-28",
        "rating": 3,
        "comment": "Luxurious experience but food could've been better."
      },
      {
        "reviewerName": "Courtney Velasquez",
        "date": "2025-01-18",
        "rating": 4,
        "comment": "Impeccable service and a gorgeous view."
      }]
    },
    {
      "id": "jha_city_06",
      "name": "Pinecrest Hotel",
      "rating": 4.0,
      "image": "/images/hotels/jha_img6.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Dhanbad",
      "reviews": [{
        "reviewerName": "Robert Savage",
        "date": "2024-12-03",
        "rating": 3,
        "comment": "The spa services were top-notch!"
      },
      {
        "reviewerName": "Corey Murphy",
        "date": "2025-04-06",
        "rating": 3,
        "comment": "Highly recommended for families."
      }]
    }
  ],
  "Karnataka": [
    {
      "id": "kar_city_01",
      "name": "The Grand Sovereign",
      "rating": 5.0,
      "image": "/images/hotels/kar_img1.jpg",
      "pricePerNight": 43000,
      "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
      "star": 7,
      "city": "Bengaluru",
      "reviews": [{
        "reviewerName": "Raymond Bell",
        "date": "2025-01-27",
        "rating": 4,
        "comment": "Service was slow but the room was nice."
      },
      {
        "reviewerName": "William Herrera",
        "date": "2025-04-21",
        "rating": 5,
        "comment": "Great location. Would visit again."
      }]
    },
    {
      "id": "kar_city_02",
      "name": "Palais Étoile",
      "rating": 5.0,
      "image": "/images/hotels/kar_img2.jpg",
      "pricePerNight": 43000,
      "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
      "star": 7,
      "city": "Mysore",
      "reviews": [{
        "reviewerName": "Shawn Green",
        "date": "2025-02-10",
        "rating": 4,
        "comment": "Excellent amenities and courteous staff."
      }]
    },
    {
      "id": "kar_city_03",
      "name": "Palm Serenity",
      "rating": 4.5,
      "image": "/images/hotels/kar_img3.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Hampi",
      "reviews": [{
        "reviewerName": "Deborah Rodriguez",
        "date": "2025-01-13",
        "rating": 5,
        "comment": "Everything was perfect. Worth every penny."
      }]
    },
    {
      "id": "kar_city_04",
      "name": "Alpine Glade Inn",
      "rating": 4.5,
      "image": "/images/hotels/kar_img4.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Mangalore",
      "reviews": [{
        "reviewerName": "Allison Hill",
        "date": "2024-12-03",
        "rating": 3,
        "comment": "Absolutely stunning hotel with exceptional service!"
      },
      {
        "reviewerName": "Brian Yang",
        "date": "2025-02-03",
        "rating": 4.5,
        "comment": "Everything was perfect. Worth every penny."
      }]
    },
    {
      "id": "kar_city_05",
      "name": "The Horizon Crest",
      "rating": 4.5,
      "image": "/images/hotels/kar_img5.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Davangere",
      "reviews": [{
        "reviewerName": "Javier Johnson",
        "date": "2024-12-02",
        "rating": 4,
        "comment": "Very clean and well-maintained hotel."
      },
      {
        "reviewerName": "Lance Hoffman",
        "date": "2025-03-09",
        "rating": 3,
        "comment": "Peaceful environment and cozy rooms."
      }]
    },
    {
      "id": "kar_city_06",
      "name": "Bliss Stone Retreat",
      "rating": 4.5,
      "image": "/images/hotels/kar_img6.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Hubli-Dharwad",
      "reviews": [{
        "reviewerName": "Kimberly Robinson",
        "date": "2025-02-12",
        "rating": 3,
        "comment": "Excellent amenities and courteous staff."
      },
      {
        "reviewerName": "Sean Blake",
        "date": "2024-11-21",
        "rating": 5,
        "comment": "Luxurious experience but food could've been better."
      }]
    },
    {
      "id": "kar_city_07",
      "name": "Misty Pines Resort",
      "rating": 4.0,
      "image": "/images/hotels/kar_img7.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Bengaluru",
      "reviews": [{
        "reviewerName": "Gina Moore",
        "date": "2025-03-18",
        "rating": 3,
        "comment": "Impeccable service and a gorgeous view."
      },
      {
        "reviewerName": "Brandon Davis",
        "date": "2025-04-03",
        "rating": 4,
        "comment": "Everything was perfect. Worth every penny."
      }]
    },
    {
      "id": "kar_city_08",
      "name": "The Country Haven",
      "rating": 4.0,
      "image": "/images/hotels/kar_img8.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Mysore",
      "reviews": [{
        "reviewerName": "Dennis Williams",
        "date": "2025-01-18",
        "rating": 3,
        "comment": "Peaceful environment and cozy rooms."
      },
      {
        "reviewerName": "Valerie Gray",
        "date": "2025-02-05",
        "rating": 4,
        "comment": "Peaceful environment and cozy rooms."
      }]
    },
    {
      "id": "kar_city_09",
      "name": "Riverbend Hotel",
      "rating": 4.0,
      "image": "/images/hotels/kar_img9.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Mangalore",
      "reviews": [{
        "reviewerName": "Mark Mcclure",
        "date": "2024-12-30",
        "rating": 5,
        "comment": "Everything was perfect. Worth every penny."
      },
      {
        "reviewerName": "Michele Williams",
        "date": "2024-12-04",
        "rating": 5,
        "comment": "Excellent amenities and courteous staff."
      }]
    }
  ],
  "Kerala": [
    {
      "id": "ker_city_01",
      "name": "The Golden Crest",
      "rating": 5.0,
      "image": "/images/hotels/ker_img1.jpg",
      "pricePerNight": 43000,
      "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
      "star": 7,
      "city": "Kochi",
      "reviews": [{
        "reviewerName": "Victoria Wyatt",
        "date": "2025-04-07",
        "rating": 4.5,
        "comment": "Absolutely stunning hotel with exceptional service!"
      },
      {
        "reviewerName": "Donald Reid",
        "date": "2024-12-30",
        "rating": 4,
        "comment": "Location was perfect for sightseeing."
      }]
    },
    {
      "id": "ker_city_02",
      "name": "The Marquee Luxe",
      "rating": 4.5,
      "image": "/images/hotels/ker_img2.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Thrissur",
      "reviews": [{
        "reviewerName": "Henry Santiago",
        "date": "2025-03-06",
        "rating": 4.5,
        "comment": "Service was slow but the room was nice."
      },
      {
        "reviewerName": "Maria Lynch",
        "date": "2024-11-23",
        "rating": 4,
        "comment": "Great location. Would visit again."
      }]
    },
    {
      "id": "ker_city_03",
      "name": "Starlight Haven",
      "rating": 4.5,
      "image": "/images/hotels/ker_img3.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Kozhikode",
      "reviews": [{
        "reviewerName": "Danielle Ford",
        "date": "2024-12-12",
        "rating": 4.5,
        "comment": "Nice place but rooms were a bit small."
      },
      {
        "reviewerName": "Margaret Hawkins DDS",
        "date": "2025-04-02",
        "rating": 3,
        "comment": "The ambiance is absolutely delightful."
      }]
    },
    {
      "id": "ker_city_04",
      "name": "The Ivory Sands",
      "rating": 4.5,
      "image": "/images/hotels/ker_img4.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Munnar",
      "reviews": [{
        "reviewerName": "Amy Underwood",
        "date": "2025-03-26",
        "rating": 3,
        "comment": "Room service was prompt and friendly."
      },
      {
        "reviewerName": "Derek Clark",
        "date": "2025-02-08",
        "rating": 4.5,
        "comment": "My go-to hotel whenever I'm in town."
      }]
    },
    {
      "id": "ker_city_05",
      "name": "Quiet Pines Lodge",
      "rating": 4.0,
      "image": "/images/hotels/ker_img5.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Kochi",
      "reviews": [{
        "reviewerName": "Emily Rios",
        "date": "2025-01-05",
        "rating": 4.5,
        "comment": "Luxurious experience but food could've been better."
      },
      {
        "reviewerName": "Maria Thomas",
        "date": "2024-11-17",
        "rating": 5,
        "comment": "Peaceful environment and cozy rooms."
      }]
    },
    {
      "id": "ker_city_06",
      "name": "Bluebell Inn",
      "rating": 4.0,
      "image": "/images/hotels/ker_img6.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Wayanad",
      "reviews": [{
        "reviewerName": "Justin Baker",
        "date": "2025-02-11",
        "rating": 3,
        "comment": "The ambiance is absolutely delightful."
      },
      {
        "reviewerName": "Kevin Cox",
        "date": "2024-11-16",
        "rating": 3,
        "comment": "Peaceful environment and cozy rooms."
      }]
    }
  ],
  "Madhya Pradesh": [
    {
      "id": "mad_city_01",
      "name": "Luma Grand",
      "rating": 5.0,
      "image": "/images/hotels/mad_img1.jpg",
      "pricePerNight": 43000,
      "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
      "star": 7,
      "city": "Gwalior",
      "reviews": [{
        "reviewerName": "Ann Williams",
        "date": "2024-11-11",
        "rating": 4.5,
        "comment": "My go-to hotel whenever I'm in town."
      },
      {
        "reviewerName": "Christopher Becker",
        "date": "2025-02-13",
        "rating": 4.5,
        "comment": "Excellent amenities and courteous staff."
      }]
    },
    {
      "id": "mad_city_02",
      "name": "Moonlight Grand",
      "rating": 4.5,
      "image": "/images/hotels/mad_img2.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Indore",
      "reviews": [{
        "reviewerName": "James Ferrell",
        "date": "2025-01-31",
        "rating": 4,
        "comment": "Impeccable service and a gorgeous view."
      },
      {
        "reviewerName": "Juan Dunlap",
        "date": "2025-03-02",
        "rating": 3,
        "comment": "Everything was perfect. Worth every penny."
      }]
    },
    {
      "id": "mad_city_03",
      "name": "Vantage Elan",
      "rating": 4.5,
      "image": "/images/hotels/mad_img3.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Sanchi",
      "reviews": [{
        "reviewerName": "Melanie Herrera",
        "date": "2024-12-11",
        "rating": 4.5,
        "comment": "Impeccable service and a gorgeous view."
      },
      {
        "reviewerName": "Gina Carter",
        "date": "2024-11-20",
        "rating": 4,
        "comment": "Nice place but rooms were a bit small."
      }]
    },
    {
      "id": "mad_city_04",
      "name": "The Opaline Grove",
      "rating": 4.5,
      "image": "/images/hotels/mad_img4.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Bhopal",
      "reviews": [{
        "reviewerName": "Troy Liu",
        "date": "2024-12-11",
        "rating": 5,
        "comment": "Service was slow but the room was nice."
      },
      {
        "reviewerName": "Pamela Romero",
        "date": "2024-11-10",
        "rating": 5,
        "comment": "Room service was prompt and friendly."
      }]
    },
    {
      "id": "mad_city_05",
      "name": "Springdale Suites",
      "rating": 4.0,
      "image": "/images/hotels/mad_img5.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Gwalior",
      "reviews": [{
        "reviewerName": "Elizabeth Fowler",
        "date": "2025-02-16",
        "rating": 4,
        "comment": "Room service was prompt and friendly."
      },
      {
        "reviewerName": "James Martin",
        "date": "2025-03-21",
        "rating": 4.5,
        "comment": "Great location. Would visit again."
      }]
    },
    {
      "id": "mad_city_06",
      "name": "Birch Grove Hotel",
      "rating": 4.0,
      "image": "/images/hotels/mad_img6.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Ujjain",
      "reviews": [{
        "reviewerName": "Tamara George",
        "date": "2025-01-23",
        "rating": 4.5,
        "comment": "Impeccable service and a gorgeous view."
      },
      {
        "reviewerName": "Timothy Koch",
        "date": "2025-03-31",
        "rating": 4,
        "comment": "Peaceful environment and cozy rooms."
      }]
    }
  ],
  "Maharashtra": [
    {
      "id": "mah_city_01",
      "name": "Vellora Heights",
      "rating": 5.0,
      "image": "/images/hotels/mah_img1.jpg",
      "pricePerNight": 43000,
      "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
      "star": 7,
      "city": "Mumbai",
      "reviews": [{
        "reviewerName": "Cynthia Allen",
        "date": "2025-02-08",
        "rating": 4,
        "comment": "Loved the pool and the food!"
      },
      {
        "reviewerName": "Angelica Tucker",
        "date": "2024-11-03",
        "rating": 5,
        "comment": "The ambiance is absolutely delightful."
      }]
    },
    {
      "id": "mah_city_02",
      "name": "Astra Luxe",
      "rating": 5.0,
      "image": "/images/hotels/mah_img2.jpg",
      "pricePerNight": 43000,
      "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
      "star": 7,
      "city": "Pune",
      "reviews": [{
        "reviewerName": "Kim Martinez",
        "date": "2025-02-26",
        "rating": 4.5,
        "comment": "Peaceful environment and cozy rooms."
      },
      {
        "reviewerName": "Joshua Baker",
        "date": "2025-04-08",
        "rating": 4,
        "comment": "The spa services were top-notch!"
      }]
    },
    {
      "id": "mah_city_03",
      "name": "White Orchid Tower",
      "rating": 4.5,
      "image": "/images/hotels/mah_img3.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Nagpur",
      "reviews": [{
        "reviewerName": "Tracey Hickman",
        "date": "2025-03-16",
        "rating": 3,
        "comment": "Everything was perfect. Worth every penny."
      },
      {
        "reviewerName": "Christina Collins",
        "date": "2025-02-28",
        "rating": 3,
        "comment": "The spa services were top-notch!"
      }]
    },
    {
      "id": "mah_city_04",
      "name": "The Crystal Path",
      "rating": 4.5,
      "image": "/images/hotels/mah_img4.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Mumbai",
      "reviews": [{
        "reviewerName": "Jessica Holmes",
        "date": "2024-11-13",
        "rating": 5,
        "comment": "Service was slow but the room was nice."
      },
      {
        "reviewerName": "Austin Smith",
        "date": "2025-02-05",
        "rating": 3,
        "comment": "Great location. Would visit again."
      }]
    },
    {
      "id": "mah_city_05",
      "name": "The Azure Valley",
      "rating": 4.5,
      "image": "/images/hotels/mah_img5.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Pune",
      "reviews": [{
        "reviewerName": "Daniel Jones",
        "date": "2025-02-20",
        "rating": 4.5,
        "comment": "Great location. Would visit again."
      },
      {
        "reviewerName": "Austin Johnson",
        "date": "2024-12-24",
        "rating": 5,
        "comment": "The ambiance is absolutely delightful."
      }]
    },
    {
      "id": "mah_city_06",
      "name": "The Heritage Crest",
      "rating": 4.5,
      "image": "/images/hotels/mah_img6.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Aurangabad",
      "reviews": [{
        "reviewerName": "David Caldwell",
        "date": "2024-12-01",
        "rating": 5,
        "comment": "Very clean and well-maintained hotel."
      },
      {
        "reviewerName": "Miranda Khan",
        "date": "2025-02-09",
        "rating": 4.5,
        "comment": "Very clean and well-maintained hotel."
      }]
    },
    {
      "id": "mah_city_07",
      "name": "Cedar Springs Inn",
      "rating": 4.0,
      "image": "/images/hotels/mah_img7.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Nashik",
      "reviews": [{
        "reviewerName": "Richard Aguirre",
        "date": "2024-11-26",
        "rating": 4,
        "comment": "Peaceful environment and cozy rooms."
      },
      {
        "reviewerName": "Matthew Gomez",
        "date": "2025-01-08",
        "rating": 4.5,
        "comment": "Excellent amenities and courteous staff."
      }]
    },
    {
      "id": "mah_city_08",
      "name": "Lakeside Manor",
      "rating": 4.0,
      "image": "/images/hotels/mah_img8.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Matheran",
      "reviews": [{
        "reviewerName": "Nicholas Nunez",
        "date": "2025-02-23",
        "rating": 5,
        "comment": "Excellent amenities and courteous staff."
      },
      {
        "reviewerName": "James Morgan",
        "date": "2025-04-06",
        "rating": 5,
        "comment": "Room service was prompt and friendly."
      }]
    },
    {
      "id": "mah_city_09",
      "name": "Golden Valley Inn",
      "rating": 4.0,
      "image": "/images/hotels/mah_img9.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Malvan",
      "reviews": [{
        "reviewerName": "Corey Herrera",
        "date": "2024-11-17",
        "rating": 4,
        "comment": "Very clean and well-maintained hotel."
      },
      {
        "reviewerName": "Donald Wright",
        "date": "2025-04-18",
        "rating": 5,
        "comment": "Impeccable service and a gorgeous view."
      }]
    }
  ],
  "Manipur": [
    {
      "id": "man_city_01",
      "name": "Edenstone Heights",
      "rating": 4.5,
      "image": "/images/hotels/man_img1.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Imphal",
      "reviews": [{
        "reviewerName": "Robert Chase",
        "date": "2024-11-09",
        "rating": 3,
        "comment": "Nice place but rooms were a bit small."
      },
      {
        "reviewerName": "Zachary Huff",
        "date": "2024-11-08",
        "rating": 4,
        "comment": "Loved the pool and the food!"
      }]
    },
    {
      "id": "man_city_02",
      "name": "Lotus Hilltop Resort",
      "rating": 4.5,
      "image": "/images/hotels/man_img2.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Churachandpur", 
      "reviews": [{
        "reviewerName": "Sarah Martin",
        "date": "2025-01-23",
        "rating": 5,
        "comment": "My go-to hotel whenever I'm in town."
      },
      {
        "reviewerName": "Dr. Steven Martin",
        "date": "2024-10-21",
        "rating": 3,
        "comment": "The ambiance is absolutely delightful."
      }]
    },
    {
      "id": "man_city_03",
      "name": "The Country Garden",
      "rating": 4.0,
      "image": "/images/hotels/man_img3.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Imphal",
      "reviews": [{
        "reviewerName": "Mrs. Rachel Gibson",
        "date": "2025-01-11",
        "rating": 5,
        "comment": "My go-to hotel whenever I'm in town."
      },
      {
        "reviewerName": "Monica Logan",
        "date": "2025-02-26",
        "rating": 5,
        "comment": "Highly recommended for families."
      }]
    },
    {
      "id": "man_city_04",
      "name": "Oak Ridge Hotel",
      "rating": 4.0,
      "image": "/images/hotels/man_img4.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Ukhrul",
      "reviews": [{
        "reviewerName": "Brittney Phillips",
        "date": "2024-11-01",
        "rating": 4.5,
        "comment": "Peaceful environment and cozy rooms."
      },
      {
        "reviewerName": "Kimberly Adkins",
        "date": "2024-11-01",
        "rating": 3,
        "comment": "Nice place but rooms were a bit small."
      }]
    }
  ],
  "Meghalaya": [
    {
      "id": "meg_city_01",
      "name": "Sapphire Echo Hotel",
      "rating": 4.5,
      "image": "/images/hotels/meg_img1.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Shillong",
      "reviews": [{
        "reviewerName": "John Calhoun",
        "date": "2025-02-01",
        "rating": 4.5,
        "comment": "The spa services were top-notch!"
      },
      {
        "reviewerName": "Tyler Miller",
        "date": "2024-11-26",
        "rating": 3,
        "comment": "Best hotel experience I've had in a while!"
      }]
    },
    {
      "id": "meg_city_02",
      "name": "The Regal Fern",
      "rating": 4.5,
      "image": "/images/hotels/meg_img2.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Cherrapunji",
      "reviews": [{
        "reviewerName": "Barry Hensley",
        "date": "2025-01-07",
        "rating": 5,
        "comment": "Loved the pool and the food!"
      },
      {
        "reviewerName": "Steve Sanchez",
        "date": "2025-02-13",
        "rating": 5,
        "comment": "Absolutely stunning hotel with exceptional service!"
      }]
    },
    {
      "id": "meg_city_03",
      "name": "Mountain View Lodge",
      "rating": 4.0,
      "image": "/images/hotels/meg_img3.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Shillong",
      "reviews": [{
        "reviewerName": "Bradley Sandoval",
        "date": "2025-02-07",
        "rating": 4.5,
        "comment": "Highly recommended for families."
      },
      {
        "reviewerName": "Taylor Harris",
        "date": "2025-03-09",
        "rating": 4,
        "comment": "Highly recommended for families."
      }]
    },
    {
      "id": "meg_city_04",
      "name": "Sunset Ridge Inn",
      "rating": 4.0,
      "image": "/images/hotels/meg_img4.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Mawlynnong",
      "reviews": [{
        "reviewerName": "Derek Anderson",
        "date": "2025-02-23",
        "rating": 3,
        "comment": "Best hotel experience I've had in a while!"
      },
      {
        "reviewerName": "Eugene Walton",
        "date": "2024-11-04",
        "rating": 4,
        "comment": "Very clean and well-maintained hotel."
      }]
    }
  ],
  "Mizoram": [
    {
      "id": "miz_city_01",
      "name": "Verdant Vibe Hotel",
      "rating": 4.5,
      "image": "/images/hotels/miz_img1.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Aizawl",
      "reviews": [{
        "reviewerName": "Marc Hart",
        "date": "2024-11-09",
        "rating": 4.5,
        "comment": "Loved the pool and the food!"
      },
      {
        "reviewerName": "Daniel Baker",
        "date": "2025-04-20",
        "rating": 3,
        "comment": "My go-to hotel whenever I'm in town."
      }]
    },
    {
      "id": "miz_city_02",
      "name": "Twilight Dunes",
      "rating": 4.5,
      "image": "/images/hotels/miz_img2.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Champhai",
      "reviews": [{
        "reviewerName": "Benjamin Sanchez",
        "date": "2024-12-15",
        "rating": 4.5,
        "comment": "Could improve the check-in process."
      },
      {
        "reviewerName": "Roy Warner",
        "date": "2025-02-16",
        "rating": 3,
        "comment": "Nice place but rooms were a bit small."
      }]
    },
    {
      "id": "miz_city_03",
      "name": "Meadowbrook Lodge",
      "rating": 4.0,
      "image": "/images/hotels/miz_img3.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Aizawl",
      "reviews": [{
        "reviewerName": "Dr. Kendra Contreras",
        "date": "2025-02-05",
        "rating": 4.5,
        "comment": "Best hotel experience I've had in a while!"
      },
      {
        "reviewerName": "Matthew Mcmillan",
        "date": "2024-11-16",
        "rating": 4,
        "comment": "Luxurious experience but food could've been better."
      }]
    },
    {
      "id": "miz_city_04",
      "name": "Woodland Heights",
      "rating": 4.0,
      "image": "/images/hotels/miz_img4.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Lunglei",
      "reviews": [{
        "reviewerName": "Steve Newton",
        "date": "2024-11-20",
        "rating": 4,
        "comment": "Excellent amenities and courteous staff."
      },
      {
        "reviewerName": "Larry Robbins",
        "date": "2024-11-29",
        "rating": 3,
        "comment": "Impeccable service and a gorgeous view."
      }]
    }
  ],
  "Nagaland": [
    {
      "id": "nag_city_01",
      "name": "The Luxe Lantern",
      "rating": 4.5,
      "image": "/images/hotels/nag_img1.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Kohima",
      "reviews": [{
        "reviewerName": "Sarah Wagner",
        "date": "2024-12-08",
        "rating": 5,
        "comment": "Impeccable service and a gorgeous view."
      },
      {
        "reviewerName": "Sarah Davis",
        "date": "2025-01-11",
        "rating": 4,
        "comment": "Very clean and well-maintained hotel."
      }]
    },
    {
      "id": "nag_city_02",
      "name": "Grand Sapphire Inn",
      "rating": 4.5,
      "image": "/images/hotels/nag_img2.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Mokokchung",
      "reviews": [{
        "reviewerName": "Amanda Cook",
        "date": "2024-11-15",
        "rating": 5,
        "comment": "Peaceful environment and cozy rooms."
      },
      {
        "reviewerName": "Deborah Figueroa",
        "date": "2025-02-05",
        "rating": 4,
        "comment": "Service was slow but the room was nice."
      }]
    },
    {
      "id": "nag_city_03",
      "name": "The Birchwood Court",
      "rating": 4.0,
      "image": "/images/hotels/nag_img3.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Kohima",
      "reviews": [{
        "reviewerName": "Kristina Rodriguez",
        "date": "2025-04-10",
        "rating": 5,
        "comment": "Great location. Would visit again."
      },
      {
        "reviewerName": "Brittany Johnson",
        "date": "2024-12-31",
        "rating": 4,
        "comment": "Best hotel experience I've had in a while!"
      }]
    },
    {
      "id": "nag_city_04",
      "name": "Hillside Manor",
      "rating": 4.0,
      "image": "/images/hotels/nag_img4.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Dimapur",
      "reviews": [{
        "reviewerName": "Brittany Anderson",
        "date": "2024-12-19",
        "rating": 5,
        "comment": "Room service was prompt and friendly."
      },
      {
        "reviewerName": "Timothy Stanton",
        "date": "2024-10-28",
        "rating": 5,
        "comment": "Highly recommended for families."
      }]
    }
  ],
  "Odisha": [
    {
      "id": "odi_city_01",
      "name": "Velvet Horizon",
      "rating": 5.0,
      "image": "/images/hotels/odi_img1.jpg",
      "pricePerNight": 43000,
      "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
      "star": 7,
      "city": "Bhubaneswar",
      "reviews": [{
        "reviewerName": "Christine Wright",
        "date": "2024-11-09",
        "rating": 5,
        "comment": "Nice place but rooms were a bit small."
      },
      {
        "reviewerName": "Justin Baxter",
        "date": "2025-02-18",
        "rating": 4,
        "comment": "Everything was perfect. Worth every penny."
      }]
    },
    {
      "id": "odi_city_02",
      "name": "The Amara Court",
      "rating": 4.5,
      "image": "/images/hotels/odi_img2.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Konark",
      "reviews": [{
        "reviewerName": "Tammy Young",
        "date": "2024-11-21",
        "rating": 3,
        "comment": "The spa services were top-notch!"
      },
      {
        "reviewerName": "Rita Keith",
        "date": "2024-10-25",
        "rating": 3,
        "comment": "Excellent amenities and courteous staff."
      }]
    },
    {
      "id": "odi_city_03",
      "name": "Zenith Serene",
      "rating": 4.5,
      "image": "/images/hotels/odi_img3.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Bhubaneswar",
      "reviews": [{
        "reviewerName": "Tim Patton",
        "date": "2025-01-08",
        "rating": 4,
        "comment": "Excellent amenities and courteous staff."
      },
      {
        "reviewerName": "Sharon Cochran",
        "date": "2024-12-11",
        "rating": 4,
        "comment": "Absolutely stunning hotel with exceptional service!"
      }]
    },
    {
      "id": "odi_city_04",
      "name": "Cascade Bliss Hotel",
      "rating": 4.5,
      "image": "/images/hotels/odi_img4.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Puri",
      "reviews": [{
        "reviewerName": "Michael Reyes",
        "date": "2024-10-28",
        "rating": 3,
        "comment": "Luxurious experience but food could've been better."
      },
      {
        "reviewerName": "Courtney Velasquez",
        "date": "2025-01-18",
        "rating": 4,
        "comment": "Impeccable service and a gorgeous view."
      }]
    },
    {
      "id": "odi_city_05",
      "name": "The Rustic Lodge",
      "rating": 4.0,
      "image": "/images/hotels/odi_img5.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Cuttack",
      "reviews": [{
        "reviewerName": "Robert Savage",
        "date": "2024-12-03",
        "rating": 3,
        "comment": "The spa services were top-notch!"
      },
      {
        "reviewerName": "Corey Murphy",
        "date": "2025-04-06",
        "rating": 3,
        "comment": "Highly recommended for families."
      }]
    },
    {
      "id": "odi_city_06",
      "name": "The Green Pines",
      "rating": 4.0,
      "image": "/images/hotels/odi_img6.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Sambalpur",
      "reviews": [{
        "reviewerName": "Raymond Bell",
        "date": "2025-01-27",
        "rating": 4,
        "comment": "Service was slow but the room was nice."
      },
      {
        "reviewerName": "William Herrera",
        "date": "2025-04-21",
        "rating": 5,
        "comment": "Great location. Would visit again."
      }]
    }
  ],
  "Punjab": [
    {
      "id": "pun_city_01",
      "name": "The Regal Pavilion",
      "rating": 5.0,
      "image": "/images/hotels/pun_img1.jpg",
      "pricePerNight": 43000,
      "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
      "star": 7,
      "city": "Amritsar",
      "reviews": [{
        "reviewerName": "Shawn Green",
        "date": "2025-02-10",
        "rating": 4,
        "comment": "Excellent amenities and courteous staff."
      },
      {
        "reviewerName": "Deborah Rodriguez",
        "date": "2025-01-13",
        "rating": 5,
        "comment": "Everything was perfect. Worth every penny."
      }]
    },
    {
      "id": "pun_city_02",
      "name": "Monarch Bay",
      "rating": 4.5,
      "image": "/images/hotels/pun_img2.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Chandigarh",
      "reviews": [{
        "reviewerName": "Allison Hill",
        "date": "2024-12-03",
        "rating": 3,
        "comment": "Absolutely stunning hotel with exceptional service!"
      },
      {
        "reviewerName": "Brian Yang",
        "date": "2025-02-03",
        "rating": 4.5,
        "comment": "Everything was perfect. Worth every penny."
      }]
    },
    {
      "id": "pun_city_03",
      "name": "Ivory Palace",
      "rating": 4.5,
      "image": "/images/hotels/pun_img3.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Patiala",
      "reviews": [{
        "reviewerName": "Javier Johnson",
        "date": "2024-12-02",
        "rating": 4,
        "comment": "Very clean and well-maintained hotel."
      },
      {
        "reviewerName": "Lance Hoffman",
        "date": "2025-03-09",
        "rating": 3,
        "comment": "Peaceful environment and cozy rooms."
      }]
    },
    {
      "id": "pun_city_04",
      "name": "Sunset Imperial",
      "rating": 4.5,
      "image": "/images/hotels/pun_img4.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Jalandhar",
      "reviews": [{
        "reviewerName": "Kimberly Robinson",
        "date": "2025-02-12",
        "rating": 3,
        "comment": "Excellent amenities and courteous staff."
      },
      {
        "reviewerName": "Sean Blake",
        "date": "2024-11-21",
        "rating": 5,
        "comment": "Luxurious experience but food could've been better."
      }]
    },
    {
      "id": "pun_city_05",
      "name": "Willow Springs Inn",
      "rating": 4.0,
      "image": "/images/hotels/pun_img5.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Ludhiana",
      "reviews": [{
        "reviewerName": "Gina Moore",
        "date": "2025-03-18",
        "rating": 3,
        "comment": "Impeccable service and a gorgeous view."
      },
      {
        "reviewerName": "Brandon Davis",
        "date": "2025-04-03",
        "rating": 4,
        "comment": "Everything was perfect. Worth every penny."
      }]
    },
    {
      "id": "pun_city_06",
      "name": "The Tranquil Grove",
      "rating": 4.0,
      "image": "/images/hotels/pun_img6.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Amritsar",
      "reviews": [{
        "reviewerName": "Dennis Williams",
        "date": "2025-01-18",
        "rating": 3,
        "comment": "Peaceful environment and cozy rooms."
      },
      {
        "reviewerName": "Valerie Gray",
        "date": "2025-02-05",
        "rating": 4,
        "comment": "Peaceful environment and cozy rooms."
      }]
    }
  ],
  "Rajasthan": [
    {
      "id": "raj_city_01",
      "name": "The Maharaja Retreat",
      "rating": 5.0,
      "image": "/images/hotels/raj_img1.jpg",
      "pricePerNight": 43000,
      "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
      "star": 7,
      "city": "Udaipur",
      "reviews": [{
        "reviewerName": "Mark Mcclure",
        "date": "2024-12-30",
        "rating": 5,
        "comment": "Everything was perfect. Worth every penny."
      },
      {
        "reviewerName": "Michele Williams",
        "date": "2024-12-04",
        "rating": 5,
        "comment": "Excellent amenities and courteous staff."
      }]
    },
    {
      "id": "raj_city_02",
      "name": "Elara Bliss",
      "rating": 4.5,
      "image": "/images/hotels/raj_img2.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Jaipur",
      "reviews": [{
        "reviewerName": "Victoria Wyatt",
        "date": "2025-04-07",
        "rating": 4.5,
        "comment": "Absolutely stunning hotel with exceptional service!"
      },
      {
        "reviewerName": "Donald Reid",
        "date": "2024-12-30",
        "rating": 4,
        "comment": "Location was perfect for sightseeing."
      }]
    },
    {
      "id": "raj_city_03",
      "name": "Paradise Terrace",
      "rating": 4.5,
      "image": "/images/hotels/raj_img3.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Jaisalmer",
      "reviews": [{
        "reviewerName": "Henry Santiago",
        "date": "2025-03-06",
        "rating": 4.5,
        "comment": "Service was slow but the room was nice."
      },
      {
        "reviewerName": "Maria Lynch",
        "date": "2024-11-23",
        "rating": 4,
        "comment": "Great location. Would visit again."
      }]
    },
    {
      "id": "raj_city_04",
      "name": "Whispering Willows",
      "rating": 4.5,
      "image": "/images/hotels/raj_img4.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Jodhpur",
      "reviews": [{
        "reviewerName": "Danielle Ford",
        "date": "2024-12-12",
        "rating": 4.5,
        "comment": "Nice place but rooms were a bit small."
      },
      {
        "reviewerName": "Margaret Hawkins DDS",
        "date": "2025-04-02",
        "rating": 3,
        "comment": "The ambiance is absolutely delightful."
      }]
    },
    {
      "id": "raj_city_05",
      "name": "Evergreen Hills Hotel",
      "rating": 4.0,
      "image": "/images/hotels/raj_img5.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Bikaner",
      "reviews": [{
        "reviewerName": "Amy Underwood",
        "date": "2025-03-26",
        "rating": 3,
        "comment": "Room service was prompt and friendly."
      },
      {
        "reviewerName": "Derek Clark",
        "date": "2025-02-08",
        "rating": 4.5,
        "comment": "My go-to hotel whenever I'm in town."
      }]
    },
    {
      "id": "raj_city_06",
      "name": "Pine Valley Resort",
      "rating": 4.0,
      "image": "/images/hotels/raj_img6.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Chittorgarh",
      "reviews": [{
        "reviewerName": "Emily Rios",
        "date": "2025-01-05",
        "rating": 4.5,
        "comment": "Luxurious experience but food could've been better."
      },
      {
        "reviewerName": "Maria Thomas",
        "date": "2024-11-17",
        "rating": 5,
        "comment": "Peaceful environment and cozy rooms."
      }]
    }
  ],
  "Sikkim": [
    {
      "id": "sik_city_01",
      "name": "Regal Horizon",
      "rating": 4.5,
      "image": "/images/hotels/sik_img1.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Gangtok",
      "reviews": [{
        "reviewerName": "Justin Baker",
        "date": "2025-02-11",
        "rating": 3,
        "comment": "The ambiance is absolutely delightful."
      },
      {
        "reviewerName": "Kevin Cox",
        "date": "2024-11-16",
        "rating": 3,
        "comment": "Peaceful environment and cozy rooms."
      }]
    },
    {
      "id": "sik_city_02",
      "name": "Royal Palm Grove",
      "rating": 4.5,
      "image": "/images/hotels/sik_img2.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Pelling",
      "reviews": [{
        "reviewerName": "Ann Williams",
        "date": "2024-11-11",
        "rating": 4.5,
        "comment": "My go-to hotel whenever I'm in town."
      },
      {
        "reviewerName": "Christopher Becker",
        "date": "2025-02-13",
        "rating": 4.5,
        "comment": "Excellent amenities and courteous staff."
      }]
    },
    {
      "id": "sik_city_03",
      "name": "Silver Meadows Hotel",
      "rating": 4.0,
      "image": "/images/hotels/sik_img3.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Lachung",
      "reviews": [{
        "reviewerName": "James Ferrell",
        "date": "2025-01-31",
        "rating": 4,
        "comment": "Impeccable service and a gorgeous view."
      },
      {
        "reviewerName": "Juan Dunlap",
        "date": "2025-03-02",
        "rating": 3,
        "comment": "Everything was perfect. Worth every penny."
      }]
    },
    {
      "id": "sik_city_04",
      "name": "Blue Lake Inn",
      "rating": 4.0,
      "image": "/images/hotels/sik_img4.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Gangtok",
      "reviews": [{
        "reviewerName": "Melanie Herrera",
        "date": "2024-12-11",
        "rating": 4.5,
        "comment": "Impeccable service and a gorgeous view."
      },
      {
        "reviewerName": "Gina Carter",
        "date": "2024-11-20",
        "rating": 4,
        "comment": "Nice place but rooms were a bit small."
      }]
    }
  ],
  "Tamil Nadu": [
    {
      "id": "tam_city_01",
      "name": "Infinity Élite",
      "rating": 5.0,
      "image": "/images/hotels/tam_img1.jpg",
      "pricePerNight": 43000,
      "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
      "star": 7,
      "city": "Chennai",
      "reviews": [{
        "reviewerName": "Troy Liu",
        "date": "2024-12-11",
        "rating": 5,
        "comment": "Service was slow but the room was nice."
      },
      {
        "reviewerName": "Pamela Romero",
        "date": "2024-11-10",
        "rating": 5,
        "comment": "Room service was prompt and friendly."
      }]
    },
    {
      "id": "tam_city_02",
      "name": "Crystal Arcadia",
      "rating": 5.0,
      "image": "/images/hotels/tam_img2.jpg",
      "pricePerNight": 43000,
      "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
      "star": 7,
      "city": "Coimbatore",
      "reviews": [{
        "reviewerName": "Elizabeth Fowler",
        "date": "2025-02-16",
        "rating": 4,
        "comment": "Room service was prompt and friendly."
      },
      {
        "reviewerName": "James Martin",
        "date": "2025-03-21",
        "rating": 4.5,
        "comment": "Great location. Would visit again."
      }]
    },
    {
      "id": "tam_city_03",
      "name": "Ocean Crest Elite",
      "rating": 4.5,
      "image": "/images/hotels/tam_img3.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Thanjavur",
      "reviews": [{
        "reviewerName": "Tamara George",
        "date": "2025-01-23",
        "rating": 4.5,
        "comment": "Impeccable service and a gorgeous view."
      },
      {
        "reviewerName": "Timothy Koch",
        "date": "2025-03-31",
        "rating": 4,
        "comment": "Peaceful environment and cozy rooms."
      }]
    },
    {
      "id": "tam_city_04",
      "name": "Galaxy Palace",
      "rating": 4.5,
      "image": "/images/hotels/tam_img4.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Tiruchirappalli",
      "reviews": [{
        "reviewerName": "Cynthia Allen",
        "date": "2025-02-08",
        "rating": 4,
        "comment": "Loved the pool and the food!"
      },
      {
        "reviewerName": "Angelica Tucker",
        "date": "2024-11-03",
        "rating": 5,
        "comment": "The ambiance is absolutely delightful."
      }]
    },
    {
      "id": "tam_city_05",
      "name": "Tranquilla Heights",
      "rating": 4.5,
      "image": "/images/hotels/tam_img5.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Madurai",
      "reviews": [{
        "reviewerName": "Kim Martinez",
        "date": "2025-02-26",
        "rating": 4.5,
        "comment": "Peaceful environment and cozy rooms."
      },
      {
        "reviewerName": "Joshua Baker",
        "date": "2025-04-08",
        "rating": 4,
        "comment": "The spa services were top-notch!"
      }]
    },
    {
      "id": "tam_city_06",
      "name": "Sapphire Sands",
      "rating": 4.5,
      "image": "/images/hotels/tam_img6.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Ooty",
      "reviews": [{
        "reviewerName": "Tracey Hickman",
        "date": "2025-03-16",
        "rating": 3,
        "comment": "Everything was perfect. Worth every penny."
      },
      {
        "reviewerName": "Christina Collins",
        "date": "2025-02-28",
        "rating": 3,
        "comment": "The spa services were top-notch!"
      }]
    },
    {
      "id": "tam_city_07",
      "name": "The Valley Inn",
      "rating": 4.0,
      "image": "/images/hotels/tam_img7.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Tirunelveli",
      "reviews": [{
        "reviewerName": "Jessica Holmes",
        "date": "2024-11-13",
        "rating": 5,
        "comment": "Service was slow but the room was nice."
      },
      {
        "reviewerName": "Austin Smith",
        "date": "2025-02-05",
        "rating": 3,
        "comment": "Great location. Would visit again."
      }]
    },
    {
      "id": "tam_city_08",
      "name": "Stonebridge Hotel",
      "rating": 4.0,
      "image": "/images/hotels/tam_img8.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Kanchipuram",
      "reviews": [{
        "reviewerName": "Daniel Jones",
        "date": "2025-02-20",
        "rating": 4.5,
        "comment": "Great location. Would visit again."
      },
      {
        "reviewerName": "Austin Johnson",
        "date": "2024-12-24",
        "rating": 5,
        "comment": "The ambiance is absolutely delightful."
      }]
    },
    {
      "id": "tam_city_09",
      "name": "Golden Hills Lodge",
      "rating": 4.0,
      "image": "/images/hotels/tam_img9.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Chennai",
      "reviews": [{
        "reviewerName": "David Caldwell",
        "date": "2024-12-01",
        "rating": 5,
        "comment": "Very clean and well-maintained hotel."
      },
      {
        "reviewerName": "Miranda Khan",
        "date": "2025-02-09",
        "rating": 4.5,
        "comment": "Very clean and well-maintained hotel."
      }]
    }
  ],
  "Telangana": [
    {
      "id": "tel_city_01",
      "name": "Royale Opulence",
      "rating": 5.0,
      "image": "/images/hotels/tel_img1.jpg",
      "pricePerNight": 43000,
      "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
      "star": 7,
      "city": "Hyderabad",
      "reviews": [{
        "reviewerName": "Richard Aguirre",
        "date": "2024-11-26",
        "rating": 4,
        "comment": "Peaceful environment and cozy rooms."
      },
      {
        "reviewerName": "Matthew Gomez",
        "date": "2025-01-08",
        "rating": 4.5,
        "comment": "Excellent amenities and courteous staff."
      }]
    },
    {
      "id": "tel_city_02",
      "name": "Crown Jewel Hotel",
      "rating": 5.0,
      "image": "/images/hotels/tel_img2.jpg",
      "pricePerNight": 43000,
      "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
      "star": 7,
      "city": "Warangal",
      "reviews": [{
        "reviewerName": "Nicholas Nunez",
        "date": "2025-02-23",
        "rating": 5,
        "comment": "Excellent amenities and courteous staff."
      },
      {
        "reviewerName": "James Morgan",
        "date": "2025-04-06",
        "rating": 5,
        "comment": "Room service was prompt and friendly."
      }]
    },
    {
      "id": "tel_city_03",
      "name": "The Olive Courtyard",
      "rating": 4.5,
      "image": "/images/hotels/tel_img3.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Nizamabad",
      "reviews": [{
        "reviewerName": "Corey Herrera",
        "date": "2024-11-17",
        "rating": 4,
        "comment": "Very clean and well-maintained hotel."
      },
      {
        "reviewerName": "Donald Wright",
        "date": "2025-04-18",
        "rating": 5,
        "comment": "Impeccable service and a gorgeous view."
      }]
    },
    {
      "id": "tel_city_04",
      "name": "Hotel Euphoria",
      "rating": 4.5,
      "image": "/images/hotels/tel_img4.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Nalgonda",
      "reviews": [{
        "reviewerName": "Robert Chase",
        "date": "2024-11-09",
        "rating": 3,
        "comment": "Nice place but rooms were a bit small."
      },
      {
        "reviewerName": "Zachary Huff",
        "date": "2024-11-08",
        "rating": 4,
        "comment": "Loved the pool and the food!"
      }]
    },
    {
      "id": "tel_city_05",
      "name": "Flamingo Falls",
      "rating": 4.5,
      "image": "/images/hotels/tel_img5.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Khammam",
      "reviews": [{
        "reviewerName": "Sarah Martin",
        "date": "2025-01-23",
        "rating": 5,
        "comment": "My go-to hotel whenever I'm in town."
      },
      {
        "reviewerName": "Dr. Steven Martin",
        "date": "2024-10-21",
        "rating": 3,
        "comment": "The ambiance is absolutely delightful."
      }]
    },
    {
      "id": "tel_city_06",
      "name": "Cascade Royale",
      "rating": 4.5,
      "image": "/images/hotels/tel_img6.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Karimnagar",
      "reviews": [{
        "reviewerName": "Mrs. Rachel Gibson",
        "date": "2025-01-11",
        "rating": 5,
        "comment": "My go-to hotel whenever I'm in town."
      },
      {
        "reviewerName": "Monica Logan",
        "date": "2025-02-26",
        "rating": 5,
        "comment": "Highly recommended for families."
      }]
    },
    {
      "id": "tel_city_07",
      "name": "Mountain Ridge Inn",
      "rating": 4.0,
      "image": "/images/hotels/tel_img7.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Secunderabad",
      "reviews": [{
        "reviewerName": "Brittney Phillips",
        "date": "2024-11-01",
        "rating": 4.5,
        "comment": "Peaceful environment and cozy rooms."
      },
      {
        "reviewerName": "Kimberly Adkins",
        "date": "2024-11-01",
        "rating": 3,
        "comment": "Nice place but rooms were a bit small."
      }]
    },
    {
      "id": "tel_city_08",
      "name": "Country Pines Hotel",
      "rating": 4.0,
      "image": "/images/hotels/tel_img8.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Warangal",
      "reviews": [{
        "reviewerName": "John Calhoun",
        "date": "2025-02-01",
        "rating": 4.5,
        "comment": "The spa services were top-notch!"
      },
      {
        "reviewerName": "Tyler Miller",
        "date": "2024-11-26",
        "rating": 3,
        "comment": "Best hotel experience I've had in a while!"
      }]
    },
    {
      "id": "tel_city_09",
      "name": "The Redleaf Lodge",
      "rating": 4.0,
      "image": "/images/hotels/tel_img9.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Hyderabad",
      "reviews": [{
        "reviewerName": "Barry Hensley",
        "date": "2025-01-07",
        "rating": 5,
        "comment": "Loved the pool and the food!"
      },
      {
        "reviewerName": "Steve Sanchez",
        "date": "2025-02-13",
        "rating": 5,
        "comment": "Absolutely stunning hotel with exceptional service!"
      }]
    }
  ],
  "Tripura": [
    {
      "id": "tri_city_01",
      "name": "Horizon Flame",
      "rating": 4.5,
      "image": "/images/hotels/tri_img1.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Agartala",
      "reviews": [{
        "reviewerName": "Bradley Sandoval",
        "date": "2025-02-07",
        "rating": 4.5,
        "comment": "Highly recommended for families."
      },
      {
        "reviewerName": "Taylor Harris",
        "date": "2025-03-09",
        "rating": 4,
        "comment": "Highly recommended for families."
      }]
    },
    {
      "id": "tri_city_02",
      "name": "The Regal Isle",
      "rating": 4.5,
      "image": "/images/hotels/tri_img2.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Udaipur",
      "reviews": [{
        "reviewerName": "Derek Anderson",
        "date": "2025-02-23",
        "rating": 3,
        "comment": "Best hotel experience I've had in a while!"
      },
      {
        "reviewerName": "Eugene Walton",
        "date": "2024-11-04",
        "rating": 4,
        "comment": "Very clean and well-maintained hotel."
      }]
    },
    {
      "id": "tri_city_03",
      "name": "The Shady Grove",
      "rating": 4.0,
      "image": "/images/hotels/tri_img3.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Kailashahar",
      "reviews": [{
        "reviewerName": "Marc Hart",
        "date": "2024-11-09",
        "rating": 4.5,
        "comment": "Loved the pool and the food!"
      },
      {
        "reviewerName": "Daniel Baker",
        "date": "2025-04-20",
        "rating": 3,
        "comment": "My go-to hotel whenever I'm in town."
      }]
    },
    {
      "id": "tri_city_04",
      "name": "Willow Glen Suites",
      "rating": 4.0,
      "image": "/images/hotels/tri_img4.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Agartala",
      "reviews": [{
        "reviewerName": "Benjamin Sanchez",
        "date": "2024-12-15",
        "rating": 4.5,
        "comment": "Could improve the check-in process."
      },
      {
        "reviewerName": "Roy Warner",
        "date": "2025-02-16",
        "rating": 3,
        "comment": "Nice place but rooms were a bit small."
      }]
    }
  ],
  "Uttar Pradesh": [
    {
      "id": "up_city_01",
      "name": "The Empress Hall",
      "rating": 5.0,
      "image": "/images/hotels/up_img1.jpg",
      "pricePerNight": 43000,
      "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
      "star": 7,
      "city": "Varanasi",
      "reviews": [{
        "reviewerName": "Dr. Kendra Contreras",
        "date": "2025-02-05",
        "rating": 4.5,
        "comment": "Best hotel experience I've had in a while!"
      },
      {
        "reviewerName": "Matthew Mcmillan",
        "date": "2024-11-16",
        "rating": 4,
        "comment": "Luxurious experience but food could've been better."
      }]
    },
    {
      "id": "up_city_02",
      "name": "Kingsgate Palace",
      "rating": 5.0,
      "image": "/images/hotels/up_img2.jpg",
      "pricePerNight": 43000,
      "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
      "star": 7,
      "city": "Agra",
      "reviews": [{
        "reviewerName": "Steve Newton",
        "date": "2024-11-20",
        "rating": 4,
        "comment": "Excellent amenities and courteous staff."
      },
      {
        "reviewerName": "Larry Robbins",
        "date": "2024-11-29",
        "rating": 3,
        "comment": "Impeccable service and a gorgeous view."
      }]
    },
    {
      "id": "up_city_03",
      "name": "Infinity Garden",
      "rating": 4.5,
      "image": "/images/hotels/up_img3.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Lucknow",
      "reviews": [{
        "reviewerName": "Sarah Wagner",
        "date": "2024-12-08",
        "rating": 5,
        "comment": "Impeccable service and a gorgeous view."
      },
      {
        "reviewerName": "Sarah Davis",
        "date": "2025-01-11",
        "rating": 4,
        "comment": "Very clean and well-maintained hotel."
      }]
    },
    {
      "id": "up_city_04",
      "name": "Valley of Dreams",
      "rating": 4.5,
      "image": "/images/hotels/up_img4.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Mathura",
      "reviews": [{
        "reviewerName": "Amanda Cook",
        "date": "2024-11-15",
        "rating": 5,
        "comment": "Peaceful environment and cozy rooms."
      },
      {
        "reviewerName": "Deborah Figueroa",
        "date": "2025-02-05",
        "rating": 4,
        "comment": "Service was slow but the room was nice."
      }]
    },
    {
      "id": "up_city_05",
      "name": "Opal Pavilion",
      "rating": 4.5,
      "image": "/images/hotels/up_img5.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Kanpur",
      "reviews": [{
        "reviewerName": "Kristina Rodriguez",
        "date": "2025-04-10",
        "rating": 5,
        "comment": "Great location. Would visit again."
      },
      {
        "reviewerName": "Brittany Johnson",
        "date": "2024-12-31",
        "rating": 4,
        "comment": "Best hotel experience I've had in a while!"
      }]
    },
    {
      "id": "up_city_06",
      "name": "The Imperial Nest",
      "rating": 4.5,
      "image": "/images/hotels/up_img6.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Jhansi",
      "reviews": [{
        "reviewerName": "Brittany Anderson",
        "date": "2024-12-19",
        "rating": 5,
        "comment": "Room service was prompt and friendly."
      },
      {
        "reviewerName": "Timothy Stanton",
        "date": "2024-10-28",
        "rating": 5,
        "comment": "Highly recommended for families."
      }]
    },
    {
      "id": "up_city_07",
      "name": "River Rock Hotel",
      "rating": 4.0,
      "image": "/images/hotels/up_img7.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Ayodhya",
      "reviews": [{
        "reviewerName": "Christine Wright",
        "date": "2024-11-09",
        "rating": 5,
        "comment": "Nice place but rooms were a bit small."
      },
      {
        "reviewerName": "Justin Baxter",
        "date": "2025-02-18",
        "rating": 4,
        "comment": "Everything was perfect. Worth every penny."
      }]
    },
    {
      "id": "up_city_08",
      "name": "Maple Leaf Inn",
      "rating": 4.0,
      "image": "/images/hotels/up_img8.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Aligarh",
      "reviews": [{
        "reviewerName": "Tammy Young",
        "date": "2024-11-21",
        "rating": 3,
        "comment": "The spa services were top-notch!"
      },
      {
        "reviewerName": "Rita Keith",
        "date": "2024-10-25",
        "rating": 3,
        "comment": "Excellent amenities and courteous staff."
      }]
    },
    {
      "id": "up_city_09",
      "name": "The Summit Hotel",
      "rating": 4.0,
      "image": "/images/hotels/up_img9.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Noida",
      "reviews": [{
        "reviewerName": "Tim Patton",
        "date": "2025-01-08",
        "rating": 4,
        "comment": "Excellent amenities and courteous staff."
      },
      {
        "reviewerName": "Sharon Cochran",
        "date": "2024-12-11",
        "rating": 4,
        "comment": "Absolutely stunning hotel with exceptional service!"
      }]
    }
  ],
  "Uttarakhand": [
    {
      "id": "uk_city_01",
      "name": "Grand Tranquil",
      "rating": 4.5,
      "image": "/images/hotels/uk_img1.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Dehradun",
      "reviews": [{
        "reviewerName": "Michael Reyes",
        "date": "2024-10-28",
        "rating": 3,
        "comment": "Luxurious experience but food could've been better."
      },
      {
        "reviewerName": "Courtney Velasquez",
        "date": "2025-01-18",
        "rating": 4,
        "comment": "Impeccable service and a gorgeous view."
      }]
    },
    {
      "id": "uk_city_02",
      "name": "Morning Dew Manor",
      "rating": 4.5,
      "image": "/images/hotels/uk_img2.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Mussoorie",
      "reviews": [{
        "reviewerName": "Robert Savage",
        "date": "2024-12-03",
        "rating": 3,
        "comment": "The spa services were top-notch!"
      },
      {
        "reviewerName": "Corey Murphy",
        "date": "2025-04-06",
        "rating": 3,
        "comment": "Highly recommended for families."
      }]

    },
    {
      "id": "uk_city_03",
      "name": "Oakleaf Lodge",
      "rating": 4.0,
      "image": "/images/hotels/uk_img3.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Haridwar",
      "reviews": [{
        "reviewerName": "Raymond Bell",
        "date": "2025-01-27",
        "rating": 4,
        "comment": "Service was slow but the room was nice."
      },
      {
        "reviewerName": "William Herrera",
        "date": "2025-04-21",
        "rating": 5,
        "comment": "Great location. Would visit again."
      }]
    },
    {
      "id": "uk_city_04",
      "name": "Pine Valley Inn",
      "rating": 4.0,
      "image": "/images/hotels/uk_img4.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Dehradun",
      "reviews": [{
        "reviewerName": "Shawn Green",
        "date": "2025-02-10",
        "rating": 4,
        "comment": "Excellent amenities and courteous staff."
      },
      {
        "reviewerName": "Deborah Rodriguez",
        "date": "2025-01-13",
        "rating": 5,
        "comment": "Everything was perfect. Worth every penny."
      }]
    }
  ],
  "West Bengal": [
    {
      "id": "wes_city_01",
      "name": "Sovereign Suites",
      "rating": 5.0,
      "image": "/images/hotels/wes_img1.jpg",
      "pricePerNight": 43000,
      "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
      "star": 7,
      "city": "Kolkata",
      "reviews": [{
        "reviewerName": "Allison Hill",
        "date": "2024-12-03",
        "rating": 3,
        "comment": "Absolutely stunning hotel with exceptional service!"
      },
      {
        "reviewerName": "Brian Yang",
        "date": "2025-02-03",
        "rating": 4.5,
        "comment": "Everything was perfect. Worth every penny."
      }]
    },
    {
      "id": "wes_city_02",
      "name": "The Royal Orchid Court",
      "rating": 5.0,
      "image": "/images/hotels/wes_img2.jpg",
      "pricePerNight": 43000,
      "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
      "star": 7,
      "city": "Howrah",
      "reviews": [{
        "reviewerName": "Javier Johnson",
        "date": "2024-12-02",
        "rating": 4,
        "comment": "Very clean and well-maintained hotel."
      },
      {
        "reviewerName": "Lance Hoffman",
        "date": "2025-03-09",
        "rating": 3,
        "comment": "Peaceful environment and cozy rooms."
      }]
    },
    {
      "id": "wes_city_03",
      "name": "Lushstone Retreat",
      "rating": 4.5,
      "image": "/images/hotels/wes_img3.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Darjeeling",
      "reviews": [{
        "reviewerName": "Kimberly Robinson",
        "date": "2025-02-12",
        "rating": 3,
        "comment": "Excellent amenities and courteous staff."
      },
      {
        "reviewerName": "Sean Blake",
        "date": "2024-11-21",
        "rating": 5,
        "comment": "Luxurious experience but food could've been better."
      }]
    },
    {
      "id": "wes_city_04",
      "name": "The Velvet Grove",
      "rating": 4.5,
      "image": "/images/hotels/wes_img4.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Siliguri",
      "reviews": [{
        "reviewerName": "Gina Moore",
        "date": "2025-03-18",
        "rating": 3,
        "comment": "Impeccable service and a gorgeous view."
      },
      {
        "reviewerName": "Brandon Davis",
        "date": "2025-04-03",
        "rating": 4,
        "comment": "Everything was perfect. Worth every penny."
      }]
    },
    {
      "id": "wes_city_05",
      "name": "Coral Springs",
      "rating": 4.5,
      "image": "/images/hotels/wes_img5.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Kalimpong",
      "reviews": [{
        "reviewerName": "Dennis Williams",
        "date": "2025-01-18",
        "rating": 3,
        "comment": "Peaceful environment and cozy rooms."
      },
      {
        "reviewerName": "Valerie Gray",
        "date": "2025-02-05",
        "rating": 4,
        "comment": "Peaceful environment and cozy rooms."
      }]
    },
    {
      "id": "wes_city_06",
      "name": "Amethyst Grace",
      "rating": 4.5,
      "image": "/images/hotels/wes_img6.jpg",
      "pricePerNight": 25000,
      "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
      "star": 5,
      "city": "Kurseong",
      "reviews": [{
        "reviewerName": "Mark Mcclure",
        "date": "2024-12-30",
        "rating": 5,
        "comment": "Everything was perfect. Worth every penny."
      },
      {
        "reviewerName": "Michele Williams",
        "date": "2024-12-04",
        "rating": 5,
        "comment": "Excellent amenities and courteous staff."
      }]
    },
    {
      "id": "wes_city_07",
      "name": "Brookside Suites",
      "rating": 4.0,
      "image": "/images/hotels/wes_img7.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Mandarmoni",
      "reviews": [{
        "reviewerName": "Victoria Wyatt",
        "date": "2025-04-07",
        "rating": 4.5,
        "comment": "Absolutely stunning hotel with exceptional service!"
      },
      {
        "reviewerName": "Donald Reid",
        "date": "2024-12-30",
        "rating": 4,
        "comment": "Location was perfect for sightseeing."
      }]
    },
    {
      "id": "wes_city_08",
      "name": "Lakeside Court",
      "rating": 4.0,
      "image": "/images/hotels/wes_img8.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Durgapur",
      "reviews": [{
        "reviewerName": "Henry Santiago",
        "date": "2025-03-06",
        "rating": 4.5,
        "comment": "Service was slow but the room was nice."
      },
      {
        "reviewerName": "Maria Lynch",
        "date": "2024-11-23",
        "rating": 4,
        "comment": "Great location. Would visit again."
      }]
    },
    {
      "id": "wes_city_09",
      "name": "The Meadow Lodge",
      "rating": 4.0,
      "image": "/images/hotels/wes_img9.jpg",
      "pricePerNight": 12000,
      "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
      "star": 4,
      "city": "Kolkata",
      "reviews": [{
        "reviewerName": "Danielle Ford",
        "date": "2024-12-12",
        "rating": 4.5,
        "comment": "Nice place but rooms were a bit small."
      },
      {
        "reviewerName": "Margaret Hawkins DDS",
        "date": "2025-04-02",
        "rating": 3,
        "comment": "The ambiance is absolutely delightful."
      }]
    }
  ]
};

export default statesData;