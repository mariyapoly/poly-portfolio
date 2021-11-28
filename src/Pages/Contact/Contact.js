import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faGithub, faFacebookF, faTwitter, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';


const Contact = () => {

    const [state, handleSubmit] = useForm("xknywznn");


    console.log(handleSubmit)

    return (
        <div className="contact-area">
            <Container>
                <div className="section-title">
                    <h2>GET <span>IN TOUCH</span></h2>
                    <p>I’M ALWAYS OPEN TO DISCUSSING PRODUCT DESIGN WORK.</p>
                </div>
                <Row>
                    <Col lg={4}>
                        <div className="contact-left">
                            <div className="contact-info">
                                <p className="contact-title">Phone</p>
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon className="contact-icon" icon={faPhoneAlt} />
                                    <p>+8801749695166</p>
                                </div>
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">Email</p>
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon className="contact-icon" icon={faEnvelope} />
                                    <p>poly.khatun2141@gmail.com</p>
                                </div>
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">Instagram</p>
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon className="contact-icon" icon={faInstagram} />
                                    <p>https://www.instagram.com/mstpolykhatun/</p>
                                </div>
                            </div>
                            <div className="contact-info">
                                <p className="contact-title">Github</p>
                                <div className="d-flex align-items-center">
                                    <FontAwesomeIcon className="contact-icon" icon={faGithub} />
                                    <p>https://github.com/mariyapoly</p>
                                </div>
                            </div>
                            <div className="contact-social">
                                <p>Social Profiles</p>
                                <ul>
                                    <li><a target="_blank" href="https://www.facebook.com/mariyasultana.poly" rel="noopener noreferrer"><FontAwesomeIcon className="contact-icon" icon={faFacebookF} /></a></li>
                                    <li><a target="_blank" href="https://twitter.com/PolyKhatun21" rel="noopener noreferrer"><FontAwesomeIcon className="contact-icon" icon={faTwitter} /></a></li>
                                    <li><a target="_blank" href="https://www.linkedin.com/in/mst-poly-khatun/" rel="noopener noreferrer"><FontAwesomeIcon className="contact-icon" icon={faLinkedinIn} /></a></li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col lg={8}>
                        <div className="contact-right">
                            <p>If you have any suggestion, project or even you want to say Hello.. please fill out the form below and I will reply you shortly.</p>
                        </div>
                        <form onSubmit={handleSubmit}>

                            <input
                                id="email"
                                type="email"
                                name="email"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                            <textarea
                                id="message"
                                name="message"
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                            <button type="submit" disabled={state.submitting}>
                                Submit
                            </button>
                            {state.succeeded && <p style={{ color: 'green' }}>Email send successfully</p>}
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;