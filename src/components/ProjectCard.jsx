import "./ProjectCard.css";
export const ProjectCard = ({ projectId, projectData }) => {
  return (
    <article id={`project-${projectId}`} className="projectCard">
      <a
        href={projectData.MainLink()}
        onClick={
          projectData.projectModalToggle && projectData.projectModalToggle
        }
        target="_blank"
        rel="noreferrer"
      >
        <h3>{projectData.Name}</h3>
        <p>
          <strong>
            {projectData.Tech.map((tech, index) => {
              return `${index > 0 ? "|" : " "} ${tech} `;
            })}
          </strong>
        </p>
        <p>{projectData.Reason}</p>
      </a>
    </article>
  );
};
