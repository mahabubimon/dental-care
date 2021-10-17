import React from "react";
import { Button, Container, Nav, Navbar, Stack } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useAuth from "../../../hooks/useAuth";
import "./header.css"

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header>
      <Navbar fixed="top" bg="light">
        <Container>
          <NavLink to="/" className="nav-link">
            <img
              className="w-75 img-fluid"
              src="https://i.ibb.co/tz5SyyG/dental-care-logo.png"
              alt="logo"
            />
          </NavLink>
          <Nav className="ms-auto">
            <Stack direction="horizontal" gap={4}>
              <NavLink to="/home" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/services" className="nav-link">
                Services
              </NavLink>
              <NavLink
                to="/cart" className="nav-link fs-4 text-danger"
              >
                <AiOutlineShoppingCart />
              </NavLink>
              {user.displayName ? (
                <div className="d-flex">

                  <img src={user.photoURL}
                    alt=""
                    className="user-image"
                  />
                  <span> {user.displayName}</span>
                  <Button className="btn-danger ms-4" onClick={logout}>
                    Logout
                  </Button>
                </div>
              ) : (
                <NavLink
                  className="bg-danger px-3 py-1 rounded nav-link"
                  to="/login"
                >
                  Login
                </NavLink>
              )}
            </Stack>
          </Nav>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
