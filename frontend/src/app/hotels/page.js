'use client'

import { useState, useEffect } from "react";
import Link from "next/link";
import "./hotels.css";

export default function HotelSearchPage({ searchParams }) {
  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [cityName, setCityName] = useState("Selected City");
  const [cityName, setCityName] = useState("");
  const [stateName, setStateName] = useState("");

  const cityId = searchParams?.cityId;
  const stateId = searchParams?.stateId; 

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

  useEffect(() => {
    if (!cityId) return;

    async function fetchLocation() {
      try {
        // 1️⃣ Get all states
        const statesRes = await fetch("http://localhost:3001/api/locations/states");
        const states = await statesRes.json();

        // 2️⃣ Loop states and check their cities
        for (const state of states) {
          const citiesRes = await fetch(
            `http://localhost:3001/api/locations/cities?stateId=${state.id}`
          );
          const cities = await citiesRes.json();

          const foundCity = cities.find(c => c.id === cityId);

          if (foundCity) {
            setCityName(foundCity.name);
            setStateName(state.name);
            break; // stop once found
          }
        }

      } catch (error) {
        console.error("Location fetch error:", error);
      }
  }

  fetchLocation();

}, [cityId]);

  return (
    <div className="hotel-search-wrapper">
      <h1>{cityName && stateName? `Hotels in ${cityName}, ${stateName}` : "Loading location..."}</h1>

    {loading ? (
      <p>Loading hotels...</p>
    ) : hotels.length === 0 ? (
      <p>No hotels found in this city.</p>
    ) : (
      <div className="hotel-scroll-card">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="hotel-row">

            {/* LEFT: Hotel Image */}
            <div className="hotel-image">
              <img
                src={hotel.image}
                alt={hotel.name}
              />
            </div>

            {/* RIGHT: Hotel Details */}
            <div className="hotel-details">

              <h2 className="hotel-name">{hotel.name}</h2>

              <p className="hotel-meta">
                ⭐ {hotel.rating} • {hotel.star}-Star Hotel
              </p>

              <p className="hotel-description">
                {hotel.description}
              </p>

              {/* Amenities */}
              <div className="hotel-amenities">
                {hotel.amenities.map((a, i) => (
                  <span key={i} className="amenity">{a}</span>
                ))}
              </div>

              {/* Room Prices */}
              <div className="hotel-rooms">
                {hotel.rooms.map((room) => (
                  <div key={room.id} className="room">
                    <span>{room.type}:</span>
                    <strong> ₹{room.priceNight} / night</strong>
                  </div>
                ))}
              </div>

              {/* Reviews */}
              <div className="hotel-reviews">
                <strong>Reviews:</strong>
                {hotel.reviews.map((r) => (
                  <p key={r.id}>
                    ⭐ {r.rating} – {r.comment}
                  </p>
                ))}
              </div>

              <Link href={`/hotels/${hotel.id}`}>
                <button className="view-btn">Book Now</button>
              </Link>

            </div>
          </div>
        ))}
      </div>
    )}
    </div>
  );
}
