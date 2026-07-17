import projectsData from "../data/projectsData";

function Projects() {
  return (
    <div className="page">
      <h1>My Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="tech-tags">
              {project.tech.map((t, index) => (
                <span key={index} className="tech-tag">{t}</span>
              ))}
            </div>
            <a href={project.link} className="project-link">View Project →</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;