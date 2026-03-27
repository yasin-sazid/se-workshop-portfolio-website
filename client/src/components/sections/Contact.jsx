function Contact({ profile, formData, handleChange, handleSubmit }) {
  return (
    <section id="contact">
      <h2>Get in Touch</h2>
      <p style={{marginBottom: '30px', color: '#a78bfa'}}>Interested in research collaboration, speaking opportunities, or academic discussions?</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message..."
          rows="6"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">📧 Send Message</button>
      </form>
      {profile && (
        <div style={{marginTop: '40px', paddingTop: '40px', borderTop: '1px solid rgba(96, 165, 250, 0.2)'}}>  
          <h3>Connect with me</h3>
          <div style={{display: 'flex', gap: '16px', flexWrap: 'wrap', marginTop: '16px'}}>
            {profile.email && (
              <a href={`mailto:${profile.email}`} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 16px',
                background: 'rgba(96, 165, 250, 0.1)',
                border: '1px solid rgba(96, 165, 250, 0.3)',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#60a5fa',
                fontSize: '14px',
                transition: 'all 0.3s ease'
              }}>📧 Email</a>
            )}
            {profile.linkedin && (
              <a href={profile.linkedin} target="_blank" rel="noreferrer" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 16px',
                background: 'rgba(96, 165, 250, 0.1)',
                border: '1px solid rgba(96, 165, 250, 0.3)',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#60a5fa',
                fontSize: '14px',
                transition: 'all 0.3s ease'
              }}>💼 LinkedIn</a>
            )}
            {profile.github && (
              <a href={profile.github} target="_blank" rel="noreferrer" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 16px',
                background: 'rgba(96, 165, 250, 0.1)',
                border: '1px solid rgba(96, 165, 250, 0.3)',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#60a5fa',
                fontSize: '14px',
                transition: 'all 0.3s ease'
              }}>💻 GitHub</a>
            )}
            {profile.googleScholar && (
              <a href={profile.googleScholar} target="_blank" rel="noreferrer" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 16px',
                background: 'rgba(96, 165, 250, 0.1)',
                border: '1px solid rgba(96, 165, 250, 0.3)',
                borderRadius: '8px',
                textDecoration: 'none',
                color: '#60a5fa',
                fontSize: '14px',
                transition: 'all 0.3s ease'
              }}>🎓 Google Scholar</a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
