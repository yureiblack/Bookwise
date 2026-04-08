const statesData = {
  "Assam": [
  {
    "id": "ass_city_01",
    "name": "Hotel Royale Pearl",
    "rating": 4.5,
    "image": "/images/hotels/ass_img1.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3200, "image": "/images/rooms/ass_city_01_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4800, "image": "/images/rooms/ass_city_01_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7500, "image": "/images/rooms/ass_city_01_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Guwahati",
    "reviews": [
      { "date": "2024-12-30", "rating": 5, "comment": "Everything was perfect. Worth every penny." },
      { "date": "2024-12-04", "rating": 5, "comment": "Excellent amenities and courteous staff." }
    ]
  },
  {
    "id": "ass_city_02",
    "name": "The Marigold Inn",
    "rating": 4.5,
    "image": "/images/hotels/ass_img2.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3000, "image": "/images/rooms/ass_city_02_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4500, "image": "/images/rooms/ass_city_02_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7000, "image": "/images/rooms/ass_city_02_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Guwahati",
    "reviews": [
      { "date": "2025-04-07", "rating": 4.5, "comment": "Absolutely stunning hotel with exceptional service!" },
      { "date": "2024-12-30", "rating": 4, "comment": "Location was perfect for sightseeing." }
    ]
  },
  {
    "id": "ass_city_03",
    "name": "Lakeside Haven",
    "rating": 4.0,
    "image": "/images/hotels/ass_img3.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2500, "image": "/images/rooms/ass_city_03_standard.jpg" },
      { "type": "DELUXE", "priceNight": 3800, "image": "/images/rooms/ass_city_03_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 5600, "image": "/images/rooms/ass_city_03_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Guwahati",
    "reviews": [
      { "date": "2025-03-06", "rating": 4.5, "comment": "Service was slow but the room was nice." },
      { "date": "2024-11-23", "rating": 4, "comment": "Great location. Would visit again." }
    ]
  },
  {
    "id": "ass_city_04",
    "name": "Meadowview Inn",
    "rating": 4.0,
    "image": "/images/hotels/ass_img4.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2300, "image": "/images/rooms/ass_city_04_standard.jpg" },
      { "type": "DELUXE", "priceNight": 3500, "image": "/images/rooms/ass_city_04_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 5200, "image": "/images/rooms/ass_city_04_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Kaziranga",
    "reviews": [
      { "date": "2024-12-12", "rating": 4.5, "comment": "Nice place but rooms were a bit small." },
      { "date": "2025-04-02", "rating": 3, "comment": "The ambiance is absolutely delightful." }
    ]
  },
  {
    "id": "ass_city_05",
    "name": "Prestige Heights",
    "rating": 4.5,
    "image": "/images/hotels/ass_img5.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3000, "image": "/images/rooms/ass_city_05_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4500, "image": "/images/rooms/ass_city_05_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7000, "image": "/images/rooms/ass_city_05_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Kaziranga",
    "reviews": [
      { "date": "2024-12-02", "rating": 4, "comment": "Very clean and well-maintained hotel." },
      { "date": "2025-03-09", "rating": 3, "comment": "Peaceful environment and cozy rooms." }
    ]
  },
  {
    "id": "ass_city_06",
    "name": "Sterling Vista",
    "rating": 4.5,
    "image": "/images/hotels/ass_img6.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3200, "image": "/images/rooms/ass_city_06_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4800, "image": "/images/rooms/ass_city_06_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7500, "image": "/images/rooms/ass_city_06_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Kaziranga",
    "reviews": [
      { "date": "2025-02-12", "rating": 3, "comment": "Excellent amenities and courteous staff." },
      { "date": "2024-11-21", "rating": 5, "comment": "Luxurious experience but food could've been better." }
    ]
  },
  {
    "id": "ass_city_07",
    "name": "Pine Hill Lodge",
    "rating": 4.0,
    "image": "/images/hotels/ass_img7.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2400, "image": "/images/rooms/ass_city_07_standard.jpg" },
      { "type": "DELUXE", "priceNight": 3600, "image": "/images/rooms/ass_city_07_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 5500, "image": "/images/rooms/ass_city_07_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Majuli",
    "reviews": [
      { "date": "2025-03-18", "rating": 3, "comment": "Impeccable service and a gorgeous view." },
      { "date": "2025-04-03", "rating": 4, "comment": "Everything was perfect. Worth every penny." }
    ]
  },
  {
    "id": "ass_city_08",
    "name": "The Green Terrace",
    "rating": 4.0,
    "image": "/images/hotels/ass_img8.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2300, "image": "/images/rooms/ass_city_08_standard.jpg" },
      { "type": "DELUXE", "priceNight": 3500, "image": "/images/rooms/ass_city_08_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 5200, "image": "/images/rooms/ass_city_08_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Majuli",
    "reviews": [
      { "date": "2025-01-18", "rating": 3, "comment": "Peaceful environment and cozy rooms." },
      { "date": "2025-02-05", "rating": 4, "comment": "Peaceful environment and cozy rooms." }
    ]
  }],
  "Goa": [
  {
    "id": "goa_city_01",
    "name": "Coral Cove",
    "rating": 4.5,
    "image": "/images/hotels/goa_img1.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3400, "image": "/images/rooms/goa_city_01_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5200, "image": "/images/rooms/goa_city_01_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 8100, "image": "/images/rooms/goa_city_01_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Panaji",
    "reviews": [
      { "date": "2024-11-13", "rating": 5, "comment": "Service was slow but the room was nice." },
      { "date": "2025-02-05", "rating": 3, "comment": "Great location. Would visit again." }
    ]
  },
  {
    "id": "goa_city_02",
    "name": "Regal Breeze",
    "rating": 4.5,
    "image": "/images/hotels/goa_img2.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3500, "image": "/images/rooms/goa_city_02_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5300, "image": "/images/rooms/goa_city_02_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 8300, "image": "/images/rooms/goa_city_02_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Panaji",
    "reviews": [
      { "date": "2025-02-20", "rating": 4.5, "comment": "Great location. Would visit again." },
      { "date": "2024-12-24", "rating": 5, "comment": "The ambiance is absolutely delightful." }
    ]
  },
  {
    "id": "goa_city_03",
    "name": "Clearview Lodge",
    "rating": 4.0,
    "image": "/images/hotels/goa_img3.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2600, "image": "/images/rooms/goa_city_03_standard.jpg" },
      { "type": "DELUXE", "priceNight": 3900, "image": "/images/rooms/goa_city_03_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 5900, "image": "/images/rooms/goa_city_03_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Panaji",
    "reviews": [
      { "date": "2024-12-01", "rating": 5, "comment": "Very clean and well-maintained hotel." },
      { "date": "2025-02-09", "rating": 4.5, "comment": "Very clean and well-maintained hotel." }
    ]
  },
  {
    "id": "goa_city_04",
    "name": "Hillside Retreat",
    "rating": 4.0,
    "image": "/images/hotels/goa_img4.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2550, "image": "/images/rooms/goa_city_04_standard.jpg" },
      { "type": "DELUXE", "priceNight": 3800, "image": "/images/rooms/goa_city_04_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 5700, "image": "/images/rooms/goa_city_04_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Panaji",
    "reviews": [
      { "date": "2024-11-26", "rating": 4, "comment": "Peaceful environment and cozy rooms." },
      { "date": "2025-01-08", "rating": 4.5, "comment": "Excellent amenities and courteous staff." }
    ]
  },
  {
    "id": "goa_city_05",
    "name": "The Zenith Royale",
    "rating": 5.0,
    "image": "/images/hotels/goa_img5.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4200, "image": "/images/rooms/goa_city_05_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6200, "image": "/images/rooms/goa_city_05_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9200, "image": "/images/rooms/goa_city_05_suite.jpg" }
    ],
    "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
    "star": 7,
    "city": "Baga",
    "reviews": [
      { "date": "2025-02-23", "rating": 5, "comment": "Excellent amenities and courteous staff." },
      { "date": "2025-04-06", "rating": 5, "comment": "Room service was prompt and friendly." }
    ]
  },
  {
    "id": "goa_city_06",
    "name": "The Sapphire Enclave",
    "rating": 5.0,
    "image": "/images/hotels/goa_img6.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4100, "image": "/images/rooms/goa_city_06_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6100, "image": "/images/rooms/goa_city_06_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9100, "image": "/images/rooms/goa_city_06_suite.jpg" }
    ],
    "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
    "star": 7,
    "city": "Baga",
    "reviews": [
      { "date": "2024-11-17", "rating": 4, "comment": "Very clean and well-maintained hotel." },
      { "date": "2025-04-18", "rating": 5, "comment": "Impeccable service and a gorgeous view." }
    ]
  },
  {
    "id": "goa_city_07",
    "name": "The Blossom Crown",
    "rating": 4.5,
    "image": "/images/hotels/goa_img7.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3300, "image": "/images/rooms/goa_city_07_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5000, "image": "/images/rooms/goa_city_07_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7600, "image": "/images/rooms/goa_city_07_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Baga",
    "reviews": [
      { "date": "2024-11-09", "rating": 3, "comment": "Nice place but rooms were a bit small." },
      { "date": "2024-11-08", "rating": 4, "comment": "Loved the pool and the food!" }
    ]
  },
  {
    "id": "goa_city_08",
    "name": "Harmony Luxe",
    "rating": 4.5,
    "image": "/images/hotels/goa_img8.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3400, "image": "/images/rooms/goa_city_08_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5200, "image": "/images/rooms/goa_city_08_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7900, "image": "/images/rooms/goa_city_08_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Anjuna", 
    "reviews": [
      { "date": "2025-01-23", "rating": 5, "comment": "Highly recommended for families." },
      { "date": "2024-10-21", "rating": 3, "comment": "The ambiance is absolutely delightful." }
    ]
  },
  {
    "id": "goa_city_09",
    "name": "Tranquil Palace",
    "rating": 4.5,
    "image": "/images/hotels/goa_img9.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3100, "image": "/images/rooms/goa_city_09_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4900, "image": "/images/rooms/goa_city_09_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7300, "image": "/images/rooms/goa_city_09_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Anjuna",
    "reviews": [
      { "date": "2025-01-23", "rating": 5, "comment": "My go-to hotel whenever I'm in town." },
      { "date": "2024-10-21", "rating": 3, "comment": "The ambiance is absolutely delightful." }
    ]
  },
  {
    "id": "goa_city_10",
    "name": "The Crown Orchid",
    "rating": 4.5,
    "image": "/images/hotels/goa_img10.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3300, "image": "/images/rooms/goa_city_10_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5100, "image": "/images/rooms/goa_city_10_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7600, "image": "/images/rooms/goa_city_10_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Anjuna",
    "reviews": [
      { "date": "2025-01-11", "rating": 5, "comment": "My go-to hotel whenever I'm in town." },
      { "date": "2025-02-26", "rating": 5, "comment": "Highly recommended for families." }
    ]
  },
  {
    "id": "goa_city_11",
    "name": "Birchwood Suites",
    "rating": 4.0,
    "image": "/images/hotels/goa_img11.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2500, "image": "/images/rooms/goa_city_11_standard.jpg" },
      { "type": "DELUXE", "priceNight": 3800, "image": "/images/rooms/goa_city_11_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 5800, "image": "/images/rooms/goa_city_11_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Calangute",
    "reviews": [
      { "date": "2024-11-01", "rating": 4.5, "comment": "Peaceful environment and cozy rooms." },
      { "date": "2024-11-01", "rating": 3, "comment": "Nice place but rooms were a bit small." }
    ]
  },
  {
    "id": "goa_city_12",
    "name": "Redwood Inn",
    "rating": 4.0,
    "image": "/images/hotels/goa_img12.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2600, "image": "/images/rooms/goa_city_12_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4000, "image": "/images/rooms/goa_city_12_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6000, "image": "/images/rooms/goa_city_12_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Calangute",
    "reviews": [
      { "date": "2025-02-01", "rating": 4.5, "comment": "The spa services were top-notch!" },
      { "date": "2024-11-26", "rating": 3, "comment": "Best hotel experience I've had in a while!" }
    ]
  },
  {
    "id": "goa_city_13",
    "name": "Cedar Lane Hotel",
    "rating": 4.0,
    "image": "/images/hotels/goa_img13.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2700, "image": "/images/rooms/goa_city_13_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4200, "image": "/images/rooms/goa_city_13_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6200, "image": "/images/rooms/goa_city_13_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Calangute",
    "reviews": [
      { "date": "2025-01-07", "rating": 5, "comment": "Loved the pool and the food!" },
      { "date": "2025-02-13", "rating": 5, "comment": "Absolutely stunning hotel with exceptional service!" }
    ]
  }],
  "Himachal Pradesh": [
  {
    "id": "him_city_01",
    "name": "The Urban Oasis",
    "rating": 4.5,
    "image": "/images/hotels/him_img1.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3000, "image": "/images/rooms/him_city_01_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4500, "image": "/images/rooms/him_city_01_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6500, "image": "/images/rooms/him_city_01_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Shimla",
    "reviews": [
      { "date": "2024-11-20", "rating": 4, "comment": "Excellent amenities and courteous staff." },
      { "date": "2024-11-29", "rating": 3, "comment": "Impeccable service and a gorgeous view." }
    ]
  },
  {
    "id": "him_city_02",
    "name": "Riviera Hilltop",
    "rating": 4.5,
    "image": "/images/hotels/him_img2.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3200, "image": "/images/rooms/him_city_02_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4800, "image": "/images/rooms/him_city_02_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7000, "image": "/images/rooms/him_city_02_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Shimla",
    "reviews": [
      { "date": "2024-12-08", "rating": 5, "comment": "Impeccable service and a gorgeous view." },
      { "date": "2025-01-11", "rating": 4, "comment": "Very clean and well-maintained hotel." }
    ]
  },
  {
    "id": "him_city_03",
    "name": "Garden Grove Hotel",
    "rating": 4.0,
    "image": "/images/hotels/him_img3.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2200, "image": "/images/rooms/him_city_03_standard.jpg" },
      { "type": "DELUXE", "priceNight": 3500, "image": "/images/rooms/him_city_03_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 5200, "image": "/images/rooms/him_city_03_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Shimla",
    "reviews": [
      { "date": "2024-11-15", "rating": 5, "comment": "Peaceful environment and cozy rooms." },
      { "date": "2025-02-05", "rating": 4, "comment": "Service was slow but the room was nice." }
    ]
  },
  {
    "id": "him_city_04",
    "name": "Blue Ridge Lodge",
    "rating": 4.0,
    "image": "/images/hotels/him_img4.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2400, "image": "/images/rooms/him_city_04_standard.jpg" },
      { "type": "DELUXE", "priceNight": 3700, "image": "/images/rooms/him_city_04_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 5400, "image": "/images/rooms/him_city_04_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Dharamshala",
    "reviews": [
      { "date": "2025-04-10", "rating": 5, "comment": "Great location. Would visit again." },
      { "date": "2024-12-31", "rating": 4, "comment": "Best hotel experience I've had in a while!" }
    ]
  },
  {
    "id": "him_city_05",
    "name": "The Luxe Lantern",
    "rating": 4.5,
    "image": "/images/hotels/him_img5.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4300, "image": "/images/rooms/him_city_05_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6100, "image": "/images/rooms/him_city_05_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 8400, "image": "/images/rooms/him_city_05_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Dharamshala",
    "reviews": [
      { "date": "2024-12-08", "rating": 5, "comment": "Impeccable service and a gorgeous view." },
      { "date": "2025-01-11", "rating": 4, "comment": "Very clean and well-maintained hotel." }
    ]
  },
  {
    "id": "him_city_06",
    "name": "Grand Sapphire Inn",
    "rating": 4.5,
    "image": "/images/hotels/him_img6.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4200, "image": "/images/rooms/him_city_06_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6000, "image": "/images/rooms/him_city_06_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 8300, "image": "/images/rooms/him_city_06_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Manali",
    "reviews": [
      { "date": "2024-11-15", "rating": 5, "comment": "Peaceful environment and cozy rooms." },
      { "date": "2025-02-05", "rating": 4, "comment": "Service was slow but the room was nice." }
    ]
  },
  {
    "id": "him_city_07",
    "name": "The Birchwood Court",
    "rating": 4.0,
    "image": "/images/hotels/him_img7.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3300, "image": "/images/rooms/him_city_07_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4900, "image": "/images/rooms/him_city_07_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6700, "image": "/images/rooms/him_city_07_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Manali",
    "reviews": [
      { "date": "2025-04-10", "rating": 5, "comment": "Great location. Would visit again." },
      { "date": "2024-12-31", "rating": 4, "comment": "Best hotel experience I've had in a while!" }
    ]
  },
  {
    "id": "him_city_08",
    "name": "Hillside Manor",
    "rating": 4.0,
    "image": "/images/hotels/him_img8.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3400, "image": "/images/rooms/him_city_08_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5000, "image": "/images/rooms/him_city_08_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6900, "image": "/images/rooms/him_city_08_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Manali",
    "reviews": [
      { "date": "2024-12-19", "rating": 5, "comment": "Room service was prompt and friendly." },
      { "date": "2024-10-28", "rating": 5, "comment": "Highly recommended for families." }
    ]
  }], 
  "Jammu & Kashmir": [
  {
    "id": "jam_city_01",
    "name": "The Imperial Crown",
    "rating": 5.0,
    "image": "/images/hotels/jam_img1.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3500, "image": "/images/rooms/jam_city_01_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5000, "image": "/images/rooms/jam_city_01_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 8000, "image": "/images/rooms/jam_city_01_suite.jpg" }
    ],
    "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
    "star": 7,
    "city": "Srinagar",
    "reviews": [
      { "date": "2025-04-10", "rating": 5, "comment": "Absolutely stunning hotel with exceptional service!" },
      { "date": "2025-03-15", "rating": 4, "comment": "Luxurious experience but food could've been better." }
    ]
  },
  {
    "id": "jam_city_02",
    "name": "Grand Eden",
    "rating": 4.5,
    "image": "/images/hotels/jam_img2.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3000, "image": "/images/rooms/jam_city_02_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4500, "image": "/images/rooms/jam_city_02_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7000, "image": "/images/rooms/jam_city_02_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Sonmarg",
    "reviews": [
      { "date": "2025-01-20", "rating": 5, "comment": "Impeccable service and a gorgeous view." },
      { "date": "2025-02-02", "rating": 3, "comment": "Nice place but rooms were a bit small." }
    ]
  },
  {
    "id": "jam_city_03",
    "name": "Azure Bay Hotel",
    "rating": 4.5,
    "image": "/images/hotels/jam_img3.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2800, "image": "/images/rooms/jam_city_03_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4200, "image": "/images/rooms/jam_city_03_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6500, "image": "/images/rooms/jam_city_03_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Pahalgam",
    "reviews": [
      { "date": "2025-04-01", "rating": 4, "comment": "Very clean and well-maintained hotel." },
      { "date": "2025-03-05", "rating": 5, "comment": "Loved the pool and the food!" }
    ]
  },
  {
    "id": "jam_city_04",
    "name": "The Golden Lotus",
    "rating": 4.5,
    "image": "/images/hotels/jam_img4.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3200, "image": "/images/rooms/jam_city_04_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4800, "image": "/images/rooms/jam_city_04_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7500, "image": "/images/rooms/jam_city_04_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Srinagar",
    "reviews": [
      { "date": "2025-02-25", "rating": 4, "comment": "Great location. Would visit again." },
      { "date": "2025-01-18", "rating": 5, "comment": "Everything was perfect. Worth every penny." }
    ]
  },
  {
    "id": "jam_city_05",
    "name": "The Oakwood Inn",
    "rating": 4.0,
    "image": "/images/hotels/jam_img5.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2200, "image": "/images/rooms/jam_city_05_standard.jpg" },
      { "type": "DELUXE", "priceNight": 3400, "image": "/images/rooms/jam_city_05_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 5200, "image": "/images/rooms/jam_city_05_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Sonmarg",
    "reviews": [
      { "date": "2025-03-22", "rating": 3, "comment": "Service was slow but the room was nice." },
      { "date": "2025-04-17", "rating": 5, "comment": "Best hotel experience I've had in a while!" }
    ]
  },
  {
    "id": "jam_city_06",
    "name": "Riverstone Hotel",
    "rating": 4.0,
    "image": "/images/hotels/jam_img6.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2100, "image": "/images/rooms/jam_city_06_standard.jpg" },
      { "type": "DELUXE", "priceNight": 3300, "image": "/images/rooms/jam_city_06_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 5000, "image": "/images/rooms/jam_city_06_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Gulmarg",
    "reviews": [
      { "date": "2024-12-03", "rating": 3, "comment": "Absolutely stunning hotel with exceptional service!" },
      { "date": "2025-02-03", "rating": 4.5, "comment": "Everything was perfect. Worth every penny." }
    ]
  },

  {
    "id": "jam_city_07",
    "name": "Snowpeak Retreat",
    "rating": 4.8,
    "image": "/images/hotels/jam_img7.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3600, "image": "/images/rooms/jam_city_07_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5400, "image": "/images/rooms/jam_city_07_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 8200, "image": "/images/rooms/jam_city_07_suite.jpg" }
    ],
    "amenities": ["Heated Rooms", "Mountain View", "Spa", "Fireplace"],
    "star": 5,
    "city": "Gulmarg",
    "reviews": [
      { "date": "2025-03-01", "rating": 5, "comment": "Breathtaking views and cozy rooms." },
      { "date": "2025-02-10", "rating": 4, "comment": "Perfect winter getaway." }
    ]
  },
  {
    "id": "jam_city_08",
    "name": "Dal Lake Residency",
    "rating": 4.7,
    "image": "/images/hotels/jam_img8.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3300, "image": "/images/rooms/jam_city_08_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5000, "image": "/images/rooms/jam_city_08_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7800, "image": "/images/rooms/jam_city_08_suite.jpg" }
    ],
    "amenities": ["Lake View", "Houseboat Dining", "WiFi", "Transport"],
    "star": 5,
    "city": "Srinagar",
    "reviews": [
      { "date": "2025-04-02", "rating": 5, "comment": "Magical stay near Dal Lake." },
      { "date": "2025-03-12", "rating": 4, "comment": "Great ambiance and peaceful vibe." }
    ]
  },
  {
    "id": "jam_city_09",
    "name": "Pinewood Escape",
    "rating": 4.3,
    "image": "/images/hotels/jam_img9.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2600, "image": "/images/rooms/jam_city_09_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4100, "image": "/images/rooms/jam_city_09_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6200, "image": "/images/rooms/jam_city_09_suite.jpg" }
    ],
    "amenities": ["Forest View", "WiFi", "Bonfire", "Parking"],
    "star": 4,
    "city": "Pahalgam",
    "reviews": [
      { "date": "2025-02-20", "rating": 4, "comment": "Quiet and relaxing stay." },
      { "date": "2025-01-15", "rating": 5, "comment": "Perfect for nature lovers." }
    ]
  },
  {
    "id": "jam_city_10",
    "name": "Himalayan Heights",
    "rating": 4.6,
    "image": "/images/hotels/jam_img10.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3000, "image": "/images/rooms/jam_city_10_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4700, "image": "/images/rooms/jam_city_10_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7400, "image": "/images/rooms/jam_city_10_suite.jpg" }
    ],
    "amenities": ["Mountain View", "Gym", "Restaurant", "Spa"],
    "star": 5,
    "city": "Pahalgam",
    "reviews": [
      { "date": "2025-03-18", "rating": 5, "comment": "Amazing hospitality and views." },
      { "date": "2025-02-28", "rating": 4, "comment": "Very comfortable stay." }
    ]
  },
  {
    "id": "jam_city_11",
    "name": "Valley Vista Inn",
    "rating": 4.2,
    "image": "/images/hotels/jam_img11.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2400, "image": "/images/rooms/jam_city_11_standard.jpg" },
      { "type": "DELUXE", "priceNight": 3900, "image": "/images/rooms/jam_city_11_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6100, "image": "/images/rooms/jam_city_11_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Parking", "Restaurant"],
    "star": 4,
    "city": "Gulmarg",
    "reviews": [
      { "date": "2025-01-30", "rating": 4, "comment": "Good value for money." },
      { "date": "2025-02-14", "rating": 4.5, "comment": "Clean and well maintained." }
    ]
  },
  {
    "id": "jam_city_12",
    "name": "Shikara Palace",
    "rating": 4.9,
    "image": "/images/hotels/jam_img12.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3700, "image": "/images/rooms/jam_city_12_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5600, "image": "/images/rooms/jam_city_12_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 8500, "image": "/images/rooms/jam_city_12_suite.jpg" }
    ],
    "amenities": ["Lake View", "Luxury Dining", "Boat Ride", "Spa"],
    "star": 5,
    "city": "Srinagar",
    "reviews": [
      { "date": "2025-04-05", "rating": 5, "comment": "One of the best stays ever!" },
      { "date": "2025-03-22", "rating": 5, "comment": "Truly luxurious experience." }
    ]
  }],
  "Karnataka": [
  {
    "id": "kar_city_01",
    "name": "The Grand Sovereign",
    "rating": 5.0,
    "image": "/images/hotels/kar_img1.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4300, "image": "/images/rooms/kar_city_01_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6300, "image": "/images/rooms/kar_city_01_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9300, "image": "/images/rooms/kar_city_01_suite.jpg" }
    ],
    "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
    "star": 7,
    "city": "Bengaluru",
    "reviews": [
      { "date": "2025-01-27", "rating": 4, "comment": "Service was slow but the room was nice." },
      { "date": "2025-04-21", "rating": 5, "comment": "Great location. Would visit again." }
    ]
  },
  {
    "id": "kar_city_02",
    "name": "Palais Étoile",
    "rating": 5.0,
    "image": "/images/hotels/kar_img2.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4200, "image": "/images/rooms/kar_city_02_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6200, "image": "/images/rooms/kar_city_02_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9200, "image": "/images/rooms/kar_city_02_suite.jpg" }
    ],
    "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
    "star": 7,
    "city": "Mysore",
    "reviews": [
      { "date": "2025-02-10", "rating": 4, "comment": "Excellent amenities and courteous staff." }
    ]
  },
  {
    "id": "kar_city_03",
    "name": "Palm Serenity",
    "rating": 4.5,
    "image": "/images/hotels/kar_img3.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3300, "image": "/images/rooms/kar_city_03_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5000, "image": "/images/rooms/kar_city_03_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7600, "image": "/images/rooms/kar_city_03_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Hampi",
    "reviews": [
      { "date": "2025-01-13", "rating": 5, "comment": "Everything was perfect. Worth every penny." }
    ]
  },
  {
    "id": "kar_city_04",
    "name": "Alpine Glade Inn",
    "rating": 4.5,
    "image": "/images/hotels/kar_img4.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3400, "image": "/images/rooms/kar_city_04_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5200, "image": "/images/rooms/kar_city_04_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7900, "image": "/images/rooms/kar_city_04_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Mysore",
    "reviews": [
      { "date": "2024-12-03", "rating": 3, "comment": "Absolutely stunning hotel with exceptional service!" },
      { "date": "2025-02-03", "rating": 4.5, "comment": "Everything was perfect. Worth every penny." }
    ]
  },
  {
    "id": "kar_city_05",
    "name": "The Horizon Crest",
    "rating": 4.5,
    "image": "/images/hotels/kar_img5.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3300, "image": "/images/rooms/kar_city_05_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5000, "image": "/images/rooms/kar_city_05_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7600, "image": "/images/rooms/kar_city_05_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Hampi",
    "reviews": [
      { "date": "2024-12-02", "rating": 4, "comment": "Very clean and well-maintained hotel." },
      { "date": "2025-03-09", "rating": 3, "comment": "Peaceful environment and cozy rooms." }
    ]
  },
  {
    "id": "kar_city_06",
    "name": "Bliss Stone Retreat",
    "rating": 4.5,
    "image": "/images/hotels/kar_img6.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3300, "image": "/images/rooms/kar_city_06_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5000, "image": "/images/rooms/kar_city_06_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7600, "image": "/images/rooms/kar_city_06_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Bengaluru",
    "reviews": [
      { "date": "2025-02-12", "rating": 3, "comment": "Excellent amenities and courteous staff." },
      { "date": "2024-11-21", "rating": 5, "comment": "Luxurious experience but food could've been better." }
    ]
  },
  {
    "id": "kar_city_07",
    "name": "Misty Pines Resort",
    "rating": 4.0,
    "image": "/images/hotels/kar_img7.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2600, "image": "/images/rooms/kar_city_07_standard.jpg" },
      { "type": "DELUXE", "priceNight": 3900, "image": "/images/rooms/kar_city_07_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 5900, "image": "/images/rooms/kar_city_07_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Coorg",
    "reviews": [
      { "date": "2025-03-18", "rating": 3, "comment": "Impeccable service and a gorgeous view." },
      { "date": "2025-04-03", "rating": 4, "comment": "Everything was perfect. Worth every penny." }
    ]
  },
  {
    "id": "kar_city_08",
    "name": "The Country Haven",
    "rating": 4.0,
    "image": "/images/hotels/kar_img8.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2500, "image": "/images/rooms/kar_city_08_standard.jpg" },
      { "type": "DELUXE", "priceNight": 3800, "image": "/images/rooms/kar_city_08_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 5700, "image": "/images/rooms/kar_city_08_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Mysore",
    "reviews": [
      { "date": "2025-01-18", "rating": 3, "comment": "Peaceful environment and cozy rooms." },
      { "date": "2025-02-05", "rating": 4, "comment": "Peaceful environment and cozy rooms." }
    ]
  },
  {
    "id": "kar_city_09",
    "name": "Riverbend Hotel",
    "rating": 4.0,
    "image": "/images/hotels/kar_img9.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2500, "image": "/images/rooms/kar_city_09_standard.jpg" },
      { "type": "DELUXE", "priceNight": 3800, "image": "/images/rooms/kar_city_09_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 5700, "image": "/images/rooms/kar_city_09_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Hampi",
    "reviews": [
      { "date": "2024-12-30", "rating": 5, "comment": "Everything was perfect. Worth every penny." },
      { "date": "2024-12-04", "rating": 5, "comment": "Excellent amenities and courteous staff." }
    ]
  },
  {
    "id": "kar_city_10",
    "name": "Elysian Grandeur",
    "rating": 5.0,
    "image": "/images/hotels/kar_img10.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3500, "image": "/images/rooms/kar_city_10_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5200, "image": "/images/rooms/kar_city_10_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 8000, "image": "/images/rooms/kar_city_10_suite.jpg" }
    ],
    "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
    "star": 7,
    "city": "Bengaluru",
    "reviews": [
      { "date": "2025-03-26", "rating": 3, "comment": "Room service was prompt and friendly." },
      { "date": "2025-02-08", "rating": 4.5, "comment": "My go-to hotel whenever I'm in town." }
    ]
  },
  {
    "id": "kar_city_11",
    "name": "Solace Suites",
    "rating": 4.5,
    "image": "/images/hotels/kar_img11.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3000, "image": "/images/rooms/kar_city_11_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4500, "image": "/images/rooms/kar_city_11_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7000, "image": "/images/rooms/kar_city_11_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Mysore",
    "reviews": [
      { "date": "2025-01-05", "rating": 4.5, "comment": "Luxurious experience but food could've been better." },
      { "date": "2024-11-17", "rating": 5, "comment": "Peaceful environment and cozy rooms." }
    ]
  },
  {
    "id": "kar_city_12",
    "name": "The Radiant Crest",
    "rating": 4.5,
    "image": "/images/hotels/kar_img12.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3100, "image": "/images/rooms/kar_city_12_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4700, "image": "/images/rooms/kar_city_12_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7200, "image": "/images/rooms/kar_city_12_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Bengaluru",
    "reviews": [
      { "date": "2025-02-11", "rating": 3, "comment": "The ambiance is absolutely delightful." },
      { "date": "2024-11-16", "rating": 3, "comment": "Peaceful environment and cozy rooms." }
    ]
  },
  {
    "id": "kar_city_13",
    "name": "Zenith Valley Resort",
    "rating": 4.5,
    "image": "/images/hotels/kar_img13.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3200, "image": "/images/rooms/kar_city_13_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4800, "image": "/images/rooms/kar_city_13_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7400, "image": "/images/rooms/kar_city_13_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Coorg",
    "reviews": [
      { "date": "2024-11-11", "rating": 4.5, "comment": "My go-to hotel whenever I'm in town." },
      { "date": "2025-02-13", "rating": 4.5, "comment": "Excellent amenities and courteous staff." }
    ]
  },
  {
    "id": "kar_city_14",
    "name": "Willow Creek Hotel",
    "rating": 4.0,
    "image": "/images/hotels/kar_img14.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2400, "image": "/images/rooms/kar_city_14_standard.jpg" },
      { "type": "DELUXE", "priceNight": 3600, "image": "/images/rooms/kar_city_14_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 5400, "image": "/images/rooms/kar_city_14_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Hampi",
    "reviews": [
      { "date": "2025-01-31", "rating": 4, "comment": "Impeccable service and a gorgeous view." },
      { "date": "2025-03-02", "rating": 3, "comment": "Everything was perfect. Worth every penny." }
    ]
  },
  {
    "id": "kar_city_15",
    "name": "Sunnybrook Inn",
    "rating": 4.0,
    "image": "/images/hotels/kar_img15.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2300, "image": "/images/rooms/kar_city_15_standard.jpg" },
      { "type": "DELUXE", "priceNight": 3500, "image": "/images/rooms/kar_city_15_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 5200, "image": "/images/rooms/kar_city_15_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Hampi",
    "reviews": [
      { "date": "2024-12-11", "rating": 4.5, "comment": "Impeccable service and a gorgeous view." },
      { "date": "2024-11-20", "rating": 4, "comment": "Nice place but rooms were a bit small." }
    ]
  },
  {
    "id": "kar_city_16",
    "name": "Celestia Majestic",
    "rating": 5.0,
    "image": "/images/hotels/kar_img16.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4200, "image": "/images/rooms/kar_city_16_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6200, "image": "/images/rooms/kar_city_16_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9200, "image": "/images/rooms/kar_city_16_suite.jpg" }
    ],
    "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
    "star": 7,
    "city": "Bengaluru",
    "reviews": [
      { "date": "2025-02-07", "rating": 4.5, "comment": "Highly recommended for families." },
      { "date": "2025-03-09", "rating": 4, "comment": "My go-to hotel whenever I'm in town." }
    ]
  },
  {
    "id": "kar_city_17",
    "name": "Nova Haven",
    "rating": 4.5,
    "image": "/images/hotels/kar_img17.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3400, "image": "/images/rooms/kar_city_17_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5200, "image": "/images/rooms/kar_city_17_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 8000, "image": "/images/rooms/kar_city_17_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Mysore",
    "reviews": [
      { "date": "2025-02-23", "rating": 3, "comment": "Best hotel experience I've had in a while!" },
      { "date": "2024-11-04", "rating": 4, "comment": "Very clean and well-maintained hotel." }
    ]
  },
  {
    "id": "kar_city_18",
    "name": "Emerald Ridge",
    "rating": 4.5,
    "image": "/images/hotels/kar_img18.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3500, "image": "/images/rooms/kar_city_18_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5400, "image": "/images/rooms/kar_city_18_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 8200, "image": "/images/rooms/kar_city_18_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Coorg",
    "reviews": [
      { "date": "2024-11-09", "rating": 4.5, "comment": "Loved the pool and the food!" },
      { "date": "2025-04-20", "rating": 3, "comment": "My go-to hotel whenever I'm in town." }
    ]
  },
  {
    "id": "kar_city_19",
    "name": "Hotel Aurora Bliss",
    "rating": 4.5,
    "image": "/images/hotels/kar_img19.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3300, "image": "/images/rooms/kar_city_19_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5100, "image": "/images/rooms/kar_city_19_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7800, "image": "/images/rooms/kar_city_19_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Coorg",
    "reviews": [
      { "date": "2024-12-15", "rating": 4.5, "comment": "Could improve the check-in process." },
      { "date": "2025-02-16", "rating": 3, "comment": "Nice place but rooms were a bit small." }
    ]
  },
  {
    "id": "kar_city_20",
    "name": "Maplewood Retreat",
    "rating": 4.0,
    "image": "/images/hotels/kar_img20.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2600, "image": "/images/rooms/kar_city_20_standard.jpg" },
      { "type": "DELUXE", "priceNight": 3900, "image": "/images/rooms/kar_city_20_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 5900, "image": "/images/rooms/kar_city_20_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Bengaluru",
    "reviews": [
      { "date": "2024-12-15", "rating": 4.5, "comment": "Could improve the check-in process." },
      { "date": "2025-02-16", "rating": 3, "comment": "Nice place but rooms were a bit small." }
    ]
  },
  {
    "id": "kar_city_21",
    "name": "Creekside Inn",
    "rating": 4.0,
    "image": "/images/hotels/kar_img21.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2700, "image": "/images/rooms/kar_city_21_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4000, "image": "/images/rooms/kar_city_21_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6100, "image": "/images/rooms/kar_city_21_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Coorg",
    "reviews": [
      { "date": "2025-02-05", "rating": 4.5, "comment": "Best hotel experience I've had in a while!" },
      { "date": "2024-11-16", "rating": 4, "comment": "Luxurious experience but food could've been better." }
    ]
  }],
  "Kerala": [
  {
    "id": "ker_city_01",
    "name": "The Golden Crest",
    "rating": 5.0,
    "image": "/images/hotels/ker_img1.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4400, "image": "/images/rooms/ker_city_01_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6500, "image": "/images/rooms/ker_city_01_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9600, "image": "/images/rooms/ker_city_01_suite.jpg" }
    ],
    "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
    "star": 7,
    "city": "Kochi",
    "reviews": [
      { "date": "2025-04-07", "rating": 4.5, "comment": "Absolutely stunning hotel with exceptional service!" },
      { "date": "2024-12-30", "rating": 4, "comment": "Location was perfect for sightseeing." }
    ]
  },
  {
    "id": "ker_city_02",
    "name": "The Marquee Luxe",
    "rating": 4.5,
    "image": "/images/hotels/ker_img2.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3400, "image": "/images/rooms/ker_city_02_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5200, "image": "/images/rooms/ker_city_02_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7900, "image": "/images/rooms/ker_city_02_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Munnar",
    "reviews": [
      { "date": "2025-03-06", "rating": 4.5, "comment": "Service was slow but the room was nice." },
      { "date": "2024-11-23", "rating": 4, "comment": "Great location. Would visit again." }
    ]
  },
  {
    "id": "ker_city_03",
    "name": "Starlight Haven",
    "rating": 4.5,
    "image": "/images/hotels/ker_img3.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3300, "image": "/images/rooms/ker_city_03_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5000, "image": "/images/rooms/ker_city_03_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7600, "image": "/images/rooms/ker_city_03_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Kochi",
    "reviews": [
      { "date": "2024-12-12", "rating": 4.5, "comment": "Nice place but rooms were a bit small." },
      { "date": "2025-04-02", "rating": 3, "comment": "The ambiance is absolutely delightful." }
    ]
  },
  {
    "id": "ker_city_04",
    "name": "The Ivory Sands",
    "rating": 4.5,
    "image": "/images/hotels/ker_img4.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3400, "image": "/images/rooms/ker_city_04_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5200, "image": "/images/rooms/ker_city_04_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7900, "image": "/images/rooms/ker_city_04_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Munnar",
    "reviews": [
      { "date": "2025-03-26", "rating": 3, "comment": "Room service was prompt and friendly." },
      { "date": "2025-02-08", "rating": 4.5, "comment": "My go-to hotel whenever I'm in town." }
    ]
  },
  {
    "id": "ker_city_05",
    "name": "Quiet Pines Lodge",
    "rating": 4.0,
    "image": "/images/hotels/ker_img5.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2600, "image": "/images/rooms/ker_city_05_standard.jpg" },
      { "type": "DELUXE", "priceNight": 3900, "image": "/images/rooms/ker_city_05_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 5900, "image": "/images/rooms/ker_city_05_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Kochi",
    "reviews": [
      { "date": "2025-01-05", "rating": 4.5, "comment": "Luxurious experience but food could've been better." },
      { "date": "2024-11-17", "rating": 5, "comment": "Peaceful environment and cozy rooms." }
    ]
  },
  {
    "id": "ker_city_06",
    "name": "Bluebell Inn",
    "rating": 4.0,
    "image": "/images/hotels/ker_img6.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2500, "image": "/images/rooms/ker_city_06_standard.jpg" },
      { "type": "DELUXE", "priceNight": 3800, "image": "/images/rooms/ker_city_06_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 5700, "image": "/images/rooms/ker_city_06_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Alappuzha",
    "reviews": [
      { "date": "2025-02-11", "rating": 3, "comment": "The ambiance is absolutely delightful." },
      { "date": "2024-11-16", "rating": 3, "comment": "Peaceful environment and cozy rooms." }
    ]
  },
  {
    "id": "ker_city_07",
    "name": "Lagoon Paradise",
    "rating": 4.8,
    "image": "/images/hotels/ker_img7.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3600, "image": "/images/rooms/ker_city_07_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5400, "image": "/images/rooms/ker_city_07_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 8200, "image": "/images/rooms/ker_city_07_suite.jpg" }
    ],
    "amenities": ["Backwater View", "Boat Ride", "Spa", "Restaurant"],
    "star": 5,
    "city": "Alappuzha",
    "reviews": [
      { "date": "2025-03-14", "rating": 5, "comment": "Amazing backwater experience and peaceful stay." },
      { "date": "2025-02-20", "rating": 4.5, "comment": "Beautiful location with great hospitality." }
    ]
  },
  {
    "id": "ker_city_08",
    "name": "Coconut Grove Resort",
    "rating": 4.6,
    "image": "/images/hotels/ker_img8.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3400, "image": "/images/rooms/ker_city_08_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5200, "image": "/images/rooms/ker_city_08_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7800, "image": "/images/rooms/ker_city_08_suite.jpg" }
    ],
    "amenities": ["Beach Access", "Pool", "WiFi", "Ayurvedic Spa"],
    "star": 5,
    "city": "Munnar",
    "reviews": [
      { "date": "2025-04-03", "rating": 4.5, "comment": "Perfect beachside getaway." },
      { "date": "2025-03-11", "rating": 4, "comment": "Relaxing stay with great views." }
    ]
  },
  {
    "id": "ker_city_09",
    "name": "Hilltop Serenity",
    "rating": 4.4,
    "image": "/images/hotels/ker_img9.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3100, "image": "/images/rooms/ker_city_09_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4800, "image": "/images/rooms/ker_city_09_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7200, "image": "/images/rooms/ker_city_09_suite.jpg" }
    ],
    "amenities": ["Mountain View", "Bonfire", "Restaurant", "Parking"],
    "star": 4,
    "city": "Munnar",
    "reviews": [
      { "date": "2025-02-28", "rating": 4.5, "comment": "Amazing views and cozy rooms." },
      { "date": "2025-01-19", "rating": 4, "comment": "Great for a peaceful retreat." }
    ]
  },
  {
    "id": "ker_city_10",
    "name": "Palm Shore Hotel",
    "rating": 4.3,
    "image": "/images/hotels/ker_img10.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3000, "image": "/images/rooms/ker_city_10_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4600, "image": "/images/rooms/ker_city_10_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7000, "image": "/images/rooms/ker_city_10_suite.jpg" }
    ],
    "amenities": ["Beach View", "WiFi", "Restaurant", "Transport"],
    "star": 4,
    "city": "Varkala",
    "reviews": [
      { "date": "2025-03-07", "rating": 4, "comment": "Nice beachfront property." },
      { "date": "2025-02-25", "rating": 4.5, "comment": "Comfortable stay and good service." }
    ]
  },
  {
    "id": "ker_city_11",
    "name": "Spice Garden Retreat",
    "rating": 4.7,
    "image": "/images/hotels/ker_img11.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3500, "image": "/images/rooms/ker_city_11_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5300, "image": "/images/rooms/ker_city_11_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 8000, "image": "/images/rooms/ker_city_11_suite.jpg" }
    ],
    "amenities": ["Spice Plantation Tour", "Spa", "Restaurant", "WiFi"],
    "star": 5,
    "city": "Varkala",
    "reviews": [
      { "date": "2025-04-01", "rating": 5, "comment": "Unique experience surrounded by nature." },
      { "date": "2025-03-18", "rating": 4.5, "comment": "Loved the peaceful environment." }
    ]
  },
  {
    "id": "ker_city_12",
    "name": "Harbor View Inn",
    "rating": 4.2,
    "image": "/images/hotels/ker_img12.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2800, "image": "/images/rooms/ker_city_12_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4300, "image": "/images/rooms/ker_city_12_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6500, "image": "/images/rooms/ker_city_12_suite.jpg" }
    ],
    "amenities": ["Harbor View", "WiFi", "Restaurant", "Parking"],
    "star": 4,
    "city": "Kochi",
    "reviews": [
      { "date": "2025-03-22", "rating": 4, "comment": "Good location near port area." },
      { "date": "2025-02-14", "rating": 4.5, "comment": "Nice rooms and friendly staff." }
    ]
  },
  {
    "id": "ker_city_13",
    "name": "Monsoon Breeze Resort",
    "rating": 4.6,
    "image": "/images/hotels/ker_img13.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3300, "image": "/images/rooms/ker_city_13_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5100, "image": "/images/rooms/ker_city_13_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7700, "image": "/images/rooms/ker_city_13_suite.jpg" }
    ],
    "amenities": ["Rainforest View", "Spa", "Restaurant", "WiFi"],
    "star": 5,
    "city": "Varkala",
    "reviews": [
      { "date": "2025-04-05", "rating": 4.5, "comment": "Refreshing stay surrounded by greenery." },
      { "date": "2025-03-21", "rating": 5, "comment": "Perfect monsoon getaway with amazing views." }
    ]
  },
  {
    "id": "ker_city_14",
    "name": "Backwater Bliss Inn",
    "rating": 4.4,
    "image": "/images/hotels/ker_img14.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3100, "image": "/images/rooms/ker_city_14_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4800, "image": "/images/rooms/ker_city_14_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7300, "image": "/images/rooms/ker_city_14_suite.jpg" }
    ],
    "amenities": ["Backwater View", "Boat Ride", "WiFi", "Restaurant"],
    "star": 4,
    "city": "Alappuzha",
    "reviews": [
      { "date": "2025-03-29", "rating": 4, "comment": "Lovely backwater experience and calm surroundings." },
      { "date": "2025-02-18", "rating": 4.5, "comment": "Great hospitality and scenic views." }
    ]
  }], 
  "Maharashtra": [
  {
    "id": "mah_city_01",
    "name": "Vellora Heights",
    "rating": 5.0,
    "image": "/images/hotels/mah_img1.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 5200, "image": "/images/rooms/mah_city_01_standard.jpg" },
      { "type": "DELUXE", "priceNight": 7800, "image": "/images/rooms/mah_city_01_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 11500, "image": "/images/rooms/mah_city_01_suite.jpg" }
    ],
    "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
    "star": 7,
    "city": "Mumbai",
    "reviews": [
      { "date": "2025-02-08", "rating": 4, "comment": "Loved the pool and the food!" },
      { "date": "2024-11-03", "rating": 5, "comment": "The ambiance is absolutely delightful." }
    ]
  },
  {
    "id": "mah_city_02",
    "name": "Astra Luxe",
    "rating": 5.0,
    "image": "/images/hotels/mah_img2.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 5000, "image": "/images/rooms/mah_city_02_standard.jpg" },
      { "type": "DELUXE", "priceNight": 7600, "image": "/images/rooms/mah_city_02_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 11200, "image": "/images/rooms/mah_city_02_suite.jpg" }
    ],
    "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
    "star": 7,
    "city": "Pune",
    "reviews": [
      { "date": "2025-02-26", "rating": 4.5, "comment": "Peaceful environment and cozy rooms." },
      { "date": "2025-04-08", "rating": 4, "comment": "The spa services were top-notch!" }
    ]
  },
  {
    "id": "mah_city_03",
    "name": "White Orchid Tower",
    "rating": 4.5,
    "image": "/images/hotels/mah_img3.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4200, "image": "/images/rooms/mah_city_03_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6400, "image": "/images/rooms/mah_city_03_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9600, "image": "/images/rooms/mah_city_03_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Pune",
    "reviews": [
      { "date": "2025-03-16", "rating": 3, "comment": "Everything was perfect. Worth every penny." },
      { "date": "2025-02-28", "rating": 3, "comment": "The spa services were top-notch!" }
    ]
  },
  {
    "id": "mah_city_04",
    "name": "The Crystal Path",
    "rating": 4.5,
    "image": "/images/hotels/mah_img4.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4300, "image": "/images/rooms/mah_city_04_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6600, "image": "/images/rooms/mah_city_04_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9800, "image": "/images/rooms/mah_city_04_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Mumbai",
    "reviews": [
      { "date": "2024-11-13", "rating": 5, "comment": "Service was slow but the room was nice." },
      { "date": "2025-02-05", "rating": 3, "comment": "Great location. Would visit again." }
    ]
  },
  {
    "id": "mah_city_05",
    "name": "The Azure Valley",
    "rating": 4.5,
    "image": "/images/hotels/mah_img5.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4400, "image": "/images/rooms/mah_city_05_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6800, "image": "/images/rooms/mah_city_05_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 10200, "image": "/images/rooms/mah_city_05_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Pune",
    "reviews": [
      { "date": "2025-02-20", "rating": 4.5, "comment": "Great location. Would visit again." },
      { "date": "2024-12-24", "rating": 5, "comment": "The ambiance is absolutely delightful." }
    ]
  },
  {
    "id": "mah_city_06",
    "name": "The Heritage Crest",
    "rating": 4.5,
    "image": "/images/hotels/mah_img6.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4600, "image": "/images/rooms/mah_city_06_standard.jpg" },
      { "type": "DELUXE", "priceNight": 7000, "image": "/images/rooms/mah_city_06_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 10500, "image": "/images/rooms/mah_city_06_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Mahabaleshwar",
    "reviews": [
      { "date": "2024-12-01", "rating": 5, "comment": "Very clean and well-maintained hotel." },
      { "date": "2025-02-09", "rating": 4.5, "comment": "Very clean and well-maintained hotel." }
    ]
  },
  {
    "id": "mah_city_07",
    "name": "Cedar Springs Inn",
    "rating": 4.0,
    "image": "/images/hotels/mah_img7.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3000, "image": "/images/rooms/mah_city_07_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4500, "image": "/images/rooms/mah_city_07_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6800, "image": "/images/rooms/mah_city_07_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Mumbai",
    "reviews": [
      { "date": "2024-11-26", "rating": 4, "comment": "Peaceful environment and cozy rooms." },
      { "date": "2025-01-08", "rating": 4.5, "comment": "Excellent amenities and courteous staff." }
    ]
  },
  {
    "id": "mah_city_08",
    "name": "Lakeside Manor",
    "rating": 4.0,
    "image": "/images/hotels/mah_img8.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3200, "image": "/images/rooms/mah_city_08_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4800, "image": "/images/rooms/mah_city_08_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7200, "image": "/images/rooms/mah_city_08_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Lonavala",
    "reviews": [
      { "date": "2025-02-23", "rating": 5, "comment": "Excellent amenities and courteous staff." },
      { "date": "2025-04-06", "rating": 5, "comment": "Room service was prompt and friendly." }
    ]
  },
  {
    "id": "mah_city_09",
    "name": "Golden Valley Inn",
    "rating": 4.0,
    "image": "/images/hotels/mah_img9.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3100, "image": "/images/rooms/mah_city_09_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4600, "image": "/images/rooms/mah_city_09_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7000, "image": "/images/rooms/mah_city_09_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Lonavala",
    "reviews": [
      { "date": "2024-11-17", "rating": 4, "comment": "Very clean and well-maintained hotel." },
      { "date": "2025-04-18", "rating": 5, "comment": "Impeccable service and a gorgeous view." }
    ]
  },
  {
    "id": "mah_city_10",
    "name": "Royale Opulence",
    "rating": 5.0,
    "image": "/images/hotels/mah_img10.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 8500, "image": "/images/rooms/mah_city_10_standard.jpg" },
      { "type": "DELUXE", "priceNight": 11500, "image": "/images/rooms/mah_city_10_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 16000, "image": "/images/rooms/mah_city_10_suite.jpg" }
    ],
    "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
    "star": 7,
    "city": "Mumbai",
    "reviews": [
      { "date": "2024-11-26", "rating": 4, "comment": "Peaceful environment and cozy rooms." },
      { "date": "2025-01-08", "rating": 4.5, "comment": "Excellent amenities and courteous staff." }
    ]
  },
  {
    "id": "mah_city_11",
    "name": "Crown Jewel Hotel",
    "rating": 5.0,
    "image": "/images/hotels/mah_img11.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 8200, "image": "/images/rooms/mah_city_11_standard.jpg" },
      { "type": "DELUXE", "priceNight": 11000, "image": "/images/rooms/mah_city_11_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 15500, "image": "/images/rooms/mah_city_11_suite.jpg" }
    ],
    "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
    "star": 7,
    "city": "Pune",
    "reviews": [
      { "date": "2025-02-23", "rating": 5, "comment": "Excellent amenities and courteous staff." },
      { "date": "2025-04-06", "rating": 5, "comment": "Room service was prompt and friendly." }
    ]
  },
  {
    "id": "mah_city_12",
    "name": "The Olive Courtyard",
    "rating": 4.5,
    "image": "/images/hotels/mah_img12.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 5200, "image": "/images/rooms/mah_city_12_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6900, "image": "/images/rooms/mah_city_12_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9200, "image": "/images/rooms/mah_city_12_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Pune",
    "reviews": [
      { "date": "2024-11-17", "rating": 4, "comment": "Very clean and well-maintained hotel." },
      { "date": "2025-04-18", "rating": 5, "comment": "Impeccable service and a gorgeous view." }
    ]
  },
  {
    "id": "mah_city_13",
    "name": "Hotel Euphoria",
    "rating": 4.5,
    "image": "/images/hotels/mah_img13.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 5000, "image": "/images/rooms/mah_city_13_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6700, "image": "/images/rooms/mah_city_13_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9000, "image": "/images/rooms/mah_city_13_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Mahabaleshwar",
    "reviews": [
      { "date": "2024-11-09", "rating": 3, "comment": "Nice place but rooms were a bit small." },
      { "date": "2024-11-08", "rating": 4, "comment": "Loved the pool and the food!" }
    ]
  },
  {
    "id": "mah_city_14",
    "name": "Flamingo Falls",
    "rating": 4.5,
    "image": "/images/hotels/mah_img14.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 5100, "image": "/images/rooms/mah_city_14_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6800, "image": "/images/rooms/mah_city_14_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9100, "image": "/images/rooms/mah_city_14_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Lonavala",
    "reviews": [
      { "date": "2025-01-23", "rating": 5, "comment": "My go-to hotel whenever I'm in town." },
      { "date": "2024-10-21", "rating": 3, "comment": "The ambiance is absolutely delightful." }
    ]
  },
  {
    "id": "mah_city_15",
    "name": "Cascade Royale",
    "rating": 4.5,
    "image": "/images/hotels/mah_img15.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 5300, "image": "/images/rooms/mah_city_15_standard.jpg" },
      { "type": "DELUXE", "priceNight": 7000, "image": "/images/rooms/mah_city_15_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9400, "image": "/images/rooms/mah_city_15_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Mumbai",
    "reviews": [
      { "date": "2025-01-11", "rating": 5, "comment": "My go-to hotel whenever I'm in town." },
      { "date": "2025-02-26", "rating": 5, "comment": "Highly recommended for families." }
    ]
  },
  {
    "id": "mah_city_16",
    "name": "Mountain Ridge Inn",
    "rating": 4.0,
    "image": "/images/hotels/mah_img16.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3200, "image": "/images/rooms/mah_city_16_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4300, "image": "/images/rooms/mah_city_16_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 5800, "image": "/images/rooms/mah_city_16_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Lonavala",
    "reviews": [
      { "date": "2024-11-01", "rating": 4.5, "comment": "Peaceful environment and cozy rooms." },
      { "date": "2024-11-01", "rating": 3, "comment": "Nice place but rooms were a bit small." }
    ]
  },
  {
    "id": "mah_city_17",
    "name": "Country Pines Hotel",
    "rating": 4.0,
    "image": "/images/hotels/mah_img17.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3300, "image": "/images/rooms/mah_city_17_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4400, "image": "/images/rooms/mah_city_17_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6000, "image": "/images/rooms/mah_city_17_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Mahabaleshwar",
    "reviews": [
      { "date": "2025-02-01", "rating": 4.5, "comment": "The spa services were top-notch!" },
      { "date": "2024-11-26", "rating": 3, "comment": "Best hotel experience I've had in a while!" }
    ]
  },
  {
    "id": "mah_city_18",
    "name": "The Redleaf Lodge",
    "rating": 4.0,
    "image": "/images/hotels/mah_img18.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3400, "image": "/images/rooms/mah_city_18_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4500, "image": "/images/rooms/mah_city_18_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6100, "image": "/images/rooms/mah_city_18_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Mumbai",
    "reviews": [
      { "date": "2025-01-07", "rating": 5, "comment": "Loved the pool and the food!" },
      { "date": "2025-02-13", "rating": 5, "comment": "Absolutely stunning hotel with exceptional service!" }
    ]
  },
  {
    "id": "mah_city_19",
    "name": "Aurora Heights",
    "rating": 5.0,
    "image": "/images/hotels/mah_img19.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3600, "image": "/images/rooms/mah_city_19_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5400, "image": "/images/rooms/mah_city_19_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 8200, "image": "/images/rooms/mah_city_19_suite.jpg" }
    ],
    "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
    "star": 7,
    "city": "Mumbai",
    "reviews": [
      { "date": "2024-12-11", "rating": 5, "comment": "Service was slow but the room was nice." },
      { "date": "2024-11-10", "rating": 5, "comment": "Room service was prompt and friendly." }
    ]
  },
  {
    "id": "mah_city_20",
    "name": "The Velvet Leaf",
    "rating": 4.5,
    "image": "/images/hotels/mah_img20.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3100, "image": "/images/rooms/mah_city_20_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4700, "image": "/images/rooms/mah_city_20_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7200, "image": "/images/rooms/mah_city_20_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Pune",
    "reviews": [
      { "date": "2025-02-16", "rating": 4, "comment": "Room service was prompt and friendly." },
      { "date": "2025-03-21", "rating": 4.5, "comment": "Great location. Would visit again." }
    ]
  },
  {
    "id": "mah_city_21",
    "name": "Crystal Mirage",
    "rating": 4.5,
    "image": "/images/hotels/mah_img21.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3200, "image": "/images/rooms/mah_city_21_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4800, "image": "/images/rooms/mah_city_21_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7400, "image": "/images/rooms/mah_city_21_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Pune",
    "reviews": [
      { "date": "2025-01-23", "rating": 4.5, "comment": "Impeccable service and a gorgeous view." },
      { "date": "2025-03-31", "rating": 4, "comment": "Peaceful environment and cozy rooms." }
    ]
  },
  {
    "id": "mah_city_22",
    "name": "Opal Garden Hotel",
    "rating": 4.5,
    "image": "/images/hotels/mah_img22.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3150, "image": "/images/rooms/mah_city_22_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4750, "image": "/images/rooms/mah_city_22_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7300, "image": "/images/rooms/mah_city_22_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Mahabaleshwar",
    "reviews": [
      { "date": "2025-02-08", "rating": 4, "comment": "Loved the pool and the food!" },
      { "date": "2024-11-03", "rating": 5, "comment": "The ambiance is absolutely delightful." }
    ]
  },
  {
    "id": "mah_city_23",
    "name": "Valley Vista Resort",
    "rating": 4.0,
    "image": "/images/hotels/mah_img23.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2500, "image": "/images/rooms/mah_city_23_standard.jpg" },
      { "type": "DELUXE", "priceNight": 3700, "image": "/images/rooms/mah_city_23_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 5600, "image": "/images/rooms/mah_city_23_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Lonavala",
    "reviews": [
      { "date": "2025-02-26", "rating": 4.5, "comment": "Peaceful environment and cozy rooms." },
      { "date": "2025-04-08", "rating": 4, "comment": "The spa services were top-notch!" }
    ]
  },
  {
    "id": "mah_city_24",
    "name": "The Orchard House",
    "rating": 4.0,
    "image": "/images/hotels/mah_img24.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2400, "image": "/images/rooms/mah_city_24_standard.jpg" },
      { "type": "DELUXE", "priceNight": 3600, "image": "/images/rooms/mah_city_24_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 5400, "image": "/images/rooms/mah_city_24_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Mahabaleshwar",
    "reviews": [
      { "date": "2025-03-16", "rating": 3, "comment": "Everything was perfect. Worth every penny." },
      { "date": "2025-02-28", "rating": 3, "comment": "The spa services were top-notch!" }
    ]
  }], 
  "Meghalaya": [
  {
    "id": "meg_city_01",
    "name": "Sapphire Echo Hotel",
    "rating": 4.5,
    "image": "/images/hotels/meg_img1.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4000, "image": "/images/rooms/meg_city_01_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6200, "image": "/images/rooms/meg_city_01_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9200, "image": "/images/rooms/meg_city_01_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Shillong",
    "reviews": [
      { "date": "2025-02-01", "rating": 4.5, "comment": "The spa services were top-notch!" },
      { "date": "2024-11-26", "rating": 3, "comment": "Best hotel experience I've had in a while!" }
    ]
  },
  {
    "id": "meg_city_02",
    "name": "The Regal Fern",
    "rating": 4.5,
    "image": "/images/hotels/meg_img2.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4200, "image": "/images/rooms/meg_city_02_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6500, "image": "/images/rooms/meg_city_02_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9500, "image": "/images/rooms/meg_city_02_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Cherrapunji",
    "reviews": [
      { "date": "2025-01-07", "rating": 5, "comment": "Loved the pool and the food!" },
      { "date": "2025-02-13", "rating": 5, "comment": "Absolutely stunning hotel with exceptional service!" }
    ]
  },
  {
    "id": "meg_city_03",
    "name": "Mountain View Lodge",
    "rating": 4.0,
    "image": "/images/hotels/meg_img3.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2800, "image": "/images/rooms/meg_city_03_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4100, "image": "/images/rooms/meg_city_03_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6300, "image": "/images/rooms/meg_city_03_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Shillong",
    "reviews": [
      { "date": "2025-02-07", "rating": 4.5, "comment": "Highly recommended for families." },
      { "date": "2025-03-09", "rating": 4, "comment": "Highly recommended for families." }
    ]
  },
  {
    "id": "meg_city_04",
    "name": "Sunset Ridge Inn",
    "rating": 4.0,
    "image": "/images/hotels/meg_img4.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2600, "image": "/images/rooms/meg_city_04_standard.jpg" },
      { "type": "DELUXE", "priceNight": 3900, "image": "/images/rooms/meg_city_04_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6000, "image": "/images/rooms/meg_city_04_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Dawki",
    "reviews": [
      { "date": "2025-02-23", "rating": 3, "comment": "Best hotel experience I've had in a while!" },
      { "date": "2024-11-04", "rating": 4, "comment": "Very clean and well-maintained hotel." }
    ]
  },
  {
    "id": "meg_city_05",
    "name": "Edenstone Heights",
    "rating": 4.5,
    "image": "/images/hotels/meg_img5.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4200, "image": "/images/rooms/meg_city_05_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6400, "image": "/images/rooms/meg_city_05_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9600, "image": "/images/rooms/meg_city_05_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Dawki",
    "reviews": [
      { "date": "2024-11-09", "rating": 3, "comment": "Nice place but rooms were a bit small." },
      { "date": "2024-11-08", "rating": 4, "comment": "Loved the pool and the food!" }
    ]
  },
  {
    "id": "meg_city_06",
    "name": "Lotus Hilltop Resort",
    "rating": 4.5,
    "image": "/images/hotels/meg_img6.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4300, "image": "/images/rooms/meg_city_06_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6600, "image": "/images/rooms/meg_city_06_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9900, "image": "/images/rooms/meg_city_06_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Cherrapunji",
    "reviews": [
      { "date": "2025-01-23", "rating": 5, "comment": "My go-to hotel whenever I'm in town." },
      { "date": "2024-10-21", "rating": 3, "comment": "The ambiance is absolutely delightful." }
    ]
  },
  {
    "id": "meg_city_07",
    "name": "The Country Garden",
    "rating": 4.0,
    "image": "/images/hotels/meg_img7.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3000, "image": "/images/rooms/meg_city_07_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4500, "image": "/images/rooms/meg_city_07_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6800, "image": "/images/rooms/meg_city_07_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Shillong",
    "reviews": [
      { "date": "2025-01-11", "rating": 5, "comment": "My go-to hotel whenever I'm in town." },
      { "date": "2025-02-26", "rating": 5, "comment": "Highly recommended for families." }
    ]
  },
  {
    "id": "meg_city_08",
    "name": "Oak Ridge Hotel",
    "rating": 4.0,
    "image": "/images/hotels/meg_img8.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2900, "image": "/images/rooms/meg_city_08_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4300, "image": "/images/rooms/meg_city_08_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6500, "image": "/images/rooms/meg_city_08_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Cherrapunji",
    "reviews": [
      { "date": "2024-11-01", "rating": 4.5, "comment": "Peaceful environment and cozy rooms." },
      { "date": "2024-11-01", "rating": 3, "comment": "Nice place but rooms were a bit small." }
    ]
  }],
  "Rajasthan": [
  {
    "id": "raj_city_01",
    "name": "The Maharaja Retreat",
    "rating": 5.0,
    "image": "/images/hotels/raj_img1.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 9800, "image": "/images/rooms/raj_city_01_standard.jpg" },
      { "type": "DELUXE", "priceNight": 13800, "image": "/images/rooms/raj_city_01_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 19500, "image": "/images/rooms/raj_city_01_suite.jpg" }
    ],
    "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
    "star": 7,
    "city": "Udaipur",
    "reviews": [
      { "date": "2024-12-30", "rating": 5, "comment": "Everything was perfect. Worth every penny." },
      { "date": "2024-12-04", "rating": 5, "comment": "Excellent amenities and courteous staff." }
    ]
  },
  {
    "id": "raj_city_02",
    "name": "Elara Bliss",
    "rating": 4.5,
    "image": "/images/hotels/raj_img2.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4800, "image": "/images/rooms/raj_city_02_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6900, "image": "/images/rooms/raj_city_02_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9400, "image": "/images/rooms/raj_city_02_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Jaipur",
    "reviews": [
      { "date": "2025-04-07", "rating": 4.5, "comment": "Absolutely stunning hotel with exceptional service!" },
      { "date": "2024-12-30", "rating": 4, "comment": "Location was perfect for sightseeing." }
    ]
  },
  {
    "id": "raj_city_03",
    "name": "Paradise Terrace",
    "rating": 4.5,
    "image": "/images/hotels/raj_img3.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4700, "image": "/images/rooms/raj_city_03_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6800, "image": "/images/rooms/raj_city_03_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9200, "image": "/images/rooms/raj_city_03_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Jaisalmer",
    "reviews": [
      { "date": "2025-03-06", "rating": 4.5, "comment": "Service was slow but the room was nice." },
      { "date": "2024-11-23", "rating": 4, "comment": "Great location. Would visit again." }
    ]
  },
  {
    "id": "raj_city_04",
    "name": "Whispering Willows",
    "rating": 4.5,
    "image": "/images/hotels/raj_img4.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4600, "image": "/images/rooms/raj_city_04_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6700, "image": "/images/rooms/raj_city_04_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9000, "image": "/images/rooms/raj_city_04_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Jodhpur",
    "reviews": [
      { "date": "2024-12-12", "rating": 4.5, "comment": "Nice place but rooms were a bit small." },
      { "date": "2025-04-02", "rating": 3, "comment": "The ambiance is absolutely delightful." }
    ]
  },
  {
    "id": "raj_city_05",
    "name": "Evergreen Hills Hotel",
    "rating": 4.0,
    "image": "/images/hotels/raj_img5.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3400, "image": "/images/rooms/raj_city_05_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4900, "image": "/images/rooms/raj_city_05_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6700, "image": "/images/rooms/raj_city_05_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Jodhpur",
    "reviews": [
      { "date": "2025-03-26", "rating": 3, "comment": "Room service was prompt and friendly." },
      { "date": "2025-02-08", "rating": 4.5, "comment": "My go-to hotel whenever I'm in town." }
    ]
  },
  {
    "id": "raj_city_06",
    "name": "Pine Valley Resort",
    "rating": 4.0,
    "image": "/images/hotels/raj_img6.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3500, "image": "/images/rooms/raj_city_06_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5100, "image": "/images/rooms/raj_city_06_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6900, "image": "/images/rooms/raj_city_06_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Jaipur",
    "reviews": [
      { "date": "2025-01-05", "rating": 4.5, "comment": "Luxurious experience but food could've been better." },
      { "date": "2024-11-17", "rating": 5, "comment": "Peaceful environment and cozy rooms." }
    ]
  },
  {
    "id": "raj_city_07",
    "name": "Luma Grand",
    "rating": 5.0,
    "image": "/images/hotels/raj_img7.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4500, "image": "/images/rooms/raj_city_07_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6800, "image": "/images/rooms/raj_city_07_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9900, "image": "/images/rooms/raj_city_07_suite.jpg" }
    ],
    "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
    "star": 7,
    "city": "Jaipur",
    "reviews": [
      { "date": "2024-11-11", "rating": 4.5, "comment": "My go-to hotel whenever I'm in town." },
      { "date": "2025-02-13", "rating": 4.5, "comment": "Excellent amenities and courteous staff." }
    ]
  },
  {
    "id": "raj_city_08",
    "name": "Moonlight Grand",
    "rating": 4.5,
    "image": "/images/hotels/raj_img8.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3400, "image": "/images/rooms/raj_city_08_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5200, "image": "/images/rooms/raj_city_08_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7800, "image": "/images/rooms/raj_city_08_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Udaipur",
    "reviews": [
      { "date": "2025-01-31", "rating": 4, "comment": "Impeccable service and a gorgeous view." },
      { "date": "2025-03-02", "rating": 3, "comment": "Everything was perfect. Worth every penny." }
    ]
  },
  {
    "id": "raj_city_09",
    "name": "Vantage Elan",
    "rating": 4.5,
    "image": "/images/hotels/raj_img9.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3300, "image": "/images/rooms/raj_city_09_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5000, "image": "/images/rooms/raj_city_09_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7600, "image": "/images/rooms/raj_city_09_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Jodhpur",
    "reviews": [
      { "date": "2024-12-11", "rating": 4.5, "comment": "Impeccable service and a gorgeous view." },
      { "date": "2024-11-20", "rating": 4, "comment": "Nice place but rooms were a bit small." }
    ]
  },
  {
    "id": "raj_city_10",
    "name": "The Opaline Grove",
    "rating": 4.5,
    "image": "/images/hotels/raj_img10.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3500, "image": "/images/rooms/raj_city_10_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5300, "image": "/images/rooms/raj_city_10_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 8000, "image": "/images/rooms/raj_city_10_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Jaisalmer",
    "reviews": [
      { "date": "2024-12-11", "rating": 5, "comment": "Service was slow but the room was nice." },
      { "date": "2024-11-10", "rating": 5, "comment": "Room service was prompt and friendly." }
    ]
  },
  {
    "id": "raj_city_11",
    "name": "Springdale Suites",
    "rating": 4.0,
    "image": "/images/hotels/raj_img11.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2600, "image": "/images/rooms/raj_city_11_standard.jpg" },
      { "type": "DELUXE", "priceNight": 3900, "image": "/images/rooms/raj_city_11_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 5900, "image": "/images/rooms/raj_city_11_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Jaisalmer",
    "reviews": [
      { "date": "2025-02-16", "rating": 4, "comment": "Room service was prompt and friendly." },
      { "date": "2025-03-21", "rating": 4.5, "comment": "Great location. Would visit again." }
    ]
  },
  {
    "id": "raj_city_12",
    "name": "Birch Grove Hotel",
    "rating": 4.0,
    "image": "/images/hotels/raj_img12.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2700, "image": "/images/rooms/raj_city_12_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4000, "image": "/images/rooms/raj_city_12_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6100, "image": "/images/rooms/raj_city_12_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Bikaner",
    "reviews": [
      { "date": "2025-01-23", "rating": 4.5, "comment": "Impeccable service and a gorgeous view." },
      { "date": "2025-03-31", "rating": 4, "comment": "Peaceful environment and cozy rooms." }
    ]
  }],
  "Sikkim": [
  {
    "id": "sik_city_01",
    "name": "Regal Horizon",
    "rating": 4.5,
    "image": "/images/hotels/sik_img1.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 5200, "image": "/images/rooms/sik_city_01_standard.jpg" },
      { "type": "DELUXE", "priceNight": 7400, "image": "/images/rooms/sik_city_01_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9800, "image": "/images/rooms/sik_city_01_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Gangtok",
    "reviews": [
      { "date": "2025-02-11", "rating": 3, "comment": "The ambiance is absolutely delightful." },
      { "date": "2024-11-16", "rating": 3, "comment": "Peaceful environment and cozy rooms." }
    ]
  },
  {
    "id": "sik_city_02",
    "name": "Royal Palm Grove",
    "rating": 4.5,
    "image": "/images/hotels/sik_img2.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 5000, "image": "/images/rooms/sik_city_02_standard.jpg" },
      { "type": "DELUXE", "priceNight": 7200, "image": "/images/rooms/sik_city_02_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9600, "image": "/images/rooms/sik_city_02_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Pelling",
    "reviews": [
      { "date": "2024-11-11", "rating": 4.5, "comment": "My go-to hotel whenever I'm in town." },
      { "date": "2025-02-13", "rating": 4.5, "comment": "Excellent amenities and courteous staff." }
    ]
  },
  {
    "id": "sik_city_03",
    "name": "Silver Meadows Hotel",
    "rating": 4.0,
    "image": "/images/hotels/sik_img3.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3400, "image": "/images/rooms/sik_city_03_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4900, "image": "/images/rooms/sik_city_03_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6700, "image": "/images/rooms/sik_city_03_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Lachung",
    "reviews": [
      { "date": "2025-01-31", "rating": 4, "comment": "Impeccable service and a gorgeous view." },
      { "date": "2025-03-02", "rating": 3, "comment": "Everything was perfect. Worth every penny." }
    ]
  },
  {
    "id": "sik_city_04",
    "name": "Blue Lake Inn",
    "rating": 4.0,
    "image": "/images/hotels/sik_img4.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3600, "image": "/images/rooms/sik_city_04_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5200, "image": "/images/rooms/sik_city_04_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7000, "image": "/images/rooms/sik_city_04_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Gangtok",
    "reviews": [
      { "date": "2024-12-11", "rating": 4.5, "comment": "Impeccable service and a gorgeous view." },
      { "date": "2024-11-20", "rating": 4, "comment": "Nice place but rooms were a bit small." }
    ]
  },
  {
    "id": "sik_city_05",
    "name": "Verdant Vibe Hotel",
    "rating": 4.5,
    "image": "/images/hotels/sik_img5.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4200, "image": "/images/rooms/sik_city_05_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6000, "image": "/images/rooms/sik_city_05_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 8200, "image": "/images/rooms/sik_city_05_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Gangtok",
    "reviews": [
      { "date": "2024-11-09", "rating": 4.5, "comment": "Loved the pool and the food!" },
      { "date": "2025-04-20", "rating": 3, "comment": "My go-to hotel whenever I'm in town." }
    ]
  },
  {
    "id": "sik_city_06",
    "name": "Twilight Dunes",
    "rating": 4.5,
    "image": "/images/hotels/sik_img6.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4100, "image": "/images/rooms/sik_city_06_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5900, "image": "/images/rooms/sik_city_06_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 8000, "image": "/images/rooms/sik_city_06_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Pelling",
    "reviews": [
      { "date": "2024-12-15", "rating": 4.5, "comment": "Could improve the check-in process." },
      { "date": "2025-02-16", "rating": 3, "comment": "Nice place but rooms were a bit small." }
    ]
  },
  {
    "id": "sik_city_07",
    "name": "Meadowbrook Lodge",
    "rating": 4.0,
    "image": "/images/hotels/sik_img7.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3200, "image": "/images/rooms/sik_city_07_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4800, "image": "/images/rooms/sik_city_07_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6500, "image": "/images/rooms/sik_city_07_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Lachung",
    "reviews": [
      { "date": "2025-02-05", "rating": 4.5, "comment": "Best hotel experience I've had in a while!" },
      { "date": "2024-11-16", "rating": 4, "comment": "Luxurious experience but food could've been better." }
    ]
  },
  {
    "id": "sik_city_08",
    "name": "Woodland Heights",
    "rating": 4.0,
    "image": "/images/hotels/sik_img8.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3100, "image": "/images/rooms/sik_city_08_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4600, "image": "/images/rooms/sik_city_08_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6200, "image": "/images/rooms/sik_city_08_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Pelling",
    "reviews": [
      { "date": "2024-11-20", "rating": 4, "comment": "Excellent amenities and courteous staff." },
      { "date": "2024-11-29", "rating": 3, "comment": "Impeccable service and a gorgeous view." }
    ]
  }],
  "Tamil Nadu": [
  {
    "id": "tam_city_01",
    "name": "Infinity Élite",
    "rating": 5.0,
    "image": "/images/hotels/tam_img1.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 8500, "image": "/images/rooms/tam_city_01_standard.jpg" },
      { "type": "DELUXE", "priceNight": 11500, "image": "/images/rooms/tam_city_01_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 16000, "image": "/images/rooms/tam_city_01_suite.jpg" }
    ],
    "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
    "star": 7,
    "city": "Chennai",
    "reviews": [
      { "date": "2024-12-11", "rating": 5, "comment": "Service was slow but the room was nice." },
      { "date": "2024-11-10", "rating": 5, "comment": "Room service was prompt and friendly." }
    ]
  },
  {
    "id": "tam_city_02",
    "name": "Crystal Arcadia",
    "rating": 5.0,
    "image": "/images/hotels/tam_img2.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 8200, "image": "/images/rooms/tam_city_02_standard.jpg" },
      { "type": "DELUXE", "priceNight": 11000, "image": "/images/rooms/tam_city_02_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 15500, "image": "/images/rooms/tam_city_02_suite.jpg" }
    ],
    "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
    "star": 7,
    "city": "Rameswaram",
    "reviews": [
      { "date": "2025-02-16", "rating": 4, "comment": "Room service was prompt and friendly." },
      { "date": "2025-03-21", "rating": 4.5, "comment": "Great location. Would visit again." }
    ]
  },
  {
    "id": "tam_city_03",
    "name": "Ocean Crest Elite",
    "rating": 4.5,
    "image": "/images/hotels/tam_img3.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 5200, "image": "/images/rooms/tam_city_03_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6900, "image": "/images/rooms/tam_city_03_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9200, "image": "/images/rooms/tam_city_03_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Rameswaram",
    "reviews": [
      { "date": "2025-01-23", "rating": 4.5, "comment": "Impeccable service and a gorgeous view." },
      { "date": "2025-03-31", "rating": 4, "comment": "Peaceful environment and cozy rooms." }
    ]
  },
  {
    "id": "tam_city_04",
    "name": "Galaxy Palace",
    "rating": 4.5,
    "image": "/images/hotels/tam_img4.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 5000, "image": "/images/rooms/tam_city_04_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6700, "image": "/images/rooms/tam_city_04_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9000, "image": "/images/rooms/tam_city_04_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Madurai",
    "reviews": [
      { "date": "2025-02-08", "rating": 4, "comment": "Loved the pool and the food!" },
      { "date": "2024-11-03", "rating": 5, "comment": "The ambiance is absolutely delightful." }
    ]
  },
  {
    "id": "tam_city_05",
    "name": "Tranquilla Heights",
    "rating": 4.5,
    "image": "/images/hotels/tam_img5.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 5100, "image": "/images/rooms/tam_city_05_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6800, "image": "/images/rooms/tam_city_05_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9100, "image": "/images/rooms/tam_city_05_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Madurai",
    "reviews": [
      { "date": "2025-02-26", "rating": 4.5, "comment": "Peaceful environment and cozy rooms." },
      { "date": "2025-04-08", "rating": 4, "comment": "The spa services were top-notch!" }
    ]
  },
  {
    "id": "tam_city_06",
    "name": "Sapphire Sands",
    "rating": 4.5,
    "image": "/images/hotels/tam_img6.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4800, "image": "/images/rooms/tam_city_06_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6500, "image": "/images/rooms/tam_city_06_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 8800, "image": "/images/rooms/tam_city_06_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Ooty",
    "reviews": [
      { "date": "2025-03-16", "rating": 3, "comment": "Everything was perfect. Worth every penny." },
      { "date": "2025-02-28", "rating": 3, "comment": "The spa services were top-notch!" }
    ]
  },
  {
    "id": "tam_city_07",
    "name": "The Valley Inn",
    "rating": 4.0,
    "image": "/images/hotels/tam_img7.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3200, "image": "/images/rooms/tam_city_07_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4300, "image": "/images/rooms/tam_city_07_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 5800, "image": "/images/rooms/tam_city_07_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Ooty",
    "reviews": [
      { "date": "2024-11-13", "rating": 5, "comment": "Service was slow but the room was nice." },
      { "date": "2025-02-05", "rating": 3, "comment": "Great location. Would visit again." }
    ]
  },
  {
    "id": "tam_city_08",
    "name": "Stonebridge Hotel",
    "rating": 4.0,
    "image": "/images/hotels/tam_img8.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3300, "image": "/images/rooms/tam_city_08_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4400, "image": "/images/rooms/tam_city_08_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6000, "image": "/images/rooms/tam_city_08_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Ooty",
    "reviews": [
      { "date": "2025-02-20", "rating": 4.5, "comment": "Great location. Would visit again." },
      { "date": "2024-12-24", "rating": 5, "comment": "The ambiance is absolutely delightful." }
    ]
  },
  {
    "id": "tam_city_09",
    "name": "Golden Hills Lodge",
    "rating": 4.0,
    "image": "/images/hotels/tam_img9.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3400, "image": "/images/rooms/tam_city_09_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4500, "image": "/images/rooms/tam_city_09_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6100, "image": "/images/rooms/tam_city_09_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Chennai",
    "reviews": [
      { "date": "2024-12-01", "rating": 5, "comment": "Very clean and well-maintained hotel." },
      { "date": "2025-02-09", "rating": 4.5, "comment": "Very clean and well-maintained hotel." }
    ]
  },
  {
    "id": "tam_city_10",
    "name": "Regalia Haven",
    "rating": 5.0,
    "image": "/images/hotels/tam_img10.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4300, "image": "/images/rooms/tam_city_10_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6300, "image": "/images/rooms/tam_city_10_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9300, "image": "/images/rooms/tam_city_10_suite.jpg" }
    ],
    "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
    "star": 7,
    "city": "Chennai",
    "reviews": [
      { "date": "2024-12-19", "rating": 5, "comment": "Room service was prompt and friendly." },
      { "date": "2024-10-28", "rating": 5, "comment": "Highly recommended for families." }
    ]
  },
  {
    "id": "tam_city_11",
    "name": "The Skylight Grand",
    "rating": 4.5,
    "image": "/images/hotels/tam_img11.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3400, "image": "/images/rooms/tam_city_11_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5200, "image": "/images/rooms/tam_city_11_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7900, "image": "/images/rooms/tam_city_11_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Rameswaram",
    "reviews": [
      { "date": "2024-11-09", "rating": 5, "comment": "Nice place but rooms were a bit small." },
      { "date": "2025-02-18", "rating": 4, "comment": "Everything was perfect. Worth every penny." }
    ]
  },
  {
    "id": "tam_city_12",
    "name": "Royal Summit",
    "rating": 4.5,
    "image": "/images/hotels/tam_img12.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3300, "image": "/images/rooms/tam_city_12_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5000, "image": "/images/rooms/tam_city_12_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7600, "image": "/images/rooms/tam_city_12_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Madurai",
    "reviews": [
      { "date": "2024-11-21", "rating": 3, "comment": "The spa services were top-notch!" },
      { "date": "2024-10-25", "rating": 3, "comment": "Excellent amenities and courteous staff." }
    ]
  },
  {
    "id": "tam_city_13",
    "name": "Velvet Shore Resort",
    "rating": 4.5,
    "image": "/images/hotels/tam_img13.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3400, "image": "/images/rooms/tam_city_13_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5200, "image": "/images/rooms/tam_city_13_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7900, "image": "/images/rooms/tam_city_13_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Rameswaram",
    "reviews": [
      { "date": "2025-01-08", "rating": 4, "comment": "Excellent amenities and courteous staff." },
      { "date": "2024-12-11", "rating": 4, "comment": "Absolutely stunning hotel with exceptional service!" }
    ]
  },
  {
    "id": "tam_city_14",
    "name": "The Elmwood Inn",
    "rating": 4.0,
    "image": "/images/hotels/tam_img14.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2600, "image": "/images/rooms/tam_city_14_standard.jpg" },
      { "type": "DELUXE", "priceNight": 3900, "image": "/images/rooms/tam_city_14_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 5900, "image": "/images/rooms/tam_city_14_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Chennai",
    "reviews": [
      { "date": "2024-10-28", "rating": 3, "comment": "Luxurious experience but food could've been better." },
      { "date": "2025-01-18", "rating": 4, "comment": "Impeccable service and a gorgeous view." }
    ]
  },
  {
    "id": "tam_city_15",
    "name": "Pinecrest Hotel",
    "rating": 4.0,
    "image": "/images/hotels/tam_img15.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 2500, "image": "/images/rooms/tam_city_15_standard.jpg" },
      { "type": "DELUXE", "priceNight": 3800, "image": "/images/rooms/tam_city_15_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 5700, "image": "/images/rooms/tam_city_15_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Madurai",
    "reviews": [
      { "date": "2024-12-03", "rating": 3, "comment": "The spa services were top-notch!" },
      { "date": "2025-04-06", "rating": 3, "comment": "Highly recommended for families." }
    ]
  },
  {
    "id": "tam_city_16",
    "name": "Sovereign Suites",
    "rating": 5.0,
    "image": "/images/hotels/tam_img16.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 5200, "image": "/images/rooms/tam_city_16_standard.jpg" },
      { "type": "DELUXE", "priceNight": 7100, "image": "/images/rooms/tam_city_16_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9400, "image": "/images/rooms/tam_city_16_suite.jpg" }
    ],
    "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
    "star": 7,
    "city": "Chennai",
    "reviews": [
      { "date": "2024-12-03", "rating": 3, "comment": "Absolutely stunning hotel with exceptional service!" },
      { "date": "2025-02-03", "rating": 4.5, "comment": "Everything was perfect. Worth every penny." }
    ]
  },
  {
    "id": "tam_city_17",
    "name": "The Royal Orchid Court",
    "rating": 5.0,
    "image": "/images/hotels/tam_img17.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 5100, "image": "/images/rooms/tam_city_17_standard.jpg" },
      { "type": "DELUXE", "priceNight": 7000, "image": "/images/rooms/tam_city_17_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9200, "image": "/images/rooms/tam_city_17_suite.jpg" }
    ],
    "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
    "star": 7,
    "city": "Rameswaram",
    "reviews": [
      { "date": "2024-12-02", "rating": 4, "comment": "Very clean and well-maintained hotel." },
      { "date": "2025-03-09", "rating": 3, "comment": "Peaceful environment and cozy rooms." }
    ]
  },
  {
    "id": "tam_city_18",
    "name": "Lushstone Retreat",
    "rating": 4.5,
    "image": "/images/hotels/tam_img18.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4300, "image": "/images/rooms/tam_city_18_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5900, "image": "/images/rooms/tam_city_18_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7700, "image": "/images/rooms/tam_city_18_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Madurai",
    "reviews": [
      { "date": "2025-02-12", "rating": 3, "comment": "Excellent amenities and courteous staff." },
      { "date": "2024-11-21", "rating": 5, "comment": "Luxurious experience but food could've been better." }
    ]
  },
  {
    "id": "tam_city_19",
    "name": "The Velvet Grove",
    "rating": 4.5,
    "image": "/images/hotels/tam_img19.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4400, "image": "/images/rooms/tam_city_19_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6000, "image": "/images/rooms/tam_city_19_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7800, "image": "/images/rooms/tam_city_19_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Ooty",
    "reviews": [
      { "date": "2025-03-18", "rating": 3, "comment": "Impeccable service and a gorgeous view." },
      { "date": "2025-04-03", "rating": 4, "comment": "Everything was perfect. Worth every penny." }
    ]
  },
  {
    "id": "tam_city_20",
    "name": "Coral Springs",
    "rating": 4.5,
    "image": "/images/hotels/tam_img20.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4200, "image": "/images/rooms/tam_city_20_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5800, "image": "/images/rooms/tam_city_20_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7600, "image": "/images/rooms/tam_city_20_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Ooty",
    "reviews": [
      { "date": "2025-01-18", "rating": 3, "comment": "Peaceful environment and cozy rooms." },
      { "date": "2025-02-05", "rating": 4, "comment": "Peaceful environment and cozy rooms." }
    ]
  },
  {
    "id": "tam_city_21",
    "name": "Amethyst Grace",
    "rating": 4.5,
    "image": "/images/hotels/tam_img21.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4500, "image": "/images/rooms/tam_city_21_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6200, "image": "/images/rooms/tam_city_21_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 8000, "image": "/images/rooms/tam_city_21_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Madurai",
    "reviews": [
      { "date": "2024-12-30", "rating": 5, "comment": "Everything was perfect. Worth every penny." },
      { "date": "2024-12-04", "rating": 5, "comment": "Excellent amenities and courteous staff." }
    ]
  },
  {
    "id": "tam_city_22",
    "name": "Brookside Suites",
    "rating": 4.0,
    "image": "/images/hotels/tam_img22.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3200, "image": "/images/rooms/tam_city_22_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4600, "image": "/images/rooms/tam_city_22_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6300, "image": "/images/rooms/tam_city_22_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Rameswaram",
    "reviews": [
      { "date": "2025-04-07", "rating": 4.5, "comment": "Absolutely stunning hotel with exceptional service!" },
      { "date": "2024-12-30", "rating": 4, "comment": "Location was perfect for sightseeing." }
    ]
  },
  {
    "id": "tam_city_23",
    "name": "Lakeside Court",
    "rating": 4.0,
    "image": "/images/hotels/tam_img23.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3300, "image": "/images/rooms/tam_city_23_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4700, "image": "/images/rooms/tam_city_23_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6500, "image": "/images/rooms/tam_city_23_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Ooty",
    "reviews": [
      { "date": "2025-03-06", "rating": 4.5, "comment": "Service was slow but the room was nice." },
      { "date": "2024-11-23", "rating": 4, "comment": "Great location. Would visit again." }
    ]
  },
  {
    "id": "tam_city_24",
    "name": "The Meadow Lodge",
    "rating": 4.0,
    "image": "/images/hotels/tam_img24.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3400, "image": "/images/rooms/tam_city_24_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4800, "image": "/images/rooms/tam_city_24_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6600, "image": "/images/rooms/tam_city_24_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Chennai",
    "reviews": [
      { "date": "2024-12-12", "rating": 4.5, "comment": "Nice place but rooms were a bit small." },
      { "date": "2025-04-02", "rating": 3, "comment": "The ambiance is absolutely delightful." }
    ]
  }], 
  "Uttar Pradesh": [
  {
    "id": "up_city_01",
    "name": "The Empress Hall",
    "rating": 5.0,
    "image": "/images/hotels/up_img1.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 7500, "image": "/images/rooms/up_city_01_standard.jpg" },
      { "type": "DELUXE", "priceNight": 9800, "image": "/images/rooms/up_city_01_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 13200, "image": "/images/rooms/up_city_01_suite.jpg" }
    ],
    "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
    "star": 7,
    "city": "Varanasi",
    "reviews": [
      { "date": "2025-02-05", "rating": 4.5, "comment": "Best hotel experience I've had in a while!" },
      { "date": "2024-11-16", "rating": 4, "comment": "Luxurious experience but food could've been better." }
    ]
  },
  {
    "id": "up_city_02",
    "name": "Kingsgate Palace",
    "rating": 5.0,
    "image": "/images/hotels/up_img2.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 7600, "image": "/images/rooms/up_city_02_standard.jpg" },
      { "type": "DELUXE", "priceNight": 9900, "image": "/images/rooms/up_city_02_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 13500, "image": "/images/rooms/up_city_02_suite.jpg" }
    ],
    "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
    "star": 7,
    "city": "Agra",
    "reviews": [
      { "date": "2024-11-20", "rating": 4, "comment": "Excellent amenities and courteous staff." },
      { "date": "2024-11-29", "rating": 3, "comment": "Impeccable service and a gorgeous view." }
    ]
  },
  {
    "id": "up_city_03",
    "name": "Infinity Garden",
    "rating": 4.5,
    "image": "/images/hotels/up_img3.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 5200, "image": "/images/rooms/up_city_03_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6900, "image": "/images/rooms/up_city_03_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9100, "image": "/images/rooms/up_city_03_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Lucknow",
    "reviews": [
      { "date": "2024-12-08", "rating": 5, "comment": "Impeccable service and a gorgeous view." },
      { "date": "2025-01-11", "rating": 4, "comment": "Very clean and well-maintained hotel." }
    ]
  },
  {
    "id": "up_city_04",
    "name": "Valley of Dreams",
    "rating": 4.5,
    "image": "/images/hotels/up_img4.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 5100, "image": "/images/rooms/up_city_04_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6800, "image": "/images/rooms/up_city_04_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9000, "image": "/images/rooms/up_city_04_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Mathura",
    "reviews": [
      { "date": "2024-11-15", "rating": 5, "comment": "Peaceful environment and cozy rooms." },
      { "date": "2025-02-05", "rating": 4, "comment": "Service was slow but the room was nice." }
    ]
  },
  {
    "id": "up_city_05",
    "name": "Opal Pavilion",
    "rating": 4.5,
    "image": "/images/hotels/up_img5.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 5300, "image": "/images/rooms/up_city_05_standard.jpg" },
      { "type": "DELUXE", "priceNight": 7000, "image": "/images/rooms/up_city_05_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9300, "image": "/images/rooms/up_city_05_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Kanpur",
    "reviews": [
      { "date": "2025-04-10", "rating": 5, "comment": "Great location. Would visit again." },
      { "date": "2024-12-31", "rating": 4, "comment": "Best hotel experience I've had in a while!" }
    ]
  },
  {
    "id": "up_city_06",
    "name": "The Imperial Nest",
    "rating": 4.5,
    "image": "/images/hotels/up_img6.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 5400, "image": "/images/rooms/up_city_06_standard.jpg" },
      { "type": "DELUXE", "priceNight": 7100, "image": "/images/rooms/up_city_06_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9500, "image": "/images/rooms/up_city_06_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Jhansi",
    "reviews": [
      { "date": "2024-12-19", "rating": 5, "comment": "Room service was prompt and friendly." },
      { "date": "2024-10-28", "rating": 5, "comment": "Highly recommended for families." }
    ]
  },
  {
    "id": "up_city_07",
    "name": "River Rock Hotel",
    "rating": 4.0,
    "image": "/images/hotels/up_img7.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3200, "image": "/images/rooms/up_city_07_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4300, "image": "/images/rooms/up_city_07_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 5800, "image": "/images/rooms/up_city_07_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Ayodhya",
    "reviews": [
      { "date": "2024-11-09", "rating": 5, "comment": "Nice place but rooms were a bit small." },
      { "date": "2025-02-18", "rating": 4, "comment": "Everything was perfect. Worth every penny." }
    ]
  },
  {
    "id": "up_city_08",
    "name": "Maple Leaf Inn",
    "rating": 4.0,
    "image": "/images/hotels/up_img8.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3100, "image": "/images/rooms/up_city_08_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4200, "image": "/images/rooms/up_city_08_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 5600, "image": "/images/rooms/up_city_08_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Aligarh",
    "reviews": [
      { "date": "2024-11-21", "rating": 3, "comment": "The spa services were top-notch!" },
      { "date": "2024-10-25", "rating": 3, "comment": "Excellent amenities and courteous staff." }
    ]
  },
  {
    "id": "up_city_09",
    "name": "The Summit Hotel",
    "rating": 4.0,
    "image": "/images/hotels/up_img9.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3300, "image": "/images/rooms/up_city_09_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4500, "image": "/images/rooms/up_city_09_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6000, "image": "/images/rooms/up_city_09_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Noida",
    "reviews": [
      { "date": "2025-01-08", "rating": 4, "comment": "Excellent amenities and courteous staff." },
      { "date": "2024-12-11", "rating": 4, "comment": "Absolutely stunning hotel with exceptional service!" }
    ]
  },
  {
    "id": "up_city_10",
    "name": "Velvet Horizon",
    "rating": 5.0,
    "image": "/images/hotels/up_img10.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 5000, "image": "/images/rooms/up_city_10_standard.jpg" },
      { "type": "DELUXE", "priceNight": 7200, "image": "/images/rooms/up_city_10_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9800, "image": "/images/rooms/up_city_10_suite.jpg" }
    ],
    "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
    "star": 7,
    "city": "Lucknow",
    "reviews": [
      { "date": "2024-11-09", "rating": 5, "comment": "Nice place but rooms were a bit small." },
      { "date": "2025-02-18", "rating": 4, "comment": "Everything was perfect. Worth every penny." }
    ]
  },
  {
    "id": "up_city_11",
    "name": "The Amara Court",
    "rating": 4.5,
    "image": "/images/hotels/up_img11.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4200, "image": "/images/rooms/up_city_11_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6100, "image": "/images/rooms/up_city_11_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 8300, "image": "/images/rooms/up_city_11_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Varanasi",
    "reviews": [
      { "date": "2024-11-21", "rating": 3, "comment": "The spa services were top-notch!" },
      { "date": "2024-10-25", "rating": 3, "comment": "Excellent amenities and courteous staff." }
    ]
  },
  {
    "id": "up_city_12",
    "name": "Zenith Serene",
    "rating": 4.5,
    "image": "/images/hotels/up_img12.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4300, "image": "/images/rooms/up_city_12_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6200, "image": "/images/rooms/up_city_12_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 8500, "image": "/images/rooms/up_city_12_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Noida",
    "reviews": [
      { "date": "2025-01-08", "rating": 4, "comment": "Excellent amenities and courteous staff." },
      { "date": "2024-12-11", "rating": 4, "comment": "Absolutely stunning hotel with exceptional service!" }
    ]
  },
  {
    "id": "up_city_13",
    "name": "Cascade Bliss Hotel",
    "rating": 4.5,
    "image": "/images/hotels/up_img13.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4100, "image": "/images/rooms/up_city_13_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6000, "image": "/images/rooms/up_city_13_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 8200, "image": "/images/rooms/up_city_13_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Agra",
    "reviews": [
      { "date": "2024-10-28", "rating": 3, "comment": "Luxurious experience but food could've been better." },
      { "date": "2025-01-18", "rating": 4, "comment": "Impeccable service and a gorgeous view." }
    ]
  },
  {
    "id": "up_city_14",
    "name": "The Rustic Lodge",
    "rating": 4.0,
    "image": "/images/hotels/up_img14.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3000, "image": "/images/rooms/up_city_14_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4500, "image": "/images/rooms/up_city_14_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6200, "image": "/images/rooms/up_city_14_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Kanpur",
    "reviews": [
      { "date": "2024-12-03", "rating": 3, "comment": "The spa services were top-notch!" },
      { "date": "2025-04-06", "rating": 3, "comment": "Highly recommended for families." }
    ]
  },
  {
    "id": "up_city_15",
    "name": "The Green Pines",
    "rating": 4.0,
    "image": "/images/hotels/up_img15.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3200, "image": "/images/rooms/up_city_15_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4700, "image": "/images/rooms/up_city_15_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6500, "image": "/images/rooms/up_city_15_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Prayagraj",
    "reviews": [
      { "date": "2025-01-27", "rating": 4, "comment": "Service was slow but the room was nice." },
      { "date": "2025-04-21", "rating": 5, "comment": "Great location. Would visit again." }
    ]
  },
  {
    "id": "up_city_16",
    "name": "The Regal Pavilion",
    "rating": 5.0,
    "image": "/images/hotels/up_img16.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 9200, "image": "/images/rooms/up_city_16_standard.jpg" },
      { "type": "DELUXE", "priceNight": 12800, "image": "/images/rooms/up_city_16_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 18500, "image": "/images/rooms/up_city_16_suite.jpg" }
    ],
    "amenities": ["Personalised Butler Services", "Spa & Therapy", "Transport", "Private Cinema"],
    "star": 7,
    "city": "Lucknow",
    "reviews": [
      { "date": "2025-02-10", "rating": 4, "comment": "Excellent amenities and courteous staff." },
      { "date": "2025-01-13", "rating": 5, "comment": "Everything was perfect. Worth every penny." }
    ]
  },
  {
    "id": "up_city_17",
    "name": "Monarch Bay",
    "rating": 4.5,
    "image": "/images/hotels/up_img17.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4500, "image": "/images/rooms/up_city_17_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6500, "image": "/images/rooms/up_city_17_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9000, "image": "/images/rooms/up_city_17_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Noida",
    "reviews": [
      { "date": "2024-12-03", "rating": 3, "comment": "Absolutely stunning hotel with exceptional service!" },
      { "date": "2025-02-03", "rating": 4.5, "comment": "Everything was perfect. Worth every penny." }
    ]
  },
  {
    "id": "up_city_18",
    "name": "Ivory Palace",
    "rating": 4.5,
    "image": "/images/hotels/up_img18.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4600, "image": "/images/rooms/up_city_18_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6700, "image": "/images/rooms/up_city_18_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9200, "image": "/images/rooms/up_city_18_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Kanpur",
    "reviews": [
      { "date": "2024-12-02", "rating": 4, "comment": "Very clean and well-maintained hotel." },
      { "date": "2025-03-09", "rating": 3, "comment": "Peaceful environment and cozy rooms." }
    ]
  },
  {
    "id": "up_city_19",
    "name": "Sunset Imperial",
    "rating": 4.5,
    "image": "/images/hotels/up_img19.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4700, "image": "/images/rooms/up_city_19_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6900, "image": "/images/rooms/up_city_19_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9500, "image": "/images/rooms/up_city_19_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Agra",
    "reviews": [
      { "date": "2025-02-12", "rating": 3, "comment": "Excellent amenities and courteous staff." },
      { "date": "2024-11-21", "rating": 5, "comment": "Luxurious experience but food could've been better." }
    ]
  },
  {
    "id": "up_city_20",
    "name": "Willow Springs Inn",
    "rating": 4.0,
    "image": "/images/hotels/up_img20.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3300, "image": "/images/rooms/up_city_20_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4800, "image": "/images/rooms/up_city_20_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6600, "image": "/images/rooms/up_city_20_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Varanasi",
    "reviews": [
      { "date": "2025-03-18", "rating": 3, "comment": "Impeccable service and a gorgeous view." },
      { "date": "2025-04-03", "rating": 4, "comment": "Everything was perfect. Worth every penny." }
    ]
  },
  {
    "id": "up_city_21",
    "name": "The Tranquil Grove",
    "rating": 4.0,
    "image": "/images/hotels/up_img21.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3400, "image": "/images/rooms/up_city_21_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4900, "image": "/images/rooms/up_city_21_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6800, "image": "/images/rooms/up_city_21_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Prayagraj",
    "reviews": [
      { "date": "2025-01-18", "rating": 3, "comment": "Peaceful environment and cozy rooms." },
      { "date": "2025-02-05", "rating": 4, "comment": "Peaceful environment and cozy rooms." }
    ]
  }],
  "Uttarakhand": [
  {
    "id": "uk_city_01",
    "name": "Grand Tranquil",
    "rating": 4.5,
    "image": "/images/hotels/uk_img1.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4200, "image": "/images/rooms/uk_city_01_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5800, "image": "/images/rooms/uk_city_01_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7600, "image": "/images/rooms/uk_city_01_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Mussoorie",
    "reviews": [
      { "date": "2024-10-28", "rating": 3, "comment": "Luxurious experience but food could've been better." },
      { "date": "2025-01-18", "rating": 4, "comment": "Impeccable service and a gorgeous view." }
    ]
  },
  {
    "id": "uk_city_02",
    "name": "Morning Dew Manor",
    "rating": 4.5,
    "image": "/images/hotels/uk_img2.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 4100, "image": "/images/rooms/uk_city_02_standard.jpg" },
      { "type": "DELUXE", "priceNight": 5600, "image": "/images/rooms/uk_city_02_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 7400, "image": "/images/rooms/uk_city_02_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Mussoorie",
    "reviews": [
      { "date": "2024-12-03", "rating": 3, "comment": "The spa services were top-notch!" },
      { "date": "2025-04-06", "rating": 3, "comment": "Highly recommended for families." }
    ]
  },
  {
    "id": "uk_city_03",
    "name": "Oakleaf Lodge",
    "rating": 4.0,
    "image": "/images/hotels/uk_img3.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3200, "image": "/images/rooms/uk_city_03_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4600, "image": "/images/rooms/uk_city_03_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6200, "image": "/images/rooms/uk_city_03_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Rishikesh",
    "reviews": [
      { "date": "2025-01-27", "rating": 4, "comment": "Service was slow but the room was nice." },
      { "date": "2025-04-21", "rating": 5, "comment": "Great location. Would visit again." }
    ]
  },
  {
    "id": "uk_city_04",
    "name": "Pine Valley Inn",
    "rating": 4.0,
    "image": "/images/hotels/uk_img4.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3100, "image": "/images/rooms/uk_city_04_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4500, "image": "/images/rooms/uk_city_04_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6100, "image": "/images/rooms/uk_city_04_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Nainital",
    "reviews": [
      { "date": "2025-02-10", "rating": 4, "comment": "Excellent amenities and courteous staff." },
      { "date": "2025-01-13", "rating": 5, "comment": "Everything was perfect. Worth every penny." }
    ]
  },
  {
    "id": "uk_city_05",
    "name": "Horizon Flame",
    "rating": 4.5,
    "image": "/images/hotels/uk_img5.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 5200, "image": "/images/rooms/uk_city_05_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6900, "image": "/images/rooms/uk_city_05_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9200, "image": "/images/rooms/uk_city_05_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Rishikesh",
    "reviews": [
      { "date": "2025-02-07", "rating": 4.5, "comment": "Highly recommended for families." },
      { "date": "2025-03-09", "rating": 4, "comment": "Highly recommended for families." }
    ]
  },
  {
    "id": "uk_city_06",
    "name": "The Regal Isle",
    "rating": 4.5,
    "image": "/images/hotels/uk_img6.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 5100, "image": "/images/rooms/uk_city_06_standard.jpg" },
      { "type": "DELUXE", "priceNight": 6800, "image": "/images/rooms/uk_city_06_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 9100, "image": "/images/rooms/uk_city_06_suite.jpg" }
    ],
    "amenities": ["In-Room Mini-Bar", "Gourmet Dining", "Pool", "Advanced In-Room Technologies"],
    "star": 5,
    "city": "Nainital",
    "reviews": [
      { "date": "2025-02-23", "rating": 3, "comment": "Best hotel experience I've had in a while!" },
      { "date": "2024-11-04", "rating": 4, "comment": "Very clean and well-maintained hotel." }
    ]
  },
  {
    "id": "uk_city_07",
    "name": "The Shady Grove",
    "rating": 4.0,
    "image": "/images/hotels/uk_img7.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3200, "image": "/images/rooms/uk_city_07_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4300, "image": "/images/rooms/uk_city_07_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 5800, "image": "/images/rooms/uk_city_07_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Mussoorie",
    "reviews": [
      { "date": "2024-11-09", "rating": 4.5, "comment": "Loved the pool and the food!" },
      { "date": "2025-04-20", "rating": 3, "comment": "My go-to hotel whenever I'm in town." }
    ]
  },
  {
    "id": "uk_city_08",
    "name": "Willow Glen Suites",
    "rating": 4.0,
    "image": "/images/hotels/uk_img8.jpg",
    "rooms": [
      { "type": "STANDARD", "priceNight": 3300, "image": "/images/rooms/uk_city_08_standard.jpg" },
      { "type": "DELUXE", "priceNight": 4400, "image": "/images/rooms/uk_city_08_deluxe.jpg" },
      { "type": "SUITE", "priceNight": 6000, "image": "/images/rooms/uk_city_08_suite.jpg" }
    ],
    "amenities": ["WiFi", "AC", "Gym", "Premium Toiletries"],
    "star": 4,
    "city": "Nainital",
    "reviews": [
      { "date": "2024-12-15", "rating": 4.5, "comment": "Could improve the check-in process." },
      { "date": "2025-02-16", "rating": 3, "comment": "Nice place but rooms were a bit small." }
    ]
  }]
}

export default statesData