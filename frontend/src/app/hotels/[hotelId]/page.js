'use client'

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import "../../hotels/hotels.css";
import "./hotel-detail.css";

export default function HotelDetailPage() {
  const { hotelId } = useParams();
  const router = useRouter();

  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expandedHotelId, setExpandedHotelId] = useState(null);
  const [lightboxImg, setLightboxImg] = useState(null);

  // Booking states
  const [showModal, setShowModal] = useState(false);
  const [selectedRoomId, setSelectedRoomId] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [processingPayment, setProcessingPayment] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false);
  const [qrBookingInfo, setQrBookingInfo] = useState(null);

  // Review states
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState("");
  const [submittingReview, setSubmittingReview] = useState(false);
  const [reviewMessage, setReviewMessage] = useState("");
  const [bookingsForHotel, setBookingsForHotel] = useState([]);
  const [selectedBookingId, setSelectedBookingId] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  // Check login status
  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("token"));
  }, []);

  // Fetch hotel data
  useEffect(() => {
    if (!hotelId) return;
    setLoading(true);
    fetch(`http://localhost:3001/api/hotels/${hotelId}`)
      .then(res => res.json())
      .then(data => setHotel(data))
      .catch(err => console.error("Hotel fetch error:", err))
      .finally(() => setLoading(false));
  }, [hotelId]);

  // Fetch user bookings for this hotel (to enable review)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token || !hotelId) return;

    fetch("http://localhost:3001/api/bookings/my", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        const eligible = (Array.isArray(data) ? data : []).filter(
          b => b.hotelId === hotelId &&
               (b.status === "CONFIRMED" || b.status === "CHECKED_IN")
        );
        setBookingsForHotel(eligible);
        if (eligible.length > 0) {
          setSelectedBookingId(eligible[0].id);
        }
      })
      .catch(err => console.error("Bookings fetch error:", err));
  }, [hotelId]);

  const handleBookNow = () => {
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
        body: JSON.stringify({ hotelId: hotel.id, roomTypeId: selectedRoomId, checkIn, checkOut }),
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
          Hotel: bookingData.hotelName,
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

  const handleSubmitReview = async () => {
    if (!reviewComment.trim()) {
      setReviewMessage("Please write a comment.");
      return;
    }

    if (!selectedBookingId) {
      setReviewMessage("No eligible booking found.");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      setReviewMessage("Please login first.");
      return;
    }

    setSubmittingReview(true);
    setReviewMessage("");

    try {
      const res = await fetch(`http://localhost:3001/api/hotels/${hotelId}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          bookingId: selectedBookingId,
          rating: reviewRating,
          comment: reviewComment
        })
      });

      if (res.ok) {
        setReviewMessage("Review submitted successfully!");
        setReviewComment("");
        setReviewRating(5);
        setShowReviewForm(false);

        // Refresh hotel data for updated reviews
        const updatedHotel = await fetch(`http://localhost:3001/api/hotels/${hotelId}`).then(r => r.json());
        setHotel(updatedHotel);
      } else {
        const errData = await res.json();
        setReviewMessage(errData.message || "Failed to submit review.");
      }
    } catch (err) {
      setReviewMessage("Error submitting review.");
    } finally {
      setSubmittingReview(false);
    }
  };

  const selectedRoom = hotel?.rooms.find(r => r.id === selectedRoomId);
  let totalPrice = 0;
  if (checkIn && checkOut && selectedRoom) {
    const nights = (new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24);
    if (nights > 0) totalPrice = nights * selectedRoom.priceNight;
  }

  if (loading) {
    return (
      <div className="hotel-search-wrapper">
        <h1>Loading hotel...</h1>
      </div>
    );
  }

  if (!hotel) {
    return (
      <div className="hotel-search-wrapper">
        <h1>Hotel not found</h1>
      </div>
    );
  }

  return (
    <div className="hotel-search-wrapper hotel-detail-wrapper">

      <div className="hotel-list">
        <div className={`hotel-main-card ${expandedHotelId === hotel.id ? 'is-expanded' : ''}`}>
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
                onClick={(e) => { e.stopPropagation(); handleBookNow(); }}
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
      </div>

      {/* Add a Review Section */}
      <div className="review-section">
        {bookingsForHotel.length > 0 ? (
          <>
            {!showReviewForm ? (
              <button
                className="add-review-btn"
                onClick={() => setShowReviewForm(true)}
              >
                Add a Review
              </button>
            ) : (
              <div className="review-form-card">
                <h3>Write Your Review</h3>

                {bookingsForHotel.length > 1 && (
                  <div className="review-field">
                    <label>Select Booking</label>
                    <select
                      value={selectedBookingId}
                      onChange={(e) => setSelectedBookingId(e.target.value)}
                    >
                      {bookingsForHotel.map(b => (
                        <option key={b.id} value={b.id}>
                          {b.bookingCode} — {b.roomType.type} ({b.status === "CHECKED_IN" ? "Checked In" : "Confirmed"})
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                <div className="review-field">
                  <label>Rating</label>
                  <div className="star-rating-input">
                    {[1, 2, 3, 4, 5].map(star => (
                      <button
                        key={star}
                        className={`star-btn ${star <= reviewRating ? 'active' : ''}`}
                        onClick={() => setReviewRating(star)}
                        type="button"
                      >
                        ★
                      </button>
                    ))}
                  </div>
                </div>

                <div className="review-field">
                  <label>Comment</label>
                  <textarea
                    value={reviewComment}
                    onChange={(e) => setReviewComment(e.target.value)}
                    placeholder="Share your experience..."
                    rows={4}
                  />
                </div>

                {reviewMessage && (
                  <p className={`review-msg ${reviewMessage.includes("success") ? "success" : "error"}`}>
                    {reviewMessage}
                  </p>
                )}

                <div className="review-form-actions">
                  <button
                    className="submit-review-btn"
                    onClick={handleSubmitReview}
                    disabled={submittingReview}
                  >
                    {submittingReview ? "Submitting..." : "Submit Review"}
                  </button>
                  <button
                    className="cancel-review-btn"
                    onClick={() => {
                      setShowReviewForm(false);
                      setReviewMessage("");
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <p className="no-review-msg">
            {isLoggedIn
              ? "No eligible bookings to review for this hotel."
              : "Login to add a review for this hotel."}
          </p>
        )}

        {reviewMessage && !showReviewForm && (
          <p className={`review-msg ${reviewMessage.includes("success") ? "success" : "error"}`}>
            {reviewMessage}
          </p>
        )}
      </div>

      {/* Booking Modal */}
      {showModal && hotel && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>Book {hotel.name}</h2>
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
                {hotel.rooms.map(r => <option key={r.id} value={r.id}>{r.type} - ₹{r.priceNight}</option>)}
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
