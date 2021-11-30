import React from 'react';
import { Col, Container, ProgressBar, Row } from 'react-bootstrap';
import './Skills.css';

const Skills = () => {

    const now = 90;
    const now1 = 90;
    const now2 = 73;
    const now3 = 70;
    const now4 = 90;
    const now5 = 80;
    const now6 = 60;

    return (
        <div className="skill-area">
            <Container>
                <div className="section-title">
                    <h2>my <span>skills</span></h2>
                    <p>I DESIGN AND CODE BEAUTIFUL THINGS, AND I LOVE WHAT I DO.</p>
                </div>
                <Row>
                    <Col lg={6} md={6}>
                        <div className="all-skill1">
                            <div className="single-skill">
                                <p>HTML</p>
                                <ProgressBar now={now} label={`${now}%`} />
                            </div>
                            <div className="single-skill">
                                <p>CSS</p>
                                <ProgressBar now={now1} label={`${now1}%`} />
                            </div>
                            <div className="single-skill">
                                <p>Java Script</p>
                                <ProgressBar now={now2} label={`${now2}%`} />
                            </div>
                            <div className="single-skill">
                                <p>React Js</p>
                                <ProgressBar now={now3} label={`${now3}%`} />
                            </div>
                            <div className="single-skill">
                                <p>React Bootstrap</p>
                                <ProgressBar now={now4} label={`${now4}%`} />
                            </div>
                            <div className="single-skill">
                                <p>Sass</p>
                                <ProgressBar now={now5} label={`${now5}%`} />
                            </div>
                        </div>
                    </Col>
                    <Col lg={6} md={6}>
                        <div className="all-skill2">
                            <div className="single-skill">
                                <p>Node Js</p>
                                <ProgressBar now={now6} label={`${now6}%`} />
                            </div>
                            <div className="single-skill">
                                <p>Express Js</p>
                                <ProgressBar now={now6} label={`${now6}%`} />
                            </div>
                            <div className="single-skill">
                                <p>MongoDB</p>
                                <ProgressBar now={now2} label={`${now2}%`} />
                            </div>
                            <div className="single-skill">
                                <p>Firebase authentication</p>
                                <ProgressBar now={now3} label={`${now3}%`} />
                            </div>
                            <div className="single-skill">
                                <p>Material-UI</p>
                                <ProgressBar now={now4} label={`${now4}%`} />
                            </div>
                            <div className="single-skill">
                                <p>Tailwind Css</p>
                                <ProgressBar now={now5} label={`${now5}%`} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Skills;