import React, { useState } from "react";
import { Menu } from "antd";

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
    </Menu>
  );
};

export default Navbar;
