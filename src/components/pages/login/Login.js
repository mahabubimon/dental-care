import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form } from "react-bootstrap";
import "../../banner/Banner.css";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { useHistory, useLocation } from "react-router";

const Login = () => {
  const {firebaseContext}= useAuth();
  const { setUser, setIsLoading, isLogin, handleUser, toggleLogin, handleEmail, handlePassword, handleRegistration, facebookSignIn, googleSignIn, twitterSignIn } = firebaseContext;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();
  const location = useLocation();

  const redirect_uri = location.state?.from || "./home";

  const handleSignIn = (provider) => {
    provider().then((result) => {
      setUser(result.user);
      history.push(redirect_uri);
    })
    .finally(() => setIsLoading(false))
  }

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
        <h2>Please {isLogin ? "Sign-In" : "Register"}</h2>
        <img
          className="w-50 img-fluid"
          src="https://i.ibb.co/tz5SyyG/dental-care-logo.png"
          alt=""
        />
        <Form onSubmit={()=>{handleSubmit(handleRegistration)}}>
          <input
          onBlur={handleUser}
            type="text"
            placeholder="Name"
            {...register("Name", { required: true, maxLength: 16 })}
          />

          {errors.Name?.type === 'required' ? "*Name is required" : "*Name Required"}
          <input onBlur={handleEmail}
            type="text"
            placeholder="Email"
            {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.Email?.type === 'required' ? '*Email Required.' : "*Enter Valid Email."} <br />

          <input
            onBlur={handlePassword}
            type="text"
            placeholder="Password"
            {...register("Password", { required: true, pattern: /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/i })}
          /> <br />
          {errors.Password?.type === 'required' ? '*Password Required.' : "*Strong Password Required."} <br />

          <input type="submit" value={isLogin ? "SignIn" : "Create"} /> <br />
          <input
            onChange={toggleLogin}
            type="checkbox"
          /> <small>Already Have an Account.</small>
        </Form>
        <div className="text-center">
          <h3>
            Or <br /> Sign-In with
          </h3>
          <Button
            onClick={()=>handleSignIn(facebookSignIn)}
            className="fs-1 p-1 m-1 text-primary"
            variant="light"
          >
            <FaFacebook />
          </Button>
          <Button
            onClick={()=>handleSignIn(googleSignIn)}
            className="fs-1 p-1 m-1 text-danger"
            variant="light"
          >
            <FaGoogle />
          </Button>
          <Button
            onClick={()=>handleSignIn(twitterSignIn)}
            className="fs-1 p-1 m-1 text-success"
            variant="light"
          >
            <FaTwitter />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Login;
