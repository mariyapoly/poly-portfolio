import React from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import './Banner.css';
import Typical from 'react-typical'
import polyImg from '../../images/my-img.png';

const Banner = () => {
    return (
        <div className="banner-area">
            <div className="overlay">
                <Container>
                    <Row className="align-items-center">
                        <Col lg={5}>
                            <div className="banner-img">
                                <img src={polyImg} alt="poly-img" />
                            </div>
                        </Col>
                        <Col lg={7}>
                            <div className="banner-content">
                                <p className="banner-top-text">HI THERE !</p>
                                <h1>
                                    I'M a  {' '} <span>
                                        <Typical
                                            loop={Infinity}
                                            wrapper="span"
                                            steps={[
                                                'front end developer',
                                                1000,
                                                'Web Designer',
                                                1000
                                            ]}
                                        />
                                    </span>
                                </h1>
                                <p className="banner-des">I am a Front-end Developer. I am passionate about website design and development. I create successful websites that are fast, easy to use, and built with best practices.</p>
                                <a target="_blank" className="regular-btn" href="https://drive.google.com/file/d/1EvEuQxbZOZ7hkoInXwtlgAAAzQKFxxVE/view?usp=sharing" rel="noopener noreferrer">download resume</a>
                                <Nav.Link className="regular-btn btn-2" rel="noopener noreferrer">Portfolio</Nav.Link>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Banner;