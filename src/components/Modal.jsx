import React from "react";
import "./Modal.css";
import { List } from "./List";
export const Modal = ({ modalData, handleModal }) => {
  return (
    <>
      <div id="modalBg" onClick={() => handleModal()}>
        <p id="modalBgText">Click / Tap here to go back</p>
      </div>
      <article id="modal" className="requires-no-scroll">
        <section id="modalHeader">
          <h2>{modalData.Name}</h2>

          <h3>
            {modalData.Tech.map((tech, index) => {
              return index !== modalData.Tech.length - 1
                ? tech.padEnd(tech.length + 4, " | ")
                : tech;
            })}
          </h3>
          <p className="italic">{modalData.Institution || modalData.Reason}</p>
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

        <List section="takeaway" listData={modalData.TakeAway} />
        {modalData.Links && (
          <section id="links">
            <h2>Links</h2>
            <h4 id="modalLinks">
              {Object.entries(modalData?.Links).map((link) => {
                return (
                  <a key={link[1]} href={link[1]}>
                    {link[0]}
                  </a>
                );
              })}
            </h4>
          </section>
        )}
      </article>
    </>
  );
};
