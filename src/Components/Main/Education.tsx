import { Container } from "react-bootstrap";

const Education = () => {
  return (
    <Container fluid className="education-container" id="education">
      <h3>Education</h3>

      <div className="d-flex flex-column align-items-center">
        <div className="individual-education">
          <h4>Full-stack developer | Epicode</h4>
          <p>
            2022 - 2023 <br /> <br />
            Certified 6-months bootcamp to become a full-stack developer <br />{" "}
            <br />
            html/css, TypeScript/JavaScript, NodeJS, React/REDUX, Express,
            Bootstrap, Git, MongoDB, PostgreSQL, Railway, Cyclic, Vercel,
            Postman API & Documention
          </p>
        </div>
        <div className="individual-education">
          <h4>Various Courses | Codecadamy</h4>
          <p>
            2021 - present <br /> <br />
            As I am constantly seeking to improve myself and my coding skills, I
            have continuously been doing certified online courses on Codecadamy.{" "}
            <br /> <br />
            For example: html/css, front-end engineer career path, JavaScript,
            React, Linux...
          </p>
        </div>
        <div className="individual-education">
          <h4>
            Ausbildung as Educator specialised in teenagers and social work |
            F&U Heidelberg
          </h4>
          <p>
            2014 - 2017 <br /> <br />
            This is an education
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Education;
