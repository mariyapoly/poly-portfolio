import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import myImg from '../../images/my-img-1.png';
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className="about-details">
            <Container>
                <div className="section-title">
                    <h2>ABOUT <span>ME</span></h2>
                    <p>I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.</p>
                </div>
                <Row className="align-items-center">
                    <Col lg={7} md={7}>
                        <div className="aboutme-info">
                            <p className="aboutme-title">HI THERE !</p>
                            <h2>I'M a front end developer</h2>
                            <p>Myself Mst. Poly Khatun. I am a front-end developer. I am an enthusiastic web programmer with a passion for everything tech-related, from frontend to backend. </p>
                            <p>I have strong skills in programming and design using the latest trends of technology and love working on innovative solutions to problems.</p>
                            <a target="_blank" className="regular-btn" href="https://drive.google.com/file/d/1EvEuQxbZOZ7hkoInXwtlgAAAzQKFxxVE/view?usp=sharing" rel="noopener noreferrer">download resume</a>
                        </div>
                    </Col>
                    <Col lg={5} md={5}>
                        <div className="about-right">
                            <div className="about-Thumb">
                                <img src={myImg} alt="" />
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="aboutme-section-padding">
                    <Col lg={6} md={6}>
                        <div className="experience-education">
                            <h3>EXPERIENCE</h3>
                            <div className="border-left">
                                <div className="ex-ed-info">
                                    <div>
                                        <div className="date">
                                            <FontAwesomeIcon className="contact-icon" icon={faCalendarAlt} />
                                            <span>2019 - 2020</span>
                                        </div>
                                        <h4>Front End Developer</h4>
                                        <p>Creative IT Institute (Dhanmondi, Dhaka-1205)</p>
                                        <ul>
                                            <li>Taking web design classes</li>
                                            <li>Working with product team as a frontend developer</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6}>
                        <div className="experience-education">
                            <h3>EDUCATION</h3>
                            <div className="border-left">
                                <div className="ex-ed-info">
                                    <div className="date">
                                        <FontAwesomeIcon className="contact-icon" icon={faCalendarAlt} />
                                        <span>2015 - 2019</span>
                                    </div>
                                    <h4>Diploma in Engineering</h4>
                                    <p>Architecture and Interior Design Department</p>
                                    <p>GPA 3.60</p>
                                </div>
                                <div className="ex-ed-info">
                                    <div className="date">
                                        <FontAwesomeIcon className="contact-icon" icon={faCalendarAlt} />
                                        <span>2010 - 2015</span>
                                    </div>
                                    <h4>Secondary School Certificate</h4>
                                    <p>Science</p>
                                    <p>GPA A<sup>+</sup></p>
                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutMe;