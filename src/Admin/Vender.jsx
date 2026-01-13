import "./VenderManagement.css";
import { NavLink } from "react-router-dom";

export default function Vender() {
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
            <NavLink to="/PaymentsReports">Payments & Reports</NavLink>
          </li>

          <li>
            <NavLink to="/AdmingSettings">Settings</NavLink>
          </li>

          <li className="logout">
            <NavLink to="/login">Logout</NavLink>
          </li>
        </ul>
      </aside>
      {/* Main Content */}
      <main className="main">
        <h1>Vendor Management</h1>
        <p className="subtitle">Approve, reject, enable or disable turf vendors</p>

        <table>
          <thead>
            <tr>
              <th>Vendor Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Turf Name</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Green Field Turf</td>
              <td>greenfield@gmail.com</td>
              <td>9876543210</td>
              <td>Green Field Arena</td>
              <td>
                <span className="status pending">Pending</span>
              </td>
              <td>
                <button className="approve">Approve</button>
                <button className="reject">Reject</button>
                <button className="view">View</button>
              </td>
            </tr>

            <tr>
              <td>PlayZone Sports</td>
              <td>playzone@gmail.com</td>
              <td>9123456780</td>
              <td>PlayZone Turf</td>
              <td>
                <span className="status active-status">Active</span>
              </td>
              <td>
                <button className="disable">Disable</button>
                <button className="view">View</button>
              </td>
            </tr>

            <tr>
              <td>Urban Kick</td>
              <td>urbankick@gmail.com</td>
              <td>9988776655</td>
              <td>Urban Kick Arena</td>
              <td>
                <span className="status disabled">Disabled</span>
              </td>
              <td>
                <button className="enable">Enable</button>
                <button className="view">View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </main>

    </div>
  );
}
