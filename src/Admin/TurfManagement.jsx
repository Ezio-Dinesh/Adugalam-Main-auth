import "./TurfManagement.css";
import { NavLink } from "react-router-dom";

export default function TurfManagement() {
  return (
    <div className="turf-container">
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
        <div className="header">
          <h1>Turf Management</h1>
          <p>Add, monitor and control all registered turfs</p>
        </div>

        {/* Add Turf */}
        <div className="card">
          <h3>Add New Turf</h3>

          <div className="form-group">
            <label>Turf Name</label>
            <input type="text" placeholder="Enter turf name" />
          </div>

          <div className="form-group">
            <label>Vendor</label>
            <select>
              <option>PlayZone Sports</option>
              <option>GreenField Sports</option>
            </select>
          </div>

          <div className="form-group">
            <label>Location</label>
            <input type="text" placeholder="Area / City" />
          </div>

          <div className="form-group">
            <label>Price per Hour (₹)</label>
            <input type="number" placeholder="1000" />
          </div>

          <button>Add Turf</button>
        </div>

        {/* Turf List */}
        <div className="card">
          <h3>Registered Turfs</h3>

          <table>
            <thead>
              <tr>
                <th>Turf Name</th>
                <th>Vendor</th>
                <th>Location</th>
                <th>Price / Hour</th>
                <th>Status</th>
                <th>Availability</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>PlayZone Turf</td>
                <td>PlayZone Sports</td>
                <td>Velachery</td>
                <td>₹1200</td>
                <td><span className="status active">Active</span></td>
                <td>
                  <span className="open">Open</span>
                </td>
                <td>
                  <button>Close Turf</button>
                </td>
              </tr>

              <tr>
                <td>GreenField Arena</td>
                <td>GreenField Sports</td>
                <td>Tambaram</td>
                <td>₹1000</td>
                <td><span className="status active">Active</span></td>
                <td>
                  <span className="closed">Closed</span>
                  <span className="time">10:00 AM – 2:00 PM</span>
                </td>
                <td>
                  <button>Open Turf</button>
                </td>
              </tr>

              <tr>
                <td>Urban Turf</td>
                <td>Urban Sports</td>
                <td>OMR</td>
                <td>₹900</td>
                <td><span className="status disabled">Disabled</span></td>
                <td>
                  <span className="closed">Closed</span>
                  <span className="time">Maintenance</span>
                </td>
                <td>
                  <button disabled>Disabled</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
