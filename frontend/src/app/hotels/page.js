'use client'

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import "./hotels.css";
const API_URL = process.env.VITE_API_URL || "http://localhost:3001"

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
  const [showQRModal, setShowQRModal] = useState(false);
  const [qrBookingInfo, setQrBookingInfo] = useState(null);

  const today = new Date().toISOString().split("T")[0];

  // Generate QR code when modal is shown
  useEffect(() => {
    if (showQRModal && qrBookingInfo) {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js';
      script.onload = function() {
        const container = document.getElementById('qr-container');
        if (container && container.children.length === 0) {
          new window.QRCode(container, {
            text: JSON.stringify(qrBookingInfo),
            width: 250,
            height: 250,
            colorDark: '#000000',
            colorLight: '#ffffff',
            correctLevel: 1
          });
        }
      };
      document.head.appendChild(script);
    }
  }, [showQRModal, qrBookingInfo]);

  useEffect(() => {
    if (!cityId) return;
    setLoading(true);
    fetch(`${API_URL}/hotels?cityId=${cityId}`)
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

        // Format dates properly
        const formatDate = (date) => {
          if (!date) return '';
          const d = new Date(date);
          return d.toISOString().split('T')[0];
        };

        // Create booking info JSON with all details for QR
        const bookingInfo = {
          "Hotel": bookingData.hotelName,
          "Booking Code": bookingData.bookingCode,
          "Room Type": bookingData.roomType,
          "Check-In": formatDate(bookingData.checkIn),
          "Check-Out": formatDate(bookingData.checkOut),
          "Booked At": new Date().toLocaleString()
        };

        setQrBookingInfo(bookingInfo);
        setShowQRModal(true);
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

      {/* QR Code Confirmation Modal */}
      {showQRModal && qrBookingInfo && (
        <div className="modal-overlay" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{
            background: '#263315',
            padding: '40px',
            borderRadius: '20px',
            border: '1px solid #6e7b42',
            textAlign: 'center',
            maxWidth: '500px',
            color: 'white'
          }}>
            <h2 style={{ color: '#6e7b42', fontFamily: 'Marcellus, serif', marginBottom: '20px' }}>
              Booking Confirmed!
            </h2>

            {/* QR Code Canvas */}
            <div id="qr-container" style={{ margin: '20px 0', display: 'flex', justifyContent: 'center' }}></div>

            <p style={{
              color: '#6e7b42',
              fontSize: '1.1rem',
              margin: '20px 0',
              fontFamily: 'Marcellus, serif'
            }}>
              Thank you for booking with BookWise. Please save this QR and use it to scan at check-in.
            </p>

            <button
              onClick={() => setShowQRModal(false)}
              style={{
                marginTop: '20px',
                padding: '10px 20px',
                background: '#6e7b42',
                color: '#020A01',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Close
            </button>
          </div>
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