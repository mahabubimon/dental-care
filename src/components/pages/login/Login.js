import React from "react";
import { Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../banner/Banner.css";
import {FaFacebook, FaGithub, FaGoogle, FaTwitter } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { facebookSignIn, googleSignIn, gitHubSignIn, twitterSignIn } = useAuth();
  return (
    <section className="row">
      <div className="col-md-7">
        <img
          className="img-fluid"
          src="https://i.ibb.co/nfz4XLF/signin.jpg"
          alt=""
        />
      </div>
      <div className="col-md-5 py-5">
        <img
          className="w-50 img-fluid"
          src="https://i.ibb.co/tz5SyyG/dental-care-logo.png"
          alt=""
        />
        <Form className="w-75 pt-3">
          <Form.Control type="email" placeholder="Your Email" /> <br />
          <Form.Control type="password" placeholder="Password" />
          <Form.Check checked className="text-start" label="Remember me." /> <br />
          <Button className="btn-danger" type="submit">
            Sign In
          </Button>
          <br />
          <small className="text-danger">
            {" "}
            New User in Dental-Care?
            <Link to="/" style={{ textDecoration: "none" }}>
              {" "}
              Register
            </Link>
          </small>
        </Form> <br />
        <div className="text-center">
          <h3>
            Or <br /> Sign-In with
          </h3>
          <Button onClick={facebookSignIn} className="fs-1 p-1 m-1 text-primary" variant="light">
            <FaFacebook />
          </Button>
          <Button onClick={googleSignIn} className="fs-1 p-1 m-1 text-danger" variant="light">
            <FaGoogle />
          </Button>
          <Button onClick={gitHubSignIn} className="fs-1 p-1 m-1" variant="light">
            <FaGithub />
          </Button>
          <Button onClick={twitterSignIn} className="fs-1 p-1 m-1 text-success" variant="light">
            <FaTwitter />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Login;
