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
        <p data-aos="zoom-out-up" data-aos-duration="1500">
          I am a full stack developer with 7+ years of experience, programming since I started my professional
          career giving solutions to different environments and determining customer satisfaction. Proven
          experience developing in websites using JavaScript, HTML, CSS and libraries like ReactJS and NodeJS.
          Constantly update my knowledge in new technologies by creating personal projects and making code
          challenges.
        </p>
      </div>
    </div>
  );
};

export default About;
