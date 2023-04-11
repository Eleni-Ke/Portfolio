import { Container, Nav, Navbar } from "react-bootstrap";
import { MdOutlineFace3, MdWorkOutline, MdOutlineMail } from "react-icons/md";
import { BsBook, BsTools } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand>
          <div>Logo</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="me-auto">
            <Nav.Link>
              <div className="icons d-flex flex-column align-items-center mx-2">
                <MdOutlineFace3 size="1em" />
                <span className="nav-text">About me</span>
              </div>
            </Nav.Link>
            <Nav.Link>
              <div className="icons d-flex flex-column align-items-center mx-2">
                <BsBook size="1em" />
                <span className="nav-text">Education</span>
              </div>
            </Nav.Link>
            <Nav.Link>
              <div className="icons d-flex flex-column align-items-center mx-2">
                <MdWorkOutline size="1em" />
                <span className="nav-text">Work experience</span>
              </div>
            </Nav.Link>
            <Nav.Link>
              <div className="icons d-flex flex-column align-items-center mx-2">
                <BsTools size="1em" />
                <span className="nav-text">Skills</span>
              </div>
            </Nav.Link>
            <Nav.Link>
              <div className="icons d-flex flex-column align-items-center mx-2">
                <HiOutlineLightBulb size="1em" />
                <span className="nav-text">Project</span>
              </div>
            </Nav.Link>
            <Nav.Link>
              <div className="icons d-flex flex-column align-items-center mx-2">
                <MdOutlineMail size="1em" />
                <span className="nav-text">Contact</span>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
