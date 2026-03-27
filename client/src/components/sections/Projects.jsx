function Projects({ projects }) {
  return (
    <section id="projects">
      <h2>Academic Projects</h2>
      <p style={{marginBottom: '30px', color: '#a78bfa'}}>A collection of innovative projects spanning software engineering, research, and development</p>
      <div className="projects-grid">
        {projects && projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>💻 {project.title}</h3>
            <p>{project.description}</p>
            {project.year && <p>📅 <strong>Year:</strong> {project.year}</p>}
            <p><strong>🛠 Tech:</strong></p>
            <p style={{display: 'flex', flexWrap: 'wrap', gap: '6px'}}>
              {project.tech && project.tech.map((tech, idx) => (
                <span key={idx} style={{
                  background: 'rgba(96, 165, 250, 0.2)',
                  border: '1px solid rgba(96, 165, 250, 0.4)',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '13px'
                }}>{tech}</span>
              ))}
            </p>
            <div style={{marginTop: '16px'}}>
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer">→ View on GitHub</a>
              )}
              {project.demo && (
                <>
                  {" • "}
                  <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
