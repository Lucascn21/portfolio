import React from "react";
import "./Popover.css";
import { List } from "./List";
export const Popover = ({ modalData, handleModal }) => {
  console.dir(modalData);

  return (
    <article onClick={() => handleModal()} id="popover">
      <section id="modalHeader">
        <h2>{modalData.Name}</h2>
        <h3>{modalData.Institution}</h3>
        <h3>{modalData.Tech.map((tech) => ` ${tech} `)}</h3>
      </section>
      <section id="things">
        <h3>Things</h3>
        {modalData.Things.Achieved ? (
          <List section="Achieved" listData={modalData.Things.Achieved} />
        ) : (
          <List section="To improve" listData={modalData.Things.ToImprove} />
        )}

        <List section="Learned" listData={modalData.Things.Learned} />

        <List section="ToDo" listData={modalData.Things.ToDo} />
      </section>
      <section id="takeaway">
        <h5>Take Away</h5>
        <p>{modalData.TakeAway}</p>
      </section>
    </article>
  );
};
