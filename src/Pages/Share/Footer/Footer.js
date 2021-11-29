import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer-bg">
            <Container>
                <Row>
                    <div className="footer-wrapper">
                        <p>&copy; 2021 by Poly. All rights reserved.</p>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;