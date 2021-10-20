import React from "react";
import { Button, Container, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <Container className="py-5">
      <Row>
        <div className="mb-3 col-md-4">
          <div>
            <label>
              Your Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Your Name"
            /> <br />
          </div>
          <div>
            <label>
              Your Email address
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="name@example.com"
            />
          </div> <br />
          <div className="mb-3">
            <label>
              Text Your Message:
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="6"
            ></textarea> <br />
            <Button className="bg-primary" type="submit" value="Send Message">
            Send Message
            </Button>
          </div>
        </div>
        <div className="col-md-8">
          <img
            className="img-fluid"
            src="https://i.ibb.co/g9y8c1d/Email-marketing-Internet-chatting-24-hours-support-Get-in-touch-initiate-contact-contact-us-feedback.jpg"
            alt=""
          />
        </div>
      </Row>
    </Container>
  );
};

export default Contact;
