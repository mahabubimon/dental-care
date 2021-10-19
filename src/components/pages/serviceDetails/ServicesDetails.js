import React from 'react';
import { Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import useAuth from '../../../hooks/useAuth';

const ServicesDetails = () => {
    const { id } = useParams();
    
    const { servicesContext } = useAuth();
    const {services} = servicesContext;
    const service = services?.find(service => service?._id === id);

    return (
        <section className="container">
            <Row>
                <div className="col-md-6">
                    <img src={service?.image} alt="" />
                </div>
                <div className="col-md-6">
                    <h2>Welcome to Our Services</h2>
                </div>
            </Row>
        </section>
    );
};

export default ServicesDetails;