import { Container } from "react-bootstrap";

const Projects = () => {
  return (
    <Container fluid className="projects-container" id="projects">
      <h3>Projects</h3>

      <div className="d-flex justify-content-around">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <img src="/images/Scriptorium-App.png" alt="Avatar" />
            </div>
            <div className="flip-card-back">
              <h1>Scriptorium</h1>
              <p>
                Solo project: An Application to help you to creating your next
                novel.
              </p>
              <p>
                {" "}
                <a href="https://scriptorium.vercel.app/">
                  -{">"} Click here to visit!
                </a>{" "}
                <br />
                <a href="https://github.com/Eleni-Ke/capstone_project_FE">
                  -{">"} Check out the Front-end code here!
                </a>{" "}
                <br />
                <a href="https://github.com/Eleni-Ke/capstone_project_BE">
                  -{">"} Check out the Back-end code here!
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Projects;
