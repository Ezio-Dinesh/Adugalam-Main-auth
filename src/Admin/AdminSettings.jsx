import "./AdminSettings.css";
import { NavLink } from "react-router-dom";

export default function AdminSettings() {
  return (
    <div className="settings-container">
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
        <h1>Admin Settings</h1>
        <p className="subtitle">Configure application level settings</p>

        <div className="settings">
          {/* Commission Settings */}
          <div className="card">
            <h3>Commission Settings</h3>

            <label>Admin Commission (%)</label>
            <input type="number" placeholder="Eg: 10" />

            <button>Save</button>
          </div>

          {/* Booking Settings */}
          <div className="card">
            <h3>Booking Settings</h3>

            <label>Cancellation Window (Hours)</label>
            <input type="number" placeholder="Eg: 2" />

            <label>Auto Cancel Unpaid Bookings</label>
            <select>
              <option>Enable</option>
              <option>Disable</option>
            </select>

            <button>Save</button>
          </div>

          {/* Vendor Settings */}
          <div className="card">
            <h3>Vendor Controls</h3>

            <label>Vendor Approval</label>
            <select>
              <option>Manual Approval</option>
              <option>Auto Approval</option>
            </select>

            <label>Max Turfs Per Vendor</label>
            <input type="number" placeholder="Eg: 5" />

            <button>Save</button>
          </div>

          {/* System Settings */}
          <div className="card">
            <h3>System Settings</h3>

            <label>Maintenance Mode</label>
            <select>
              <option>Off</option>
              <option>On</option>
            </select>

            <label>Default Currency</label>
            <select>
              <option>INR</option>
              <option>USD</option>
            </select>

            <button>Save</button>
          </div>
        </div>
      </main>
    </div>
  );
}
