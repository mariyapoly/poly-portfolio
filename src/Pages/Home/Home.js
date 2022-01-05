import React from "react";
import "./Home.css";
import Banner from "../Banner/Banner";
import Contact from "../Contact/Contact";
import About from "../About/About";
import AllProducts from "../AllProducts/AllProducts";
import Skills from "../Skills/Skills";

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <AllProducts></AllProducts>
      <Contact></Contact>
    </>
  );
};

export default Home;
