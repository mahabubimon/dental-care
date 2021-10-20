import React from "react";
import { Button, Card, Row } from "react-bootstrap";
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";

const ServicesDetails = () => {
  const { id } = useParams();

  const { servicesAll } = useAuth();
  const { services } = servicesAll;
  const service = services.find(service => Number(id) === service._id);
  const { image, title, details } = service;

  return (
    <section className="container p-5">
      <Row>
        <Card className="col-md-6">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
          </Card.Body>
        </Card>
        <div className="col-md-6">
          <h2>{details}</h2>
          <Button>Make Appointment</Button>
        </div>
      </Row>
    </section>
  );
};

export default ServicesDetails;
