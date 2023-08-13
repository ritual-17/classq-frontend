import React from 'react';
import './Header.css';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <div className='header-container'>
        <Navbar expand="lg" className="navbar">
            <Container className="nav-container">
                <Navbar.Brand href="#home" style={{color: "dodgerblue"}} >classQ</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: "dodgerblue"}} />
                <Navbar.Collapse id="basic-navbar-nav"  >
                    <Nav className="me-auto" >
                        <Nav.Link href="#home" style={{color: "dodgerblue"}} >Home</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header