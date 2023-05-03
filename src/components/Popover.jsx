import React from "react";
import "./Popover.css";
export const Popover = ({ handleModal }) => {
  return (
    <div id="popover">
      <button onClick={() => handleModal()}>asdasd</button>
    </div>
  );
};
