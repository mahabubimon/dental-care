import React from "react";
import { Card, Row } from "react-bootstrap";
import { useParams } from "react-router";
import useAuth from "../../../hooks/useAuth";

const ServicesDetails = () => {
  const { id } = useParams();

  const { servicesContext } = useAuth();
  const { services } = servicesContext;
  const service = services.filter(service => service._id === id);
  const { image, title, details } = service;

  return (
    <section className="container">
      <Row>
        <Card>
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{details}</Card.Text>
          </Card.Body>
        </Card>
      </Row>
    </section>
  );
};

export default ServicesDetails;
