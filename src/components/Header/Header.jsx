import { Navbar, Nav, Container } from "react-bootstrap";
import "./Header.scss";

const Header = () => {
  return (
    <Navbar bg="light">
      <Container>
        <Navbar.Brand href="/">
          <img
            src="https://cdn.pixabay.com/photo/2018/03/26/14/18/man-3262834_960_720.png"
            alt="Un mexicain qui joue de la guitare"
          />
        </Navbar.Brand>

        <Nav className="ms-auto">
          <Nav.Link href="/">Accueil</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;
