import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
import { NavLink } from "react-router-dom";
import "./Dashboard.css"

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Bookings",
        data: [40, 55, 60, 70, 90, 120, 110],
        backgroundColor: "#22c55e",
        barThickness: 14,
      },
      {
        label: "Revenue (₹)",
        data: [1200, 1500, 1600, 1800, 2200, 2800, 2600],
        backgroundColor: "#14532d",
        barThickness: 14,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: { beginAtZero: true },
      x: { grid: { display: false } },
    },
    plugins: {
      legend: { position: "top" },
    },
  };

  return (
    <div className="dashboard-container">
      {/* SIDEBAR */}
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

      {/* MAIN */}
      <main className="main">
        <header className="header">
          <h1>Adugalam – Admin Dashboard</h1>
          <p>Complete control over turfs, bookings, vendors & users</p>
        </header>

        {/* CARDS */}
        <section className="stats-cards">
  <div className="stat-card">
    <h4>Total Users</h4>
    <p>1,245</p>
  </div>
  <div className="stat-card">
    <h4>Total Vendors</h4>
    <p>87</p>
  </div>
  <div className="stat-card">
    <h4>Total Turfs</h4>
    <p>134</p>
  </div>
  <div className="stat-card">
    <h4>Total Bookings</h4>
    <p>3,912</p>
  </div>
</section>

        {/* TODAY */}
        <section className="today">
          <h2>Today’s Overview</h2>
          <div className="today-box">
            <div className="today-card">Bookings <span>42</span></div>
            <div className="today-card">Revenue <span>₹1850</span></div>
            <div className="today-card">New Users <span>6</span></div>
            <div className="today-card">New Vendors <span>1</span></div>
          </div>
        </section>

        {/* ANALYTICS */}
        <section className="analytics">
          <h2>Booking & Revenue Comparison</h2>
          <div className="chart-wrapper">
            <Bar data={data} options={options} />
          </div>
        </section>

        <footer className="footer">
          © 2025 Adugalam Turf Booking Platform
        </footer>
      </main>
    </div>
  );
}
