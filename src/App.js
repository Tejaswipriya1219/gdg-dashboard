import React, { useState, useEffect } from "react";
import Countdown from "./components/Countdown";
import SpeakerSchedule from "./components/SpeakerSchedule";
import EventStats from "./components/EventStats";
import LoadingScreen from "./components/LoadingScreen";
import Confetti from "react-confetti"; // 🎉 Import Confetti for celebration effect
import gdgLogo from "./assets/gdg.logo.png";
import "./styles/App.css";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("dashboard");
  const [showRegister, setShowRegister] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [registrationData, setRegistrationData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  useEffect(() => {
    setLoading(false);
  }, []);

  const handleChange = (e) => {
    setRegistrationData({ ...registrationData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!registrationData.name || !registrationData.email || !registrationData.phone) {
      alert("⚠ Please fill in all fields before submitting!");
      return;
    }

    setShowCelebration(true);
    setTimeout(() => setShowCelebration(false), 5000); // 🎉 Hide after 5s

    // 🔥 Reset form after submission
    setTimeout(() => {
      setRegistrationData({ name: "", email: "", phone: "" });
      setShowRegister(false);
    }, 5000);
  };

  return (
    <div className="app-container">
      {loading ? (
        <LoadingScreen />
      ) : (
        <>
          <h1 className="dashboard-title">🚀 GDG TechSphere 2025: The Future Unleashed</h1>
          <img src={gdgLogo} alt="GDG Logo" className="gdg-logo" />

          <div className="event-countdown-box">
            <Countdown />
          </div>

          <div className="buttons-container">
            <button
              className="view-speakers-btn"
              onClick={() => setView(view === "dashboard" ? "speakers" : "dashboard")}
            >
              {view === "dashboard" ? "🎤 View Speaker Schedule" : "🏠 View Dashboard"}
            </button>

            <button className="register-btn" onClick={() => setShowRegister(!showRegister)}>
              ✍ Register
            </button>
          </div>

          {showRegister && (
            <div className="registration-form">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                className="input-field"
                value={registrationData.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input-field"
                value={registrationData.email}
                onChange={handleChange}
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                className="input-field"
                value={registrationData.phone}
                onChange={handleChange}
              />
              <button className="submit-btn" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          )}

          <div className="view-container">
            {view === "dashboard" ? <EventStats /> : <SpeakerSchedule />}
          </div>

          {/* 🎉 Celebration Effect */}
          {showCelebration && (
            <div className="celebration-container">
              <Confetti numberOfPieces={500} />
              <h2 className="celebration-text">🎉 Congratulations, {registrationData.name}! You're Registered! 🎊</h2>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default App;
