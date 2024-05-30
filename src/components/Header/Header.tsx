import { Button, Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { TITTLE_APP } from "../../constants";
import "./Header.css";
const Header = () => {
  return (
    <Navbar expand="lg" className="navbar-fixed">
      <Container>
        <Navbar.Brand href="#/" className="link-white">
          {TITTLE_APP}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#/" className="link-white">
              Peliculas
            </Nav.Link>
            <Nav.Link href="#/favorites" className="link-white">
              Favoritos
            </Nav.Link>
          </Nav>
          {/* Search */}
          <Form>
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Peliculas..."
                  className="mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <Button type="submit">Buscar</Button>
              </Col>
            </Row>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
