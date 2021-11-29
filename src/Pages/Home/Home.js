import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';

const Home = () => {

    return (
        <>
            <Banner></Banner>
            <Project></Project>
            <Contact></Contact>
        </>
    );
};

export default Home;