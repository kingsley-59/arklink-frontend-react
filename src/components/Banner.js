import React from 'react';
import { Nav, Navbar, Container, Form, Button, NavDropdown, FormControl } from 'react-bootstrap'
import Header from '../components/Header';
import PreHeader from '../components/PreHeader';

const Banner = () => {
  return (
    <>
    <Container className="site-banner p-4" id="" fluid>
        <Container className="banner-heading text-center mb-4 text-white">
          Some Pretty Text To Convince Customers To Buy From Us.
        </Container>
        <Container className="banner-text text-center mb-4 text-white">
          Some more text to say addition reasons why our brand is most exceptionas and why you need to click the goddam buttom before your bloody ass gets spanked
        </Container>
        <Container className="banner-btn text-center">
          <a href='/categories'><Button className="btn">See Categories</Button></a>
        </Container>
    </Container>
    </>
  )
}

export default Banner