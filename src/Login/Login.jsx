import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../Loader.jsx";
import "./Login.css";

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [mobile, setMobile] = useState("");
  const [password, setPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Loader />;

  const handleLogin = () => {
    setError("");

    if (!acceptTerms) {
      setError("Please accept Terms & Conditions to continue");
      return;
    }

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {
      setError("No account found. Please sign up.");
      return;
    }

    if (mobile === savedUser.mobile && password === savedUser.password) {
      localStorage.setItem("isAuthenticated", "true");

      // 🔥 Update navbar instantly
      window.dispatchEvent(new Event("authChange"));

      navigate("/");
    } else {
      setError("Invalid mobile number or password");
    }
  };

  return (
    <div className="page">
      <div className="card">
        <h2>Login</h2>
        <p className="subtitle">Welcome back! Please login</p>

        {error && <p className="error-text">{error}</p>}

        <label>Mobile Number</label>
        <input
          type="tel"
          placeholder="Enter mobile number"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {/* Terms & Conditions */}
        <div className="terms-box">
          <input
            type="checkbox"
            id="terms"
            checked={acceptTerms}
            onChange={(e) => setAcceptTerms(e.target.checked)}
          />
          <label htmlFor="terms">
            I accept the{" "}
            <Link to="/Terms" target="_blank">
              Terms & Conditions
            </Link>
          </label>
        </div>

        <button
          className="signup-btn"
          onClick={handleLogin}
          disabled={!acceptTerms}
        >
          Login
        </button>

        <p className="login-text">
          Don’t have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
