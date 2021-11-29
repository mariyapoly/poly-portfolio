import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {

    return (
        <Navbar expand="lg">
            <Container>
                <Link className="logo" to="/"><span>p</span>oly</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Link to="/">Home</Link>
                        {/* <Link to="/about">About</Link>
                        <Link to="/portfolio">Portfolio</Link> */}
                        <Link to="/contact">Contact</Link>
                        <a target="_blank" className="regular-btn" href="https://drive.google.com/file/d/1EvEuQxbZOZ7hkoInXwtlgAAAzQKFxxVE/view?usp=sharing" rel="noopener noreferrer">download resume</a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        // <div className="header">
        //     
        // </div>
    );
};

export default Header;