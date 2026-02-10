'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import "./hotels.css";

export default function HotelSearchPage({ searchParams }) {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cityName, setCityName] = useState("Selected City");

  const cityId = searchParams?.cityId;

  useEffect(() => {
    if (!cityId) {
      setLoading(false);
      return;
    }

    setLoading(true);

    fetch(`http://localhost:3001/api/hotels?cityId=${cityId}`)
      .then(res => res.json())
      .then(data => {
        if (Array.isArray(data)) {
          setHotels(data);
        } else {
          console.error("Hotels API did not return array:", data);
          setHotels([]);
        }
      })
      .catch(err => {
        console.error("Hotels fetch error:", err);
        setHotels([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [cityId]);

  if (!cityId) {
    return <p>Please select a city to see hotels.</p>;
  }

  return (
    <div className="hotel-search-wrapper">
      <h1>Hotels in {cityName}</h1>

    {loading ? (
      <p>Loading hotels...</p>
    ) : hotels.length === 0 ? (
      <p>No hotels found in this city.</p>
    ) : (
      <div className="hotel-scroll-card">
        {hotels.map(hotel => (
          <div key={hotel.id} className="hotel-row">
            <img
              src={hotel.image}
              alt={hotel.name}
            />

            <div className="hotel-row-info">
              <h3>{hotel.name}</h3>
              <p>⭐ {hotel.rating} • {hotel.star}-Star</p>
              <p>{hotel.rooms?.length || 0} room types</p>

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
