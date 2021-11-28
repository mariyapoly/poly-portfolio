import React from 'react';
import useAuth from '../../hooks/useAuth';

const About = () => {

    const { addClass } = useAuth();

    return (
        <div className={"home-body " + (addClass ? 'show' : '')}>
            <h1>about</h1>
        </div>
    );
};

export default About;