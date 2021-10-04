import React, { useState } from "react";
import { Menu, Image } from "antd";
import facebook from "../../assets/images/facebook.png";
import insta from "../../assets/images/insta.png";
import github from "../../assets/images/facebook.png";
import linkedin from "../../assets/images/linkedin.png";

const { SubMenu } = Menu;

const Navbar = () => {
  const [current, setCurrent] = useState("home");

  const handleClick = (e: any) => {
    console.log("e", e);
  };
  return (
    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">
      <Menu.Item key="me">
        <a href="#about">About me</a>
      </Menu.Item>
      <Menu.Item key="projects">
        <a href="#projects">My latest projects</a>
      </Menu.Item>
      <Menu.Item key="techs">
        <a href="#techs">Technologies</a>
      </Menu.Item>
      <Menu.Item key="contact">
        <a href="#contact">Contact me</a>
      </Menu.Item>
      <Menu.Item key="facebook">
        <Image src={facebook} preview={false} />
      </Menu.Item>
      <Menu.Item key="contact">
        <Image src={linkedin} preview={false} />
      </Menu.Item>
      <Menu.Item key="contact">
        <Image src={insta} preview={false} />
      </Menu.Item>
      <Menu.Item key="contact">
        <Image src={github} preview={false} />
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
