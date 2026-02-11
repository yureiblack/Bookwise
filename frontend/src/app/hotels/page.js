'use client'

import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import "./hotels.css";

export default function HotelSearchPage() {

  const searchParams = useSearchParams();
  const cityId = searchParams.get("cityId");
  const router = useRouter();

  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cityName, setCityName] = useState("");
  const [stateName, setStateName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedRoomId, setSelectedRoomId] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [processingPayment, setProcessingPayment] = useState(false);

  // -----------------------------
  // Fetch Hotels
  // -----------------------------
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

  // -----------------------------
  // Fetch Location Name
  // -----------------------------
  useEffect(() => {
    if (!cityId) return;

    async function fetchLocation() {
      try {
        const statesRes = await fetch("http://localhost:3001/api/locations/states");
        const states = await statesRes.json();

        for (const state of states) {
          const citiesRes = await fetch(
            `http://localhost:3001/api/locations/cities?stateId=${state.id}`
          );
          const cities = await citiesRes.json();

          const foundCity = cities.find(c => c.id === cityId);

          if (foundCity) {
            setCityName(foundCity.name);
            setStateName(state.name);
            break;
          }
        }

      } catch (error) {
        console.error("Location fetch error:", error);
      }
    }

    fetchLocation();
  }, [cityId]);

  function handleBookNow(hotel) {
    setSelectedHotel(hotel);
    setSelectedRoomId("");
    setCheckIn("");
    setCheckOut("");
    setShowModal(true);
  }

  async function handlePayNow() {
    try {
      if (!checkIn || !checkOut || !selectedRoomId) {
        alert("Please select dates and room type.");
        return;
      }

      if (new Date(checkOut) <= new Date(checkIn)) {
        alert("Check-out must be after check-in.");
        return;
      }

      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first.");
        router.push("/login");
        return;
      }

      setProcessingPayment(true);

      // 1️⃣ Create Booking
      const bookingRes = await fetch("http://localhost:3001/api/bookings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          hotelId: selectedHotel.id,
          roomTypeId: selectedRoomId,
          checkIn,
          checkOut,
        }),
      });

      const bookingData = await bookingRes.json();

      if (!bookingRes.ok) {
        throw new Error(bookingData.message || "Booking failed");
      }

      // 2️⃣ Run Mock Payment
      const paymentRes = await fetch("http://localhost:3001/api/payments/mock", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          bookingId: bookingData.bookingId || bookingData.id,
        }),
      });

      const paymentData = await paymentRes.json();

      if (!paymentRes.ok) {
        throw new Error(paymentData.message || "Payment failed");
      }

      // ===============================
      // 🎯 HANDLE RESULT
      // ===============================

      if (paymentData.paymentStatus === "SUCCESS") {

        alert("Payment Successful ✅");

        // Close modal
        setShowModal(false);

        // Show QR in same page
        alert("Scan this QR at hotel check-in");

        // Open QR in new tab (simple solution)
        const qrWindow = window.open();
        qrWindow.document.write(`
          <html>
            <head><title>Booking QR</title></head>
            <body style="text-align:center;font-family:sans-serif;">
              <h2>Booking Confirmed 🎉</h2>
              <p>Booking Code: ${bookingData.bookingCode}</p>
              <img src="${bookingData.qrImage}" />
              <p>Show this QR at hotel check-in</p>
            </body>
          </html>
        `);

      } else {

        alert("Payment Failed ❌");
        // DO NOTHING → Stay on same page

      }

    } catch (err) {
      console.error(err);
      alert(err.message || "Something went wrong.");
    } finally {
      setProcessingPayment(false);
    }
  }

  const selectedRoom = selectedHotel?.rooms.find(r => r.id === selectedRoomId);
  let totalPrice = 0;
  if (checkIn && checkOut && selectedRoom) {
    const nights =
      (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24);

    totalPrice = nights * selectedRoom.priceNight;
  }

  return (
    <div className="hotel-search-wrapper">
      <h1>
        {cityName && stateName
          ? `Hotels in ${cityName}, ${stateName}`
          : "Loading location..."}
      </h1>

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

                <button
                  className="view-btn"
                  onClick={() => handleBookNow(hotel)}
                >
                  Book Now
                </button>

              </div>
            </div>
          ))}
        </div>
      )}
      {showModal && selectedHotel && (
        <div className="modal-overlay">
          <div className="modal">

            <h2>Book {selectedHotel.name}</h2>

            <label>Check-In</label>
            <input
              type="date"
              min={new Date().toISOString().split("T")[0]}
              value={checkIn}
              onChange={(e) => setCheckIn(e.target.value)}
            />

            <label>Check-Out</label>
            <input
              type="date"
              min={checkIn || new Date().toISOString().split("T")[0]}
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
            />

            <label>Room Type</label>
            <select
              value={selectedRoomId}
              onChange={(e) => setSelectedRoomId(e.target.value)}
            >
              <option value="">Select Room</option>
              {selectedHotel.rooms.map((room) => (
                <option key={room.id} value={room.id}>
                  {room.type} – ₹{room.priceNight} / night
                </option>
              ))}
            </select>

            {totalPrice > 0 && (
              <p><strong>Total: ₹{totalPrice}</strong></p>
            )}

            <button
              className="view-btn"
              onClick={handlePayNow}
              disabled={processingPayment}
            >
              {processingPayment ? "Processing..." : "Pay Now"}
            </button>

            <button
              className="cancel-btn"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </button>

          </div>
        </div>
      )}
    </div>
  );
}