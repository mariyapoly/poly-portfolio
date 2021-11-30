import React from 'react';
import { Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Project.css'

const Project = ({ product }) => {

    const navigate = useNavigate();
    const { projectName, des1, img1, id } = product || {};

    const handleExploreBtn = () => {
        navigate(`/project/${id}`)
    }

    return (
        <Col lg={4}>
            <div className="project-thumbnail">
                <img src={img1} alt="" />
                <div className="project-info">
                    <div className="project-inner-text">
                        <h4>{projectName}</h4>
                        <p>{des1}</p>
                        <button onClick={handleExploreBtn} className="regular-btn btn-2">explore more</button>
                    </div>
                </div>
            </div>
        </Col>
    );
};

export default Project;