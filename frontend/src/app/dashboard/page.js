'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
// import "./dashboard.css";

export default function Dashboard() {
  const [greeting, setGreeting] = useState("");
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [search, setSearch] = useState({
    state: "",
    city: "",
    date: "",
    roomType: ""
  });

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting("Good morning");
    else if (hour < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  useEffect(() => {
    fetch("/api/users/me")
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    fetch("/api/bookings/upcoming")
      .then(res => res.json())
      .then(data => setBookings(data))
      .catch(err => console.error(err));
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const query = new URLSearchParams(search).toString();
    window.location.href = `/hotels/search?${query}`;
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-brand">Bookwise</div>
        <div className="nav-links">
          <Link href="/bookings">Bookings</Link>
          <Link href="/profile">Profile</Link>
        </div>
      </nav>

      <div className="dashboard-wrapper">
        <div className="dashboard-container">
          {/* Welcome */}
          <div className="welcome-section">
            <h1>{greeting}, {user?.email?.split("@")[0] || "User"}!</h1>
            <div className="quick-buttons">
              <Link href="/bookings">
                <button>View Bookings</button>
              </Link>
              <Link href="/hotels/search">
                <button>Search Hotels</button>
              </Link>
            </div>
          </div>

          {/* Quick Booking */}
          <div className="booking-section">
            <h2>Quick Booking</h2>
            <form className="booking-form" onSubmit={handleSearch}>
              <select
                value={search.state}
                onChange={(e) => setSearch({ ...search, state: e.target.value })}
                required
              >
                <option value="">Select State</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Delhi">Delhi</option>
              </select>

              <select
                value={search.city}
                onChange={(e) => setSearch({ ...search, city: e.target.value })}
                required
              >
                <option value="">Select City</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Delhi">Delhi</option>
              </select>

              <input
                type="date"
                value={search.date}
                onChange={(e) => setSearch({ ...search, date: e.target.value })}
                required
              />

              <select
                value={search.roomType}
                onChange={(e) => setSearch({ ...search, roomType: e.target.value })}
                required
              >
                <option value="">Room Type</option>
                <option value="SINGLE">Single</option>
                <option value="DOUBLE">Double</option>
              </select>

              <button type="submit">Search Hotels</button>
            </form>
          </div>

          {/* Upcoming Bookings */}
          <div className="bookings-section">
            <h2>Upcoming Bookings</h2>
            {bookings.length === 0 ? (
              <p>No upcoming bookings.</p>
            ) : (
              <table>
                <thead>
                  <tr>
                    <th>Hotel</th>
                    <th>City</th>
                    <th>Check-in</th>
                    <th>Check-out</th>
                    <th>Room Type</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((b) => (
                    <tr key={b.id}>
                      <td>{b.hotel.name}</td>
                      <td>{b.hotel.city.name}</td>
                      <td>{b.checkIn}</td>
                      <td>{b.checkOut}</td>
                      <td>{b.roomType}</td>
                      <td className={b.status.toLowerCase()}>{b.status}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Account Section */}
          <div className="account-section">
            <h2>Account Settings</h2>
            <Link href="/profile">
              <button>Profile</button>
            </Link>
            <Link href="/bookings">
              <button>Past Bookings</button>
            </Link>
            <button
              className="logout"
              onClick={() => {
                fetch("/api/auth/logout", { method: "POST" }).then(() => window.location.href = "/");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </>
  );
}