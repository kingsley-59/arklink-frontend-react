import React from 'react';
import { Row, Col, Nav, Navbar, Container, Button, NavDropdown } from 'react-bootstrap'

const AboutSection = () => {
    return (
        <Container className="site-section bg-white" fluid>
            <Container className='section-title text-center mb-5'>About Us</Container>
            <Row className="m-auto justify-content-around align-items-center">
                <Col lg={5} md={6} xs={10} className="p-3">
                    <div className="about-section-heading text-center mb-3">
                        Some Header Text About Content
                    </div>
                    <p className="about-text text-left">
                    This content will be a bit descriptive. Having passed the message that we sell 
                    ceramic tiles and marble, we will now move forward to saying a few things about us 
                    as a company. Definitely, it won;t be as long as the text in the about page.
                    </p>
                    <p className="about-text text-left">
                    This content will be a bit descriptive. Having passed the message that we sell 
                    ceramic tiles and marble, we will now move forward to saying a few things about us as a company.
                    </p>
                </Col>
                <Col lg={5} md={5} xs={10} className="">
                    <div className="about-hero-image about-hero-1">
                    <div className="about-hero-overlay p-3 d-flex justify-content-center align-items-center">
                        <a href='/about'><Button className="about-hero-btn btn-outline-primary">Learn More</Button></a>
                    </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutSection;