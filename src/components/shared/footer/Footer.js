import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <footer className="bg-dark py-5 text-white">
            <Container>
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid w-50" src="https://i.ibb.co/tz5SyyG/dental-care-logo.png" alt="" />
                </div>
                <div className="col-md-3">
                    <p>About Online Food</p>
                    <p>Read Our Blog</p>
                    <p>Sign Up to deliver</p>
                    <p>Add Your Restaurant ID</p>
                </div>
                <div className="col-md-3">
                    <p>Get Help</p>
                    <p>Read FAQs</p>
                    <p>View All Cities</p>
                    <p>Restaurant Near You..</p>
                </div>
            </div>
            <div className="row pt-5">
                <div className="col-md-6">
                    <p className="text-muted"> Copyright &copy; 2021 Dental-Care Limited. </p>
                </div>
                <div className="col-md-6 d-flex">
                    <p>Privacy policy:</p>
                    <p className="mx-5 px-5">Terms of Use</p>
                    <p>Pricing</p>
                </div>
            </div>
            </Container>
        </footer>
    );
};

export default Footer;