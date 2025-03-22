import React from "react";
import "../styles/ToggleButton.css";

const ToggleButton = ({ view, toggleView }) => {
  return (
    <button
      className={`toggle-btn ${view === "dashboard" ? "active" : ""}`}
      onClick={toggleView}
    >
      {view === "dashboard" ? "📅 View Speakers" : "🏠 Back to Dashboard"}
    </button>
  );
};

export default ToggleButton;
