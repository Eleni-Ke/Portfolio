import { Container } from "react-bootstrap";

const Projects = () => {
  return (
    <Container fluid className="projects-container" id="projects">
      <h3>Projects</h3>

      <div className="d-flex align-items-center">
      <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;">
    </div>
    <div class="flip-card-back">
      <h1>John Doe</h1>
      <p>Architect & Engineer</p>
      <p>We love that guy</p>
    </div>
  </div>
</div>
      </div>
    </Container>
  );
};

export default Projects;
