import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'
import Tooltip from 'react-bootstrap/Tooltip'
import logo from '../assets/Logo1.png';

const CustomNavbar = () => {
    return(
            <>
            <Navbar collapseOnSelect expand="lg">
            <Container>
            <Navbar.Brand href="/Home">
                    <img
                    alt=""
                    src={logo}
                    width="50"
                    height="50"
                    className="d-inline-block align-top"
                    />{' '}
                
                </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"> {/* This is to put space between logo and header links*/}
                </Nav>
                <Nav>
                <Nav.Link href="/Home">Home</Nav.Link>
                <Nav.Link href="/Policies">Policies</Nav.Link>
                {/* <Nav.Link href="#pricing">Shipping & Returns</Nav.Link> */}
                <NavDropdown title="Shipping & Returns" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/ReturnPolicy">Return Policy</NavDropdown.Item>
                    <NavDropdown.Item href="/ShippingPolicy">Shipping Policy</NavDropdown.Item>
                    <NavDropdown.Item href="/PrivacyPolicy">Privacy Policy</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/MorePolicies">More Policies</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/Aboutus">About Us</Nav.Link>
                <Nav.Link className="nav-btn" href="/Contactus">Contact Us</Nav.Link>
                <Nav.Link href="/Profile"><i class="fas fa-user-alt"></i></Nav.Link>
                <Nav.Link href="/Search"><i class="fas fa-search"></i></Nav.Link>
                <Nav.Link href="/AddCart"><i class="fas fa-cart-plus"></i>(0)</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
            </>
);
}
export default CustomNavbar;