'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import "./dashboard.css";
import Image from "next/image";

export default function Dashboard() {
  const [greeting, setGreeting] = useState("");
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
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

  // Fetch user
  useEffect(() => {
    fetch("/users/me")
      .then(res => res.json())
      .then(data => setUser(data))
      .catch(err => console.error(err));
  }, []);

  // Fetch all bookings
  useEffect(() => {
    fetch("/bookings")
      .then(res => res.json())
      .then(data => setBookings(data))
      .catch(err => console.error(err));
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
    const query = new URLSearchParams(search).toString();
    window.location.href = `/hotels?cityId=${search.cityId}`;
  };

  return (
    <div className="dashboard-wrapper">
      <div className="dashboard-container">
        {/* Left Account Panel */}
        <div className="account-section">

          {/* Logo Top */}
          <div className="account-top">
            <Image
              src="/images/light-logo.png"
              alt="Bookwise Logo"
              width={100}
              height={200}
              className="dashboard-logo"
            />
          </div>

          {/* Buttons Bottom */}
          <div className="account-buttons">
            <Link href="/profile">
              <button>Profile</button>
            </Link>

            <button
              className="logout"
              onClick={() =>
                fetch("/api/auth/logout", { method: "POST" })
                  .then(() => (window.location.href = "/"))
              }
            >
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
            {bookings.length === 0 ? (
              <p>No bookings yet.</p>
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
                  {bookings.map(b => (
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
        </div>
      </div>
    </div>
  );
}
