import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "./Logo";
import { Link } from "react-router-dom";

const Navegacion = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>
        <Link to="/">
          <Logo n={50} />
          HardwareOnline
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link></Nav.Link>
          <Nav.Link>
            <Link to="/sobre-nosotros">Sobre nosotros</Link>
          </Nav.Link>
          <Nav.Link>
            <Link to="/productos">Productos</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navegacion;
