function Skills({ skills, awards }) {
  return (
    <section id="skills">
      <h2>Research Interests & Recognition</h2>
      
      {skills && skills.length > 0 && (
        <div className="research-interests">
          <h3>🔬 Research Interests</h3>
          <ul className="skills-list">
            {skills.map((skill) => (
              <li key={skill.id}>
                <strong>{skill.category}</strong>
                <p>{skill.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {awards && awards.length > 0 && (
        <div className="awards-section">
          <h3>🏆 Awards & Grants</h3>
          <ul className="awards-list">
            {awards.map((award) => (
              <li key={award.id}>
                <strong>⭐ {award.title}</strong>
                <div>{award.organization}</div>
                <div style={{fontSize: '13px', color: '#94a3b8', marginTop: '4px'}}>{award.year}</div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}

export default Skills;
