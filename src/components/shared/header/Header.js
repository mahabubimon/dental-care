import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { HashLink as Link } from "react-router-hash-link";
import useAuth from "../../../hooks/useAuth";
import "./header.css";

const Header = () => {
  const { firebaseAll } = useAuth();
  const { user, handleLogout } = firebaseAll;

  return (
    <header>
      <Navbar collapseOnSelect expand="lg" fixed="top" bg="light">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              className="w-75 img-fluid"
              src="https://i.ibb.co/tz5SyyG/dental-care-logo.png"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home" className="text-dark">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/home#services" className="text-dark">
                Services
              </Nav.Link>
              <Nav.Link as={Link} to="/home#dentists" className="text-dark">
                Dentists
              </Nav.Link>
              <Nav.Link as={Link} to="/home#smiles" className="text-dark">
                HappySmiles
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-dark">
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/blogs" className="text-dark">
                Blogs
              </Nav.Link>
              {user.displayName ? (
                <div className="d-lg-flex">
                  <img src={user.photoURL} alt="" className="user-image" />
                  <span> {user.displayName}</span>
                  <Button className="btn-danger ms-1" onClick={handleLogout}>
                    Logout
                  </Button>
                </div>
              ) : (
                <Nav.Link as={Link} to="/login">
                  <Button className="btn-danger ms-1">Login</Button>
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
