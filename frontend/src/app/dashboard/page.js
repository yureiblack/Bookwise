'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import "./dashboard.css";
import Image from "next/image";

export default function Dashboard() {
  const [greeting, setGreeting] = useState("");
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [bookingsLoading, setBookingsLoading] = useState(true);
  const [showSearch, setShowSearch] = useState(false);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [search, setSearch] = useState({ stateId: "", cityId: "" });

  //set greetings
  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  // Fetch user profile
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return;

    fetch("http://localhost:3001/api/users/me", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error("User fetch error:", err));
  }, []);

  // Fetch user's confirmed & checked-in bookings
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      setBookingsLoading(false);
      return;
    }

    fetch("http://localhost:3001/api/bookings/my", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => {
        setBookings(Array.isArray(data) ? data : []);
      })
      .catch(err => console.error("Bookings fetch error:", err))
      .finally(() => setBookingsLoading(false));
  }, []);

  //fetch states
  useEffect(() => {
    fetch("http://localhost:3001/api/locations/states")
      .then(res => res.json())
      .then(data => setStates(data))
      .catch(err => console.error("States error:", err));
  }, []);

  // Fetch cities when state changes
  useEffect(() => {
    if (!search.stateId) {
      setCities([]);
      setSearch(prev => ({ ...prev, cityId: "" }));
      return;
    }

    fetch(`http://localhost:3001/api/locations/cities?stateId=${search.stateId}`)
      .then(res => res.json())
      .then(data => setCities(data))
      .catch(err => console.error("Cities error:", err));
  }, [search.stateId]);

  const handleSearch = (e) => {
    e.preventDefault();
    window.location.href = `/hotels?cityId=${search.cityId}`;
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  const formatDate = (dateStr) => {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric"
    });
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
        {/* Left Account Panel */}
        <div className="account-section">
          <div className="account-top">
            <Image
              src="/images/light-logo.png"
              alt="Bookwise Logo"
              width={100}
              height={200}
              className="dashboard-logo"
            />
          </div>

          <div className="account-buttons">
            <Link href="/profile">
              <button>Profile</button>
            </Link>
            <button className="logout" onClick={handleLogout}>
              Logout
            </button>
          </div>
        </div>

        {/* Main Dashboard */}
        <div className="dashboard-main">
          {/* Greeting + Search */}
          <div className="welcome-section">
            <h1>{greeting}, {user?.email?.split("@")[0] || "User"}!</h1>
            <div className="search-hotels">
              <button onClick={() => setShowSearch(!showSearch)}>Search Hotels</button>
              {showSearch && (
                <form className="search-dropdowns" onSubmit={handleSearch}>
                  <select
                    value={search.stateId}
                    onChange={e => setSearch({ ...search, stateId: e.target.value })}
                    required
                  >
                    <option value="">Select State</option>
                    {states.map(state => (
                      <option key={state.id} value={state.id}>{state.name}</option>
                    ))}
                  </select>

                  <select
                    value={search.cityId}
                    onChange={e => setSearch({ ...search, cityId: e.target.value })}
                    required
                    disabled={!cities.length}
                  >
                    <option value="">Select City</option>
                    {cities.map(city => (
                      <option key={city.id} value={city.id}>{city.name}</option>
                    ))}
                  </select>

                  <button type="submit">Go</button>
                </form>
              )}
            </div>
          </div>

          {/* Your Bookings */}
          <div className="bookings-section">
            <h2>Your Bookings</h2>
            {bookingsLoading ? (
              <p className="bookings-empty">Loading bookings...</p>
            ) : bookings.length === 0 ? (
              <p className="bookings-empty">No confirmed or checked-in bookings yet.</p>
            ) : (
              <div className="bookings-grid">
                {bookings.map(b => (
                  <div key={b.id} className="booking-card">
                    <div className="booking-card-header">
                      <h3>{b.hotel.name}</h3>
                      <span className={`status-badge status-${b.status.toLowerCase().replace("_", "-")}`}>
                        {b.status === "CHECKED_IN" ? "Checked In" : "Confirmed"}
                      </span>
                    </div>
                    <div className="booking-card-body">
                      <div className="booking-detail">
                        <span className="detail-label">📍 City</span>
                        <span className="detail-value">{b.hotel.city.name}</span>
                      </div>
                      <div className="booking-detail">
                        <span className="detail-label">🛏️ Room</span>
                        <span className="detail-value">{b.roomType.type}</span>
                      </div>
                      <div className="booking-detail">
                        <span className="detail-label">📅 Check-in</span>
                        <span className="detail-value">{formatDate(b.checkIn)}</span>
                      </div>
                      <div className="booking-detail">
                        <span className="detail-label">📅 Check-out</span>
                        <span className="detail-value">{formatDate(b.checkOut)}</span>
                      </div>
                      <div className="booking-detail">
                        <span className="detail-label">🔖 Code</span>
                        <span className="detail-value booking-code">{b.bookingCode}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
