function About() {
  const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Git & GitHub", "Node.js" , "Express.js"];

  return (
    <div className="page">
      <h1>About Me</h1>
      <p>
        Hi, I'm a MERN Stack Intern based in Ahmedabad, Gujarat. I completed my B.Sc. 
        in Computer Applications & Information Technology from Ganpat University in April 2026.
        <br></br>
        Currently, I'm working as a MERN Stack Intern, where I'm gaining hands-on experience in 
        building modern web applications and strengthening my skills in React, JavaScript, TypeScript, 
        Node.js, Express.js, and MongoDB. I enjoy creating clean, responsive, and user-friendly interfaces
         while continuously improving my problem-solving abilities.
      </p>

      <h2>Skills</h2>
      <div className="skills-list">
        {skills.map((skill, index) => (
          <span key={index} className="skill-badge">{skill}</span>
        ))}
      </div>

      <h2>Education & Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <h3>B.Sc. Information Technology</h3>
          <p>Ganpat University — Completed Graduation: April 2026</p>
        </div>
        <div className="timeline-item">
          <h3>Frontend Development Internship</h3>
          <p>WRTeam — Hands-on experience building real UI components</p>
        </div>
        <div className="timeline-item">
          <h3>Full Stack Development Training</h3>
          <p>SmartBridge — MERN Stack fundamentals</p>
        </div>
      </div>
    </div>
  );
}

export default About;