export const List = ({ section, listData }) => {
  console.dir(listData);
  return (
    <section id={section.toLowerCase()}>
      <h4>{section}</h4>
      <ul>
        {listData.map((things, index) => (
          <li key={index}>{things}</li>
        ))}
      </ul>
    </section>
  );
};
