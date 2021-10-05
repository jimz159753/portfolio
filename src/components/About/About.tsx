import React from "react";
import { Image, Tabs } from "antd";
import avatar from "../../assets/images/avatar1.png";
import "./About.scss";
const { TabPane } = Tabs;

const About = () => {
  const callback = (key: String) => {
    console.log("key", key);
  };

  return (
    <div id="about" className="about-container">
      <h1>About me</h1>
      <div className="description">
        <Image src={avatar} preview={false} />
        <p data-aos="zoom-in-up" data-aos-delay="50" data-aos-duration="1000">
          I’m a fullstack developer with 5+ years of experience in the area of
          IT giving solutions to different environments and determining customer
          satisfaction. I've done remote work for agencies and collaborated with
          talented people to create digital content for both business and
          consumer use.
        </p>
      </div>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Main Skills" key="1">
          <div>
            <p>
              <b>Web Development</b> - Development Build websites and web apps
              using javascript and it's frameworks.
            </p>
            <p>
              <b>Web and user interface design</b> - Design Websites, web
              experiences.
            </p>
            <p>
              <b>Mobile Development</b> - Development Build android & IOS apps,
              problem solving.
            </p>
          </div>
        </TabPane>
        <TabPane tab="Education & Certifications" key="2">
          <div className="courses">
            <p>
              <b>Udemy courses:</b>
              <br /> - React - The Complete Guide (incl Hooks, React Router,
              Redux).
              <br /> - Git Complete: The definitive, step-by-step guide to Git.
              <br /> - NodeJs - The Complete Guide (MVC, REST API’s GraphQL,
              Deno).
              <br /> - The Complete React Native + Hooks Course.
            </p>
            <p>
              <b>Automation anywhere courses:</b>
              <br />- Bot Developer (A2019).
              <br /> - Building Resilient Bots Using Enterprise A2019.
              <br /> - Introducing Robotic Process Automation (RPA).
              <br /> - Writing Inline Scripts in Enterprise A2019.
            </p>
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default About;
