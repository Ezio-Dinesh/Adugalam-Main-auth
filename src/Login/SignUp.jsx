import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState("");
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  // 🔐 Send OTP
  const sendOtp = () => {
    if (!/^\d{10}$/.test(mobile)) {
      setError("Enter valid 10-digit mobile number");
      return;
    }

    const otpCode = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otpCode);

    console.log("OTP (Demo):", otpCode); // 🔥 For testing
    alert(`OTP sent: ${otpCode}`);

    setError("");
    setStep(2);
  };

  // 🔐 Verify OTP
  const verifyOtp = () => {
    if (otp !== generatedOtp) {
      setError("Invalid OTP");
      return;
    }

    setError("");
    setStep(3);
  };

  // 🔐 Create Account
  const createAccount = () => {
    if (!password || password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    localStorage.setItem(
      "user",
      JSON.stringify({ mobile, password })
    );

    alert("Account created successfully ✅");
    navigate("/login");
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h2>Create Account</h2>

        {error && <p className="error-text">{error}</p>}

        {/* STEP 1: MOBILE */}
        {step === 1 && (
          <>
            <input
              placeholder="Mobile Number"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <button onClick={sendOtp} className="signup-btn">
              Send OTP
            </button>
          </>
        )}

        {/* STEP 2: OTP */}
        {step === 2 && (
          <>
            <input
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
            <button onClick={verifyOtp} className="signup-btn">
              Verify OTP
            </button>
          </>
        )}

        {/* STEP 3: PASSWORD */}
        {step === 3 && (
          <>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button onClick={createAccount} className="signup-btn">
              Create Account
            </button>
          </>
        )}

        <p className="login-text">
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
