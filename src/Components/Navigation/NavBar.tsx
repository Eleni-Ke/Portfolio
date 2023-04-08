import { Container, Nav, Navbar } from "react-bootstrap";
import { BsFillPeopleFill } from "react-icons/bs";

const NavBar = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand>
          <div>Logo</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="me-auto justify-content-end">
            <Nav.Link>
              <div
                className="d-flex flex-column align-items-center nav-options"
                //onClick={handleShow2}
              >
                <BsFillPeopleFill size="2em" />
                <span className="nav-text">My Network</span>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
