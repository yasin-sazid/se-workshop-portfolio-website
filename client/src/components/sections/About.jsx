function About({ profile, experience, education, publications }) {
  const bio = profile?.bio || "I am a computer science student interested in software development and building useful applications.";
  
  return (
    <section id="about">
      <h2>About & Experience</h2>
      <p style={{fontSize: '16px', lineHeight: '1.8', marginBottom: '30px'}}>{bio}</p>
      
      {education && education.length > 0 && (
        <div className="education-section">
          <h3>📚 Education</h3>
          {education.map((edu) => (
            <div key={edu.id} className="education-item">
              <h4>{edu.degree}</h4>
              <p><strong>{edu.institution}</strong></p>
              <p>📅 {edu.year} • CGPA: <strong>{edu.cgpa}</strong> {edu.rank && ` • ${edu.rank}`}</p>
              {edu.thesis && <p>📖 <em>{edu.thesis}</em></p>}
            </div>
          ))}
        </div>
      )}
      
      {experience && experience.length > 0 && (
        <div className="experience-section">
          <h3>💼 Professional & Academic Experience</h3>
          {experience.map((exp) => (
            <div key={exp.id} className="experience-item">
              <h4>{exp.position}</h4>
              <p><strong>{exp.company}</strong> • <em>{exp.type}</em></p>
              <p>📅 {exp.startDate} → {exp.endDate}</p>
              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      )}
      
      {publications && publications.length > 0 && (
        <div className="publications-section">
          <h3>📖 Research Publications</h3>
          {publications.map((pub) => (
            <div key={pub.id} className="publication-item">
              <h4>{pub.title}</h4>
              <p><strong>Authors:</strong> {pub.authors}</p>
              <p className="conference">📍 {pub.conference} • {pub.year}</p>
              {pub.link && <a href={pub.link} target="_blank" rel="noreferrer">→ View Publication</a>}
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default About;
