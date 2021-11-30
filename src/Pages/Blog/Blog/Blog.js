import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import blogImg1 from '../../../images/blog-post-2.jpg';
import blogImg2 from '../../../images/blog-post-3.jpg';
import blogImg3 from '../../../images/blog-post-4.jpg';
import './Blog.css'

const Blog = () => {
    return (
        <div className="blog-area">
            <div className="section-title">
                <h2>LATEST <span>POSTS</span></h2>
                <p>TIPS, INSIGHTS, AND BEST PRACTICES ABOUT WEB DESIGN AND DEVELOPPMENT.</p>
            </div>
            <Container>
                <Row>
                    <Col lg={12}>
                        <div className="blog-thumb">
                            <Row className="align-items-center">
                                <Col lg={4} md={4}>
                                    <img src={blogImg1} alt="" /></Col>
                                <Col lg={5} md={5}>
                                    <div className="blog-content">
                                        <p className="title">Web Design</p>
                                        <h3>How to create simple personal website</h3>
                                        <p>November 10, 2021</p>
                                    </div>
                                </Col>
                                <Col lg={3} md={3}>
                                    <button className="regular-btn">Full Story</button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="blog-thumb">
                            <Row className="align-items-center">
                                <Col lg={4} md={4}>
                                    <img src={blogImg2} alt="" /></Col>
                                <Col lg={5} md={5}>
                                    <div className="blog-content">
                                        <p className="title">Web Design</p>
                                        <h3>How to create simple personal website</h3>
                                        <p>November 10, 2021</p>
                                    </div>
                                </Col>
                                <Col lg={3} md={3}>
                                    <button className="regular-btn">Full Story</button>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                    <Col lg={12}>
                        <div className="blog-thumb">
                            <Row className="align-items-center">
                                <Col lg={4} md={4}>
                                    <img src={blogImg3} alt="" /></Col>
                                <Col lg={5} md={5}>
                                    <div className="blog-content">
                                        <p className="title">Web Design</p>
                                        <h3>How to create simple personal website</h3>
                                        <p>November 10, 2021</p>
                                    </div>
                                </Col>
                                <Col lg={3} md={3}>
                                    <button className="regular-btn">Full Story</button>
                                </Col>
                            </Row>
                        </div>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Blog;