import React from "react";
import "../styles/SpeakerSchedule.css";

const speakers = [
  { name: "🔹 Dr. Latha Sri", topic: "AI & The Next Decade" },
  { name: "🔹 Aditya", topic: "Building Scalable Web Apps" },
  { name: "🔹 Priya", topic: "Design Thinking for Developers" },
  { name: "🔹Mohith", topic: "Cybersecurity & Ethical Hacking" },
];

const SpeakerSchedule = () => {
  return (
    <div className="speaker-section">
      <h2 className="section-title">🎤 Meet Our Esteemed Speakers</h2>
      <div className="underline"></div>
      <p className="section-intro">
        Experience insights from industry leaders and innovators shaping the future of tech.
      </p>

      <div className="speaker-grid">
        {speakers.map((speaker, index) => (
          <div key={index} className="speaker-card">
            <h3 className="speaker-name">{speaker.name}</h3>
            <p className="speaker-topic">{speaker.topic}</p>
          </div>
        ))}
      </div>

      <p className="event-highlight">
        ✨ Stay tuned for live Q&A sessions and in-depth tech discussions!
      </p>
    </div>
  );
};

export default SpeakerSchedule;
