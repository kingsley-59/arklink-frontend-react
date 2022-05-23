import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'

const PreHeader = () => {
  return (
    <>
    <Navbar className="bg-secondary" style={{ maxHeight: '20px' }} bg="dark" expand="lg" variant="dark">
  <Container className="" fluid>
    <Navbar.Brand href="#"></Navbar.Brand>
    <Nav>
      <Nav
        className="me-auto text-right my-lg-0"
        style={{ fontSize: 12 }}
        navbarScroll
      >
        <Nav.Link href="#action1">kingsleyakahibe@gmail.com</Nav.Link>
        <Nav.Link href="#action2">+2348141971579</Nav.Link>
      </Nav>
      <Nav>
        
      </Nav>
    </Nav>
  </Container>
</Navbar>
    </>
  )
}

export default PreHeader