import React from "react";
import { Image, Tabs } from "antd";
import avatar from "../../assets/images/avatar.png";
import "./About.scss";

const { TabPane } = Tabs;

const About = () => {
  const callback = (key: String) => {
    console.log("key", key);
  };

  return (
    <div className="about-container">
      <h1>About me</h1>
      <div className="description">
        <Image src={avatar} preview={false} />
        <p>
          I’m a fullstack developer with 5+ years of experience in the area of
          IT giving solutions to different environments and determining customer
          satisfaction. I've done remote work for agencies and collaborated with
          talented people to create digital content for both business and
          consumer use.
        </p>
      </div>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Main Skills" key="1">
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
          <p></p>
        </TabPane>
        <TabPane tab="Education & Certifications" key="2">
          Content of Tab Pane 2
        </TabPane>
      </Tabs>
    </div>
  );
};

export default About;
