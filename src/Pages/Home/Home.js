import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import Project from '../Project/Project';
import Contact from '../Contact/Contact';
import About from '../About/About'

const Home = () => {

    return (
        <>
            <Banner></Banner>
            <About></About>
            <Project></Project>
            <Contact></Contact>
        </>
    );
};

export default Home;