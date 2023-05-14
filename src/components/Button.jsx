import React from "react";

export const Button = ({ text, onClick, gradient, isInProgress }) => {
  return (
    <button
      style={{
        background: `linear-gradient(90deg, rgb(37, 37, 48) 0%,rgb(253, 194, 29) ${
          gradient * 0.33
        }%, rgb(4 170 109) ${gradient}%, rgb(37, 37, 48) ${gradient}%)`,
        opacity: isInProgress ? 0.5 : 1,
        pointerEvents: isInProgress && "none",
      }}
      onClick={onClick}
      disabled={isInProgress}
    >
      {text}
    </button>
  );
};
