import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div className='my-nav'>
            <Navbar variant="dark" expand="lg">
                <Container>
                    <Navbar.Brand className='fs-2'>Chef's Academy</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" className='ms-auto' />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <CustomLink to="/">HOME</CustomLink>
                            <CustomLink to="/checkout">CHECKOUT</CustomLink>
                            <CustomLink to="/blogs">BLOGS</CustomLink>
                            <CustomLink to="/about">ABOUT</CustomLink>
                            <CustomLink to="/login">LOGIN</CustomLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;