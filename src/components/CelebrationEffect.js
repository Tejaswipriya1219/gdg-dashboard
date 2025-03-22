import React from "react";
import Confetti from "react-confetti";
import "../styles/CelebrationEffect.css"; 


const CelebrationEffect = () => {
  return (
    <div className="celebration-container">
      <Confetti />
      <h2 className="celebration-text">🎉 Congratulations! You're Registered! 🎉</h2>
    </div>
  );
};

export default CelebrationEffect;
