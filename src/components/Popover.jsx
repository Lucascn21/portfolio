import React from "react";
import "./Popover.css";
export const Popover = ({ modalData, handleModal }) => {
  console.dir(modalData);
  return (
    <div onClick={() => handleModal()} id="popover">
      <h2>{modalData.Name}</h2>
      <h3>{modalData.Institution}</h3>
      <h3>{modalData.Tech.map(tech=>` ${tech} `)}</h3>
      <p>{modalData.TakeAway}</p>
      <h4>Things</h4>
      <h5>Achieved</h5>
      <p>{modalData.Things.Achieved}</p>
      <h5>Learned</h5>
      <p>{modalData.Things.Learned}</p>
      <h5>ToDo</h5>
      <p>{modalData.Things.ToDo}</p>
    </div>
  );
};
