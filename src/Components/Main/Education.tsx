import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

const Education = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsActive(scrollPosition > 600);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <Container fluid className="education-container" id="education">
      <h3>Education</h3>

      <div className="d-flex flex-column align-items-center">
        <div className={`individual-education ${isActive ? "active" : ""}`}>
          <h4>Full-stack developer | Epicode</h4>
          <p>
            <span>2022 - 2023</span> <br /> <br />
            Certified 6-months bootcamp to become a full-stack developer <br />{" "}
            <br />
            html/css, TypeScript/JavaScript, NodeJS, React/REDUX, Express,
            Bootstrap, Git, MongoDB, PostgreSQL, Railway, Cyclic, Vercel,
            Postman API & Documention
          </p>
        </div>
        <div className={`individual-education ${isActive ? "active" : ""}`}>
          <h4>Various Courses | Codecadamy</h4>
          <p>
            <span>2021 - present</span> <br /> <br />
            As I am constantly seeking to improve myself and my coding skills, I
            have continuously been doing certified online courses on Codecadamy.{" "}
            <br /> <br />
            For example: html/css, front-end engineer career path, JavaScript,
            React, Linux...
          </p>
        </div>
        <div className={`individual-education ${isActive ? "active" : ""}`}>
          <h4>
            Ausbildung as Educator specialised in teenagers and social work |
            F&U Heidelberg
          </h4>
          <p>
            <span>2014 - 2017</span> <br /> <br />
            This training involved one year of intership, then two years of
            theory in a classroom with two shorter interships and one practical
            year.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Education;
