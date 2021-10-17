import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../banner/Banner.css";

const SignUp = () => {
  return (
    <section className="banner-image">
      <div className="text-center py-3">
        <img
          className="w-25 img-fluid"
          src="https://i.ibb.co/tz5SyyG/dental-care-logo.png"
          alt=""
        />
        <Form className="w-25 mx-auto pt-3">
          <Form.Control type="text" placeholder="Your Name" /> <br />
          <Form.Control type="email" placeholder="Your Email" /> <br />
          <Form.Control type="password" placeholder="Password" /> <br />
          <Form.Control type="password" placeholder="Confirm Password" />
          <Form.Check checked className="text-start" label="Remember me." />
          <Button className="btn-danger" type="submit">
            Register
          </Button>
          <br /> <br />
          <small className="text-danger">
            Already have an Account? 
            <Link to="/login" style={{ textDecoration: "none" }}> SignIn
            </Link>
          </small>
        </Form>
      </div>
    </section>
  );
};

export default SignUp;
