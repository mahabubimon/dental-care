import React from "react";
import Service from "../../service/Service";
import { Row } from "react-bootstrap";
import useServices from "../../../hooks/useServices";

const Services = () => {
  const { services } = useServices();
  return (
    <section className="container text-center py-5">
      <h2>Welcome to Dental Care</h2>
      <Row xs={1} md={3} className="g-4 p-4">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </Row>
    </section>
  );
};

export default Services;
