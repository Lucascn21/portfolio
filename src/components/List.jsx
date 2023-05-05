import "./List.css";
export const List = ({ section, listData }) => {
  console.dir(listData);
  return (
    <section id={section.toLowerCase()}>
      <h4>{section.replace("To", "To ")}</h4>
      <ul className={section.toLowerCase()}>
        {listData.map((things, index) => (
          <li key={index}>{things}</li>
        ))}
      </ul>
    </section>
  );
};
