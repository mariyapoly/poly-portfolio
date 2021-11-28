import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import ProjectOne from '../../images/portfolio-1.png';
import ProjectTwo from '../../images/portfolio-2.png';
import ProjectThree from '../../images/portfolio-3.png';
import './Project.css'

const Project = () => {
    return (
        <div className="project-area">
            <Container>
                <div className="section-title">
                    <h2>MY <span>PORTFOLIO</span></h2>
                    <p>A FEW RECENT DESIGN AND CODING PROJECTS. WANT TO SEE MORE? EMAIL ME</p>
                </div>
                <Row>
                    <Col lg={4}>
                        <div className="project-thumbnail">
                            <img src={ProjectOne} alt="" />
                            <div className="project-info">
                                <div className="project-inner-text">
                                    <h4>car dealer</h4>
                                    <p>It is a car selling website. Users and Admin can sign up and sign in to this website using an email password.</p>
                                    <button className="regular-btn btn-2">read more</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="project-thumbnail">
                            <img src={ProjectTwo} alt="" />
                            <div className="project-info">
                                <div className="project-inner-text">
                                    <h4>proview</h4>
                                    <p>It is a personal portfolio HTML Template. user can see the personal information on this website.</p>
                                    <button className="regular-btn btn-2">read more</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col lg={4}>
                        <div className="project-thumbnail">
                            <img src={ProjectThree} alt="" />
                            <div className="project-info">
                                <div className="project-inner-text">
                                    <h4>Alfred Travel</h4>
                                    <p>It is a travel and tourism website. Users can sign up and sign in to this website using google.</p>
                                    <button className="regular-btn btn-2">read more</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Project;