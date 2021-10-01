import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import logo from '../assets/Logo1.png';

const CustomNavbar = () => {
    return(
            <>
            <Navbar collapseOnSelect expand="lg">
            <Container>
            <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"> {/* This is to put space between logo and header links*/}
                </Nav>
                <Nav>
                <Nav.Link href="#features">Home</Nav.Link>
                <Nav.Link href="#pricing">Policies</Nav.Link>
                {/* <Nav.Link href="#pricing">Shipping & Returns</Nav.Link> */}
                <NavDropdown title="Shipping & Returns" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#deets">About Us</Nav.Link>
                <Nav.Link eventKey={2} href="#memes">Contact Us</Nav.Link>
                <Nav.Link eventKey={3} href="#user"><i class="fas fa-user-alt"></i></Nav.Link>
                <Nav.Link eventKey={4} href="#search"><i class="fas fa-search"></i></Nav.Link>
                <Nav.Link eventKey={5} href="#cart"><i class="fas fa-cart-plus"></i></Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
            </>
);
}
export default CustomNavbar;