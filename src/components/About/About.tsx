import React from "react";
import { Image } from "antd";
import avatar from "../../assets/images/avatar1.png";
import "./About.scss";

const About = () => {

  return (
    <div id="about" className="about-container">
      <h1>About me</h1>
      <div className="description">
        <Image src={avatar} preview={false} />
        <p data-aos="zoom-out-up" data-aos-duration="3000">
          I’m a fullstack developer with 5+ years of experience in the area of
          IT giving solutions to different environments and determining customer
          satisfaction. I've done remote work for agencies and collaborated with
          talented people to create digital content for both business and
          consumer use.
        </p>
      </div>
    </div>
  );
};

export default About;
