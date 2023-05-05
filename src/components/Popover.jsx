import React from "react";
import "./Popover.css";
import { List } from "./List";
export const Popover = ({ modalData, handleModal }) => {
  console.dir(modalData);

  return (
    <>
      <div id="popoverBg" onClick={() => handleModal()}>
        <p id="popoverBgText">Click/Tap here to go back</p>
      </div>
      <article id="popover" className="requires-no-scroll">
        <section id="modalHeader">
          <h2>{modalData.Name}</h2>
          <h3>{modalData.Tech.map((tech) => ` ${tech} `)}</h3>
          <p>{modalData.Institution || modalData.Reason}</p>
        </section>
        <section id="things">
          <h2>Things</h2>
          {modalData.Things.Achieved ? (
            <List section="Achieved" listData={modalData.Things.Achieved} />
          ) : (
            <List section="Toimprove" listData={modalData.Things.ToImprove} />
          )}

          <List section="Learned" listData={modalData.Things.Learned} />

          <List section="ToDo" listData={modalData.Things.ToDo} />
        </section>
        <section id="takeaway">
          <h2>Take Away</h2>
          <p>{modalData.TakeAway}</p>
        </section>
      </article>
    </>
  );
};
