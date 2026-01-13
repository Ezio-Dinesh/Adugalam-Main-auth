import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  // 🔄 Sync auth state (same tab + other tabs)
  useEffect(() => {
    const syncAuth = () => {
      setIsAuth(!!localStorage.getItem("isAuthenticated"));
    };

    syncAuth();
    window.addEventListener("storage", syncAuth);
    window.addEventListener("authChange", syncAuth);

    return () => {
      window.removeEventListener("storage", syncAuth);
      window.removeEventListener("authChange", syncAuth);
    };
  }, []);

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <header className="navbar">
        <div className="navbar-container">
          <NavLink to="/" className="navbar-logo">
            Adugalam
          </NavLink>

          <nav className="navbar-menu">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/play">Play</NavLink>
            <NavLink to="/Bookhome">Book</NavLink>
            <NavLink to="/train">Train</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/tournaments">Tournaments</NavLink>
            <NavLink to="/events">Events</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          <div className="navbar-actions">
            <NavLink to="/download" className="btn-outline">
              Download App
            </NavLink>

            <NavLink to="/partner" className="btn-primary">
              Partner With Us
            </NavLink>

            {!isAuth && (
              <NavLink to="/login" className="btn-login">
                Login
              </NavLink>
            )}

            {isAuth && (
              <NavLink to="/profile" className="profile-icon">
                <CgProfile size={28} />
              </NavLink>
            )}
          </div>

          <button className="menu-toggle" onClick={() => setOpen(true)}>
            <FiMenu size={22} />
          </button>
        </div>

        <div className="navbar-shadow" />
      </header>

      {/* ================= MOBILE SIDEBAR ================= */}
      {open && (
        <div className="sidebar-overlay" onClick={() => setOpen(false)} />
      )}

      <aside className={`mobile-sidebar ${open ? "open" : ""}`}>
        {/* 🔥 MOBILE HEADER */}
        <div className="sidebar-header">
          <span className="sidebar-logo">Adugalam</span>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {/* ✅ PROFILE ICON AFTER LOGIN (MOBILE) */}
            {isAuth && (
              <NavLink
                to="/profile"
                className="profile-icon-mobile"
                onClick={() => setOpen(false)}
              >
                <CgProfile size={20} />
              </NavLink>
            )}

            <button onClick={() => setOpen(false)}>
              <FiX size={22} />
            </button>
          </div>
        </div>

        {/* MOBILE MENU (same as desktop) */}
        <nav className="sidebar-links">
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink to="/play" onClick={() => setOpen(false)}>Play</NavLink>
          <NavLink to="/book" onClick={() => setOpen(false)}>Book</NavLink>
          <NavLink to="/train" onClick={() => setOpen(false)}>Train</NavLink>
          <NavLink to="/shop" onClick={() => setOpen(false)}>Shop</NavLink>
          <NavLink to="/tournaments" onClick={() => setOpen(false)}>Tournaments</NavLink>
          <NavLink to="/events" onClick={() => setOpen(false)}>Events</NavLink>
          <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
        </nav>

        {/* MOBILE ACTIONS */}
        <div className="sidebar-actions">
          <NavLink to="/download" onClick={() => setOpen(false)}>
            Download App
          </NavLink>

          <NavLink to="/partner" onClick={() => setOpen(false)}>
            Partner With Us
          </NavLink>

          {!isAuth && (
            <NavLink to="/login" onClick={() => setOpen(false)}>
              Login
            </NavLink>
          )}
        </div>
      </aside>
    </>
  );
};

export default Navbar;
