import "./PaymentsReport.css";
import { NavLink } from "react-router-dom";

export default function PaymentsReport() {
  return (
    <div className="payments-container">
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
        <h1>Payments & Reports</h1>
        <p className="subtitle">
          Track revenue, commissions, and transactions
        </p>

        {/* Summary */}
        <div className="summary">
          <div className="card">
            <h3>Total Revenue</h3>
            <p>₹4,85,000</p>
          </div>

          <div className="card">
            <h3>Vendor Earnings</h3>
            <p>₹4,10,000</p>
          </div>

          <div className="card">
            <h3>Admin Commission</h3>
            <p>₹75,000</p>
          </div>

          <div className="card">
            <h3>Total Transactions</h3>
            <p>426</p>
          </div>
        </div>

        {/* Transactions Table */}
        <table>
          <thead>
            <tr>
              <th>Transaction ID</th>
              <th>Booking ID</th>
              <th>User</th>
              <th>Vendor</th>
              <th>Amount</th>
              <th>Payment Mode</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>TXN90231</td>
              <td>#BK1021</td>
              <td>Arun Kumar</td>
              <td>Green Field Turf</td>
              <td>₹1200</td>
              <td>UPI</td>
              <td>
                <span className="status success">Success</span>
              </td>
            </tr>

            <tr>
              <td>TXN90232</td>
              <td>#BK1022</td>
              <td>Rahul</td>
              <td>PlayZone Sports</td>
              <td>₹1000</td>
              <td>Card</td>
              <td>
                <span className="status success">Success</span>
              </td>
            </tr>

            <tr>
              <td>TXN90233</td>
              <td>#BK1023</td>
              <td>Suresh</td>
              <td>Urban Turf</td>
              <td>₹900</td>
              <td>UPI</td>
              <td>
                <span className="status failed">Failed</span>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}
