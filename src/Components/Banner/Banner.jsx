import React, { useState, useEffect } from "react";
import "./Banner.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";





export default function Banner() {


const navigate=useNavigate();


  const slides = [
    {
      title: "Quick ground booking !",
      text: "Browse, book, and enjoy fun family moments.",
      btn: "Book now",
      img: "/banner4.jpg",
      path:"Bookhome"
    },
    {
      title: "Sports Event Booking !",
      text: "Find and book your favorite events.",
      btn: "Explore",
      img: "/banner2.jpg",
      path:"events"
    },
    {
      title: "Tournament Registration !",
      text: "Join and participate in tournaments.",
      btn: "Register",
      img: "/banner1.jpg",
      path:"tournaments"
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto slide
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${slides[index].img})` }}
    >
      <div className="banner-overlay">
        {/* Left Arrow */}
        <button className="arrow left-arrow" onClick={prevSlide}>
          <FaChevronLeft />
        </button>

        {/* Content */}
        <div className="banner-content" onClick={()=> navigate(`/${slides[index].path}`)}>
          <h2>{slides[index].title}</h2>
          <p>{slides[index].text}</p>
          <button>{slides[index].btn}</button>
        </div>

        {/* Right Arrow */}
        <button className="arrow right-arrow" onClick={nextSlide}>
          <FaChevronRight />
        </button>
      </div>

      {/* 🔘 Dots Indicator */}
      <div className="dots">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${index === i ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}