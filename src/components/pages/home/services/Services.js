import React from "react";
import Service from "./Service";
import { CardGroup } from "react-bootstrap";
import useAuth from "../../../../hooks/useAuth";

const Services = () => {
  const { servicesAll } = useAuth();
  const { services } = servicesAll;
  return (
    <section id="services" className="container text-center py-5">
      <h2>Welcome to Dental Care</h2>
      <CardGroup className="row row-cols-1 row-cols-md-3 g-4 p-4">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </CardGroup>
    </section>
  );
};

export default Services;
