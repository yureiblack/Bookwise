'use client'

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import "./hotels.css";

function HotelListContent() {
  const searchParams = useSearchParams();
  const cityId = searchParams.get("cityId");
  const router = useRouter();

  const [hotels, setHotels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [cityName, setCityName] = useState("");
  const [stateName, setStateName] = useState("");
  const [expandedHotelId, setExpandedHotelId] = useState(null);
  const [lightboxImg, setLightboxImg] = useState(null);

  // Booking States
  const [showModal, setShowModal] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedRoomId, setSelectedRoomId] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [processingPayment, setProcessingPayment] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (!cityId) return;
    setLoading(true);
    fetch(`http://localhost:3001/api/hotels?cityId=${cityId}`)
      .then(res => res.json())
      .then(data => setHotels(Array.isArray(data) ? data : []))
      .catch(err => console.error("Hotels fetch error:", err))
      .finally(() => setLoading(false));
  }, [cityId]);

  useEffect(() => {
    if (!cityId) return;
    async function fetchLocationStrings() {
      try {
        const statesRes = await fetch("http://localhost:3001/api/locations/states");
        const states = await statesRes.json();
        for (const state of states) {
          const citiesRes = await fetch(`http://localhost:3001/api/locations/cities?stateId=${state.id}`);
          const cities = await citiesRes.json();
          const foundCity = cities.find(c => c.id === cityId);
          if (foundCity) {
            setCityName(foundCity.name);
            setStateName(state.name);
            break;
          }
        }
      } catch (error) {
        console.error("Location lookup error:", error);
      }
    }
    fetchLocationStrings();
  }, [cityId]);

  const handleBookNow = (hotel) => {
    setSelectedHotel(hotel);
    setSelectedRoomId("");
    setCheckIn("");
    setCheckOut("");
    setShowModal(true);
  };

  const handlePayNow = async () => {
    try {
      if (!checkIn || !checkOut || !selectedRoomId) {
        alert("Please select dates and room type.");
        return;
      }

      // Final logic safeguard before API call
      const checkInDate = new Date(checkIn);
      const checkOutDate = new Date(checkOut);

      if (checkInDate >= checkOutDate) {
        alert("Check-out date must be at least one day after check-in.");
        return;
      }

      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login first.");
        router.push("/login");
        return;
      }

      setProcessingPayment(true);

      const bookingRes = await fetch("http://localhost:3001/api/bookings", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ hotelId: selectedHotel.id, roomTypeId: selectedRoomId, checkIn, checkOut }),
      });
      const bookingData = await bookingRes.json();

      const paymentRes = await fetch("http://localhost:3001/api/payments/mock", {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
        body: JSON.stringify({ bookingId: bookingData.bookingId || bookingData.id }),
      });
      const paymentData = await paymentRes.json();

      if (paymentData.paymentStatus === "SUCCESS") {
        setShowModal(false);
        const roomType = selectedHotel.rooms.find(r => r.id === selectedRoomId)?.type;

        const qrWindow = window.open("", "_blank");
        qrWindow.document.write(`
          <html>
            <body style="text-align:center; font-family: sans-serif; padding: 40px; background: #020A01; color: white;">
              <div style="background:#263315; padding: 30px; display:inline-block; border-radius: 20px; border: 1px solid #6e7b42;">
                <h2 style="color: #6e7b42; font-family: Marcellus, serif;">Booking Confirmed!</h2>
                <img src="${bookingData.qrImage}" style="width:200px; border-radius: 10px; margin: 20px 0;" />
                <div style="text-align:left; border-top: 1px solid rgba(255,255,255,0.1); padding-top:15px;">
                  <p><strong>Hotel:</strong> ${selectedHotel.name}</p>
                  <p><strong>Booking ID:</strong> ${bookingData.bookingId || bookingData.id}</p>
                  <p><strong>Room Type:</strong> ${roomType}</p>
                  <p><strong>Check-In:</strong> ${checkIn}</p>
                  <p><strong>Check-Out:</strong> ${checkOut}</p>
                  <p><strong>Booked At:</strong> ${new Date().toLocaleString()}</p>
                </div>
              </div>
            </body>
          </html>
        `);
      } else {
        alert("Payment failed. Please try again.");
      }
    } catch (err) {
      alert("Error: " + err.message);
    } finally {
      setProcessingPayment(false);
    }
  };

  const selectedRoom = selectedHotel?.rooms.find(r => r.id === selectedRoomId);
  let totalPrice = 0;
  if (checkIn && checkOut && selectedRoom) {
    const nights = (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24);
    if (nights > 0) totalPrice = nights * selectedRoom.priceNight;
  }

  return (
    <div className="hotel-search-wrapper">
      <h1>{cityName ? `Hotels in ${cityName}, ${stateName}` : "Searching for Stays..."}</h1>

      <div className="hotel-list">
        {hotels.map((hotel) => (
          <div key={hotel.id} className={`hotel-main-card ${expandedHotelId === hotel.id ? 'is-expanded' : ''}`}>
            <button className="slide-toggle" onClick={() => setExpandedHotelId(expandedHotelId === hotel.id ? null : hotel.id)}>
              {expandedHotelId === hotel.id ? "◀" : "▶"}
            </button>

            <div className="card-content-wrapper">
              <div className="section-image">
                <img src={hotel.image} alt={hotel.name} />
              </div>

              <div className="section-core-info">
                <div className="hotel-name-row">
                  <h2>{hotel.name}</h2>
                  <div className="hotel-rating-badge">⭐ {hotel.rating}</div>
                </div>
                <p className="hotel-description">{hotel.description}</p>
                <div className="amenities-preview">
                  {hotel.amenities.map((a, i) => <span key={i} className="amenity-tag">{a}</span>)}
                </div>

                <div className="gallery-section">
                  <div className="room-gallery">
                    {hotel.rooms.slice(0, 3).map(room => (
                      <div key={room.id} className="gallery-item" onClick={() => setLightboxImg(room.image)}>
                        <img src={room.image} alt="Room" />
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  className="main-booking-btn"
                  onClick={(e) => { e.stopPropagation(); handleBookNow(hotel); }}
                >
                  Book Your Stay
                </button>
              </div>

              <div className="section-details">
                <h4>Available Rooms</h4>
                <div className="rooms-list">
                  {hotel.rooms.map(room => (
                    <div key={room.id} className="room-item">
                      <span>{room.type}</span>
                      <strong>₹{room.priceNight}</strong>
                    </div>
                  ))}
                </div>
                <h4>Feedback</h4>
                <div className="feedback-container">
                  {hotel.reviews.map(r => <div key={r.id} className="review-entry">⭐ {r.rating} — {r.comment}</div>)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {showModal && selectedHotel && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Book {selectedHotel.name}</h2>
            <div className="modal-field">
              <label>Check-In</label>
              <input
                type="date"
                min={today}
                value={checkIn}
                onChange={(e) => {
                  setCheckIn(e.target.value);
                  if (checkOut && e.target.value >= checkOut) {
                    setCheckOut("");
                  }
                }}
              />
            </div>
            <div className="modal-field">
              <label>Check-Out</label>
              <input
                type="date"
                min={checkIn || today}
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
            <div className="modal-field">
              <label>Room Type</label>
              <select value={selectedRoomId} onChange={(e) => setSelectedRoomId(e.target.value)}>
                <option value="">Select Room</option>
                {selectedHotel.rooms.map(r => <option key={r.id} value={r.id}>{r.type} - ₹{r.priceNight}</option>)}
              </select>
            </div>
            {totalPrice > 0 && <p style={{ fontSize: '1.2rem' }}><strong>Total: ₹{totalPrice}</strong></p>}
            <div className="modal-actions">
              <button className="confirm-btn" onClick={handlePayNow} disabled={processingPayment}>
                {processingPayment ? "Processing..." : "Confirm Booking"}
              </button>
              <button className="cancel-btn" onClick={() => setShowModal(false)}>Cancel</button>
            </div>
          </div>
        </div>
      )}

      {lightboxImg && (
        <div className="lightbox-overlay" onClick={() => setLightboxImg(null)}>
          <img src={lightboxImg} alt="Enlarged" />
        </div>
      )}
    </div>
  );
}

export default function HotelSearchPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HotelListContent />
    </Suspense>
  );
} 