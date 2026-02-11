'use client'

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const bookingId = searchParams.get("bookingId");

  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!bookingId) return;

    async function fetchBooking() {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setError("You must be logged in.");
          setLoading(false);
          return;
        }

        const res = await fetch(
          `http://localhost:3001/api/bookings/${bookingId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!res.ok) {
          const errData = await res.json();
          throw new Error(errData.message || "Failed to fetch booking");
        }

        const data = await res.json();
        setBooking(data);
      } catch (err) {
        console.error("BOOKING FETCH ERROR:", err);
        setError("Failed to load booking.");
      } finally {
        setLoading(false);
      }
    }

    fetchBooking();
  }, [bookingId]);

  async function handlePayment() {
    try {
      setProcessing(true);

      const token = localStorage.getItem("token");

      if (!token) {
        setError("You must be logged in.");
        setProcessing(false);
        return;
      }

      const res = await fetch(
        "http://localhost:3001/api/payments/mock",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ bookingId }),
        }
      );

      if (!res.ok) {
        const errData = await res.json();
        throw new Error(errData.message || "Payment failed");
      }

      const data = await res.json();

      if (data.paymentStatus === "SUCCESS") {
        router.push(`/booking-success?bookingId=${bookingId}`);
      } else {
        router.push(`/payment-failed?bookingId=${bookingId}`);
      }

    } catch (err) {
      console.error("PAYMENT ERROR:", err);
      setError("Payment failed. Please try again.");
      setProcessing(false);
    }
  }

  if (!bookingId) return <p>No booking found.</p>;
  if (loading) return <p>Loading booking details...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="checkout-wrapper">
      <div className="checkout-card">
        <h1 className="checkout-title">Checkout</h1>

        {booking && (
          <>
            <div className="checkout-section">
              <h3>Hotel</h3>
              <p>{booking.hotel?.name}</p>
            </div>

            <div className="checkout-section">
              <h3>Room Type</h3>
              <p>{booking.room?.type}</p>
            </div>

            <div className="checkout-section">
              <h3>Total Amount</h3>
              <p className="checkout-price">
                ₹{booking.totalAmount}
              </p>
            </div>

            <div className="checkout-section">
              <h3>Status</h3>
              <p className="checkout-status">
                {booking.status}
              </p>
            </div>

            <button
              className="checkout-button"
              onClick={handlePayment}
              disabled={processing}
            >
              {processing ? "Processing Payment..." : "Pay Now"}
            </button>
          </>
        )}
      </div>
    </div>
  );
}
