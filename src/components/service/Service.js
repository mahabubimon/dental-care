import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, image, title, details } = service;
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src={image} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
        </Card.Body>
        <Card.Footer>
        <Link to={`/service/${_id}`}>
                            <button className="my-btn btn-sm mx-2 ">See more Details</button>
                        </Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default Service;
