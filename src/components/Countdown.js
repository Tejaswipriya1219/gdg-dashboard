import React, { useState, useEffect } from "react";
import "../styles/Countdown.css";

const Countdown = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-04-10T00:00:00"); // Set event date
    const now = new Date();
    const difference = eventDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      progress: ((eventDate - now) / (eventDate - new Date("2024-03-22T00:00:00"))) * 100, // Progress %
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown-container">
      <div className="countdown-box">
        <h2 className="event-start-text">Event Starts In</h2>
        <div className="countdown-timer">
          <span className="time">{String(timeLeft.days).padStart(2, "0")}</span>
          <span className="label">Days</span>
        </div>
        <div className="countdown-timer">
          <span className="time">{String(timeLeft.hours).padStart(2, "0")}</span>
          <span className="label">Hours</span>
        </div>
        <div className="countdown-timer">
          <span className="time">{String(timeLeft.minutes).padStart(2, "0")}</span>
          <span className="label">Minutes</span>
        </div>
        <div className="countdown-timer">
          <span className="time">{String(timeLeft.seconds).padStart(2, "0")}</span>
          <span className="label">Seconds</span>
        </div>
        <div className="countdown-progress">
          <div className="progress-bar" style={{ width: `${timeLeft.progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
