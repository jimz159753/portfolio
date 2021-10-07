import React, { useState, useEffect } from "react";
import DarkParticles from "./DarkParticles";
import "./Home.scss";
import About from "../About";
import Projects from "../Projects";
import Technologies from "../Companies";
import Contact from "../Contact";
import Footer from "../Footer";
import TextTransition, { presets } from "react-text-transition";

const charges = ["Web developer", "Designer", "& Programmer"];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="home-container">
      <DarkParticles />
      <div className="main">
        <div className="title">
          <h2>WELCOME TO MY WORLD</h2>
          <h1>Hi, I'm Luis Jiménez</h1>
          <h1 className="charge">
            <TextTransition
              text={charges[index % charges.length]}
              springConfig={presets.wobbly}
            />
          </h1>
        </div>
      </div>
      <About />
      <Projects />
      <Technologies />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
