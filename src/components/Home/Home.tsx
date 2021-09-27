import React from "react";
import DarkParticles from "./DarkParticles";
import "./Home.scss";
import About from "../About";
import Projects from "../Projects";
import Technologies from "../Technologies";
import Navbar from "./Navbar";
import Contact from "../Contact";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <DarkParticles />
      <div className="main">
        <div className="title">
          <h2>WELCOME TO MY WORLD</h2>
          <h1>Hi, I'm Luis Jiménez</h1>
          <h1>Web developer, designer & programmer</h1>
        </div>
      </div>
      <About />
      <Projects />
      <Technologies />
      <Contact />
    </div>
  );
};

export default Home;
