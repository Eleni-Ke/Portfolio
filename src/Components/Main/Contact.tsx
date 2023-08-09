import { Container } from "react-bootstrap";
import { BsGithub, BsLinkedin, BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <Container fluid className="contact-container" id="contact">
      <h3>Contact me here</h3>

      <div className="d-flex justify-content-around row row-cols-1 row-cols-sm-2 row-cols-md-4">
        <a
          href="https://www.linkedin.com/in/eleni-kellermann-bb965625a/"
          target="_blank"
          className="linkedIn-link mb-5 col"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Eleni-Ke"
          target="_blank"
          className="github-link mb-5 col"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
        <p className="mb-5 col">
          <AiOutlineMail /> <br />
          eleni.kellermann
          <br />
          @hotmail.de
        </p>
        <p className="mb-5 col">
          <BsTelephone /> <br />
          +49 176 30742093
        </p>
      </div>
    </Container>
  );
};

export default Contact;
