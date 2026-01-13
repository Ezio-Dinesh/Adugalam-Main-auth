import "./BookingManagement.css";
import { NavLink } from "react-router-dom";

export default function BookingManagement1() {
  return (
    <div className="admin-layout">
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
            <NavLink to="/PaymentsReport">Payments & Reports</NavLink>
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
        <h1>Booking Management</h1>
        <p className="subtitle">View and manage all turf bookings</p>

        <table>
          <thead>
            <tr>
              <th>Booking ID</th>
              <th>User</th>
              <th>Turf</th>
              <th>Date</th>
              <th>Time Slot</th>
              <th>Game</th>
              <th>Amount</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>#BK1021</td>
              <td>Arun Kumar</td>
              <td>Green Field Arena</td>
              <td>20-Feb-2025</td>
              <td>6 PM - 7 PM</td>
              <td>Football</td>
              <td>₹1200</td>
              <td><span className="status confirmed">Confirmed</span></td>
              <td>
                <button className="cancel">Cancel</button>
                <button className="view">View</button>
              </td>
            </tr>

            <tr>
              <td>#BK1022</td>
              <td>Rahul</td>
              <td>PlayZone Turf</td>
              <td>21-Feb-2025</td>
              <td>7 PM - 8 PM</td>
              <td>Cricket</td>
              <td>₹1000</td>
              <td><span className="status pending">Pending</span></td>
              <td>
                <button className="cancel">Cancel</button>
                <button className="view">View</button>
              </td>
            </tr>

            <tr>
              <td>#BK1023</td>
              <td>Suresh</td>
              <td>Urban Kick Arena</td>
              <td>22-Feb-2025</td>
              <td>5 PM - 6 PM</td>
              <td>Badminton</td>
              <td>₹900</td>
              <td><span className="status cancelled">Cancelled</span></td>
              <td>
                <button className="view">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}
