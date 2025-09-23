import { Navbar, Nav, Container } from "react-bootstrap";
import "./Header.scss";

const Header = () => {
  return (
    <header>
      <Navbar expand="lg" bg="light">
        <Container>
          <Navbar.Brand href="/">
            <img
              src="https://cdn.pixabay.com/photo/2018/03/26/14/18/man-3262834_960_720.png"
              alt="Un mexicain qui joue de la guitare"
              height="40"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Accueil</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
