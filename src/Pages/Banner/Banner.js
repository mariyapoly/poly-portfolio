import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
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
                                <h1>I'M a <span>front end developer</span></h1>
                                <p className="banner-des">I am a Front-end Developer. I am passionate about website design and development. I create successful websites that are fast, easy to use, and built with best practices.</p>
                                <a target="_blank" className="regular-btn" href="https://drive.google.com/file/d/1EvEuQxbZOZ7hkoInXwtlgAAAzQKFxxVE/view?usp=sharing" rel="noopener noreferrer">download resume</a>
                                <button className="regular-btn btn-2">Portfolio</button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Banner;