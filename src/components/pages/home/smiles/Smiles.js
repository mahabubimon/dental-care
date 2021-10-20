import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Smile = ({smile}) => {
    const { img, name, review } = smile;
    return (
        <Col>
      <Card className="h-100">
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>"{review}"</Card.Text>
        </Card.Body>
      </Card>
      </Col>
    );
};

export default Smile;