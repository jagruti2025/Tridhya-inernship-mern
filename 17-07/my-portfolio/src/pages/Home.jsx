import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="page hero">
      <h1 style={{color: "#18181B"}}>Hi, I'm jagruti Sonara </h1>
      <h2>Mern Stack Intern</h2>
      <p>
        B.Sc. Information Technology student building clean, functional
        web apps with React, TypeScript, and modern JavaScript.
      </p>
      <div className="hero-buttons">
        <Link to="/projects" className="btn-primary">View My Work</Link>
        <Link to="/contact" className="btn-secondary">Get In Touch</Link>
      </div>
    </div>
  );
}


export default Home;