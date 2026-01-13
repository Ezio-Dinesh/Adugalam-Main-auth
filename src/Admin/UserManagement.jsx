import { useState } from "react";
import "./UserManagement.css";
import { NavLink } from "react-router-dom";


const reviewsData = {
  "Arun Kumar": [
    {
      rating: "⭐ 4.5",
      date: "15 Mar 2025",
      turf: "GreenField Arena",
      game: "Football",
      vendor: "PlayZone Sports",
      comment: "Well maintained turf and good lighting.",
    },
    {
      rating: "⭐ 4.0",
      date: "01 Mar 2025",
      turf: "City Sports Hub",
      game: "Cricket",
      vendor: "CityPlay",
      comment: "Good experience overall.",
    },
  ],
  "Suresh Raj": [
    {
      rating: "⭐ 3.5",
      date: "20 Feb 2025",
      turf: "Urban Turf",
      game: "Football",
      vendor: "Urban Sports",
      comment: "Parking was limited.",
    },
  ],
};

export default function UserManagement() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState("");
  const [reviews, setReviews] = useState([]);

  const openReviews = (user) => {
    setSelectedUser(user);
    setReviews(reviewsData[user] || []);
    setIsOpen(true);
  };

  const closeReviews = () => {
    setIsOpen(false);
  };

  return (
    <div className="container">
      {/* Sidebar */}
        <aside className="sidebar">
        <h2>Adugalam</h2>
        <ul>
          <li>
            <NavLink to="/Dashboard" end className={({ isActive }) => isActive ? "active" : ""}>
              Dashboard
            </NavLink>
          </li>

          <li>
            <NavLink to="/Vendor">Vendor Management</NavLink>
          </li>

          <li>
            <NavLink to="/UserManagement">User Management</NavLink>
          </li>

          <li>
            <NavLink to="/TurfManagement">Turf Management</NavLink>
          </li>

          <li>
            <NavLink to="/BookingManagement">Booking Management</NavLink>
          </li>

          <li>
            <NavLink to="/PaymentsReports">Payments & Reports</NavLink>
          </li>

          <li>
            <NavLink to="/AdminSettings">Settings</NavLink>
          </li>

          <li className="logout">
            <NavLink to="/login">Logout</NavLink>
          </li>
        </ul>
      </aside>
      {/* Main */}
      <main className="main">
        <h1>User Management</h1>
        <p className="subtitle">Manage users and monitor their reviews</p>

        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th>Reviews</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Arun Kumar</td>
              <td>arun@gmail.com</td>
              <td>9876543210</td>
              <td>
                <span className="status active-user">Active</span>
              </td>
              <td>
                ⭐ 4.5 (2) <br />
                <button
                  className="review-btn"
                  onClick={() => openReviews("Arun Kumar")}
                >
                  View Reviews
                </button>
              </td>
              <td>
                <button className="block">Block</button>
                <button className="view">View</button>
              </td>
            </tr>

            <tr>
              <td>Suresh Raj</td>
              <td>suresh@gmail.com</td>
              <td>9123456780</td>
              <td>
                <span className="status blocked">Blocked</span>
              </td>
              <td>
                ⭐ 3.5 (1) <br />
                <button
                  className="review-btn"
                  onClick={() => openReviews("Suresh Raj")}
                >
                  View Reviews
                </button>
              </td>
              <td>
                <button className="unblock">Unblock</button>
                <button className="view">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </main>

      {/* Modal */}
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeReviews}>
              ×
            </span>
            <h2>{selectedUser} Reviews</h2>

            {reviews.map((r, index) => (
              <div className="review-card" key={index}>
                <div className="review-header">
                  <span className="rating">{r.rating}</span>
                  <span className="date">{r.date}</span>
                </div>
                <p><strong>Turf:</strong> {r.turf}</p>
                <p><strong>Game:</strong> {r.game}</p>
                <p><strong>Vendor:</strong> {r.vendor}</p>
                <p className="comment">"{r.comment}"</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
