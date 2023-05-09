import React from "react";

export const Button = ({ text, onClick, gradient }) => {
  return (
    <button
      style={{
        /* background: `linear-gradient(to right,rgb(73, 140, 82) ${gradient}%,rgb(37, 37, 48) ${gradient}%)`,*/
        background: `linear-gradient(90deg, rgb(37, 37, 48) 0%,rgb(253, 194, 29) ${
          gradient * 0.33
        }%, rgb(4 170 109) ${gradient}%, rgb(37, 37, 48) ${gradient}%)`,
      }}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
