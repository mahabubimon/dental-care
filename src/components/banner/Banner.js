import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="banner-image">
      <Container className="text-center">
      <h2 className="p-5">YOUR BEAUTIFUL SMILE</h2>
      {/* <InputGroup className="w-50 mx-auto">
        <FormControl
          placeholder="Enter Your Favorite Food Name..."
        />
        <Button variant="primary" className="ms-2">
          Search
        </Button>
      </InputGroup> */}
      </Container>
    </section>
  );
};

export default Banner;
