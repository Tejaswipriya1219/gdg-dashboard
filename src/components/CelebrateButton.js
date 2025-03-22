import React from "react";
import Confetti from "react-confetti";
import { useState } from "react";
import "../styles/App.css";

const CelebrateButton = () => {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleCelebrate = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  return (
    <div className="celebrate-container">
      {showConfetti && <Confetti />}
      <button className="celebrate-btn" onClick={handleCelebrate}>
        🎉 Celebrate
      </button>
    </div>
  );
};

export default CelebrateButton;
