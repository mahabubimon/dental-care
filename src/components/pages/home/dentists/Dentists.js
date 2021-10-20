import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';

const Dentists = () => {
    return (
        <section id="dentists" className="bg-info p-5">
            <Container>
            <Row className="row text-white">
                <div className="col-md-6">
                <img className="img-fluid" src="https://i.ibb.co/z85M7hP/doktorka.png" alt="" />
                </div>
                <div className="col-md-6 p-5">
                <h5>Dental Surgeon:</h5>
                <h2>DR JENNA WILSON</h2>
                <p>Dr. Jenna Wilson is is dedicated to providing her patients with the most beautiful smile together with the best dental protection available nowadays.</p>
                <Button>Make Appointment</Button>
                </div>
            </Row>
            </Container>
        </section>
    );
};

export default Dentists;