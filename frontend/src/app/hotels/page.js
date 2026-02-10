'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import "./hotels.css";

export default function HotelSearchPage({ searchParams }) {
  const [hotels, setHotels] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [cityName, setCityName] = useState("");

  const cityId = searchParams?.cityId;

  useEffect(() => {
    if (!cityId) return;

    fetch(`http://localhost:3001/api/locations/cities/${cityId}`)
      .then(res => res.json())
      .then(data => setCityName(data.name))
      .catch(() => setCityName("Selected City"));
  }, [cityId]);

  if (!cityId) return <p>Please select a city to see hotels.</p>;

  return (
    <div className="hotel-search-wrapper">
        <h1>Hotels in {cityName || "Selected City"}</h1>
        {loading ? (
            <p>Loading hotels...</p>
        ) : hotels.length === 0 ? (
            <p>No hotels found in this city.</p>
        ) : (
            <div className="hotel-grid">
            {hotels.map(hotel => (
                <div key={hotel.id} className="hotel-card">
                <img src={hotel.image || "/default-hotel.jpg"} alt={hotel.name} />
                <div className="hotel-info">
                    <div>
                    <h3>{hotel.name}</h3>
                    <p>{cityName || "Selected City"}</p>
                    <p>{hotel.rooms.length} room types available</p>
                    </div>
                    <Link href={`/hotels/${hotel.id}`}>
                    <button>View Details</button>
                    </Link>
                </div>
                </div>
            ))}
            </div>
        )}
    </div>
  );
}
