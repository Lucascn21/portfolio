import React from "react";

export const Button = ({ text, onClick, gradient }) => {
  return (
    <button
      style={{
        background: `linear-gradient(to right,rgb(73, 140, 82) ${gradient}%,rgb(37, 37, 48) ${gradient}%)`,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
