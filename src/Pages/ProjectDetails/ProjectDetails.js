import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import './ProjectDetails.css';


const ProjectDetails = () => {

    const { id } = useParams();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('../fakedata.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const product = products.find(pd => pd.id === id);

    const { img4, img2, img3, projectName, des1, des2, des3, des4, des5, des6, live, codeClient, codeServer, tech1, tech2, tech3, tech4, tech5, tech6, tech7, tech8, tech9 } = product || {};


    return (
        <div className="projectDetails">
            <Container>
                <Row>
                    <Col lg={4}>
                        <h2 className="project-title">projects screenshots</h2>
                        <div className="project-thumb">
                            <img src={img4} alt="" />
                        </div>
                        <div className="project-thumb">
                            <img src={img2} alt="" />
                        </div>
                        <div className="project-thumb">
                            <img src={img3} alt="" />
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className="project-details-info">
                            <h2>{projectName}</h2>
                            <div className="project-des">
                                <h3>Project Overview</h3>
                                <ul>
                                    <li><FontAwesomeIcon className="contact-icon" icon={faCheck} />{des1}</li>
                                    <li><FontAwesomeIcon className="contact-icon" icon={faCheck} />{des2}</li>
                                    <li><FontAwesomeIcon className="contact-icon" icon={faCheck} />{des3}</li>
                                    <li><FontAwesomeIcon className="contact-icon" icon={faCheck} />{des4}</li>
                                    {
                                        des5 && <li><FontAwesomeIcon className="contact-icon" icon={faCheck} />{des5}</li>
                                    }
                                    {
                                        des6 && <li><FontAwesomeIcon className="contact-icon" icon={faCheck} />{des6}</li>
                                    }
                                </ul>
                            </div>
                            <div className="technology-used">
                                <h3>technology used</h3>
                                <ul className="tech-list">
                                    <ul>
                                        <li><FontAwesomeIcon className="contact-icon" icon={faCheck} />{tech1}</li>
                                        <li><FontAwesomeIcon className="contact-icon" icon={faCheck} />{tech2}</li>
                                        <li><FontAwesomeIcon className="contact-icon" icon={faCheck} />{tech3}</li>
                                        <li><FontAwesomeIcon className="contact-icon" icon={faCheck} />{tech4}</li>
                                        <li><FontAwesomeIcon className="contact-icon" icon={faCheck} />{tech5}</li>
                                    </ul>
                                    <ul>
                                        <li><FontAwesomeIcon className="contact-icon" icon={faCheck} />{tech6}</li>
                                        <li><FontAwesomeIcon className="contact-icon" icon={faCheck} />{tech7}</li>
                                        <li><FontAwesomeIcon className="contact-icon" icon={faCheck} />{tech8}</li>
                                        {
                                            tech9 && <li><FontAwesomeIcon className="contact-icon" icon={faCheck} />{tech9}</li>
                                        }
                                    </ul>
                                </ul>
                            </div>
                            <div className="project-btn">
                                <a target="_blank" className="regular-btn" href={`${live}`} rel="noopener noreferrer">view demo</a>
                                <a target="_blank" className="regular-btn" href={`${codeClient}`} rel="noopener noreferrer">github Link client</a>
                                {
                                    codeServer ? <a target="_blank" className="regular-btn" href={`${codeServer}`} rel="noopener noreferrer">github link server</a> : ''
                                }

                            </div>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    );
};

export default ProjectDetails;