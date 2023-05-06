import "./List.css";
export const List = ({ section, listData }) => {
  return (
    <section id={section.toLowerCase()}>
      {section === "takeaway" ? (
        <h2>Takeaway</h2>
      ) : (
        <h4>{section.replace("To", "To ")}</h4>
      )}
      <ul className={section.toLowerCase()}>
        {listData.map((things, index) => (
          <li key={index}>{things}</li>
        ))}
      </ul>
    </section>
  );
};
