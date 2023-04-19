export const ProjectCard = ({ projectId }) => {
  return (
    <article id={`project-${projectId}`} className="project">
      <a href={`#project-${projectId}`}>
        <h3>Placeholder</h3>
        <p>
          <strong> NodeJs • MongoDB • React • Express </strong>
        </p>
        <p>Upcoming React Project.</p>
      </a>
    </article>
  );
};
