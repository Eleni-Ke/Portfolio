import { Container } from "react-bootstrap";
import { BsGithub, BsLinkedin, BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <Container fluid className="contact-container" id="contact">
      <h3>Contact me here</h3>

      <div className="d-flex justify-content-around">
        <a
          href="https://www.linkedin.com/in/eleni-kellermann-bb965625a/"
          target="_blank"
          className="linkedIn-link"
          rel="noopener noreferrer"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/Eleni-Ke"
          target="_blank"
          className="github-link"
          rel="noopener noreferrer"
        >
          <BsGithub />
        </a>
        <a href="link">
          <AiOutlineMail /> <br />
          eleni.kellermann@hotmail.de
        </a>
        <a href="link">
          <BsTelephone /> <br />
          +49 176 30742093
        </a>
      </div>
    </Container>
  );
};

export default Contact;
