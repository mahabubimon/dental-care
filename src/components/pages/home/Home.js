import React from "react";
import { Row } from "react-bootstrap";
import useServices from "../../../hooks/useServices";
import Banner from "../../banner/Banner";
import Service from "../../service/Service";

const Home = () => {
  const {services} = useServices();
  return (
    <>
      <Banner></Banner>
      <section className="container text-center py-5">
          <h2>Try Something from Delicious Dishes</h2>
        <Row xs={1} md={3} className="g-4 p-4">
          {services.slice(0,6).map( service => (
            <Service key={service._id} service={service}></Service>
          ))}
        </Row>
      </section>
    </>
  );
};

export default Home;
